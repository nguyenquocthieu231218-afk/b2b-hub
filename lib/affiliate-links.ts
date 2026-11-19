export type AffiliateUtm = {
  source: 'stackevalify';
  medium: 'referral';
  campaign: 'audited-tco';
};

export type AffiliateLink = {
  name: string;
  destinationUrl: string;
  isPartnerActive: boolean;
  utm: AffiliateUtm;
};

const standardUtm: AffiliateUtm = {
  source: 'stackevalify',
  medium: 'referral',
  campaign: 'audited-tco',
};

function officialLink(name: string, destinationUrl: string): AffiliateLink {
  return { name, destinationUrl, isPartnerActive: false, utm: standardUtm };
}

// The five HR/payroll vendors are eligible for the measured /go/[vendor]
// redirect. Every legacy official destination remains centralized here.
export const affiliateLinks = {
  activecampaign: officialLink('ActiveCampaign', 'https://activecampaign.com'),
  ahrefs: officialLink('Ahrefs', 'https://ahrefs.com'),
  airtable: officialLink('Airtable', 'https://airtable.com'),
  asana: officialLink('Asana', 'https://asana.com'),
  chatgpt: officialLink('ChatGPT', 'https://chatgpt.com'),
  claude: officialLink('Claude', 'https://claude.ai'),
  clickup: officialLink('ClickUp', 'https://clickup.com'),
  coda: officialLink('Superhuman Docs (formerly Coda)', 'https://docs.superhuman.com'),
  convertkit: officialLink('Kit (formerly ConvertKit)', 'https://kit.com'),
  deel: officialLink('Deel', 'https://www.deel.com'),
  framer: officialLink('Framer', 'https://framer.com'),
  freshdesk: officialLink('Freshdesk', 'https://freshworks.com/freshdesk'),
  gusto: officialLink('Gusto', 'https://gusto.com'),
  hubspot: officialLink('HubSpot', 'https://hubspot.com'),
  intercom: officialLink('Intercom', 'https://www.intercom.com'),
  jira: officialLink('Jira', 'https://atlassian.com/software/jira'),
  klaviyo: officialLink('Klaviyo', 'https://klaviyo.com'),
  linear: officialLink('Linear', 'https://linear.app'),
  mailchimp: officialLink('Mailchimp', 'https://mailchimp.com'),
  make: officialLink('Make', 'https://make.com'),
  monday: officialLink('Monday.com', 'https://monday.com'),
  notion: officialLink('Notion', 'https://notion.so'),
  oyster: officialLink('Oyster', 'https://www.oysterhr.com'),
  pipedrive: officialLink('Pipedrive', 'https://pipedrive.com'),
  rippling: officialLink('Rippling', 'https://www.rippling.com'),
  remote: officialLink('Remote', 'https://remote.com'),
  salesforce: officialLink('Salesforce', 'https://salesforce.com'),
  semrush: officialLink('Semrush', 'https://semrush.com'),
  shopify: officialLink('Shopify', 'https://shopify.com'),
  slack: officialLink('Slack', 'https://slack.com'),
  squarespace: officialLink('Squarespace', 'https://squarespace.com'),
  teams: officialLink('Microsoft Teams', 'https://teams.microsoft.com'),
  trello: officialLink('Trello', 'https://trello.com'),
  webflow: officialLink('Webflow', 'https://webflow.com'),
  wix: officialLink('Wix', 'https://wix.com'),
  woocommerce: officialLink('WooCommerce', 'https://woocommerce.com'),
  zapier: officialLink('Zapier', 'https://zapier.com'),
  zendesk: officialLink('Zendesk', 'https://zendesk.com'),
  'zoho-crm': officialLink('Zoho CRM', 'https://www.zoho.com/crm/'),
} as const satisfies Record<string, AffiliateLink>;

export type AffiliateVendor = keyof typeof affiliateLinks;

export const measuredAffiliateVendors = ['deel', 'rippling', 'remote', 'gusto', 'oyster'] as const;
export type MeasuredAffiliateVendor = (typeof measuredAffiliateVendors)[number];

export function isMeasuredAffiliateVendor(key?: string): key is MeasuredAffiliateVendor {
  return typeof key === 'string' && measuredAffiliateVendors.some((vendor) => vendor === key);
}

export function getAffiliateLink(key?: string): AffiliateLink | undefined {
  return key && key in affiliateLinks
    ? affiliateLinks[key as AffiliateVendor]
    : undefined;
}

export function getMeasuredAffiliateLink(key?: string): AffiliateLink | undefined {
  return isMeasuredAffiliateVendor(key) ? affiliateLinks[key] : undefined;
}

export function getAffiliateCtaHref(key: string | undefined, sourcePath: string, useMeasuredRedirect: boolean) {
  const link = getAffiliateLink(key);
  if (!link) return undefined;
  if (!useMeasuredRedirect || !isMeasuredAffiliateVendor(key)) return link.destinationUrl;
  const source = sourcePath.replace(/^\/+/, '') || 'direct';
  return `/go/${key}?source=${encodeURIComponent(source)}`;
}
