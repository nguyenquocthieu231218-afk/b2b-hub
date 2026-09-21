import React from 'react';

export const AFFILIATE_LINKS: Record<string, string> = {
  clickup: 'https://clickup.com',
  monday: 'https://monday.com',
  notion: 'https://notion.so',
  coda: 'https://coda.io',
  hubspot: 'https://hubspot.com',
  salesforce: 'https://salesforce.com',
  asana: 'https://asana.com',
  trello: 'https://trello.com',
  ahrefs: 'https://ahrefs.com',
  semrush: 'https://semrush.com',
  slack: 'https://slack.com',
  teams: 'https://teams.microsoft.com',
  shopify: 'https://shopify.com',
  woocommerce: 'https://woocommerce.com',
  zapier: 'https://zapier.com',
  make: 'https://make.com',
  webflow: 'https://webflow.com',
  framer: 'https://framer.com',
  mailchimp: 'https://mailchimp.com',
  activecampaign: 'https://activecampaign.com',
  pipedrive: 'https://pipedrive.com',
  klaviyo: 'https://klaviyo.com',
  wix: 'https://wix.com',
  squarespace: 'https://squarespace.com',
};

interface ComparisonLayoutProps {
  children?: React.ReactNode;
  tool1?: string;
  tool2?: string;
  title?: string;
  description?: string;
  lead?: string;
  toolAName?: string;
  toolBName?: string;
  toolALink?: string;
  toolBLink?: string;
  verdictText?: string;
  tableData?: Array<{ metric: string; toolA: string; toolB: string }>;
  coreDifferenceTextA?: string;
  coreDifferenceTextB?: string;
  recommendationA?: string;
  recommendationB?: string;
}

export default function ComparisonLayout({
  children,
  tool1,
  tool2,
}: ComparisonLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 selection:bg-blue-500 selection:text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <a
            href="/"
            className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1.5"
          >
            <span>&larr;</span> Back to B2B Hub
          </a>
          <span className="text-xs text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
            Independent Editorial Review
          </span>
        </div>

        {/* Khung chứa nội dung bài viết */}
        <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-xl backdrop-blur-sm">
          {/* Thông báo minh bạch Affiliate (Disclosure) chuẩn US/EU */}
          <div className="mb-8 p-3.5 bg-slate-950/60 border border-slate-800/60 rounded-xl text-xs text-slate-400 leading-relaxed flex items-start gap-2.5">
            <span className="text-blue-400 font-bold text-sm mt-0.5">ℹ️</span>
            <div>
              <span className="font-semibold text-slate-300">Advertiser Disclosure:</span> We may earn an affiliate commission from links on this page at no extra cost to you. Our reviews remain independent, rigorous, and data-driven.
            </div>
          </div>

          {children}
        </div>

        {/* Thanh điều hướng Affiliate nhanh dưới chân bài viết */}
        {(tool1 || tool2) && (
          <div className="mt-8 p-6 bg-slate-900/90 border border-slate-800/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div>
              <h3 className="text-white font-bold text-lg">Ready to choose your software?</h3>
              <p className="text-sm text-slate-400">Explore official plans, free trials, and get started today.</p>
            </div>
            <div className="flex flex-wrap gap-3 w-full sm:w-auto justify-end">
              {tool1 && AFFILIATE_LINKS[tool1] && (
                <a
                  href={AFFILIATE_LINKS[tool1]}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20 text-center"
                >
                  Try {tool1.charAt(0).toUpperCase() + tool1.slice(1)} &rarr;
                </a>
              )}
              {tool2 && AFFILIATE_LINKS[tool2] && (
                <a
                  href={AFFILIATE_LINKS[tool2]}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold px-5 py-2.5 rounded-xl text-sm transition-all text-center"
                >
                  Try {tool2.charAt(0).toUpperCase() + tool2.slice(1)} &rarr;
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
