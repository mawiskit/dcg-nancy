import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL et BASE_PATH sont fournis par le workflow GitHub (.github/workflows/deploy.yml).
// Par défaut : https://dcg-nancy.fr, à la racine.
export default defineConfig({
  site: process.env.SITE_URL || 'https://dcg-nancy.fr',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
