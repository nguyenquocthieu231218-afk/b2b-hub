# StackEvalify SEO review — 5 November 2026

## Maintenance note — 9 November 2026

The HubSpot vs Salesforce comparison was rechecked against the vendors' current US pricing pages. HubSpot's standard Starter seat price and explicitly limited new-customer promotion are now separated, and the comparison directory, Article schema, and sitemap share the same source-check date. No hands-on claim, rating, testimonial, or brand asset was added.

The ClickUp vs monday.com comparison was also rechecked against current vendor pricing and automation documentation. It now explains workspace-level versus separate automation/integration action pools, plan-gated webhook availability, and ten-seat annual-billing examples without presenting desk research as hands-on experience.

The Pipedrive vs HubSpot comparison was rechecked against current vendor pricing and billing documentation. It now covers billed-but-unassigned Pipedrive seats, add-ons and top-ups, plus HubSpot's automatic marketing-contact tier upgrades and delayed non-marketing status changes.

The ClickUp vs Notion comparison was rechecked against current vendor pricing and access documentation. It now limits the 1,000-block warning to Free workspaces with multiple owners, records current annual-billing prices, and explains how permission levels, organization domains, guests, and member changes can affect paid seats.

The Mailchimp vs ActiveCampaign comparison was rechecked against current vendor billing and limit documentation. It now distinguishes which contact states count, explains duplicate-audience billing, and documents the operational difference between Mailchimp add-on charges and ActiveCampaign contact/send-limit behavior.

The Asana vs Trello comparison was rechecked against current vendor pricing, billing, guest, and automation documentation. It now distinguishes Asana organization guests from Workspace collaborators, explains Trello multi-board guest charges, separates Trello automation runs from operation quotas, and records the Workspace-wide effect of the Free collaborator cap.

Source of truth: GitHub `nguyenquocthieu231218-afk/b2b-hub`, `main` at `bd1044800888bda3aa873970f2ce6f672b62f0fc`. This change starts from that commit; earlier uncommitted local edits are not included.

## Findings and changes

| Finding in the GitHub version | Change |
| --- | --- |
| The populated SaaS directory has `noindex` and is absent from the sitemap. | Allow this directory to be indexed and include it alongside its 17 comparisons in the sitemap. |
| The homepage features one preliminary hardware article; the software library is reached through category links. | Add six existing software article links, a link to the full directory, and a direct navigation link. Keep the hardware content. |
| Search engines have no explicit structured site-name or organization/logo data. | Add homepage `WebSite` and `Organization` JSON-LD using StackEvalify and the existing `/logo.png`. |
| Comparison breadcrumbs have no structured counterpart or current-page label. | Render matching visible breadcrumbs and `BreadcrumbList` JSON-LD for the directory and all comparisons. |
| The nested Webflow comparison alias redirects temporarily. | Use a permanent HTTP 308 redirect to the canonical comparison. |
| Comparison metadata replaces the root Open Graph object, while Twitter inherits the homepage title/description. | Set the StackEvalify Open Graph site name and page-specific Twitter title/description in the comparison metadata helper. |

These are targeted improvements, not a claim that the whole site failed Google's requirements. Existing unique titles, descriptions, canonical URLs, vendor-source links, crawl access, and the indexed comparison library are retained.

## Brand and editorial preservation

- `public/logo.png`, `app/icon.svg`, and `app/favicon.ico` are byte-identical to the GitHub baseline. No replacement logo or business name is introduced. The header displays the original `/logo.png` beside its existing wordmark; the image has fixed dimensions and uses Next.js image optimization. Colors stay in place.
- All 17 comparison articles and their source-check dates remain unchanged. The shared directory catalog is extracted without changing its records.
- The hardware category, author profile, Acer field notes, and held iPhone page retain `noindex` and stay out of the sitemap.
- No ratings, testimonials, test results, author credentials, publication dates, or business contact details are invented. No Review or Product rich-result claims are added.
- Sitemap modification dates are omitted because per-page significant-update dates are not maintained. Source-check dates are not treated as publication dates.

## Verification

Passed against this checkout:

- `npm run build -- --webpack`: production compilation, TypeScript, and static generation of 38 routes after the buyer-guide and trust-page additions.
- `npm run lint` and `tsc --noEmit`.
- `git diff --check` and comparison of all three brand assets against the baseline commit.
- `npm run check:seo -- http://127.0.0.1:3000` against the production server: 27 sitemap URLs return 200 with unique titles/descriptions, self-referencing production canonicals even with query parameters, and no `noindex`; all 17 comparisons have breadcrumbs, Article schema matching the visible H1, real table-of-contents anchors, three non-self related links, and branded social metadata; four held pages keep `noindex`; both aliases return 308; an unknown page returns 404; the served logo matches the original file byte for byte and appears in the header.
- `npm run check:search`: directory completeness, category intersection, multiword searches, typo/transposition suggestions, and empty-result behavior.
- Browser checks: `clikup` suggests `ClickUp`; selecting it shows two articles; the CRM filter shows two articles; reset restores all 17. Search stays local without changing the URL or storing the query. Original logo visibly confirmed in the header.

