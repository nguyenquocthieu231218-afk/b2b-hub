import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://b2b-hub-orpin.vercel.app';

  const routes = [
    '',
    '/clickup-vs-monday',
    '/notion-vs-coda',
    '/hubspot-vs-salesforce',
    '/asana-vs-trello',
    '/ahrefs-vs-semrush',
    '/slack-vs-teams',
    '/shopify-vs-woocommerce',
    '/zapier-vs-make',
    '/webflow-vs-framer',
    '/mailchimp-vs-activecampaign',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
