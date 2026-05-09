# Agent Operating Guide

This repository is optimized for AI coding agents working through pull requests.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- npm with `package-lock.json`
- Static export for GitHub Pages via `NEXT_OUTPUT=export`

## Required Checks

Run these before opening or updating a PR:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run build:pages
npm run audit
```

Use `npm ci` in clean automation environments.

## Development Rules

- Keep changes scoped to the issue or task.
- Do not commit generated build output from `.next/` or `out/`.
- Do not edit secrets or `.env*.local` files.
- Prefer small, reviewable PRs with a clear summary and verification notes.
- Add or update tests for changed behavior and run `npm test`.
- If a change affects routing or static rendering, verify `npm run build:pages`.
- If dependencies change, update `package-lock.json` with npm.

## Deployment Model

Production is deployed from the `main` branch by GitHub Actions to GitHub Pages.
The Pages build sets `NEXT_PUBLIC_BASE_PATH` for project-page hosting and exports
static files to `out/`.
