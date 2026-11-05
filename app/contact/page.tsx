import type { Metadata } from 'next';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Contact StackEvalify',
  description: 'Contact StackEvalify about review corrections, editorial questions, and product evaluations.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto min-h-[65vh] max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Get in touch</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">Contact StackEvalify</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Send corrections, questions about an evaluation, or editorial inquiries. Include the page URL and relevant source material when reporting a factual issue.
          </p>
        </header>
        <section aria-labelledby="email-contact" className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 id="email-contact" className="text-xl font-bold text-white">Email</h2>
          <a href="mailto:contact@stackevalify.com" className="mt-3 inline-flex rounded font-medium text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
            contact@stackevalify.com
          </a>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">This opens your email application. For a correction, include the article URL, the statement to check, and a supporting source. For an evaluation question, include your team size and the workflow you need; do not send credentials or customer data.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
