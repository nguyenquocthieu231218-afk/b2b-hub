export type AffiliateLink = {
  name: string;
  href: string;
};

// Central CTA destination registry. Replace an official URL here when an
// approved affiliate destination is available; every comparison CTA updates
// without changing article content or link-tracking attributes.
export const affiliateLinks = {
  activecampaign: { name: 'ActiveCampaign', href: 'https://activecampaign.com' },
  ahrefs: { name: 'Ahrefs', href: 'https://ahrefs.com' },
  airtable: { name: 'Airtable', href: 'https://airtable.com' },
  asana: { name: 'Asana', href: 'https://asana.com' },
  chatgpt: { name: 'ChatGPT', href: 'https://chatgpt.com' },
  claude: { name: 'Claude', href: 'https://claude.ai' },
  clickup: { name: 'ClickUp', href: 'https://clickup.com' },
  coda: { name: 'Superhuman Docs (formerly Coda)', href: 'https://docs.superhuman.com' },
  convertkit: { name: 'Kit (formerly ConvertKit)', href: 'https://kit.com' },
  deel: { name: 'Deel', href: 'https://www.deel.com' },
  framer: { name: 'Framer', href: 'https://framer.com' },
  freshdesk: { name: 'Freshdesk', href: 'https://freshworks.com/freshdesk' },
  hubspot: { name: 'HubSpot', href: 'https://hubspot.com' },
  intercom: { name: 'Intercom', href: 'https://www.intercom.com' },
  jira: { name: 'Jira', href: 'https://atlassian.com/software/jira' },
  klaviyo: { name: 'Klaviyo', href: 'https://klaviyo.com' },
  linear: { name: 'Linear', href: 'https://linear.app' },
  mailchimp: { name: 'Mailchimp', href: 'https://mailchimp.com' },
  make: { name: 'Make', href: 'https://make.com' },
  monday: { name: 'Monday.com', href: 'https://monday.com' },
  notion: { name: 'Notion', href: 'https://notion.so' },
  pipedrive: { name: 'Pipedrive', href: 'https://pipedrive.com' },
  rippling: { name: 'Rippling', href: 'https://www.rippling.com' },
  salesforce: { name: 'Salesforce', href: 'https://salesforce.com' },
  semrush: { name: 'Semrush', href: 'https://semrush.com' },
  shopify: { name: 'Shopify', href: 'https://shopify.com' },
  slack: { name: 'Slack', href: 'https://slack.com' },
  squarespace: { name: 'Squarespace', href: 'https://squarespace.com' },
  teams: { name: 'Microsoft Teams', href: 'https://teams.microsoft.com' },
  trello: { name: 'Trello', href: 'https://trello.com' },
  webflow: { name: 'Webflow', href: 'https://webflow.com' },
  wix: { name: 'Wix', href: 'https://wix.com' },
  woocommerce: { name: 'WooCommerce', href: 'https://woocommerce.com' },
  zapier: { name: 'Zapier', href: 'https://zapier.com' },
  zendesk: { name: 'Zendesk', href: 'https://zendesk.com' },
  'zoho-crm': { name: 'Zoho CRM', href: 'https://www.zoho.com/crm/' },
} as const satisfies Record<string, AffiliateLink>;

export function getAffiliateLink(key?: string): AffiliateLink | undefined {
  return key && key in affiliateLinks
    ? affiliateLinks[key as keyof typeof affiliateLinks]
    : undefined;
}
