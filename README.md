# StackEvalify

StackEvalify is a Next.js site for technical evaluations of B2B software and developer hardware. The editorial standard is to label evidence as hands-on use, performance testing, or desk research; state the setup and limitations; and check changing product claims against dated primary sources.

## Local development

Requirements: Node.js 20 or newer and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Use `npm run lint` for ESLint and `npm run build` to create a production build.

To check rendered SEO behavior, build and start a local production preview, then run `npm run check:seo -- http://127.0.0.1:3000`. The check verifies indexable pages, canonical URLs, breadcrumbs, redirects, and the served original logo. See [SEO_REVIEW.md](SEO_REVIEW.md) for the audit scope and publication follow-up.

## Project structure

- `app/` contains the App Router pages, route metadata, SVG app icon, `robots.txt`, and generated sitemap.
- `app/components/ComparisonLayout.tsx` renders comparison content and responsive summaries.
- `components/` contains the shared site header and footer.
- `lib/seo.ts` contains metadata helpers for editorial drafts and source-checked comparisons.
- `PROJECT_BACKLOG.md` tracks evidence and launch work that still needs owner input.

## Editorial readiness

All 17 SaaS comparison pages have dated vendor-source checks and are included in the XML sitemap. These are desk-research comparisons, not hands-on product tests. Keep preliminary hardware routes, the contributor profile, and any page with unverified claims noindex until their evidence and owner details are confirmed. The comparisons are: Ahrefs vs Semrush, HubSpot vs Salesforce, Linear vs Jira, Zapier vs Make, ClickUp vs monday.com, Asana vs Trello, Notion vs Coda (now Superhuman Docs), ChatGPT vs Claude, Klaviyo vs Mailchimp, Mailchimp vs ActiveCampaign, Airtable vs Notion, ClickUp vs Notion, Pipedrive vs HubSpot, Slack vs Microsoft Teams, Shopify vs WooCommerce, Webflow vs Framer, and Wix vs Squarespace. The iPhone review route remains on hold until its product and test evidence are verified.

The site's product buttons currently link to official vendor websites without affiliate tracking. If tracked links are added, disclose the commercial relationship beside each link and confirm the wording matches the actual program.

## Deployment

Confirm the production domain, contact inbox, and account-specific privacy/analytics settings before deployment. The generated metadata and sitemap currently assume `https://stackevalify.com`; update `metadataBase`, `app/sitemap.ts`, and `app/robots.ts` together if the canonical domain changes.
