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

const sitemapResponse = await request('/sitemap.xml');
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, value]) => new URL(value));
assert.equal(urls.length, new Set(urls.map(String)).size, 'Sitemap contains duplicate URLs');
assert(urls.some((url) => url.pathname === '/category/saas'), 'SaaS directory missing from sitemap');
const comparisonPaths = urls.map((url) => url.pathname).filter((path) => /^\/[^/]+-vs-[^/]+$/.test(path));
assert.equal(comparisonPaths.length, 17, 'Preserve all 17 published comparisons');

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
  if (comparisonPaths.includes(url.pathname)) {
    checkBreadcrumb(html, url.pathname);
    assert.equal(meta(html, 'og:site_name'), 'StackEvalify');
    assert(meta(html, 'twitter:title')?.startsWith(title.split(' | ')[0]), `${url.pathname}: inherited homepage social title`);
  }
}

const home = pages.get('/');
const graph = jsonLd(home);
const website = graph.find((data) => data['@type'] === 'WebSite');
const organization = graph.find((data) => data['@type'] === 'Organization');
assert.equal(website?.name, 'StackEvalify');
assert.equal(website?.url, `${canonicalOrigin}/`);
assert.equal(organization?.name, 'StackEvalify');
assert.equal(organization?.logo?.url, `${canonicalOrigin}/logo.png`);
assert.equal(website?.publisher?.['@id'], organization?.['@id']);
assert.match(home, /href="\/category\/saas"/);
assert(comparisonPaths.filter((path) => home.includes(`href="${path}"`)).length >= 6, 'Homepage must expose software articles');

const directory = pages.get('/category/saas');
checkBreadcrumb(directory, '/category/saas');
for (const path of comparisonPaths) assert(directory.includes(`href="${path}"`), `${path}: missing from directory`);

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
assert.equal((await request('/missing-seo-check-page')).status, 404, 'Missing pages must return HTTP 404');
const logoResponse = await request('/logo.png');
assert.equal(logoResponse.status, 200);
assert.deepEqual(Buffer.from(await logoResponse.arrayBuffer()), await readFile(new URL('../public/logo.png', import.meta.url)), 'Preview must serve the original logo bytes');
console.log(`SEO checks passed: ${urls.length} indexable pages, ${comparisonPaths.length} comparisons, 4 held pages, 2 permanent redirects, brand schema and original logo.`);
