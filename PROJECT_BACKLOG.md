# StackEvalify project status

Repository: `nguyenquocthieu231218-afk/b2b-hub`
Working copy: local checkout only; changes have not been committed or pushed.
Status date: 2026-10-29.

## Completed in this local pass

- Standardized the site header, skip link, navigation, and footer across homepage, category, article, about, methodology, contact, and author pages.
- Added an SVG browser icon, social preview image metadata, removed duplicate homepage canonical-base configuration, and corrected stale category and 404 wording.
- Made comparison summaries easier to use on phones: desktop gets a table; narrow screens get one comparison card per criterion.
- Added unique titles, descriptions, canonical URLs, and social metadata where appropriate.
- Reworked Linear vs Jira into a dated vendor-source desk comparison of plan limits, published workflow features, and team-fit guidance; included official sources and mobile-friendly comparison cards.
- Reworked Zapier vs Make into a dated source-checked comparison that explains why tasks and credits are not directly equivalent.
- Reworked ClickUp vs monday.com into a dated comparison of free-tier limits, annual seat pricing, and the published automation allowances.
- Reworked Asana vs Trello into a dated, source-checked comparison of free limits, annual prices, views, and automation allowances.
- Rewrote Notion vs Coda to cover the Coda-to-Superhuman-Docs rename, the distinct Maker billing model, and current plan-limit evidence.
- Reworked ChatGPT vs Claude as a dated comparison of Plus and Pro pricing, billing choices, and vendor-listed workflow features; removed unsupported claims about which assistant is inherently better.
- Reworked Slack vs Microsoft Teams to compare Slack Pro with Teams Essentials, clearly distinguishing their plans, billing cycles, collaboration features, and meeting limits.
- Reworked Shopify vs WooCommerce around total cost components; replaced an unsupported hosting estimate with the range currently published by WooCommerce and source-linked payment-cost caveats.
- Rewrote Webflow vs Framer after finding outdated pricing and unsupported workflow claims; documented the 2026 Site plan changes, current CMS limits, and separate Workspace considerations.
- Reworked Wix vs Squarespace using current US annual-plan prices, trial/free-plan differences, and Squarespace store transaction fees; removed unsupported design-style and feature claims.
- Reworked Klaviyo vs Mailchimp around the comparable free-plan limits and the difference between active-profile and account-wide contact billing; removed unverified price and feature superiority claims.
- Reworked Mailchimp vs ActiveCampaign around current trial/free-plan limits, plan-specific automation, seat counts, and separate CRM add-ons; removed outdated paid prices, unverified deliverability claims, and feature generalizations.
- Rewrote Airtable vs Notion around free record/block limits, collaborator permissions, and per-seat versus per-member billing; removed stale prices and unsupported qualitative claims.
- Reworked ClickUp vs Notion around free storage, automation and block limits, and role-based billing; removed outdated prices and unsupported usability claims.
- Reworked Pipedrive vs HubSpot around current Pipedrive plans, HubSpot free limits, and contact-based marketing costs; removed outdated prices and unsupported ease-of-use and conversion claims.
- Reworked Ahrefs vs Semrush around published entry-plan quotas, credit usage, trials, and user limits; removed unsupported claims about data accuracy and crawler superiority.
- Added metadata for every comparison route. The contributor profile and preliminary hardware pages remain `noindex`; Ahrefs vs Semrush, HubSpot vs Salesforce, Linear vs Jira, Zapier vs Make, ClickUp vs monday.com, Asana vs Trello, Notion vs Coda (Superhuman Docs), ChatGPT vs Claude, Klaviyo vs Mailchimp, Mailchimp vs ActiveCampaign, Airtable vs Notion, ClickUp vs Notion, Pipedrive vs HubSpot, Slack vs Microsoft Teams, Shopify vs WooCommerce, Webflow vs Framer, and Wix vs Squarespace have dated source checks and are eligible for indexing.
- Reduced the XML sitemap to pages currently eligible for indexing, including the source-checked Ahrefs vs Semrush, HubSpot vs Salesforce, Linear vs Jira, Zapier vs Make, ClickUp vs monday.com, Asana vs Trello, Notion vs Coda, ChatGPT vs Claude, Klaviyo vs Mailchimp, Mailchimp vs ActiveCampaign, Airtable vs Notion, ClickUp vs Notion, Pipedrive vs HubSpot, Slack vs Microsoft Teams, Shopify vs WooCommerce, Webflow vs Framer, and Wix vs Squarespace routes, and removed stale static `robots.txt` / `sitemap.xml` files that pointed at the old Vercel domain.
- Consolidated duplicate Salesforce/HubSpot paths with a permanent redirect. Corrected the misplaced nested Webflow/Framer route to its canonical comparison.
- Replaced the unsupported iPhone review claims with a clear hold page pending product and test verification.
- Removed the unused legacy “Verified Tech Evaluator” badge and replaced create-next-app README boilerplate with StackEvalify setup/editorial guidance.
- Updated Next.js and React to the patched versions in the lockfile and removed the typography plugin dependency; `npm audit` currently reports no advisories.

## Owner input still needed before publication

1. **Comparison maintenance:** All 17 SaaS comparisons now have dated vendor-source checks and remain desk research, not hands-on testing. Recheck changing prices, limits, and plan names before publication updates; use repeatable tests before making performance, accuracy, or usability claims.
2. **Acer Nitro 5 field note:** Confirm the exact model/SKU, OS, project/workload, repeat count, timing procedure, temperature sensor, ambient conditions, and clock/performance data. Current text explicitly says the available notes do not establish throttling.
3. **iPhone review:** Supply product release/specification sources, image rights/provenance, and test notes; otherwise keep the route on hold.
4. **Contributor and contact details:** Confirm author name/profile language and that `contact@stackevalify.com` is monitored.
5. **Commercial and launch settings:** Confirm affiliate enrollment/tracking URLs before adding tracked links. Verify canonical production domain, analytics/privacy behavior, and any legal pages needed for the operating region.

## Verification

- The user's latest `npm.cmd run build` on 2026-10-29 passed after the current changes: production compilation, TypeScript, page-data collection, and static generation of all 33 routes completed successfully.
- `npm run lint` and `tsc --noEmit` passed earlier in the editing pass, before the final comparison rewrites and metadata changes; rerun them if a separate lint/typecheck result is needed.
- `npm audit` reported 0 advisories earlier in the editing pass; it has not been rerun after the final updates.

All 17 SaaS comparison routes have dated source checks, are indexable, and are included in the sitemap. Keep the author and preliminary hardware routes noindex pending owner evidence and details. Recheck vendor sources before updating time-sensitive prices or plan limits.
