import React from 'react';

// Danh sách các bài viết so sánh được nhóm theo danh mục chuẩn phong cách SaaS US/EU
const CATEGORIES = [
  {
    name: 'Project Management & Collaboration',
    description: 'Top tools to keep your teams aligned and productive.',
    comparisons: [
      { slug: 'clickup-vs-asana', title: 'ClickUp vs. Asana', desc: 'Feature depth vs. simplicity for growing teams.' },
      { slug: 'clickup-vs-monday', title: 'ClickUp vs. Monday.com', desc: 'Customization power compared side-by-side.' },
      { slug: 'clickup-vs-notion', title: 'ClickUp vs. Notion', desc: 'Task execution vs. knowledge management.' },
      { slug: 'asana-vs-trello', title: 'Asana vs. Trello', desc: 'Structured workflows vs. Kanban flexibility.' },
      { slug: 'airtable-vs-notion', title: 'Airtable vs. Notion', desc: 'Relational databases vs. workspace flexibility.' },
      { slug: 'notion-vs-coda', title: 'Notion vs. Coda', desc: 'All-in-one docs and interactive tables showdown.' },
    ],
  },
  {
    name: 'CRM & Sales Automation',
    description: 'Scale your revenue pipeline and customer relationships.',
    comparisons: [
      { slug: 'hubspot-vs-salesforce', title: 'HubSpot vs. Salesforce', desc: 'Ease of use and scale for modern enterprises.' },
      { slug: 'salesforce-vs-hubspot', title: 'Salesforce vs. HubSpot', desc: 'Enterprise complexity vs. inbound marketing power.' },
      { slug: 'pipedrive-vs-hubspot', title: 'Pipedrive vs. HubSpot', desc: 'Sales pipeline focus vs. full inbound suite.' },
    ],
  },
  {
    name: 'Marketing & Email',
    description: 'Drive conversion, engagement, and automated retention.',
    comparisons: [
      { slug: 'mailchimp-vs-activecampaign', title: 'Mailchimp vs. ActiveCampaign', desc: 'Simple email blasts vs. advanced marketing automation.' },
      { slug: 'klaviyo-vs-mailchimp', title: 'Klaviyo vs. Mailchimp', desc: 'E-commerce focused revenue data vs. general marketing.' },
    ],
  },
  {
    name: 'SEO & Content Growth',
    description: 'Dominate search rankings and outpace your competitors.',
    comparisons: [
      { slug: 'ahrefs-vs-semrush', title: 'Ahrefs vs. SEMrush', desc: 'The definitive battle of SEO data powerhouses.' },
    ],
  },
  {
    name: 'Communication & Workflow',
    description: 'Connect your stack and team real-time communications.',
    comparisons: [
      { slug: 'slack-vs-teams', title: 'Slack vs. Microsoft Teams', desc: 'Developer favorite vs. enterprise ecosystem choice.' },
      { slug: 'zapier-vs-make', title: 'Zapier vs. Make (Integromat)', desc: 'Reliable automation vs. complex visual scenarios.' },
    ],
  },
  {
    name: 'Web Builders & E-Commerce',
    description: 'Launch stunning storefronts and high-converting websites.',
    comparisons: [
      { slug: 'shopify-vs-woocommerce', title: 'Shopify vs. WooCommerce', desc: 'Hosted e-commerce power vs. open-source control.' },
      { slug: 'webflow-vs-framer', title: 'Webflow vs. Framer', desc: 'Advanced design control vs. rapid visual prototyping.' },
      { slug: 'wix-vs-squarespace', title: 'Wix vs. Squarespace', desc: 'All-around flexibility vs. stunning aesthetic design.' },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-slate-800/80 bg-slate-900/50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span>Verified Software Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Make Smarter Software Decisions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Faster</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-8 leading-relaxed">
            Unbiased, data-driven side-by-side comparisons of the world's leading B2B SaaS tools. Built for founders, product leaders, and operators.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">✓ 100% Unbiased</span>
            <span className="flex items-center gap-1.5">✓ Expert Evaluated</span>
            <span className="flex items-center gap-1.5">✓ Updated for 2026</span>
          </div>
        </div>
      </header>

      {/* Main Categories & Comparisons Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {CATEGORIES.map((cat, idx) => (
            <section key={idx} className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">{cat.name}</h2>
                <p className="text-sm text-slate-400 mt-1">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.comparisons.map((item, cIdx) => (
                  <a
                    key={cIdx}
                    href={`/${item.slug}`}
                    className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 group-hover:text-blue-400 transition-colors">
                          Comparison
                        </span>
                        <span className="text-slate-600 group-hover:text-blue-400 transition-transform group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-medium text-slate-500">
                      <span>Read Full Breakdown</span>
                      <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">Explore &rarr;</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} B2B Software Hub. All rights reserved.</p>
          <div className="flex gap-6 text-slate-400">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-500">Powered by Next.js & Vercel</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
