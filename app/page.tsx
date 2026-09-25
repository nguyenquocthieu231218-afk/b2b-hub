import React from 'react';

export const metadata = {
  title: 'StackEvalify | Data-Driven SaaS Comparisons & Tech Evaluations',
  description: 'Rigorous, side-by-side technical benchmarks and architectural analyses to help modern enterprises choose the optimal software infrastructure.',
  other: {
    'impact-site-verification': '8b40ba0e-e24c-4340-bb46-5f63f9772766',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      {/* Top Header / Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Đã tinh chỉnh lại cấu trúc flex và gap để logo không bao giờ bị đè chữ */}
          <div className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="StackEvalify Logo" className="w-8 h-8 rounded-lg object-contain shadow-md shadow-blue-500/20" />
            <span className="font-bold text-lg tracking-tight text-white">StackEvalify</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#categories" className="hover:text-blue-400 transition-colors">Categories</a>
            <a href="/about" className="hover:text-blue-400 transition-colors">About Us</a>
            <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>
          <div>
            <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full font-semibold">
              &bull; Verified Tech Evaluator
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
            <span>⚡ Rigorous Tech Stack Evaluations & 2026 Standards</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Data-Driven SaaS Comparisons for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">High-Growth Engineering Teams</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Objective, side-by-side technical benchmarks and architectural analyses to help modern enterprises choose the optimal software infrastructure.
          </p>
        </div>
      </section>

      {/* Main Categories Grid */}
      <main id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">Verified Software Evaluations</h2>
          <span className="text-xs text-slate-400">Updated Daily</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: AI & Productivity */}
          <a href="/chatgpt-vs-claude" className="group bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">AI & LLMs</span>
                <span className="text-xs text-slate-400">Read &rarr;</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">ChatGPT vs. Claude</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Evaluating context windows, API latency, code synthesis accuracy, and enterprise safety guardrails.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Benchmark 2026</span>
              <span className="text-blue-400 font-medium">View Analysis</span>
            </div>
          </a>

          {/* Card 2: Project Management */}
          <a href="/linear-vs-jira" className="group bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">Engineering Workflow</span>
                <span className="text-xs text-slate-400">Read &rarr;</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">Linear vs. Jira</h3>
              <p className="text-sm text-slate-400 leading-relaxed">UI responsiveness, issue tracking ergonomics, keyboard shortcut velocity, and scaling limits.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Benchmark 2026</span>
              <span className="text-blue-400 font-medium">View Analysis</span>
            </div>
          </a>

          {/* Card 3: SEO Tools */}
          <a href="/ahrefs-vs-semrush" className="group bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">Growth & SEO</span>
                <span className="text-xs text-slate-400">Read &rarr;</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">Ahrefs vs. SEMrush</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Backlink crawler freshness, keyword database depth, and organic traffic estimation metrics.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Benchmark 2026</span>
              <span className="text-blue-400 font-medium">View Analysis</span>
            </div>
          </a>

          {/* Card 4: CRM & Sales */}
          <a href="/hubspot-vs-salesforce" className="group bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">CRM Stack</span>
                <span className="text-xs text-slate-400">Read &rarr;</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">HubSpot vs. Salesforce</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Implementation overhead, custom object flexibility, TCO, and sales pipeline reporting depth.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Benchmark 2026</span>
              <span className="text-blue-400 font-medium">View Analysis</span>
            </div>
          </a>

          {/* Card 5: Automation */}
          <a href="/zapier-vs-make" className="group bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">Integration</span>
                <span className="text-xs text-slate-400">Read &rarr;</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">Zapier vs. Make</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Visual scenario debugging, error handling logic, execution limits, and pricing architecture.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Benchmark 2026</span>
              <span className="text-blue-400 font-medium">View Analysis</span>
            </div>
          </a>

          {/* Card 6: Web Design */}
          <a href="/webflow-vs-framer" className="group bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Web Builders</span>
                <span className="text-xs text-slate-400">Read &rarr;</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">Webflow vs. Framer</h3>
              <p className="text-sm text-slate-400 leading-relaxed">CSS box-model fidelity vs. freeform canvas animation capabilities for high-converting pages.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Benchmark 2026</span>
              <span className="text-blue-400 font-medium">View Analysis</span>
            </div>
          </a>
        </div>
      </main>

      {/* Professional Footer with Legal Links */}
      <footer className="border-t border-slate-800 bg-slate-950 mt-20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="StackEvalify Logo" className="w-6 h-6 rounded object-contain" />
              <span className="font-bold text-white">StackEvalify</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Providing rigorous technical benchmarks and independent software stack evaluations for engineering leaders worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#categories" className="hover:text-white transition-colors">Software Categories</a></li>
              <li><a href="/chatgpt-vs-claude" className="hover:text-white transition-colors">Top AI Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Legal & Trust</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Support & Contact</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="/contact" className="hover:text-white transition-colors">Editorial Contact</a></li>
              <li><span className="text-emerald-400">Verified Affiliate Publisher</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 text-center text-xs text-slate-400">
          &copy; 2026 StackEvalify Inc. All rights reserved. Advertiser Disclosure: We may receive compensation through partner affiliate links.
        </div>
      </footer>
    </div>
  );
}
