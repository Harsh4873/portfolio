import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin, type PreviewServer, type ViteDevServer } from 'vite';

const atmosphereVersions = ['1', '2', '3', '4', '5'] as const;

function atmosphereIndexPath(url = '') {
  const path = url.split('?')[0];
  if (/^\/portfolio\/v[1-5](?:\/index\.html)?\/?$/.test(path) || /^\/v[1-5](?:\/index\.html)?\/?$/.test(path)) {
    return '/portfolio/';
  }
  return null;
}

function serveAtmospherePages(): Plugin {
  const rewrite = (server: ViteDevServer | PreviewServer) => {
    server.middlewares.use((req, _res, next) => {
      const nextUrl = req.url ? atmosphereIndexPath(req.url) : null;
      if (nextUrl) req.url = nextUrl;
      next();
    });
  };

  return {
    name: 'atmosphere-pages',
    configureServer(server) {
      return () => rewrite(server);
    },
    configurePreviewServer(server) {
      return () => rewrite(server);
    },
    closeBundle() {
      const index = resolve('dist/index.html');
      for (const version of atmosphereVersions) {
        const directory = resolve('dist', `v${version}`);
        mkdirSync(directory, { recursive: true });
        copyFileSync(index, resolve(directory, 'index.html'));
      }
    },
  };
}

export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), serveAtmospherePages()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
