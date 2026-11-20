import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const preview = new URL(process.argv[2] ?? 'http://127.0.0.1:3001');
assert(['localhost', '127.0.0.1', '[::1]'].includes(preview.hostname), 'Use a local production preview URL');
const canonicalOrigin = 'https://stackevalify.com';

async function request(path, options = {}) {
  return fetch(new URL(path, preview), { signal: AbortSignal.timeout(15_000), ...options });
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]));
}

function meta(html, key) {
  return [...html.matchAll(/<meta\b[^>]*>/g)]
    .map(([tag]) => attributes(tag))
    .find((tag) => tag.name === key || tag.property === key)?.content;
}

function jsonLd(html) {
  return [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map(([, text]) => JSON.parse(text))
    .flatMap((data) => data['@graph'] ?? [data]);
}

function plainText(html) {
  return html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
}

const comparisonModifiedDates = new Map([
  ['/deel-vs-rippling', '2026-11-20'],
  ['/deel-vs-remote', '2026-11-20'],
  ['/rippling-vs-gusto', '2026-11-20'],
  ['/deel-vs-oyster', '2026-11-20'],
]);

const visibleSourceCheckDates = new Map([
  ['/deel-vs-rippling', '2026-11-14'],
  ['/deel-vs-remote', '2026-11-15'],
  ['/rippling-vs-gusto', '2026-11-15'],
  ['/deel-vs-oyster', '2026-11-15'],
]);

const auditedComparisonPaths = [...visibleSourceCheckDates.keys()];
const auditedToolPath = '/eor-cost-calculator';

function comparisonModifiedDate(path) {
  return comparisonModifiedDates.get(path) ?? '2026-11-10';
}

function checkArticle(html, path) {
  const article = jsonLd(html).find((data) => data['@type'] === 'Article');
  assert(article, `${path}: Article schema missing`);
  const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1];
  assert.equal(article.headline, plainText(heading), `${path}: schema headline differs from visible heading`);
  assert.equal(article.mainEntityOfPage['@id'], `${canonicalOrigin}${path}`);
  assert.equal(article.author?.name, 'StackEvalify', `${path}: article author missing`);
  assert.equal(article.author?.url, `${canonicalOrigin}/about`, `${path}: article author URL missing`);
  assert.equal(article.publisher?.['@id'], `${canonicalOrigin}/#organization`, `${path}: publisher entity mismatch`);
  if (/^\/[^/]+-vs-[^/]+$/.test(path)) {
    assert.equal(article.dateModified, comparisonModifiedDate(path), `${path}: content update date missing from article schema`);
  }
  assert(!('aggregateRating' in article) && !('reviewRating' in article), 'Do not fabricate ratings');
  const contents = html.match(/<nav aria-label="On this page"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  assert(contents, `${path}: table of contents missing`);
  const anchors = [...contents.matchAll(/href="#([^"]+)"/g)].map(([, id]) => decodeURIComponent(id));
  assert(anchors.length >= 3, `${path}: table of contents needs real sections`);
  for (const id of anchors) assert(html.includes(`id="${id}"`), `${path}: broken section anchor #${id}`);
}

function checkBreadcrumb(html, path) {
  const breadcrumb = jsonLd(html).find((data) => data['@type'] === 'BreadcrumbList');
  assert(breadcrumb, `${path}: breadcrumb JSON-LD missing`);
  assert(breadcrumb.itemListElement.length >= 2, `${path}: breadcrumb needs at least two items`);
  assert.match(html, /<nav aria-label="Breadcrumb"/, `${path}: visible breadcrumb missing`);
  breadcrumb.itemListElement.forEach((item, index) => {
    assert.equal(item['@type'], 'ListItem');
    assert.equal(item.position, index + 1);
    assert(item.name);
    if (item.item) assert.equal(new URL(item.item).origin, canonicalOrigin);
  });
}

const robotsResponse = await request('/robots.txt');
assert.equal(robotsResponse.status, 200);
const robots = await robotsResponse.text();
assert.match(robots, /Allow: \/(?:\r?\n|$)/);
assert.match(robots, /Sitemap: https:\/\/stackevalify\.com\/sitemap\.xml/);

const llmsResponse = await request('/llms.txt');
assert.equal(llmsResponse.status, 200, '/llms.txt must return 200');
assert.match(llmsResponse.headers.get('content-type') ?? '', /^text\/plain;\s*charset=utf-8/i, '/llms.txt must be UTF-8 plain text');
assert.match(llmsResponse.headers.get('cache-control') ?? '', /public/, '/llms.txt must be publicly cacheable');
assert.match(llmsResponse.headers.get('cache-control') ?? '', /s-maxage=86400/, '/llms.txt CDN cache lifetime mismatch');
const llms = await llmsResponse.text();
assert.match(llms, /12- and 24-month total-cost-of-ownership scenarios/, '/llms.txt TCO method summary missing');
assert.match(llms, /EOR security deposits or reserves/, '/llms.txt deposit treatment missing');
assert.match(llms, /foreign-exchange spread sensitivity/, '/llms.txt FX treatment missing');
assert.match(llms, /implementation and onboarding charges/, '/llms.txt add-on treatment missing');
assert(llms.includes(`Full methodology: ${canonicalOrigin}/methodology`), '/llms.txt methodology canonical missing');
assert(!llms.includes('/go/'), '/llms.txt must not expose measured redirect routes');

const sitemapResponse = await request('/sitemap.xml');
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, value]) => new URL(value));
assert.equal(urls.length, new Set(urls.map(String)).size, 'Sitemap contains duplicate URLs');
assert(!urls.some((url) => url.pathname.startsWith('/go/')), 'Measured redirect routes must stay out of the sitemap');
assert(!urls.some((url) => url.pathname === '/llms.txt'), '/llms.txt must not change the indexable-page sitemap set');
assert(urls.some((url) => url.pathname === '/category/saas'), 'SaaS directory missing from sitemap');
const comparisonPaths = urls.map((url) => url.pathname).filter((path) => /^\/[^/]+-vs-[^/]+$/.test(path));
assert.equal(comparisonPaths.length, 4, 'Only four calculator-audited comparisons may enter the sitemap');
assert.deepEqual([...comparisonPaths].sort(), [...auditedComparisonPaths].sort(), 'Sitemap comparison set differs from the audited calculator set');
assert(urls.some((url) => url.pathname === auditedToolPath), 'Audited EOR calculator missing from sitemap');
assert.match(sitemap, new RegExp(`<loc>${canonicalOrigin}${auditedToolPath}</loc>\\s*<lastmod>2026-11-20</lastmod>`), 'EOR calculator audit date missing from sitemap');
for (const path of comparisonPaths) {
  assert.match(
    sitemap,
    new RegExp(`<loc>${canonicalOrigin}${path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</loc>\\s*<lastmod>${comparisonModifiedDate(path)}</lastmod>`),
    `${path}: content update date missing from sitemap`,
  );
}

