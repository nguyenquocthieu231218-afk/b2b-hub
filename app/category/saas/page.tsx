import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { comparisons } from '@/lib/comparisons';
import Breadcrumbs from '../../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'B2B SaaS Comparisons and Research',
  description: 'A directory of StackEvalify software comparisons, including desk research with dated primary-source checks.',
  alternates: { canonical: '/category/saas' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'B2B SaaS Comparisons and Research',
    description: 'A directory of StackEvalify software comparisons, including desk research with dated primary-source checks.',
    url: '/category/saas',
    siteName: 'StackEvalify',
    type: 'website',
    images: [{ url: '/logo.png', width: 2000, height: 2000, alt: 'StackEvalify logo' }],
  },
};

export default function SaasCategoryPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={[
          { name: 'Home', href: '/' },
          { name: 'B2B SaaS & DevOps' },
        ]} />
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Category</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">B2B SaaS comparisons</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Browse software comparisons across engineering, collaboration, marketing, and operations. All {comparisons.length} comparisons have dated source checks. These pages are vendor-source desk research, not hands-on product tests.
          </p>
        </header>
        <section aria-labelledby="comparison-list" className="mt-12">
          <h2 id="comparison-list" className="text-2xl font-bold text-white">Comparisons and research status</h2>
          <p className="mt-3 max-w-3xl rounded-lg border border-blue-500/30 bg-blue-500/5 p-4 text-sm leading-relaxed text-blue-100">
            A source-check date records when vendor documentation was reviewed. It does not indicate hands-on testing; check the linked vendors for current prices and terms.
          </p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comparisons.map((comparison) => (
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
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
