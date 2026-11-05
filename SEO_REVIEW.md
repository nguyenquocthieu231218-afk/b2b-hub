# StackEvalify SEO review — 5 November 2026

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

- `public/logo.png`, `app/icon.svg`, and `app/favicon.ico` are byte-identical to the GitHub baseline. No replacement logo or business name is introduced. The existing header wordmark and colors stay in place.
- All 17 comparison articles and their source-check dates remain unchanged. The shared directory catalog is extracted without changing its records.
- The hardware category, author profile, Acer field notes, and held iPhone page retain `noindex` and stay out of the sitemap.
- No ratings, testimonials, test results, author credentials, publication dates, or business contact details are invented. No Review or Product rich-result claims are added.
- Sitemap modification dates are omitted because per-page significant-update dates are not maintained. Source-check dates are not treated as publication dates.

## Verification

Passed against this checkout:

- `npm run build -- --webpack`: production compilation, TypeScript, and static generation of 33 routes.
- `npm run lint` and `tsc --noEmit`.
- `git diff --check` and comparison of all three brand assets against the baseline commit.
- `npm run check:seo -- http://127.0.0.1:3000` against the production server: 22 sitemap URLs return 200 with unique titles/descriptions, self-referencing production canonicals, and no `noindex`; all 17 comparisons have breadcrumbs and branded social metadata; four held pages keep `noindex`; both aliases return 308; an unknown page returns 404; the served logo matches the original file byte for byte.

The local preview has production canonical URLs intentionally. The checks do not constitute a Google Rich Results Test, Search Console inspection, Core Web Vitals measurement, or confirmation of indexing on the deployed site.

## After deployment

1. Confirm the deployed homepage, directory, sitemap, and redirects serve these changes.
2. Use the site's verified Google Search Console property to submit `https://stackevalify.com/sitemap.xml` and inspect the homepage, directory, and representative comparison URLs.
3. Run Google's Rich Results Test for breadcrumb markup and Schema Markup Validator for the WebSite/site-name graph. Google does not support site-name validation in the Rich Results Test.
4. Check real mobile Core Web Vitals and fix measured issues. No performance score was established in this source audit.
5. Continue updating vendor pricing and add original, documented product evaluation evidence where available. The technical changes do not replace this editorial work or guarantee indexing/ranking.

## Google Search Central references

- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Site names](https://developers.google.com/search/docs/appearance/site-names)
- [Organization and logo structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Control indexing with noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
