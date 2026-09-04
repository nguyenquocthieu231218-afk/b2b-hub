import React from 'react';

export default function Home() {
  const tools = [
    {
      name: 'ActiveCampaign',
      category: 'Email & CRM Automation',
      description: 'Advanced marketing automation, CRM, and email sequences for growing SMBs and clinics.',
      rating: '4.9/5',
      badge: 'Best for Automation',
    },
    {
      name: 'Typeform',
      category: 'Lead Generation & Forms',
      description: 'Interactive forms and surveys that convert 3.5x higher than traditional web forms.',
      rating: '4.8/5',
      badge: 'Best for Conversion',
    },
    {
      name: 'Monday.com',
      category: 'Workflow Management',
      description: 'Customizable work OS to streamline project tracking, client pipelines, and team tasks.',
      rating: '4.7/5',
      badge: 'Best for Operations',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-indigo-400">
            FlowTech<span className="text-white">B2B</span>
          </div>
          <nav className="space-x-6 text-sm font-medium text-slate-300">
            <a href="#tools" className="hover:text-indigo-400 transition">Software</a>
            <a href="#reviews" className="hover:text-indigo-400 transition">Guides</a>
            <a href="#about" className="hover:text-indigo-400 transition">About Us</a>
          </nav>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20">
          B2B Workflow & SaaS Insights
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6 tracking-tight leading-tight">
          Optimize Your Business Operations with <span className="text-indigo-400">Vetted Software</span>
        </h1>
        <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          We test, review, and break down enterprise-grade automation tools so growing SMBs and professional clinics can scale efficiently.
        </p>
      </section>

      <section id="tools" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-slate-200">Featured Software Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-medium text-indigo-300 bg-indigo-950 px-2.5 py-1 rounded-md">
                    {tool.badge}
                  </span>
                  <span className="text-sm font-bold text-amber-400">★ {tool.rating}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                <p className="text-xs text-slate-400 mt-1 mb-3 font-mono">{tool.category}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{tool.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/40">
                <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg text-sm transition">
                  Read Full Review & Try Free
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="max-w-4xl mx-auto px-6 py-12 border-t border-slate-800">
        <h2 className="text-2xl font-bold mb-6 text-slate-200">Latest Industry Case Studies</h2>
        <div className="space-y-6">
          <article className="bg-slate-800/30 border border-slate-700/40 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">
              How Automating Patient Follow-ups Increases Retention by 35%
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Managing appointments and post-treatment care manually drains resources. By integrating custom CRM webhooks with automated messaging platforms, specialized clinics streamline booking workflows without adding administrative overhead...
            </p>
          </article>
        </div>
      </section>

      <footer className="border-t border-slate-800 mt-12 py-8 bg-slate-950 text-center text-xs text-slate-500">
        <p>© 2026 FlowTechB2B. Independent reviews and workflow guides for modern businesses.</p>
      </footer>
    </div>
  );
}
