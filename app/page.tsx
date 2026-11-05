import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import JsonLd from '../components/JsonLd';
import { comparisons } from '@/lib/comparisons';
import { SITE_DESCRIPTION, SITE_EMAIL, SITE_LOGO, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {

  title: { absolute: 'StackEvalify | Technical Evaluations for Engineering Teams' },
  description:
    'Source-checked B2B software comparisons that spell out plan limits, seat math, automation caps, and evidence gaps for engineering teams.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'StackEvalify | Technical Evaluations for Engineering Teams',
    description:
      'Source-checked B2B software comparisons that spell out the limits product demos tend to skip.',
    url: '/',
    siteName: 'StackEvalify',
    type: 'website',
    images: [{ url: '/logo.png', width: 2000, height: 2000, alt: 'StackEvalify logo' }],
  },
};

const focusAreas = [
  {
    eyebrow: 'SOFTWARE',
    title: 'B2B SaaS & DevOps',
    description:
      'Compare seat math, plan limits, automation caps, and the workflow constraints that can change a software shortlist.',
    href: '/category/saas',
    linkLabel: 'Explore SaaS evaluations',
  },
  {
    eyebrow: 'HARDWARE',
    title: 'Developer hardware field notes',
    description:
      'Read preliminary field notes with the configuration, test gaps, and evidence limits kept in view.',
    href: '/category/hardware',
    linkLabel: 'Read hardware field notes',
  },
];

const featuredComparison = comparisons.find(({ href }) => href === '/clickup-vs-monday')!;
const homepageComparisons = comparisons
  .filter(({ href }) => href !== featuredComparison.href)
  .slice(0, 5);

