import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { guides } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'B2B Software Buying Guides',
  description: 'Practical guides for shortlisting B2B software, running a focused pilot, and comparing total SaaS ownership costs before purchase.',
  alternates: { canonical: '/guides' },
  robots: { index: true, follow: true },
};

export default function GuidesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Buying guides' }]} />
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Before you buy</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">B2B software buying guides</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">Turn a list of possible tools into a documented decision. Start with your team’s workflow, compare the same requirements, and understand the full cost before committing.</p>
        </header>
        <section aria-labelledby="guide-list" className="mt-12">
          <h2 id="guide-list" className="text-2xl font-bold text-white">Build a shortlist, then check the budget</h2>
          <ul className="mt-5 grid gap-5 md:grid-cols-2">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href} className="block h-full rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-300">{guide.stage}</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{guide.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">{guide.description}</p>
                  <span className="mt-5 inline-flex font-semibold text-blue-300">Read the guide →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="use-framework" className="mt-12 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 id="use-framework" className="text-2xl font-bold text-white">Apply the framework to a real comparison</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">Our comparisons identify published plan limits and their evidence dates. Use them to prepare a shortlist; validate the exact edition and workflow in your own pilot.</p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3 font-semibold text-blue-300">
            <li><Link href="/clickup-vs-monday" className="rounded hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">ClickUp vs monday.com →</Link></li>
            <li><Link href="/hubspot-vs-salesforce" className="rounded hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">HubSpot vs Salesforce →</Link></li>
            <li><Link href="/linear-vs-jira" className="rounded hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">Linear vs Jira →</Link></li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
