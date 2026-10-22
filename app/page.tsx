import Link from 'next/link';

const focusAreas = [
  {
    title: 'B2B SaaS & DevOps',
    description:
      'Reviews and comparisons for engineering teams. We examine plan limits, SSO, integrations, and pricing when they are relevant to the evaluation.',
    href: '/category/saas',
    linkLabel: 'Explore SaaS reviews',
  },
  {
    title: 'Developer Hardware',
    description:
      'Hands-on evaluations of machines and gear used for software development and QA, with test conditions stated for each review.',
    href: '/category/hardware',
    linkLabel: 'Explore hardware reviews',
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-50 rounded bg-white px-4 py-2 text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="rounded p-1 text-xl font-black tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            StackEvalify
          </Link>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-300"
          >
            <Link
              href="#reviews"
              className="rounded p-1 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Reviews
            </Link>
            <Link
              href="#focus-areas"
              className="rounded p-1 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Categories
            </Link>
            <Link
              href="/methodology"
              className="rounded p-1 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Methodology
            </Link>
            <Link
              href="/about"
              className="rounded p-1 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              StackEvalify · Technical reviews
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              B2B SaaS and developer hardware reviews for engineering teams.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              We evaluate software and hardware against practical engineering workflows.
              Every review identifies whether its findings come from hands-on use,
              performance testing, or desk research—and explains the limits of that evidence.
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

            <p className="mt-8 max-w-3xl rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm leading-relaxed text-slate-300">
              StackEvalify may earn a commission when you buy through links in our reviews.
              Commissions do not determine product selection, rankings, or test results.
            </p>
          </div>
        </section>

        <section
          id="reviews"
          aria-labelledby="reviews-heading"
          className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
                Tested and evaluated
              </p>
              <h2
                id="reviews-heading"
                className="mt-2 text-3xl font-bold tracking-tight text-white"
              >
                Latest review
              </h2>
            </div>
          </div>

          <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300">
                    Developer hardware
                  </span>
                  <span className="text-sm text-slate-400">
                    Last tested: October 2026
                  </span>
                  <span className="text-sm text-slate-400">
                    Method: hands-on
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Acer Nitro 5 for web development
                </h3>

                <p className="mt-4 leading-relaxed text-slate-300">
                  Tested configuration: Intel Core i7-10750H, GeForce GTX 1650 Ti,
                  and upgraded 16 GB RAM. In the stated Next.js 14 and Node.js 20
                  setup, Fast Refresh completed in under 1.5 seconds. During sustained
                  Webpack compilation, CPU temperature reached 92°C in this test setup.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  These results apply to the tested configuration and workload. See the
                  full evaluation for test conditions, measurement details, and the
                  observed effect on sustained performance.
                </p>

                <Link
                  href="/reviews/acer-nitro-5-web-dev"
                  className="mt-6 inline-flex rounded font-semibold text-blue-300 transition-colors hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Read the full evaluation
                  <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </div>

              <aside className="flex flex-col justify-between gap-6 border-t border-slate-800 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Best suited to
                  </h4>
                  <p className="mt-2 leading-relaxed text-slate-200">
                    Budget-conscious web developers who mainly work at a desk.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Main trade-off
                  </h4>
                  <p className="mt-2 leading-relaxed text-slate-200">
                    High CPU temperature during sustained compilation in our test setup.
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Reviewed by
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
          id="focus-areas"
          aria-labelledby="focus-heading"
          className="scroll-mt-24 border-t border-slate-800"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
              Browse by category
            </p>
            <h2 id="focus-heading" className="mt-2 text-3xl font-bold text-white">
              What we cover
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {focusAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <h3 className="text-xl font-bold text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-300">
                    {area.description}
                  </p>
                  <span className="mt-5 inline-flex font-semibold text-blue-300 group-hover:text-blue-200">
                    {area.linkLabel}
                    <span aria-hidden="true" className="ml-2">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          id="methodology"
          aria-labelledby="methodology-heading"
          className="scroll-mt-24 border-t border-slate-800"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
                How to read our reviews
              </p>
              <h2
                id="methodology-heading"
                className="mt-2 text-3xl font-bold text-white"
              >
                Evidence comes first
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                We label the method used so readers can judge what each conclusion
                is based on. A hands-on review, a benchmark, and a documentation-based
                assessment provide different kinds of evidence.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="font-bold text-white">Hands-on testing</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  We use the product in a stated workflow and identify the tested
                  configuration, duration, and relevant limitations.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="font-bold text-white">Performance testing</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  We describe the setup, workload, measurements, repetitions, and
                  limits of the results. API tests also identify the service tier
                  and execution region.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="font-bold text-white">Desk research</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  We assess vendor documentation, specifications, or product demos
                  and label the work as desk research when direct testing was not done.
                </p>
              </div>
            </div>

            <Link
              href="/methodology"
              className="mt-7 inline-flex rounded font-semibold text-blue-300 transition-colors hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Read our full methodology
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6">
          <p>© {new Date().getFullYear()} StackEvalify</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
            <Link href="/about" className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
              About
            </Link>
            <Link href="/methodology" className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
              Methodology
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
