import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

async function importTypeScript(path) {
  const source = await readFile(new URL(path, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}

const { comparisons } = await importTypeScript('../lib/comparisons.ts');
const { affiliateLinks } = await importTypeScript('../lib/affiliate-links.ts');
const { normalizeSearch, searchComparisons, getSearchSuggestions } = await importTypeScript('../lib/search.ts');
for (const comparison of comparisons) {
  for (const product of comparison.href.slice(1).split('-vs-')) {
    assert(affiliateLinks[product]?.href, `${comparison.href}: missing centralized affiliate destination for ${product}`);
  }
}
assert.equal(searchComparisons(comparisons, '').length, 24);
assert.equal(searchComparisons(comparisons, 'ClickUp').length, 2);
assert.equal(searchComparisons(comparisons, 'crm').length, 3);
assert.equal(searchComparisons(comparisons, 'monday.com').length, 2);
assert.equal(searchComparisons(comparisons, 'mailchimp').length, 3);
assert.equal(searchComparisons(comparisons, '', 'CRM').length, 3);
assert.equal(searchComparisons(comparisons, 'zoho').length, 1);
assert.equal(searchComparisons(comparisons, 'activecampaign').length, 2);
assert.equal(searchComparisons(comparisons, 'intercom').length, 1);
assert.equal(searchComparisons(comparisons, 'rippling').length, 1);
assert.equal(searchComparisons(comparisons, '', 'Customer support').length, 2);
assert.equal(searchComparisons(comparisons, '', 'HR & payroll').length, 1);
assert.equal(searchComparisons(comparisons, 'clickup', 'CRM').length, 0);
assert.equal(searchComparisons(comparisons, 'missing product').length, 0);
assert.deepEqual(getSearchSuggestions(comparisons, 'clikup'), ['ClickUp']);
assert.deepEqual(getSearchSuggestions(comparisons, 'salesforc'), ['Salesforce']);
assert.deepEqual(getSearchSuggestions(comparisons, 'clikup notion'), ['ClickUp notion']);
assert.deepEqual(getSearchSuggestions(comparisons, 'ClickUp'), []);
assert.equal(normalizeSearch('  MÓNDay.COM  '), 'monday com');
console.log('Search checks passed: complete directory, centralized affiliate destinations, text/category matching, typos, multiword suggestions and empty states.');
