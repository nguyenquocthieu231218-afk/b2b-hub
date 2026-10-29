import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Developer Hardware Evaluations',
  description: 'Preliminary hardware field notes for software development and QA, with evidence limitations stated.',
  alternates: { canonical: '/category/hardware' },
  robots: { index: false, follow: true },
};

export default function HardwareCategoryPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link><span aria-hidden="true" className="mx-2">/</span>
          <span className="text-slate-300">Developer hardware</span>
        </nav>
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Category</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">Developer hardware evaluations</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Browse hardware field notes and evaluations for software development and QA. Each page identifies its configuration and separates observations from measured benchmarks.
          </p>
        </header>
        <section aria-labelledby="hardware-review-list" className="mt-12">
          <h2 id="hardware-review-list" className="text-2xl font-bold text-white">Evaluation in progress</h2>
          <p className="mt-3 max-w-3xl rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-sm leading-relaxed text-amber-100">
            The available Acer Nitro 5 notes are not yet a reproducible benchmark. The exact laptop model, test conditions, measurement method, and repeat count still need confirmation.
          </p>
          <article className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-300">Hands-on · October 2026</p>
            <h3 className="mt-3 text-xl font-bold text-white">Acer Nitro 5 for web development</h3>
            <p className="mt-3 leading-relaxed text-slate-300">
              A single-configuration evaluation covering local Next.js and Node.js
              development, with reported Fast Refresh and sustained-compilation
              temperature observations.
            </p>
            <Link href="/reviews/acer-nitro-5-web-dev" className="mt-5 inline-flex font-semibold text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">Read the evaluation →</Link>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