export default function Home() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: SITE_NAME,
            inLanguage: 'en',
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
          {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: `${SITE_URL}/`,
            description: SITE_DESCRIPTION,
            email: SITE_EMAIL,
            contactPoint: {
              '@type': 'ContactPoint',
              email: SITE_EMAIL,
              contactType: 'editorial inquiries',
              url: `${SITE_URL}/contact`,
            },
            logo: {
              '@type': 'ImageObject',
              url: SITE_LOGO,
              contentUrl: SITE_LOGO,
              width: 2000,
              height: 2000,
            },
          },
        ],
      }} />

      <main id="main-content">
        <section className="relative overflow-hidden border-b border-slate-800">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.14),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
                Evidence before verdicts
              </p>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                We check the limits product demos tend to skip.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
                Seat math, plan limits, automation caps, and the admin constraints
                that shape a real shortlist. When the work is desk research, we
                label it. When the evidence stops, the conclusion stops.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/category/saas"
                  className="group inline-flex min-h-12 items-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-950/30 transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-950/50 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950 motion-reduce:transform-none"
                >
                  Browse source-checked comparisons
                  <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                </Link>
                <Link
                  href="/methodology"
                  className="inline-flex min-h-12 items-center rounded-lg border border-slate-700 bg-slate-900/80 px-5 py-3 font-semibold text-white transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-950 motion-reduce:transform-none"
                >
                  See how evidence is labelled
                </Link>
              </div>
            </div>

            <aside aria-label="StackEvalify evidence standard" className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">The evidence rule</p>
              <ol className="mt-5 space-y-5">
                <li className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-sm font-bold text-blue-200">1</span>
                  <div><p className="font-semibold text-white">Name the evidence</p><p className="mt-1 text-sm leading-relaxed text-slate-400">Hands-on, measured test, or dated desk research.</p></div>
                </li>
                <li className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-sm font-bold text-blue-200">2</span>
                  <div><p className="font-semibold text-white">Show the conditions</p><p className="mt-1 text-sm leading-relaxed text-slate-400">Plan, workload, source date, and relevant setup.</p></div>
                </li>
                <li className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-sm font-bold text-blue-200">3</span>
                  <div><p className="font-semibold text-white">Keep the unknowns</p><p className="mt-1 text-sm leading-relaxed text-slate-400">A clean verdict is not worth hiding a material gap.</p></div>
                </li>
              </ol>
            </aside>
          </div>
        </section>

        <section id="reviews" aria-labelledby="software-heading" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Source-checked software research</p>
          <h2 id="software-heading" className="mt-2 text-3xl font-bold tracking-tight text-white">Start with the constraint that can break the deal.</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-400">
            These comparisons do not pretend a pricing page is a product test. They map published limits to concrete buying questions and link the vendor sources used.
          </p>

          <article className="group relative mt-8 overflow-hidden rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-500/10 via-slate-900 to-slate-900 p-6 shadow-xl shadow-slate-950/30 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-blue-300/50 hover:shadow-blue-950/30 motion-reduce:transform-none sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-200">Featured desk research</span>
                  <span className="text-sm text-slate-400">{featuredComparison.status}</span>
                </div>
                <h3 className="mt-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">ClickUp vs monday.com: the limits that change the shortlist</h3>
                <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
                  ClickUp publishes unlimited tasks and free members; monday.com caps its free tier at two seats. Their automation allowances also use different units, so the headline numbers are not directly interchangeable.
                </p>
                <Link href={featuredComparison.href} prefetch={false} className="mt-6 inline-flex rounded font-semibold text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Read the source-checked comparison
                  <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                </Link>
              </div>
              <dl className="grid gap-4 border-t border-slate-700 pt-6 text-sm lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <div><dt className="font-semibold text-white">Evidence</dt><dd className="mt-1 leading-relaxed text-slate-400">Dated vendor-source research, not hands-on use.</dd></div>
                <div><dt className="font-semibold text-white">Decision pressure</dt><dd className="mt-1 leading-relaxed text-slate-400">Seats, storage, views, and monthly automation actions.</dd></div>
                <div><dt className="font-semibold text-white">Verify before buying</dt><dd className="mt-1 leading-relaxed text-slate-400">Your seat count, billing basis, and how each product counts actions.</dd></div>
              </dl>
            </div>
          </article>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homepageComparisons.map((comparison) => (
              <li key={comparison.href}>
                <Link
                  href={comparison.href}
                  prefetch={false}
                  className="group block h-full rounded-xl border border-slate-800 bg-slate-900 p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-950/30 focus:outline-none focus:ring-2 focus:ring-blue-400 motion-reduce:transform-none"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-300">{comparison.category}</p>
                  <h3 className="mt-3 text-xl font-bold text-white transition-colors group-hover:text-blue-100">{comparison.title}</h3>
                  <p className="mt-3 text-sm text-slate-400">{comparison.status}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-blue-300">Open comparison <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none">→</span></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/category/saas" className="mt-6 inline-flex rounded font-semibold text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Browse all {comparisons.length} software comparisons <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </section>

        <section
          id="categories"
          aria-labelledby="categories-heading"
          className="scroll-mt-24 border-t border-slate-800"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
              Coverage areas
            </p>
            <h2
              id="categories-heading"
              className="mt-2 text-3xl font-bold text-white"
            >
              Browse by engineering need
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
              Explore the categories and check each evaluation for its evidence
              type, test conditions, and limitations.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {focusAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-950/30 focus:outline-none focus:ring-2 focus:ring-blue-400 motion-reduce:transform-none"
                >
                  <p className="text-xs font-bold tracking-[0.16em] text-blue-300">
                    {area.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-300">
                    {area.description}
                  </p>
                  <span className="mt-5 inline-flex font-semibold text-blue-300 group-hover:text-blue-200">
                    {area.linkLabel}
                    <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          id="methodology"
          aria-labelledby="methodology-heading"
          className="border-t border-slate-800"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
                How to read our reviews
              </p>
              <h2
                id="methodology-heading"
                className="mt-2 text-3xl font-bold text-white"
              >
                The evidence label comes before the verdict.
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                A vendor page can document a plan limit. It cannot tell us how a
                tool behaves under a real workload. We keep those claims separate
                and make the gap visible instead of smoothing it into one answer.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-200 hover:border-slate-700">
                <h3 className="font-bold text-white">Hands-on evaluation</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  First-person claims require a named reviewer, a real workflow,
                  the tested configuration, and the limits of that experience.
                </p>
              </article>

              <article className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-200 hover:border-slate-700">
                <h3 className="font-bold text-white">Performance testing</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  A number needs its workload, environment, measurement method,
                  repetitions, and the raw limitation that keeps it honest.
                </p>
              </article>

              <article className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-200 hover:border-slate-700">
                <h3 className="font-bold text-white">Desk research</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Vendor documentation stays tied to a source-check date. It can
                  support a buying question, but it is not presented as product use.
                </p>
              </article>
            </div>

            <Link
              href="/methodology"
              className="mt-7 inline-flex rounded font-semibold text-blue-300 transition-colors hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Read the full methodology
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
