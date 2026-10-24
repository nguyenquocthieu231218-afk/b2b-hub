import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL('https://stackevalify.com'),
  title: 'StackEvalify | B2B SaaS & Developer Hardware Reviews',
  description:
    'Technical evaluations of B2B SaaS and developer hardware for engineering teams. See what was tested, how it was tested, and where the evidence has limits.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'StackEvalify | B2B SaaS & Developer Hardware Reviews',
    description:
      'Technical evaluations of B2B SaaS and developer hardware for engineering teams.',
    url: '/',
    siteName: 'StackEvalify',
    type: 'website',
  },
};

const focusAreas = [
  {
    eyebrow: 'SOFTWARE',
    title: 'B2B SaaS & DevOps',
    description:
      'Explore tools through the constraints that matter to engineering teams: plan limits, integrations, access controls, and pricing where relevant.',
    href: '/category/saas',
    linkLabel: 'Explore SaaS evaluations',
  },
  {
    eyebrow: 'HARDWARE',
    title: 'Developer hardware',
    description:
      'Explore machines and equipment for development and QA workflows, with test conditions and evidence limits stated in each evaluation.',
    href: '/category/hardware',
    linkLabel: 'Explore hardware evaluations',
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-50 rounded-md bg-white px-4 py-3 font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href="/"
            aria-label="StackEvalify home"
            className="rounded text-xl font-black tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            StackEvalify
          </Link>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-300"
          >
            <Link
              href="/#reviews"
              className="rounded py-1 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Reviews
            </Link>
            <Link
              href="/#categories"
              className="rounded py-1 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Categories
            </Link>
            <Link
              href="/methodology"
              className="rounded py-1 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Methodology
            </Link>
            <Link
              href="/about"
              className="rounded py-1 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
              Technical evaluations for engineering teams
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              B2B software and developer hardware, evaluated against practical
              engineering workflows.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              Our reviews identify whether findings come from hands-on use,
              performance testing, or desk research. We explain the conditions
              behind a conclusion and where the available evidence has limits.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/category/saas"
                className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Explore SaaS reviews
              </Link>
              <Link
                href="/category/hardware"
                className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Explore hardware reviews
              </Link>
            </div>

            <div className="mt-10 grid max-w-4xl gap-4 border-t border-slate-800 pt-6 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-white">Evidence type</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  See whether a conclusion is based on product use, measured
                  testing, or desk research.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Test conditions</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  Review the setup and workflow behind reported results.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Known limitations</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  Understand what the evidence does—and does not—show.
                </p>
              </div>
            </div>

            <p
              id="affiliate-disclosure"
              className="mt-8 max-w-3xl scroll-mt-24 text-sm leading-relaxed text-slate-400"
            >
              StackEvalify may earn a commission when you buy through affiliate
              links. Any commercial relationship should be disclosed alongside
              the relevant recommendation.
            </p>
          </div>
        </section>

        <section
          id="reviews"
          aria-labelledby="reviews-heading"
          className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6"
        >
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
              From the review desk
            </p>
            <h2
              id="reviews-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-white"
            >
              Featured evaluation
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
              Review the reported findings and their evidence limits before
              deciding how much weight to give them.
            </p>
          </div>

          <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_17rem]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300">
                    Developer hardware
                  </span>
                  <span className="text-sm text-slate-400">
                    Hands-on notes
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Acer Nitro 5 for web development
                </h3>

                <p className="mt-4 leading-relaxed text-slate-300">
                  The supplied test notes describe a configuration with an
                  Intel Core i7-10750H, GeForce GTX 1650 Ti, and 16 GB of RAM.
                  They report Fast Refresh under 1.5 seconds and a CPU
                  temperature of 92°C during sustained Webpack compilation.
                </p>

                <div className="mt-5 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                  <h4 className="font-semibold text-amber-200">
                    Evidence limitation
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    The supplied notes do not specify the number of test runs,
                    timing method, temperature sensor, ambient temperature, or
                    clock and performance traces. Treat these figures as
                    observations from one setup, not as a reproducible
                    benchmark. A 92°C reading alone does not establish
                    throttling.
                  </p>
                </div>

                <Link
                  href="/reviews/acer-nitro-5-web-dev"
                  className="mt-6 inline-flex rounded font-semibold text-blue-300 transition-colors hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Read the full evaluation
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>

              <aside className="flex flex-col justify-between gap-6 border-t border-slate-800 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Potential fit
                  </h4>
                  <p className="mt-2 leading-relaxed text-slate-200">
                    Developers considering a budget-oriented machine for
                    desk-based web development.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Main unknown
                  </h4>
                  <p className="mt-2 leading-relaxed text-slate-200">
                    The available notes do not establish whether sustained
                    performance was affected during compilation.
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Reviewer
                  </p>
                  <Link
                    href="/author/thieu-nguyen"
                    className="mt-2 inline-block rounded text-sm font-medium text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Thieu Nguyen
                  </Link>
                </div>
              </aside>
            </div>
          </article>
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
                  className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    <span aria-hidden="true" className="ml-2">
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
                A conclusion is only as useful as its evidence.
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                Hands-on use, performance testing, and desk research answer
                different questions. Each review should state which approach
                was used, what was measured, and where the evidence stops.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="font-bold text-white">Hands-on evaluation</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  The review should identify the product configuration,
                  workflow, duration of use, and relevant limitations.
                </p>
              </article>

              <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="font-bold text-white">Performance testing</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  The review should state the workload, environment, measurement
                  method, repetitions, and limits of the result.
                </p>
              </article>

              <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="font-bold text-white">Desk research</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Documentation, specifications, and vendor claims should be
                  labelled as research when the product was not directly tested.
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

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6">
          <p>© {new Date().getFullYear()} StackEvalify</p>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
            <Link
              href="/about"
              className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              About
            </Link>
            <Link
              href="/methodology"
              className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Methodology
            </Link>
            <Link
              href="/#affiliate-disclosure"
              className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Affiliate disclosure
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
