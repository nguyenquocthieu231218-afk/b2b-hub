import type { ReactNode } from 'react';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import type { BuyingGuide } from '@/lib/guides';
import Breadcrumbs from './Breadcrumbs';
import JsonLd from './JsonLd';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

type GuideLayoutProps = {
  guide: BuyingGuide;
  contents: { id: string; title: string }[];
  children: ReactNode;
};

export default function GuideLayout({ guide, contents, children }: GuideLayoutProps) {
  const url = new URL(guide.href, SITE_URL).href;
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Buying guides', href: '/guides' }, { name: guide.title }]} />
        <JsonLd data={{
          '@context': 'https://schema.org', '@type': 'Article',
          headline: guide.title, description: guide.description, url,
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          inLanguage: 'en', publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME, url: `${SITE_URL}/` },
        }} />
        <article>
          <header className="border-b border-slate-800 pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Buying guide · {guide.stage}</p>
            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">{guide.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">{guide.description}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">A practical decision framework from StackEvalify. This guide is not a hands-on product test or a vendor price quote.</p>
          </header>
          <nav aria-label="On this page" className="my-8 rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="font-bold text-white">On this page</p>
            <ol className="mt-3 grid list-decimal gap-x-8 gap-y-2 pl-5 text-sm text-blue-300 sm:grid-cols-2">
              {contents.map((item) => <li key={item.id}><a href={`#${item.id}`} className="rounded underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400">{item.title}</a></li>)}
            </ol>
          </nav>
          <div className="prose max-w-none [&_section]:scroll-mt-32 [&_section]:border-b [&_section]:border-slate-800 [&_section]:pb-8 [&_section]:pt-2">{children}</div>
        </article>
        <nav aria-label="Continue your research" className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link href="/category/saas" className="rounded-xl border border-slate-800 bg-slate-900 p-5 font-semibold text-blue-300 hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Compare software plans and limits →</Link>
          <Link href="/guides" className="rounded-xl border border-slate-800 bg-slate-900 p-5 font-semibold text-blue-300 hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Browse all buying guides →</Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