The local preview has production canonical URLs intentionally. The checks do not constitute a Google Rich Results Test, Search Console inspection, real-user Core Web Vitals assessment, or confirmation of indexing on the deployed site.

## Expanded implementation against the requested B2B checklist

| Area | Implemented | Remaining evidence or choice |
| --- | --- | --- |
| Rendering and freshness | Existing content and five new pages are statically generated. Search is a small client island; TOC, related links, articles, and schema are server-rendered. No external fonts or analytics are added. | There is no CMS/API to retrieve newly edited content at runtime. ISR/SSR would rerender the same file data; use ISR when a real source is connected. Source and vendor-price changes still require an editorial update and deployment. |
| Crawl and topic structure | One canonical per page, query-parameter canonical checks, 27 sitemap URLs, contextual related comparisons and guide links, and nested `/guides/...` routes. | Existing working article URLs are retained rather than migrated merely to create deeper paths. A small sitemap does not need splitting. |
| Identity and trust | Original brand image restored visibly; About, methodology and contact explain evidence/accountability. Privacy and terms pages reflect the owner's confirmation that no analytics, ads/affiliate tracking, or customer forms are in use. | Legal entity/controller details, public NAP, official social profiles, author credentials, and monitored-inbox confirmation need owner facts. No verified/expert/security badges or fictional social links are added. The privacy notice is factual site information, not a jurisdiction-specific legal certification. |
| Structured data | Homepage WebSite/Organization, visible BreadcrumbList, and Article metadata from actual comparison H1/lead plus the two guide articles. | No SoftwareApplication offers, Review or AggregateRating stars without genuine supporting product/review data. Visible FAQ answers are provided without claiming eligibility for Google FAQ rich results. |
| Content funnel | New shortlisting/pilot checklist and SaaS total-cost worksheet connect to the 17 existing comparisons. Cost arithmetic is explicitly hypothetical; sources and limitations remain visible. | Add original documented product evaluations before asserting hands-on expertise or measured superiority. Broader content should follow real audience questions, not keyword-volume filler. |
| UX and conversion | Local text/category search, typo suggestions, empty/reset states, keyboard focus/live result count, real-anchor TOCs, related articles, useful guide links and actionable email instructions. | No non-working lead form or third-party collection backend is introduced. A live form needs an approved destination and an updated privacy notice. |

### Mobile lab performance

Lighthouse 13.6.0, production server on localhost, simulated mobile profile, 5 November 2026:

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage, confirmation run | 94 | 100 | 100 | 100 | 0.9 s | 0 | 300 ms |
| Software directory | 95 | 100 | 100 | 100 | 0.9 s | 0 | 260 ms |

An earlier homepage run scored 89 (Speed Index 7.7 s), while a confirmation run scored 94 (Speed Index 1.9 s); local timing is variable. Both homepage runs reported LCP 0.9 s and CLS 0. TBT is a lab diagnostic, **not INP**. These numbers do not establish real-user p75 INP or deployed-site performance. Validate LCP/INP/CLS in field data after deployment. Raw local reports and UI screenshots live in ignored `.reports/` rather than the GitHub source tree.

Google restricts FAQ rich results to eligible authoritative government/health sites; adding FAQPage does not guarantee snippets. For this editorial site, truthful Article/site identity data and useful visible answers are the appropriate current implementation. Repeated LSI keyword lists, generic review stars, fabricated authority, and dynamic dates are not substitutes for helpful content.

## After deployment

1. Confirm the deployed homepage, directory, sitemap, and redirects serve these changes.
2. Use the site's verified Google Search Console property to submit `https://stackevalify.com/sitemap.xml` and inspect the homepage, directory, and representative comparison URLs.
3. Run Google's Rich Results Test for breadcrumb markup and Schema Markup Validator for the WebSite/site-name graph. Google does not support site-name validation in the Rich Results Test.
4. Check real mobile Core Web Vitals and fix measured issues. The local Lighthouse scores above are lab checks and do not replace deployed-site or real-user data.
5. Continue updating vendor pricing and add original, documented product evaluation evidence where available. The technical changes do not replace this editorial work or guarantee indexing/ranking.

## Google Search Central references

- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Site names](https://developers.google.com/search/docs/appearance/site-names)
- [Organization and logo structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Control indexing with noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Software app structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [FAQ rich-result eligibility](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- [People-first content and evidence](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Core Web Vitals thresholds and field measurement](https://web.dev/articles/vitals)
