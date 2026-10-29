import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'B2B SaaS Comparisons and Research',
  description: 'A directory of StackEvalify software comparisons, including desk research with dated primary-source checks.',
  alternates: { canonical: '/category/saas' },
  robots: { index: false, follow: true },
};

const comparisons = [
  { title: 'Ahrefs vs Semrush', href: '/ahrefs-vs-semrush', category: 'SEO', status: 'Source checked · 29 Oct 2026' },
  { title: 'Airtable vs Notion', href: '/airtable-vs-notion', category: 'Workspaces', status: 'Source checked · 29 Oct 2026' },
  { title: 'Asana vs Trello', href: '/asana-vs-trello', category: 'Project management', status: 'Source checked · 29 Oct 2026' },
  { title: 'ChatGPT vs Claude', href: '/chatgpt-vs-claude', category: 'AI assistants', status: 'Source checked · 29 Oct 2026' },
  { title: 'ClickUp vs Monday', href: '/clickup-vs-monday', category: 'Project management', status: 'Source checked · 29 Oct 2026' },
  { title: 'ClickUp vs Notion', href: '/clickup-vs-notion', category: 'Workspaces', status: 'Source checked · 29 Oct 2026' },
  { title: 'HubSpot vs Salesforce', href: '/hubspot-vs-salesforce', category: 'CRM', status: 'Source checked · 29 Oct 2026' },
  { title: 'Klaviyo vs Mailchimp', href: '/klaviyo-vs-mailchimp', category: 'Email marketing', status: 'Source checked · 29 Oct 2026' },
  { title: 'Linear vs Jira', href: '/linear-vs-jira', category: 'Issue tracking', status: 'Source checked · 29 Oct 2026' },
  { title: 'Mailchimp vs ActiveCampaign', href: '/mailchimp-vs-activecampaign', category: 'Email marketing', status: 'Source checked · 29 Oct 2026' },
  { title: 'Notion vs Coda (Superhuman Docs)', href: '/notion-vs-coda', category: 'Workspaces', status: 'Source checked · 29 Oct 2026' },
  { title: 'Pipedrive vs HubSpot', href: '/pipedrive-vs-hubspot', category: 'CRM', status: 'Source checked · 29 Oct 2026' },
  { title: 'Shopify vs WooCommerce', href: '/shopify-vs-woocommerce', category: 'Commerce platforms', status: 'Source checked · 29 Oct 2026' },
  { title: 'Slack vs Teams', href: '/slack-vs-teams', category: 'Team communication', status: 'Source checked · 29 Oct 2026' },
  { title: 'Webflow vs Framer', href: '/webflow-vs-framer', category: 'Website builders', status: 'Source checked · 29 Oct 2026' },
  { title: 'Wix vs Squarespace', href: '/wix-vs-squarespace', category: 'Website builders', status: 'Source checked · 29 Oct 2026' },
  { title: 'Zapier vs Make', href: '/zapier-vs-make', category: 'Workflow automation', status: 'Source checked · 29 Oct 2026' },
];

export default function SaasCategoryPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <span aria-hidden="true" className="mx-2">/</span>
          <span className="text-slate-300">B2B SaaS & DevOps</span>
        </nav>
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Category</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">B2B SaaS comparisons</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Browse software comparisons across engineering, collaboration, marketing, and operations. All 17 comparisons have dated source checks. These pages are vendor-source desk research, not hands-on product tests.
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
