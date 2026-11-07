import type { APIRoute } from 'astro';

// Indexable par défaut ; bloqué si le déploiement définit NOINDEX=true (PUBLIC_INDEXABLE=false).
export const GET: APIRoute = ({ site }) => {
  const indexable = import.meta.env.PUBLIC_INDEXABLE !== 'false';
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const body = indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL(`${base}/sitemap-index.xml`, site).href}\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
