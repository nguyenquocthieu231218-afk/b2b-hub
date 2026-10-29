import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '../../../components/SiteFooter';
import SiteHeader from '../../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'StackEvalify Contributor',
  description: 'Contributor profile and associated StackEvalify evaluations.',
  alternates: { canonical: '/author/thieu-nguyen' },
  robots: { index: false, follow: true },
};

export default function AuthorProfile() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-[65vh] bg-slate-950 pb-20 text-slate-100">
        <section aria-labelledby="author-name" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-col items-start gap-8 sm:flex-row">
            <div aria-hidden="true" className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-2xl font-bold text-blue-300">
              TN
            </div>
            <div className="space-y-4">
              <p className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-300">
                StackEvalify contributor
              </p>
              <h1 id="author-name" className="text-4xl font-black tracking-tight text-white sm:text-5xl">Thieu Nguyen</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                StackEvalify evaluations focus on practical engineering workflows and identify whether their evidence comes from direct use, measured testing, or desk research.
              </p>
              <p className="max-w-2xl leading-relaxed text-slate-400">
                Product-specific claims belong with each evaluation’s test setup, sources, and stated limitations. This profile does not make independent credential or expertise claims.
              </p>
              <a href="mailto:contact@stackevalify.com" className="inline-flex rounded-lg bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-950">
                Contact StackEvalify
              </a>
            </div>
          </div>
          <section aria-labelledby="latest-review" className="mt-14 border-t border-slate-800 pt-8">
            <h2 id="latest-review" className="text-2xl font-bold text-white">Current field note</h2>
            <Link href="/reviews/acer-nitro-5-web-dev" className="mt-5 block rounded-xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-300">Developer hardware · preliminary</p>
              <h3 className="mt-3 text-xl font-bold text-white">Acer Nitro 5 for web development</h3>
              <p className="mt-3 leading-relaxed text-slate-300">A single-configuration field note that states the supplied observations and the missing details needed for a reproducible benchmark.</p>
              <span className="mt-5 inline-flex font-semibold text-blue-300">Read the field note <span aria-hidden="true" className="ml-2">→</span></span>
            </Link>
          </section>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
