# Portfolio

The source for Harsh Dave's personal site, published at `harsh.bet`. A single-page portfolio covering experience, research, projects, and background.

## Structure

- `src/content.ts` — all page content (experience, research, projects) in typed data
- `src/App.tsx` — the view and layout
- `src/styles.css` — styling and light/dark themes
- `public/DROP-IMAGES.txt` — filenames for a portrait and project captures

Content is data-driven: edit `src/content.ts` to update what the site shows.

## Development

```sh
npm ci
npm run typecheck
npm run build
```

Everything lives on one page, so navigation is plain in-page anchor links and no server rewrite is needed on GitHub Pages. The Pages workflow builds and deploys from `main`.