const titles = new Set();
const descriptions = new Set();
const pages = new Map();
for (const url of urls) {
  assert.equal(url.origin, canonicalOrigin, 'Sitemap contains a different domain');
  const response = await request(url.pathname);
  assert.equal(response.status, 200, `${url.pathname}: must return 200`);
  const html = await response.text();
  pages.set(url.pathname, html);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${url.pathname}: one main heading expected`);
  assert(!/noindex/i.test(`${meta(html, 'robots') ?? ''} ${response.headers.get('x-robots-tag') ?? ''}`), `${url.pathname}: indexable sitemap page has noindex`);
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const description = meta(html, 'description');
  assert(title?.includes('StackEvalify'), `${url.pathname}: branded title missing`);
  assert(!titles.has(title), `${url.pathname}: duplicate title`);
  assert(description && !descriptions.has(description), `${url.pathname}: missing or duplicate description`);
  titles.add(title);
  descriptions.add(description);
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)]
    .map(([tag]) => attributes(tag)).find((tag) => tag.rel === 'canonical')?.href;
  assert(canonical, `${url.pathname}: canonical missing`);
  assert.equal(new URL(canonical).href, url.href, `${url.pathname}: canonical mismatch`);
  for (const [tag] of html.matchAll(/<a\b[^>]*href="https?:\/\/[^\"]+"[^>]*>/g)) {
    const outbound = attributes(tag);
    assert.equal(outbound.target, '_blank', `${url.pathname}: outbound link must open a new tab`);
    assert.equal(outbound.rel, 'nofollow sponsored noopener noreferrer', `${url.pathname}: outbound link relationship tokens differ from policy`);
  }
  if (comparisonPaths.includes(url.pathname)) {
    checkBreadcrumb(html, url.pathname);
    assert.equal(meta(html, 'og:site_name'), 'StackEvalify');
    if (visibleSourceCheckDates.has(url.pathname)) {
      const expectedSourceDate = visibleSourceCheckDates.get(url.pathname);
      assert(html.includes(`dateTime="${expectedSourceDate}"`), `${url.pathname}: visible source-check date is not ${expectedSourceDate}`);
    }
    assert(meta(html, 'twitter:title')?.startsWith(title.split(' | ')[0]), `${url.pathname}: inherited homepage social title`);
    checkArticle(html, url.pathname);
    const related = html.match(/<section aria-labelledby="related-comparisons"[^>]*>([\s\S]*?)<\/section>/)?.[1];
    assert(related, `${url.pathname}: related comparisons missing`);
    const relatedPaths = [...related.matchAll(/href="(\/[^"]+)"/g)].map(([, path]) => path);
    assert(relatedPaths.length >= 3 && relatedPaths.length <= 4, `${url.pathname}: expected three or four focused related comparisons`);
    assert(!relatedPaths.includes(url.pathname), `${url.pathname}: article links to itself as related content`);
    const quickVerdictIndex = html.indexOf('id="quick-verdict"');
    const firstTableIndex = html.indexOf('<table');
    assert(quickVerdictIndex >= 0 && firstTableIndex > quickVerdictIndex, `${url.pathname}: quick verdict must precede the detailed table`);
    assert.match(html, /data-track="quick-verdict-jump"/, `${url.pathname}: quick verdict CTA tracking missing`);
    assert.equal([...html.matchAll(/data-track="affiliate-cta"/g)].length, 2, `${url.pathname}: both vendor CTAs need tracking`);
    assert.equal([...html.matchAll(/href="\/go\/(?:deel|rippling|remote|gusto|oyster)\?source=[^"]+"/g)].length, 2, `${url.pathname}: audited vendor CTAs must use measured redirect routes`);
    assert.equal([...html.matchAll(/rel="sponsored nofollow noopener" data-track="affiliate-cta"/g)].length, 2, `${url.pathname}: measured CTA relationship tokens differ from policy`);
    assert(html.includes(`data-comparison-root="${url.pathname}"`), `${url.pathname}: comparison analytics root missing`);
    assert.match(html, /data-comparison-analytics="cta,scroll-depth,table-interaction"/, `${url.pathname}: analytics hydration marker missing`);
    assert.match(html, /data-url-state-sync="loading"/, `${url.pathname}: calculator URL state marker missing`);
    assert.match(html, /data-share-calculator-link/, `${url.pathname}: shareable calculator link control missing`);
    assert.match(html, /data-export-cfo-csv/, `${url.pathname}: CFO CSV export control missing`);
    assert.match(html, /data-save-cfo-pdf/, `${url.pathname}: CFO PDF print control missing`);
    assert.match(html, /data-cfo-print-report/, `${url.pathname}: CFO print report missing`);
    assert(plainText(html).includes('Audited via StackEvalify.com — Independent B2B SaaS TCO Methodology'), `${url.pathname}: print methodology footer missing`);
    assert.equal([...html.matchAll(/data-team-preset="/g)].length, 3, `${url.pathname}: expected three team presets`);
    assert.equal([...html.matchAll(/data-team-preset="[^"]+" aria-pressed="(?:true|false)" aria-label="[^"]+"/g)].length, 3, `${url.pathname}: team presets need accessible names and pressed state`);
    assert.match(html, /data-negotiation-levers/, `${url.pathname}: negotiation override panel missing`);
    assert.equal([...html.matchAll(/data-negotiation-vendor="/g)].length, 2, `${url.pathname}: both vendors need negotiation controls`);
    assert.equal([...html.matchAll(/data-fx-override="/g)].length, 2, `${url.pathname}: both vendors need FX override sliders`);
    assert.equal([...html.matchAll(/data-deposit-override="/g)].length, 6, `${url.pathname}: both vendors need three deposit choices`);
    assert.match(html, /data-pin-baseline/, `${url.pathname}: baseline pin control missing`);
    assert.match(html, /data-pinned-baseline/, `${url.pathname}: pinned baseline comparison slot missing`);
    assert.match(html, /data-cls-guard/, `${url.pathname}: calculator CLS guard missing`);
    assert.match(html, /data-chart-cls-guard/, `${url.pathname}: chart CLS guard missing`);
    assert.equal([...html.matchAll(/data-audit-tooltip="/g)].length, 5, `${url.pathname}: expected five accessible audit-term tooltip instances`);
    assert.equal([...html.matchAll(/role="tooltip"/g)].length, 5, `${url.pathname}: audit tooltip roles missing`);
    assert.match(html, /data-cash-shock-callout/, `${url.pathname}: month-one cash shock callout missing`);
    assert.match(html, /data-outlay-delta/, `${url.pathname}: total-outlay delta summary missing`);
    assert.match(html, /data-stacked-tco-chart/, `${url.pathname}: stacked TCO chart missing`);
    assert(plainText(html).includes('12 months') && plainText(html).includes('24 months'), `${url.pathname}: calculation horizon controls missing`);
    const application = jsonLd(html).find((data) => data['@type'] === 'WebApplication');
    assert(application, `${url.pathname}: audited calculator WebApplication schema missing`);
    assert.equal(application.applicationCategory, 'BusinessApplication', `${url.pathname}: WebApplication category mismatch`);
    assert.equal(application.operatingSystem, 'Web', `${url.pathname}: WebApplication operating system mismatch`);
    assert.equal(String(application.offers?.price), '0', `${url.pathname}: free calculator offer missing`);
    const openGraphImage = meta(html, 'og:image');
    assert(openGraphImage, `${url.pathname}: dynamic OpenGraph image missing`);
    assert(new URL(openGraphImage).pathname.startsWith(`${url.pathname}/opengraph-image`), `${url.pathname}: OpenGraph image is not route-specific`);
    const faq = jsonLd(html).find((data) => data['@type'] === 'FAQPage');
    assert.equal(faq?.mainEntity?.length, 2, `${url.pathname}: FAQPage needs two visible questions`);
    const visibleText = plainText(html);
    for (const item of faq.mainEntity) {
      assert(visibleText.includes(item.name), `${url.pathname}: FAQ question is not visible`);
      assert(visibleText.includes(item.acceptedAnswer.text), `${url.pathname}: FAQ answer is not visible`);
    }
  }
  if (url.pathname.startsWith('/guides/')) checkArticle(html, url.pathname);
  const parameterResponse = await request(`${url.pathname}?utm_source=seo-check`);
  const parameterHtml = await parameterResponse.text();
  assert(parameterHtml.includes(`href="${canonical}"`), `${url.pathname}: query parameters must not change the canonical`);
}

const home = pages.get('/');
const graph = jsonLd(home);
const website = graph.find((data) => data['@type'] === 'WebSite');
const organization = graph.find((data) => data['@type'] === 'Organization');
assert.equal(website?.name, 'StackEvalify');
assert.equal(website?.url, `${canonicalOrigin}/`);
assert.equal(organization?.name, 'StackEvalify');
assert.equal(organization?.logo?.url, `${canonicalOrigin}/logo.png`);
assert.equal(organization?.email, 'contact@stackevalify.com');
assert.equal(organization?.contactPoint?.url, `${canonicalOrigin}/contact`);
assert.equal(website?.publisher?.['@id'], organization?.['@id']);
assert.equal(meta(home, 'author'), 'StackEvalify');
assert.match(home, /href="\/category\/saas"/);
assert([...home.matchAll(/href="(\/[^"#?]+-vs-[^"#?]+)"/g)].length >= 6, 'Homepage must expose software articles');

const directory = pages.get('/category/saas');
checkBreadcrumb(directory, '/category/saas');
const allComparisonPaths = [...new Set(
  [...directory.matchAll(/href="(\/[^"#?]+-vs-[^"#?]+)"/g)].map(([, path]) => path),
)].filter((path) => /^\/[^/]+-vs-[^/]+$/.test(path));
assert.equal(allComparisonPaths.length, 27, 'Directory must retain all 27 comparison routes');
for (const path of allComparisonPaths) assert(directory.includes(`href="${path}"`), `${path}: missing from directory`);
assert.match(directory, /type="search"/);
assert.match(directory, /id="comparison-category"/);
assert(plainText(directory).includes('Showing 27 of 27 comparisons'), 'All comparisons must be present before JavaScript runs');

const llmsCanonicalPaths = [...llms.matchAll(/Canonical URL: https:\/\/stackevalify\.com(\/[^\s]+)/g)].map(([, path]) => path);
assert.deepEqual([...llmsCanonicalPaths].sort(), [...auditedComparisonPaths, auditedToolPath].sort(), '/llms.txt must list exactly the five audited calculator routes');
for (const path of allComparisonPaths.filter((path) => !auditedComparisonPaths.includes(path))) {
  assert(!llms.includes(`${canonicalOrigin}${path}`), `${path}: noindex comparison leaked into /llms.txt`);
}

for (const path of allComparisonPaths) {
  if (!pages.has(path)) {
    const response = await request(path);
    assert.equal(response.status, 200, `${path}: comparison route must remain accessible`);
    pages.set(path, await response.text());
  }
  const html = pages.get(path);
  const robotsMeta = meta(html, 'robots') ?? '';
  if (auditedComparisonPaths.includes(path)) {
    assert(!/noindex/i.test(robotsMeta), `${path}: audited calculator page must be indexable`);
    assert(comparisonPaths.includes(path), `${path}: audited calculator page missing from sitemap`);
  } else {
    assert.match(robotsMeta, /noindex/i, `${path}: unaudited comparison must be noindex`);
    assert.match(robotsMeta, /follow/i, `${path}: unaudited comparison must remain followable`);
    assert(!comparisonPaths.includes(path), `${path}: unaudited comparison leaked into sitemap`);
    assert(!jsonLd(html).some((data) => data['@type'] === 'WebApplication'), `${path}: unaudited comparison must not expose WebApplication schema`);
    assert(!jsonLd(html).some((data) => data['@type'] === 'BreadcrumbList'), `${path}: unaudited comparison must not expose calculator BreadcrumbList schema`);
  }
}

const eorCalculator = pages.get(auditedToolPath);
assert(eorCalculator, 'EOR calculator must be fetched from the sitemap');
checkBreadcrumb(eorCalculator, auditedToolPath);
assert.match(eorCalculator, /data-eor-cost-calculator/, 'EOR calculator hydration marker missing');
assert.match(eorCalculator, /data-comparison-table/, 'EOR calculator comparison table missing');
assert.match(eorCalculator, /data-comparison-root="\/eor-cost-calculator"/, 'EOR calculator analytics root missing');
assert.match(eorCalculator, /data-comparison-analytics="cta,scroll-depth,table-interaction"/, 'EOR calculator analytics marker missing');
assert.equal([...eorCalculator.matchAll(/href="\/go\/(?:deel|remote|oyster)\?source=eor-cost-calculator"/g)].length, 3, 'EOR calculator needs three measured vendor CTAs');
assert.equal([...eorCalculator.matchAll(/rel="sponsored nofollow noopener" data-track="affiliate-cta"/g)].length, 3, 'EOR calculator measured CTA policy mismatch');
assert(plainText(eorCalculator).includes('Copy Slack summary'), 'EOR calculator Slack control missing');
const eorApplication = jsonLd(eorCalculator).find((data) => data['@type'] === 'WebApplication');
assert.equal(eorApplication?.name, 'StackEvalify EOR Cost Calculator', 'EOR calculator WebApplication schema missing');
assert.equal(eorApplication?.dateModified, '2026-11-20', 'EOR calculator schema date mismatch');
assert.equal(eorApplication?.applicationCategory, 'BusinessApplication', 'EOR calculator application category mismatch');
assert.equal(eorApplication?.operatingSystem, 'Web', 'EOR calculator operating system mismatch');
assert.equal(String(eorApplication?.offers?.price), '0', 'EOR calculator free offer missing');
const eorFaq = jsonLd(eorCalculator).find((data) => data['@type'] === 'FAQPage');
assert.equal(eorFaq?.mainEntity?.length, 3, 'EOR calculator FAQPage needs three visible questions');
for (const item of eorFaq.mainEntity) {
  const visibleText = plainText(eorCalculator);
  assert(visibleText.includes(item.name), 'EOR calculator FAQ question is not visible');
  assert(visibleText.includes(item.acceptedAnswer.text), 'EOR calculator FAQ answer is not visible');
}
const eorOpenGraphImage = meta(eorCalculator, 'og:image');
assert(eorOpenGraphImage, 'EOR calculator dynamic OpenGraph image missing');
assert(new URL(eorOpenGraphImage).pathname.startsWith(`${auditedToolPath}/opengraph-image`), 'EOR calculator OpenGraph image is not route-specific');

for (const path of [...auditedComparisonPaths, auditedToolPath]) {
  const imageUrl = new URL(meta(pages.get(path), 'og:image'));
  const imageResponse = await request(`${imageUrl.pathname}${imageUrl.search}`);
  assert.equal(imageResponse.status, 200, `${path}: OpenGraph image must return 200`);
  assert.match(imageResponse.headers.get('content-type') ?? '', /^image\/png/, `${path}: OpenGraph image must be PNG`);
}
for (const comparisonPath of auditedComparisonPaths) {
  assert(eorCalculator.includes(`href="${comparisonPath}"`), `${auditedToolPath}: missing link to ${comparisonPath}`);
  assert(pages.get(comparisonPath)?.includes(`href="${auditedToolPath}"`), `${comparisonPath}: missing backlink to EOR calculator`);
}

const methodology = pages.get('/methodology');
assert(methodology, 'Methodology must remain in the sitemap');
assert(plainText(methodology).includes('How we audit total cost of ownership'), 'TCO audit method missing');
assert(plainText(methodology).includes('Editorial Independence & Affiliate Disclosure'), 'Affiliate independence disclosure missing');
assert(methodology.includes('href="/eor-cost-calculator"'), 'Methodology must link to the EOR calculator');
assert(home.includes('href="/eor-cost-calculator"'), 'Site footer must expose the EOR calculator');

const comparisonClusters = [
  ['/deel-vs-rippling', '/deel-vs-remote', '/rippling-vs-gusto', '/deel-vs-oyster'],
  ['/clickup-vs-notion', '/asana-vs-trello', '/jira-vs-monday', '/linear-vs-jira'],
  ['/hubspot-vs-salesforce', '/pipedrive-vs-hubspot', '/zendesk-vs-freshdesk', '/hubspot-vs-zoho-crm'],
  ['/mailchimp-vs-activecampaign', '/mailchimp-vs-convertkit', '/activecampaign-vs-convertkit'],
  ['/airtable-vs-notion', '/notion-vs-coda'],
];
for (const cluster of comparisonClusters) {
  for (const source of cluster) {
    const related = pages.get(source)?.match(/<section aria-labelledby="related-comparisons"[^>]*>([\s\S]*?)<\/section>/)?.[1] ?? '';
    for (const target of cluster) {
      if (target !== source) assert(related.includes(`href="${target}"`), `${source}: missing reciprocal cluster link to ${target}`);
    }
  }
}

const reciprocalLinkPairs = [
  ['/deel-vs-remote', '/deel-vs-rippling'],
  ['/intercom-vs-zendesk', '/zendesk-vs-freshdesk'],
  ['/notion-vs-coda', '/clickup-vs-notion'],
  ['/notion-vs-coda', '/asana-vs-trello'],
];
for (const [left, right] of reciprocalLinkPairs) {
  const leftRelated = pages.get(left)?.match(/<section aria-labelledby="related-comparisons"[^>]*>([\s\S]*?)<\/section>/)?.[1] ?? '';
  const rightRelated = pages.get(right)?.match(/<section aria-labelledby="related-comparisons"[^>]*>([\s\S]*?)<\/section>/)?.[1] ?? '';
  assert(leftRelated.includes(`href="${right}"`), `${left}: missing reciprocal bridge to ${right}`);
  assert(rightRelated.includes(`href="${left}"`), `${right}: missing reciprocal bridge to ${left}`);
}

for (const path of ['/guides', '/guides/choose-b2b-software', '/guides/saas-total-cost', '/privacy', '/terms']) {
  assert(pages.has(path), `${path}: new guide or trust page missing from sitemap`);
}
assert.match(home, /alt="StackEvalify logo"/, 'Header must visibly use the original logo');

for (const path of ['/category/hardware', '/author/thieu-nguyen', '/reviews/acer-nitro-5-web-dev', '/reviews/iphone-18-pro-max']) {
  assert(!urls.some((url) => url.pathname === path), `${path}: held content must stay out of sitemap`);
  const response = await request(path);
  assert.equal(response.status, 200);
  assert.match(meta(await response.text(), 'robots') ?? '', /noindex/i, `${path}: retain editorial noindex`);
}

for (const [path, target] of [
  ['/salesforce-vs-hubspot', '/hubspot-vs-salesforce'],
  ['/zapier-vs-make/webflow-vs-framer', '/webflow-vs-framer'],
]) {
  const response = await request(path, { redirect: 'manual' });
  assert.equal(response.status, 308, `${path}: must redirect permanently`);
  assert.equal(new URL(response.headers.get('location'), preview).pathname, target);
}

const securityResponse = await request('/');
assert.equal(securityResponse.headers.get('x-content-type-options'), 'nosniff', 'Global nosniff header missing');
assert.equal(securityResponse.headers.get('x-frame-options'), 'DENY', 'Global frame denial header missing');
assert.equal(securityResponse.headers.get('referrer-policy'), 'strict-origin-when-cross-origin', 'Global referrer policy mismatch');
assert.equal(securityResponse.headers.get('permissions-policy'), 'camera=(), microphone=(), geolocation=()', 'Global permissions policy mismatch');

const measuredRedirect = await request('/go/deel?source=deel-vs-rippling', { redirect: 'manual' });
assert.equal(measuredRedirect.status, 307, 'Measured affiliate redirect must remain temporary');
assert.equal(measuredRedirect.headers.get('x-robots-tag'), 'noindex, nofollow', 'Measured redirect robots header missing');
const measuredLocation = new URL(measuredRedirect.headers.get('location'));
assert.equal(measuredLocation.hostname, 'www.deel.com', 'Measured redirect destination must come from the vendor registry');
assert.equal(measuredLocation.searchParams.get('ref'), 'stackevalify');
assert.equal(measuredLocation.searchParams.get('source'), 'deel-vs-rippling');
assert.equal(measuredLocation.searchParams.get('utm_source'), 'stackevalify');
assert.equal(measuredLocation.searchParams.get('utm_medium'), 'referral');
assert.equal(measuredLocation.searchParams.get('utm_campaign'), 'audited-tco');
assert.equal(measuredLocation.searchParams.get('utm_content'), 'deel-vs-rippling');
const unknownMeasuredRedirect = await request('/go/not-a-vendor', { redirect: 'manual' });
assert.equal(unknownMeasuredRedirect.status, 302, 'Unknown measured vendor must use a temporary safe fallback');
assert.equal(unknownMeasuredRedirect.headers.get('x-robots-tag'), 'noindex, nofollow', 'Unknown measured vendor robots header missing');
assert.equal(new URL(unknownMeasuredRedirect.headers.get('location'), preview).pathname, auditedToolPath, 'Unknown measured vendor fallback mismatch');
const malformedMeasuredRedirect = await request('/go/%3Cinvalid%3E', { redirect: 'manual' });
assert.equal(malformedMeasuredRedirect.status, 302, 'Malformed measured vendor must use a temporary safe fallback');
assert.equal(malformedMeasuredRedirect.headers.get('x-robots-tag'), 'noindex, nofollow', 'Malformed measured vendor robots header missing');
assert.equal(new URL(malformedMeasuredRedirect.headers.get('location'), preview).pathname, auditedToolPath, 'Malformed measured vendor fallback mismatch');
const emptyMeasuredRedirect = await request('/go', { redirect: 'manual' });
assert.equal(emptyMeasuredRedirect.status, 302, 'Empty measured vendor route must use a temporary safe fallback');
assert.equal(emptyMeasuredRedirect.headers.get('x-robots-tag'), 'noindex, nofollow', 'Empty measured vendor route robots header missing');
assert.equal(new URL(emptyMeasuredRedirect.headers.get('location'), preview).pathname, auditedToolPath, 'Empty measured vendor fallback mismatch');

const missingResponse = await request('/missing-seo-check-page');
assert.equal(missingResponse.status, 404, 'Missing pages must return HTTP 404');
const missingHtml = await missingResponse.text();
assert.match(meta(missingHtml, 'robots') ?? '', /noindex/i, '404 page must remain noindex');
assert.equal([...missingHtml.matchAll(/<h1\b/g)].length, 1, '404 page needs one main heading');
for (const path of [auditedToolPath, ...auditedComparisonPaths]) {
  assert(missingHtml.includes(`href="${path}"`), `404 recovery navigation missing ${path}`);
}
const errorSource = await readFile(new URL('../app/error.tsx', import.meta.url), 'utf8');
assert.match(errorSource, /^'use client';/, 'Root error boundary must remain a Client Component');
assert.match(errorSource, /retry\(\)/, 'Root error boundary recovery action missing');
assert.match(errorSource, /<RecoveryNavigation \/>/, 'Root error boundary audited navigation missing');
const logoResponse = await request('/logo.png');
assert.equal(logoResponse.status, 200);
assert.deepEqual(Buffer.from(await logoResponse.arrayBuffer()), await readFile(new URL('../public/logo.png', import.meta.url)), 'Preview must serve the original logo bytes');
console.log(`SEO checks passed: ${urls.length} indexable pages, ${comparisonPaths.length} audited calculator comparisons, 1 audited EOR calculator, ${allComparisonPaths.length - comparisonPaths.length} comparison drafts noindex, /llms.txt, branded 404 and error recovery, safe measured vendor fallbacks, dynamic OpenGraph images, security headers, FAQ schema, tracked interactions, standardized outbound links, reciprocal HR links, query canonicals, 4 held pages, 2 permanent redirects, visible original logo.`);
