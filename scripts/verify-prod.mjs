import assert from 'node:assert/strict';

const urlArgument = process.argv.find((argument) => argument.startsWith('--url='));
const baseUrl = new URL(urlArgument?.slice('--url='.length) || 'https://stackevalify.com');
assert(['http:', 'https:'].includes(baseUrl.protocol), '--url must use http or https');
baseUrl.pathname = '/';
baseUrl.search = '';
baseUrl.hash = '';
const canonicalOrigin = ['localhost', '127.0.0.1', '[::1]'].includes(baseUrl.hostname)
  ? 'https://stackevalify.com'
  : baseUrl.origin;

const expectedIndexablePages = 15;
const expectedNoindexComparisons = 23;
const auditedPaths = new Set([
  '/deel-vs-rippling',
  '/deel-vs-remote',
  '/rippling-vs-gusto',
  '/deel-vs-oyster',
  '/eor-cost-calculator',
]);

async function request(path, options = {}) {
  let response;
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const fetched = await fetch(new URL(path, baseUrl), {
        signal: AbortSignal.timeout(15_000),
        ...options,
      });
      const body = await fetched.arrayBuffer();
      response = {
        status: fetched.status,
        headers: fetched.headers,
        text: async () => new TextDecoder().decode(body),
      };
      if (response.status !== 429 && response.status < 500) return response;
    } catch (error) {
      lastError = error;
    }
    if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 250));
  }
  if (!response) throw new Error(`${path}: request failed after three attempts`, { cause: lastError });
  return response;
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]));
}

function meta(html, key) {
  return [...html.matchAll(/<meta\b[^>]*>/g)]
    .map(([tag]) => attributes(tag))
    .find((tag) => tag.name === key || tag.property === key)?.content ?? '';
}

function canonical(html) {
  return [...html.matchAll(/<link\b[^>]*>/g)]
    .map(([tag]) => attributes(tag))
    .find((tag) => tag.rel === 'canonical')?.href;
}

async function mapWithConcurrency(items, limit, task) {
  const results = new Array(items.length);
  let nextIndex = 0;
  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await task(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

async function checkPage(path, shouldIndex) {
  const response = await request(path);
  assert.equal(response.status, 200, `${path}: expected HTTP 200, got ${response.status}`);
  const html = await response.text();
  const robots = `${meta(html, 'robots')} ${response.headers.get('x-robots-tag') ?? ''}`.trim();
  if (shouldIndex) {
    assert(!/noindex/i.test(robots), `${path}: indexable page unexpectedly contains noindex`);
  } else {
    assert.match(robots, /noindex/i, `${path}: draft comparison must contain noindex`);
    assert.match(robots, /follow/i, `${path}: draft comparison must remain followable`);
  }
  const canonicalUrl = canonical(html);
  assert(canonicalUrl, `${path}: canonical link missing`);
  assert.equal(new URL(canonicalUrl).href, new URL(path, canonicalOrigin).href, `${path}: canonical mismatch`);
  return html;
}

const sitemapResponse = await request('/sitemap.xml');
assert.equal(sitemapResponse.status, 200, `/sitemap.xml: expected HTTP 200, got ${sitemapResponse.status}`);
assert.match(sitemapResponse.headers.get('content-type') ?? '', /(?:application|text)\/xml/i, '/sitemap.xml: XML content type missing');
const sitemap = await sitemapResponse.text();
const indexableUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, value]) => new URL(value));
assert.equal(indexableUrls.length, expectedIndexablePages, `Expected ${expectedIndexablePages} indexable sitemap URLs, found ${indexableUrls.length}`);
assert.equal(new Set(indexableUrls.map(String)).size, indexableUrls.length, 'Sitemap contains duplicate URLs');
assert(!indexableUrls.some((url) => url.pathname.startsWith('/go/')), '/go/* must stay out of the sitemap');

const sitemapPaths = new Set(indexableUrls.map((url) => url.pathname));
for (const path of auditedPaths) assert(sitemapPaths.has(path), `${path}: audited route missing from sitemap`);
await mapWithConcurrency([...sitemapPaths], 4, (path) => checkPage(path, true));

const directoryResponse = await request('/category/saas');
assert.equal(directoryResponse.status, 200, '/category/saas: expected HTTP 200');
const directory = await directoryResponse.text();
const comparisonPaths = [...new Set(
  [...directory.matchAll(/href="(\/[^"#?]+-vs-[^"#?]+)"/g)].map(([, path]) => path),
)].filter((path) => /^\/[^/]+-vs-[^/]+$/.test(path));
const noindexPaths = comparisonPaths.filter((path) => !sitemapPaths.has(path));
assert.equal(noindexPaths.length, expectedNoindexComparisons, `Expected ${expectedNoindexComparisons} noindex comparisons, found ${noindexPaths.length}`);
await mapWithConcurrency(noindexPaths, 4, (path) => checkPage(path, false));

const measuredRedirect = await request('/go/deel?source=verify-prod', { redirect: 'manual' });
assert.equal(measuredRedirect.status, 307, `/go/deel: expected HTTP 307, got ${measuredRedirect.status}`);
assert.equal(measuredRedirect.headers.get('x-robots-tag'), 'noindex, nofollow', '/go/deel: X-Robots-Tag mismatch');
const measuredDestination = new URL(measuredRedirect.headers.get('location'));
assert.equal(measuredDestination.hostname, 'www.deel.com', '/go/deel: unexpected destination host');
assert.equal(measuredDestination.searchParams.get('ref'), 'stackevalify', '/go/deel: ref sub-id missing');
assert.equal(measuredDestination.searchParams.get('source'), 'verify-prod', '/go/deel: source sub-id missing');

const llmsResponse = await request('/llms.txt');
assert.equal(llmsResponse.status, 200, `/llms.txt: expected HTTP 200, got ${llmsResponse.status}`);
assert.match(llmsResponse.headers.get('content-type') ?? '', /^text\/plain;\s*charset=utf-8/i, '/llms.txt: expected UTF-8 text/plain');
const llms = await llmsResponse.text();
const llmsPaths = [...llms.matchAll(/Canonical URL: https:\/\/stackevalify\.com(\/[^\s]+)/g)].map(([, path]) => path);
assert.deepEqual([...llmsPaths].sort(), [...auditedPaths].sort(), '/llms.txt: canonical URL set must equal the five audited routes');
assert(!llms.includes('/go/'), '/llms.txt: measured redirect routes must not be listed');

console.log([
  'Production verification passed.',
  `${indexableUrls.length} indexable pages returned 200 with canonical and indexable robots directives.`,
  `${noindexPaths.length} comparison drafts returned 200 with noindex,follow and canonical links.`,
  '/go/deel returned 307 with X-Robots-Tag: noindex, nofollow.',
  '/llms.txt returned UTF-8 text/plain and lists exactly the audited surface.',
].join('\n'));
