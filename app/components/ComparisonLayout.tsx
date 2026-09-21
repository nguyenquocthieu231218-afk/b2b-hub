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
  children: React.ReactNode;?
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
    <main className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <a
            href="/"
            className="text-sm font-medium text-blue-400 hover:underline inline-flex items-center"
          >
            &larr; Back to B2B Hub
          </a>
        </div>

        {/* Khung chứa nội dung bài viết */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-10 shadow-xl">
          {children}
        </div>

        {/* Thanh điều hướng Affiliate nhanh dưới chân bài viết */}
        {(tool1 || tool2) && (
          <div className="mt-8 p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg">Ready to choose your software?</h3>
              <p className="text-sm text-gray-400">Explore official plans and get started today.</p>
            </div>
            <div className="flex gap-3">
              {tool1 && AFFILIATE_LINKS[tool1] && (
                <a
                  href={AFFILIATE_LINKS[tool1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Try {tool1.charAt(0).toUpperCase() + tool1.slice(1)} &rarr;
                </a>
              )}
              {tool2 && AFFILIATE_LINKS[tool2] && (
                <a
                  href={AFFILIATE_LINKS[tool2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
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
