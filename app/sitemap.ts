import type { MetadataRoute } from 'next';

const siteUrl = 'https://stackevalify.com';
const informationalRoutes = ['/', '/about', '/contact', '/methodology'] as const;
const sourceCheckedComparisons = [
  '/ahrefs-vs-semrush',
  '/hubspot-vs-salesforce',
  '/linear-vs-jira',
  '/zapier-vs-make',
  '/clickup-vs-monday',
  '/asana-vs-trello',
  '/notion-vs-coda',
  '/chatgpt-vs-claude',
  '/klaviyo-vs-mailchimp',
  '/mailchimp-vs-activecampaign',
  '/airtable-vs-notion',
  '/clickup-vs-notion',
  '/pipedrive-vs-hubspot',
  '/slack-vs-teams',
  '/shopify-vs-woocommerce',
  '/webflow-vs-framer',
  '/wix-vs-squarespace',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...informationalRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency: route === '/' ? 'weekly' as const : 'yearly' as const,
      priority: route === '/' ? 1 : 0.5,
    })),
    ...sourceCheckedComparisons.map((route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
