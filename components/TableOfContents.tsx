import type { ArticleHeading } from '@/lib/article-content';

export default function TableOfContents({ headings }: { headings: ArticleHeading[] }) {
  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page" className="mb-6 rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
      <p className="text-sm font-semibold text-white">On this page</p>
      <ol className="mt-3 grid gap-x-6 gap-y-1 sm:grid-cols-2">
        {headings.map((heading, index) => (
          <li key={heading.id}>
            <a href={`#${encodeURIComponent(heading.id)}`} className="flex min-h-10 items-center gap-3 rounded px-1 py-2 text-sm text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <span aria-hidden="true" className="text-xs tabular-nums text-slate-500">{String(index + 1).padStart(2, '0')}</span>
              <span>{heading.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
