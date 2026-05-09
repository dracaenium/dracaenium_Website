# Repository Instructions for AI Agents

You are working on a Next.js, TypeScript, Tailwind CSS marketing/documentation site.

Before making changes, inspect the affected files and preserve the existing visual language.
Use npm, not yarn or pnpm. Keep pull requests focused and include verification results.

Required local checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run build:pages
npm run audit
```

Deployment targets GitHub Pages through a static Next export. Avoid features that require a live Node.js server unless the deployment model is changed in the same PR.
Pull requests receive automated AI review comments when `OPENAI_API_KEY` is configured as a repository secret.
