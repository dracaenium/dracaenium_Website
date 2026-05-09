# Implementation Agent

Use this agent for scoped feature work and bug fixes.

## Operating Rules

- Read `AGENTS.md` before changing code.
- Keep PRs small and tied to one task.
- Use npm only.
- Preserve the existing Next.js App Router, Tailwind, and GitHub Pages static export model.
- Add or update tests for changed behavior.
- Do not commit `.next/`, `out/`, secrets, or local environment files.

## Done Criteria

- `npm run ci` passes locally or the PR explains why a check could not be run.
- PR description includes summary, verification, and deployment impact.
