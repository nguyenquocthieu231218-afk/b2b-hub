import Link from 'next/link';

export default function Home() {
  const comparisons = [
    {
      slug: 'clickup-vs-monday',
      title: 'ClickUp vs Monday.com',
      desc: 'Which project management tool is best for startups in 2026?',
      category: 'Project Management',
    },
    {
      slug: 'notion-vs-coda',
      title: 'Notion vs Coda',
      desc: 'Comparing all-in-one workspaces, knowledge bases, and team wikis.',
      category: 'Productivity',
    },
    {
      slug: 'hubspot-vs-salesforce',
      title: 'HubSpot vs Salesforce',
      desc: 'Which CRM platform fits your business size and budget?',
      category: 'CRM & Sales',
    },
    {
      slug: 'asana-vs-trello',
      title: 'Asana vs Trello',
      desc: 'Lightweight task management vs complex workflow tracking.',
      category: 'Project Management',
    },
    {
      slug: 'ahrefs-vs-semrush',
      title: 'Ahrefs vs SEMrush',
      desc: 'The ultimate SEO suite showdown for backlinks and keywords.',
      category: 'SEO & Marketing',
    },
    {
      slug: 'slack-vs-teams',
      title: 'Slack vs Microsoft Teams',
      desc: 'Choosing the best team communication and messaging platform.',
      category: 'Communication',
    },
    {
      slug: 'shopify-vs-woocommerce',
      title: 'Shopify vs WooCommerce',
      desc: 'Hosted e-commerce vs self-hosted open-source platform.',
      category: 'E-commerce',
    },
    {
      slug: 'zapier-vs-make',
      title: 'Zapier vs Make',
      desc: 'Comparing visual workflow automation tools and pricing.',
      category: 'Automation',
    },
    {
      slug: 'webflow-vs-framer',
      title: 'Webflow vs Framer',
      desc: 'No-code website builders for modern design and CMS.',
      category: 'Design & Web',
    },
    {
      slug: 'mailchimp-vs-activecampaign',
      title: 'Mailchimp vs ActiveCampaign',
      desc: 'Email newsletters vs advanced automated customer funnels.',
      category: 'Email Marketing',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            B2B Software Review Hub
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Unbiased, data-driven comparisons to help your startup pick the right tech stack in 2026.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="block p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors duration-200"
            >
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                {item.category}
              </span>
              <h2 className="text-xl font-bold text-white mt-2 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-400">
                {item.desc}
              </p>
              <div className="mt-4 text-sm font-medium text-blue-400 hover:underline inline-flex items-center">
                Read Comparison &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
