# Portfolio

The source for Harsh Dave's personal site, published at `harsh.bet`. A single-page portfolio covering experience, research, projects, and background.

## Structure

- `src/content.ts` — all page content (experience, research, projects, skills) in typed data
- `src/App.tsx` — the view and layout
- `src/useRoute.ts` — hash-based routing across sections
- `src/styles.css` — styling and light/dark themes

Content is data-driven: edit `src/content.ts` to update what the site shows.

## Development

```sh
npm ci
npm run typecheck
npm run build
```

Navigation is hash-based so every section stays safe on GitHub Pages without a server rewrite. The Pages workflow builds and deploys from `main`.
