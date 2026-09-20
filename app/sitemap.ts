import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://b2b-hub-orpin.vercel.app'

  const routes = [
    '',
    '/clickup-vs-asana',
    '/clickup-vs-monday',
    '/clickup-vs-notion',
    '/notion-vs-coda',
    '/hubspot-vs-salesforce',
    '/salesforce-vs-hubspot',
    '/asana-vs-trello',
    '/ahrefs-vs-semrush',
    '/slack-vs-teams',
    '/shopify-vs-woocommerce',
    '/zapier-vs-make',
    '/webflow-vs-framer',
    '/mailchimp-vs-activecampaign',
    '/wix-vs-squarespace',
    '/pipedrive-vs-hubspot',
    '/klaviyo-vs-mailchimp',
    '/airtable-vs-notion',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}
