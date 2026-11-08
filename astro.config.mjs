import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { lastmodParPage } from './sitemap-dates.mjs';

// SITE_URL et BASE_PATH sont fournis par le workflow GitHub (.github/workflows/deploy.yml).
// Par défaut : https://www.dcg-nancy.fr (domaine canonique), à la racine.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.dcg-nancy.fr',
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // La page 404 ne doit jamais figurer dans le sitemap.
      filter: (page) => !/\/404\/?$/.test(page),
      // Date de dernière modification réelle, saisie dans sitemap-dates.mjs (jamais la date du build).
      serialize(item) {
        let chemin = new URL(item.url).pathname;
        if (base !== '/' && chemin.startsWith(base)) chemin = chemin.slice(base.length - 1);
        const date = lastmodParPage[chemin];
        if (date) item.lastmod = new Date(`${date}T00:00:00Z`).toISOString();
        return item;
      },
    }),
  ],
  build: { format: 'directory' },
});
