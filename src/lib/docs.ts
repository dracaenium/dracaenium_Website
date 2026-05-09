import fs from "fs";
import path from "path";

const docsDirectory = path.join(process.cwd(), "docs");

export type DocSlug = {
  slug: string[];
};

export function getAllDocSlugs(): DocSlug[] {
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }

  const slugs: DocSlug[] = [];

  function walk(directory: string, segments: string[] = []) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        walk(entryPath, [...segments, entry.name]);
        continue;
      }

      if (entry.isFile() && entry.name.endsWith(".md")) {
        slugs.push({
          slug: [...segments, entry.name.replace(/\.md$/, "")],
        });
      }
    }
  }

  walk(docsDirectory);
  return slugs;
}

export function getDocContent(slug: string[]): string | null {
  const filePath = path.join(docsDirectory, ...slug) + ".md";

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf-8");
}
