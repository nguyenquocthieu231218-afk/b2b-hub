'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { getSearchSuggestions, searchComparisons, type SearchableComparison } from '@/lib/search';

type ComparisonDirectoryItem = SearchableComparison & {
  href: `/${string}`;
  status: string;
};

export default function ComparisonDirectory({ comparisons }: {
  comparisons: readonly ComparisonDirectoryItem[];
}) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const searchInput = useRef<HTMLInputElement>(null);
  const categories = [...new Set(comparisons.map((comparison) => comparison.category))].sort();
  const results = searchComparisons(comparisons, query, category);
  const scopedComparisons = category
    ? comparisons.filter((comparison) => comparison.category === category)
    : comparisons;
  const suggestions = getSearchSuggestions(scopedComparisons, query);
  const hasFilters = query.length > 0 || category.length > 0;

  function resetFilters() {
    setQuery('');
    setCategory('');
    searchInput.current?.focus();
  }

  return (
    <div className="mt-6">
      <div role="search" aria-label="Find a software comparison" className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_15rem_auto] sm:items-end">
          <div>
            <label htmlFor="comparison-search" className="block text-sm font-semibold text-white">Search comparisons</label>
            <input
              ref={searchInput}
              id="comparison-search"
              type="search"
              maxLength={180}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-describedby="comparison-search-hint"
              aria-controls="comparison-results"
              placeholder="Try ClickUp, Salesforce, or CRM"
              className="mt-2 min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="comparison-category" className="block text-sm font-semibold text-white">Category</label>
            <select
              id="comparison-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              aria-controls="comparison-results"
              className="mt-2 min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">All categories</option>
              {categories.map((name) => <option key={name} value={name}>{name}</option>)}
            </select>
          </div>
          <button
            type="button"
            onClick={resetFilters}
            disabled={!hasFilters}
            className="min-h-11 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Reset
          </button>
        </div>
        <p id="comparison-search-hint" className="mt-3 text-sm text-slate-400">Search by product name or topic, then narrow the list by category.</p>
        <noscript><p className="mt-3 text-sm text-slate-300">Search and filters need JavaScript. All comparisons are listed below.</p></noscript>
      </div>

      {suggestions.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-300">
          <span>Did you mean</span>
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              aria-label={`Search for ${suggestion}`}
              onClick={() => { setQuery(suggestion); searchInput.current?.focus(); }}
              className="min-h-11 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-2 font-semibold text-blue-200 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {suggestion}
            </button>
          ))}
          <span>?</span>
        </div>
      )}

      <p role="status" aria-live="polite" aria-atomic="true" className="mt-5 text-sm text-slate-400">
        Showing {results.length} of {comparisons.length} comparisons{category ? ` in ${category}` : ''}.
      </p>
      <div id="comparison-results">
        {results.length > 0 ? (
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((comparison) => (
              <li key={comparison.href}>
                <Link
                  href={comparison.href}
                  className="group block h-full rounded-xl border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2"><p className="text-xs font-bold uppercase tracking-wider text-blue-300">{comparison.category}</p><span className={comparison.status.startsWith('Source checked') ? 'rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-200' : 'rounded-full bg-slate-800 px-2.5 py-1 text-[11px] font-semibold text-slate-300'}>{comparison.status}</span></div>
                  <h3 className="mt-3 text-lg font-bold text-white group-hover:text-blue-200">{comparison.title}</h3>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-300">
                    {comparison.status.startsWith('Source checked') ? 'Read source-checked comparison' : 'Read draft'} <span aria-hidden="true" className="ml-2">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-bold text-white">No comparisons found</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">Try a shorter product name or choose a different category.</p>
            <button type="button" onClick={resetFilters} className="mt-4 min-h-11 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-blue-200 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400">Show all comparisons</button>
          </div>
        )}
      </div>
    </div>
  );
}
