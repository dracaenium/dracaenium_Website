# AI-Native SDLC

This repository is configured for AI agents to work through small pull requests
with deterministic setup, checks, and deployment.

## Agent Entry Points

- `AGENTS.md` gives Codex-style agents repository-specific rules.
- `.github/copilot-instructions.md` gives GitHub Copilot and other GitHub-hosted agents repository instructions.
- `.github/workflows/copilot-setup-steps.yml` preinstalls npm dependencies before Copilot cloud agent starts work.
- `.github/ISSUE_TEMPLATE/ai-task.yml` creates scoped tasks suitable for agent implementation.

## Pull Request Pipeline

Every PR runs:

- ESLint with Next Core Web Vitals and TypeScript rules
- TypeScript type checking
- Vitest tests through `npm test`
- Standard Next production build
- GitHub Pages static export build
- Production dependency audit for high-severity vulnerabilities
- Automated PR analysis that posts an agent-readable review comment

The PR analysis workflow uses deterministic checks on every PR. If an
`OPENAI_API_KEY` repository secret is configured, it also sends the PR diff to an
LLM and posts focused feedback as a PR comment.

## Deployment

Merges to `main` deploy `out/` to GitHub Pages through `.github/workflows/pages.yml`.
For a project page, the workflow sets `NEXT_PUBLIC_BASE_PATH` to the repository
name so static assets and internal routes resolve under the GitHub Pages path.

In GitHub repository settings, confirm:

- Pages source is set to GitHub Actions.
- Actions workflow permissions allow read and write permissions if you want automation to create or merge PRs.
- Copilot coding agent is enabled for the repository if you want issues assigned directly to Copilot.
- `OPENAI_API_KEY` is configured as an Actions secret if you want model-backed PR reviews.
- `OPENAI_PR_REVIEW_MODEL` can be configured as an Actions variable to override the default review model.

## Dependency Automation

Dependabot opens weekly npm and GitHub Actions PRs. Non-major Dependabot PRs are
set to auto-merge after required checks pass.
