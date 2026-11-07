// @ts-check
import { defineConfig } from 'astro/config';

// SITE and BASE_PATH are injected by the GitHub Pages workflow
// (.github/workflows/deploy.yml), so the site works whether it is served from
// https://<user>.github.io/<repo>/, https://<user>.github.io/ or a custom domain.
export default defineConfig({
  site: process.env.SITE || 'https://example.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
