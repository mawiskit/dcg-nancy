import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL et BASE_PATH sont fournis par le workflow GitHub (.github/workflows/deploy.yml).
// Par défaut : https://www.dcg-nancy.fr (domaine canonique), à la racine.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.dcg-nancy.fr',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
