export type ComparisonFaq = {
  question: string;
  answer: string;
};

export type ComparisonCro = {
  chooseA: string;
  chooseB: string;
  tableAnchor: string;
  faq: ComparisonFaq;
};

const comparisonCro: Record<string, ComparisonCro> = {
  '/ahrefs-vs-semrush': {
    chooseA: 'Choose Ahrefs if its Starter limits cover a light, single-user research workload and you value its lower listed entry price.',
    chooseB: 'Choose Semrush if the SEO Toolkit project, keyword, crawl, and reporting limits match your operating plan and you have priced any extra users.',
    tableAnchor: 'plan-comparison',
    faq: {
      question: 'Is Ahrefs Starter equivalent to Semrush SEO Toolkit Pro?',
      answer: 'No. Ahrefs Starter has a 200-credit allowance and one user, while Semrush SEO Toolkit Pro uses different project, report, keyword, and crawl limits. Compare the workload each plan permits rather than the entry price alone.',
    },
  },
  '/airtable-vs-notion': {
    chooseA: 'Choose Airtable when records, attachments, API calls, and structured bases are the constraints you need to model.',
    chooseB: 'Choose Notion when shared documents, knowledge bases, and per-member workspace access are closer to the work your team performs.',
    tableAnchor: 'plan-comparison',
    faq: {
      question: 'Which free plan has more capacity, Airtable or Notion?',
      answer: 'There is no single capacity number. Airtable publishes record, attachment, and API limits; Notion applies a block cap to multi-person Free workspaces while a solo Free workspace can remain unlimited. Compare the unit your workflow actually consumes.',
    },
  },
  '/asana-vs-trello': {
    chooseA: 'Choose Asana if your team needs its listed Timeline, dashboard, goal, portfolio, or resource-planning capabilities.',
    chooseB: 'Choose Trello if cards and boards fit the workflow and its free collaborator allowance or Standard tier covers the required automation.',
    tableAnchor: 'plan-details',
    faq: {
      question: 'Is Trello cheaper than Asana for every team?',
      answer: 'No. The usable cost depends on the required views, automation quota, members, and guest rules. Trello Standard has a lower listed entry price, but a team that needs capabilities from a higher tier should compare those actual tiers.',
    },
  },
  '/chatgpt-vs-claude': {
    chooseA: 'Choose ChatGPT Plus if its included tools and monthly-only billing fit the representative tasks you have tested.',
    chooseB: 'Choose Claude Pro if its workflow fits your tests and the optional annual prepayment is acceptable for the effective monthly saving.',
    tableAnchor: 'plan-comparison',
    faq: {
      question: 'Do ChatGPT Plus and Claude Pro have the same monthly price?',
      answer: 'Their listed month-to-month price is US$20. Claude Pro also lists an annual option paid upfront, while ChatGPT Plus currently has no annual billing. Features and usage policies still need a task-for-task trial.',
    },
  },
  '/clickup-vs-monday': {
    chooseA: 'Choose ClickUp if its member and task allowances, sprint features, time tracking, and workspace automation quota fit the team.',
    chooseB: 'Choose monday.com if its board model and the chosen tier’s views, seats, and separate automation and integration pools fit the workflow.',
    tableAnchor: 'plan-details',
    faq: {
      question: 'How many automation actions do ClickUp and monday.com include?',
      answer: 'The checked annual-plan pages list 1,000 monthly actions for ClickUp Core and 10,000 for Business. monday.com Standard lists 250 automation plus 250 integration actions, while Pro lists 25,000 of each. The vendors count actions differently.',
    },
  },
  '/clickup-vs-notion': {
    chooseA: 'Choose ClickUp when task execution, roles, attachments, and automation quotas matter more than a document-first workspace.',
    chooseB: 'Choose Notion when shared docs and knowledge management are central and its per-member, per-workspace billing model fits access needs.',
    tableAnchor: 'plan-comparison',
    faq: {
      question: 'Is ClickUp or Notion better for a shared free workspace?',
      answer: 'It depends on the first limit your team will reach. ClickUp publishes attachment and automation quotas, while Notion limits content blocks in a multi-person Free workspace. Model your real tasks, files, and editors in both.',
    },
  },
  '/hubspot-vs-salesforce': {
    chooseA: 'Choose HubSpot if its free CRM limits or a specific Sales Hub package matches the small team and product scope you need now.',
    chooseB: 'Choose Salesforce if Starter Suite’s broader bundled scope or a Sales Cloud edition matches your workflow and total-cost estimate.',
    tableAnchor: 'snapshot',
    faq: {
      question: 'Is HubSpot cheaper than Salesforce?',
      answer: 'A universal price comparison is not reliable because the packages are not identical. Compare the same users, records, permissions, automations, onboarding, add-ons, and included products over a 12-month period.',
    },
  },
  '/jira-vs-monday': {
    chooseA: 'Choose Jira for an engineering-specific backlog and workflow model, especially when a permanent workspace for up to ten free users matters.',
    chooseB: 'Choose monday dev when its visual paid workflow, roadmap features, integrations, and action-based automation pools fit the team.',
    tableAnchor: 'limits',
    faq: {
      question: 'How do Jira and monday dev count automation usage?',
      answer: 'On the source-check date, Jira counted successful rule runs, while monday dev counted individual automation and integration actions. Atlassian announced a move to step-based Jira usage on 3 December 2026, so forecasts after that date need the new meter.',
    },
  },
  '/klaviyo-vs-mailchimp': {
    chooseA: 'Choose Klaviyo when its active-profile, channel, and ecommerce workflow model produces the more predictable quote for your list.',
    chooseB: 'Choose Mailchimp when its audience structure and required products fit, after counting every contact status and duplicate across audiences.',
    tableAnchor: 'plan-comparison',
    faq: {
      question: 'Do Klaviyo and Mailchimp bill the same contacts?',
      answer: 'No. Their billable record definitions differ. Klaviyo can exclude suppressed profiles from an email profile limit, while Mailchimp’s tier calculation includes several contact statuses and can count the same address in more than one audience.',
    },
  },
  '/linear-vs-jira': {
    chooseA: 'Choose Linear if its issue and team model, scheduled cycles, and documented free-plan cap fit a focused product or engineering team.',
    chooseB: 'Choose Jira if customizable workflows, forms, multiple work views, permissions, or cross-team planning are required.',
    tableAnchor: 'plan-comparison',
    faq: {
      question: 'Is Linear’s free plan unlimited like Jira Free?',
      answer: 'No. Linear Free has a documented issue cap, while Jira Free is limited by users and other plan allowances. Compare issue history, users, storage, automation, and the workflow controls each team needs.',
    },
  },
  '/mailchimp-vs-activecampaign': {
    chooseA: 'Choose Mailchimp when its free or paid campaign tier covers your full contact count and required send volume.',
    chooseB: 'Choose ActiveCampaign when its automation and CRM workflow justifies the paid plan after list size, seats, SMS, and add-ons are priced.',
    tableAnchor: 'plan-comparison',
    faq: {
      question: 'Does ActiveCampaign have a permanent free plan?',
      answer: 'No permanent free production tier is described in this comparison. ActiveCampaign offers a 14-day trial with limits, while Mailchimp offers a Free plan within its published contact and send caps.',
    },
  },
  '/mailchimp-vs-convertkit': {
    chooseA: 'Choose Mailchimp if separate audiences and its broader marketing feature set justify the bill after duplicates and contact statuses are audited.',
    chooseB: 'Choose Kit if unique active-subscriber billing, lead-magnet organization, and unlimited email sends make the list easier to forecast.',
    tableAnchor: 'limits',
    faq: {
      question: 'Does Mailchimp count duplicate subscribers across audiences?',
      answer: 'Yes. Mailchimp can count the same email address once in each audience, while Kit organizes one person as one active subscriber across forms and tags. Mailchimp also includes several non-subscribed statuses in paid contact totals.',
    },
  },
  '/notion-vs-coda': {
    chooseA: 'Choose Notion when its per-member workspace plans and team knowledge-base model fit the access pattern.',
    chooseB: 'Choose Superhuman Docs, formerly Coda, when maker billing, tables, formulas, Packs, and document automation fit the workflow.',
    tableAnchor: 'plan-details',
    faq: {
      question: 'Is Coda now called Superhuman Docs?',
      answer: 'Yes. Coda became Superhuman Docs in July 2026. Existing documents and workflows continue, but new customers should verify the current Superhuman suite offer and map it to the older Coda plan names before comparing prices.',
    },
  },
  '/pipedrive-vs-hubspot': {
    chooseA: 'Choose Pipedrive when a paid, seat-based sales CRM plus the required add-ons produces the cleaner quote for the team.',
    chooseB: 'Choose HubSpot when its ongoing free CRM or the required combination of Hubs, seats, and marketing-contact tiers fits the rollout.',
    tableAnchor: 'plan-comparison',
    faq: {
      question: 'Does Pipedrive cost less than HubSpot?',
      answer: 'Not in every configuration. Pipedrive prices paid seats and several add-ons; HubSpot combines product editions, seat types, and marketing-contact tiers. Compare the same sales, marketing, automation, and contact requirements.',
    },
  },
  '/shopify-vs-woocommerce': {
    chooseA: 'Choose Shopify when a hosted platform and clearer starting subscription are worth consolidating more store operations with one vendor.',
    chooseB: 'Choose WooCommerce when WordPress control and extension choice justify managing hosting, maintenance, payments, and add-on costs.',
    tableAnchor: 'cost-comparison',
    faq: {
      question: 'Is WooCommerce free compared with Shopify?',
      answer: 'WooCommerce has no platform subscription, but a production store still needs hosting and may require paid extensions, payment processing, maintenance, and development. Compare total operating cost rather than the plugin price.',
    },
  },
  '/slack-vs-teams': {
    chooseA: 'Choose Slack when unlimited message history, app integrations, huddles, and Slack Connect are the higher-priority workflow features.',
    chooseB: 'Choose Teams Essentials when its lower listed annual price and published meeting limits fit the collaboration requirement.',
    tableAnchor: 'plan-comparison',
    faq: {
      question: 'Is Microsoft Teams Essentials cheaper than Slack Pro?',
      answer: 'Its published annual per-user price is lower in the checked comparison. The plans include different messaging, meeting, external-collaboration, and integration features, so price the plan that covers the actual workflow.',
    },
  },
  '/webflow-vs-framer': {
    chooseA: 'Choose Webflow when its site and workspace model, CMS capacity, and publishing controls match the project you have scoped.',
    chooseB: 'Choose Framer when its design workflow and lower listed Basic starting price cover the required pages, CMS, editors, and traffic.',
    tableAnchor: 'plan-comparison',
    faq: {
      question: 'Is Framer cheaper than Webflow?',
      answer: 'Framer Basic has a lower listed starting price in the checked annual view, but the plans are not equivalent. Webflow separates Site and Workspace costs and its CMS capacity varies by tier, so compare the complete project configuration.',
    },
  },
  '/wix-vs-squarespace': {
    chooseA: 'Choose Wix when a permanent branded free site or its selected business tier matches the launch plan.',
    chooseB: 'Choose Squarespace when its trial and selected site or commerce plan cover the design and selling requirements.',
    tableAnchor: 'plan-comparison',
    faq: {
      question: 'Do Wix and Squarespace both offer a permanent free plan?',
      answer: 'No. Wix offers a permanent free plan with Wix branding and a wixsite.com address. Squarespace offers a 14-day trial instead, after which a paid plan is required.',
    },
  },
  '/zapier-vs-make': {
    chooseA: 'Choose Zapier when its supported app connections and action-based workflow model make the representative automations easier to operate.',
    chooseB: 'Choose Make when its visual builder, routers, and filters match the way the team designs and debugs scenarios.',
    tableAnchor: 'plans',
    faq: {
      question: 'Are Zapier tasks and Make credits directly comparable?',
      answer: 'No. The products meter work with different units and execution rules. Build the same representative automation in both, count every step or operation it consumes, and forecast a peak month.',
    },
  },
  '/zendesk-vs-freshdesk': {
    chooseA: 'Choose Zendesk after pricing the correct Support or Suite tier, every full agent role, required channels, and capacity add-ons.',
    chooseB: 'Choose Freshdesk after matching email-first Freshdesk or omnichannel Freshdesk Omni and counting full-time plus occasional-agent usage.',
    tableAnchor: 'plan-comparison',
    faq: {
      question: 'Is Freshdesk cheaper than Zendesk for omnichannel support?',
      answer: 'Freshdesk Omni has lower published entry pricing in the checked annual view, but the final cost depends on agents, channels, voice usage, AI, day passes, API volume, and add-ons. Compare complete, like-for-like quotes.',
    },
  },
};

export function getComparisonCro(path?: string) {
  return path ? comparisonCro[path] : undefined;
}

