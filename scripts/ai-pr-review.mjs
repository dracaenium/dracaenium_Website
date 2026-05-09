import fs from "node:fs";

const {
  GITHUB_TOKEN,
  GITHUB_REPOSITORY,
  GITHUB_EVENT_PATH,
  OPENAI_API_KEY,
  OPENAI_MODEL = "gpt-4.1-mini",
} = process.env;

const event = JSON.parse(fs.readFileSync(GITHUB_EVENT_PATH, "utf8"));
const pr = event.pull_request;

if (!pr) {
  console.log("No pull request payload found; skipping PR review.");
  process.exit(0);
}

const [owner, repo] = GITHUB_REPOSITORY.split("/");

function readText(path, fallback = "") {
  return fs.existsSync(path) ? fs.readFileSync(path, "utf8") : fallback;
}

function truncate(text, max) {
  if (text.length <= max) {
    return text;
  }

  return `${text.slice(0, max)}\n\n[truncated ${text.length - max} characters]`;
}

async function github(path, options = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}: ${await response.text()}`);
  }

  return response.json();
}

function resultLine(name, status) {
  return `- ${name}: ${status || "unknown"}`;
}

async function buildAiReview(context) {
  if (!OPENAI_API_KEY) {
    return [
      "AI model review was skipped because `OPENAI_API_KEY` is not configured.",
      "The deterministic CI summary below is still posted so agents have a clear checklist.",
    ].join("\n");
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      input: [
        {
          role: "system",
          content: [
            "You are a senior engineer reviewing a pull request for a Next.js static GitHub Pages site.",
            "Prioritize correctness, deployability, security, accessibility, tests, and maintainability.",
            "Give concise, actionable feedback. Mention exact files when possible.",
          ].join(" "),
        },
        {
          role: "user",
          content: context,
        },
      ],
    }),
  });

  if (!response.ok) {
    return `AI model review failed: ${response.status} ${await response.text()}`;
  }

  const data = await response.json();
  return data.output_text || "AI model returned no text.";
}

const files = await github(`/repos/${owner}/${repo}/pulls/${pr.number}/files?per_page=100`);
const diffStat = readText(".ai/pr-diff-stat.txt");
const diffPatch = truncate(readText(".ai/pr-diff.patch"), 45000);
const packageJson = readText("package.json");

const context = [
  `PR #${pr.number}: ${pr.title}`,
  `Author: ${pr.user.login}`,
  "",
  "Changed files:",
  files.map((file) => `- ${file.filename} (+${file.additions}/-${file.deletions})`).join("\n"),
  "",
  "Diff stat:",
  diffStat,
  "",
  "package.json:",
  packageJson,
  "",
  "Diff:",
  diffPatch,
].join("\n");

const aiReview = await buildAiReview(context);

const body = [
  "<!-- ai-pr-review -->",
  "## AI PR Review",
  "",
  aiReview,
  "",
  "## Agent Checklist",
  "",
  resultLine("Lint", process.env.LINT_STATUS),
  resultLine("Typecheck", process.env.TYPECHECK_STATUS),
  resultLine("Tests", process.env.TEST_STATUS),
  resultLine("Server build", process.env.BUILD_STATUS),
  resultLine("GitHub Pages export", process.env.PAGES_BUILD_STATUS),
  resultLine("Production dependency audit", process.env.AUDIT_STATUS),
  "",
  "Required agent follow-up:",
  "- Address any failing checks before requesting human review.",
  "- Keep GitHub Pages static export compatibility unless the deployment workflow is changed in the same PR.",
  "- Update tests when behavior changes.",
].join("\n");

const comments = await github(`/repos/${owner}/${repo}/issues/${pr.number}/comments?per_page=100`);
const previous = comments.find((comment) => comment.body?.includes("<!-- ai-pr-review -->"));

if (previous) {
  await github(`/repos/${owner}/${repo}/issues/comments/${previous.id}`, {
    method: "PATCH",
    body: JSON.stringify({ body }),
  });
} else {
  await github(`/repos/${owner}/${repo}/issues/${pr.number}/comments`, {
    method: "POST",
    body: JSON.stringify({ body }),
  });
}
