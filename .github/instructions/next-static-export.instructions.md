---
applyTo: "src/**/*.{ts,tsx},next.config.mjs,package.json,.github/workflows/*.yml"
---

This site deploys to GitHub Pages using `npm run build:pages`, which sets `NEXT_OUTPUT=export`.

Do not add runtime-only server features unless the deployment model is changed in the same PR.
For dynamic routes, use `generateStaticParams` and build-time data loading.
For assets and routes, preserve compatibility with `NEXT_PUBLIC_BASE_PATH`.
Run `npm run build:pages` after route, config, or asset changes.
