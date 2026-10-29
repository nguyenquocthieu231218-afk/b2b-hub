import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'About StackEvalify',
  description: 'Learn what StackEvalify covers and how to interpret its technical product evaluations.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">About StackEvalify</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">Technical evaluations for engineering decisions</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            StackEvalify covers B2B software and developer hardware for engineers,
            technical leads, and teams comparing tools for practical workflows.
          </p>
        </header>
        <section aria-labelledby="our-approach" className="mt-12">
          <h2 id="our-approach" className="text-2xl font-bold text-white">How to read our evaluations</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
            <p>
              Each evaluation should identify whether its evidence comes from hands-on use,
              performance testing, or desk research. Findings should include the relevant
              setup and limitations so readers can judge how well conclusions fit their needs.
            </p>
            <p>
              We aim to explain product trade-offs and to distinguish measured observations
              from interpretation. Read our <Link href="/methodology" className="font-medium text-blue-300 hover:text-blue-200">testing methodology</Link> for the evidence standards used on this site.
            </p>
          </div>
        </section>
        <section aria-labelledby="commercial-transparency" className="mt-12 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 id="commercial-transparency" className="text-xl font-bold text-white">Commercial transparency</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            Product links currently point to official product websites. If the site later uses affiliate links, each commercial relationship will be disclosed beside the relevant recommendation.
          </p>
        </section>
        <section aria-labelledby="contact" className="mt-12 border-t border-slate-800 pt-8">
          <h2 id="contact" className="text-2xl font-bold text-white">Corrections and questions</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            For corrections, questions about a review, or editorial inquiries, email{' '}
            <a href="mailto:contact@stackevalify.com" className="font-medium text-blue-300 hover:text-blue-200">contact@stackevalify.com</a>.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
