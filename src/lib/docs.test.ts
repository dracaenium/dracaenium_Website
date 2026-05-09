import { describe, expect, it } from "vitest";
import { getAllDocSlugs, getDocContent } from "./docs";

describe("docs content loader", () => {
  it("discovers markdown documents as route params", () => {
    const slugs = getAllDocSlugs().map((entry) => entry.slug.join("/"));

    expect(slugs).toContain("getting-started/introduction");
    expect(slugs).toContain("core-concepts/architecture");
  });

  it("loads markdown content for a known document", () => {
    const content = getDocContent(["getting-started", "introduction"]);

    expect(content).toBeTruthy();
    expect(content).toContain("#");
  });

  it("returns null for unknown documents", () => {
    expect(getDocContent(["missing", "document"])).toBeNull();
  });
});
