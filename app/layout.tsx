import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "B2B Software Review Hub | 2026 Tech Comparisons",
  description: "Unbiased, data-driven comparisons to help startups choose the best SaaS tech stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-950 text-gray-100 min-h-screen flex flex-col antialiased">
        {/* Navigation Bar */}
        <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-mono">B2B</span>
              Review Hub
            </Link>
            
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                All Comparisons
              </Link>
              <Link 
                href="/clickup-vs-monday" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors"
              >
                Top Pick: ClickUp
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content Body */}
        <div className="flex-1">
          {children}
        </div>

        {/* Global Footer (E-E-A-T Compliant) */}
        <footer className="border-t border-gray-800 bg-gray-900 text-gray-400 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">B2B Review Hub</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering founders, agencies, and tech teams with transparent software evaluations and workflow comparisons.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Top Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/clickup-vs-monday" className="hover:text-blue-400">Project Management</Link></li>
                <li><Link href="/hubspot-vs-salesforce" className="hover:text-blue-400">CRM & Sales</Link></li>
                <li><Link href="/ahrefs-vs-semrush" className="hover:text-blue-400">SEO & Marketing</Link></li>
                <li><Link href="/notion-vs-coda" className="hover:text-blue-400">Productivity</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Disclosure</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                We independently review software tools. When you purchase through links on our site, we may earn an affiliate commission at no extra cost to you.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} B2B Review Hub. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
