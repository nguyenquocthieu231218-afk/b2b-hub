const SOURCE_CHECKED_AT = '2026-10-29';
const SOURCE_CHECKED_STATUS = 'Source checked · 29 Oct 2026';

const sourceCheckOverrides: Record<string, { sourceCheckedAt: string; status: string }> = {
  '/asana-vs-trello': {
    sourceCheckedAt: '2026-11-09',
    status: 'Source checked · 9 Nov 2026',
  },
  '/clickup-vs-notion': {
    sourceCheckedAt: '2026-11-09',
    status: 'Source checked · 9 Nov 2026',
  },
  '/clickup-vs-monday': {
    sourceCheckedAt: '2026-11-09',
    status: 'Source checked · 9 Nov 2026',
  },
  '/hubspot-vs-salesforce': {
    sourceCheckedAt: '2026-11-09',
    status: 'Source checked · 9 Nov 2026',
  },
  '/linear-vs-jira': {
    sourceCheckedAt: '2026-11-09',
    status: 'Source checked · 9 Nov 2026',
  },
  '/mailchimp-vs-activecampaign': {
    sourceCheckedAt: '2026-11-09',
    status: 'Source checked · 9 Nov 2026',
  },
  '/pipedrive-vs-hubspot': {
    sourceCheckedAt: '2026-11-09',
    status: 'Source checked · 9 Nov 2026',
  },
  '/zendesk-vs-freshdesk': {
    sourceCheckedAt: '2026-11-09',
    status: 'Source checked · 9 Nov 2026',
  },
};

const comparisonDirectory = [
  { title: 'Ahrefs vs Semrush', href: '/ahrefs-vs-semrush', category: 'SEO' },
  { title: 'Airtable vs Notion', href: '/airtable-vs-notion', category: 'Workspaces' },
  { title: 'Asana vs Trello', href: '/asana-vs-trello', category: 'Project management' },
  { title: 'ChatGPT vs Claude', href: '/chatgpt-vs-claude', category: 'AI assistants' },
  { title: 'ClickUp vs Monday', href: '/clickup-vs-monday', category: 'Project management' },
  { title: 'ClickUp vs Notion', href: '/clickup-vs-notion', category: 'Workspaces' },
  { title: 'HubSpot vs Salesforce', href: '/hubspot-vs-salesforce', category: 'CRM' },
  { title: 'Klaviyo vs Mailchimp', href: '/klaviyo-vs-mailchimp', category: 'Email marketing' },
  { title: 'Linear vs Jira', href: '/linear-vs-jira', category: 'Issue tracking' },
  { title: 'Mailchimp vs ActiveCampaign', href: '/mailchimp-vs-activecampaign', category: 'Email marketing' },
  { title: 'Notion vs Coda (Superhuman Docs)', href: '/notion-vs-coda', category: 'Workspaces' },
  { title: 'Pipedrive vs HubSpot', href: '/pipedrive-vs-hubspot', category: 'CRM' },
  { title: 'Shopify vs WooCommerce', href: '/shopify-vs-woocommerce', category: 'Commerce platforms' },
  { title: 'Slack vs Teams', href: '/slack-vs-teams', category: 'Team communication' },
  { title: 'Webflow vs Framer', href: '/webflow-vs-framer', category: 'Website builders' },
  { title: 'Wix vs Squarespace', href: '/wix-vs-squarespace', category: 'Website builders' },
  { title: 'Zapier vs Make', href: '/zapier-vs-make', category: 'Workflow automation' },
  { title: 'Zendesk vs Freshdesk', href: '/zendesk-vs-freshdesk', category: 'Customer support' },
] as const;

export const comparisons = comparisonDirectory.map((comparison) => ({
  ...comparison,
  ...(sourceCheckOverrides[comparison.href] ?? {
    status: SOURCE_CHECKED_STATUS,
    sourceCheckedAt: SOURCE_CHECKED_AT,
  }),
}));
