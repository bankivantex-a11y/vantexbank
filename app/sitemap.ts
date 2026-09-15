import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://virxyd.com').replace(/\/$/, '');
  const locales = ['fr', 'en', 'kw', 'sl', 'es', 'lt', 'de', 'it', 'hr', 'lv'];

  const paths = [
    '',
    'a-propos',
    'aide',
    'avis',
    'confidentialite',
    'conditions',
    'cookies',
    'contact',
    'conditions-generales',
    'credit-immediat',
    'temoignages',
    'fonctionnement',
    'credit-sans-justificatif',
    'mentions-legales',
    'simulateur',
    'pret-personnel',
    'rachat-credit',
    'pret-immobilier',
    'credit-sans-refus',
    'pret-en-ligne',
    'pret-professionnel',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  paths.forEach((path) => {
    locales.forEach((locale) => {
      const url = `${baseUrl}/${locale}${path ? `/${path}` : ''}`;

      // On crée les alternatives pour chaque langue
      const languagesAlternates: Record<string, string> = {};
      locales.forEach((l) => {
        languagesAlternates[l] = `${baseUrl}/${l}${path ? `/${path}` : ''}`;
      });
      // Ajout du x-default (recommandé par Google) pointant vers la langue principale (fr)
      languagesAlternates['x-default'] = `${baseUrl}/fr${path ? `/${path}` : ''}`;

      sitemapEntries.push({
        url,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: path === '' ? 1.0 : 0.8,
        alternates: {
          languages: languagesAlternates,
        },
      });
    });
  });

  return sitemapEntries;
}
