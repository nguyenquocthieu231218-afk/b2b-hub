import React from 'react';

export default function NotionVsCoda() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 prose lg:prose-xl text-gray-100">
      <h1 className="text-white font-extrabold tracking-tight">
        Notion vs Coda: Which All-In-One Workspace is Best in 2026?
      </h1>
      
      <p className="lead text-gray-300">
        For teams moving away from fragmented tools, <strong>Notion</strong> and <strong>Coda</strong> offer powerful spaces to combine docs, wikis, and databases. While they look similar on the surface, their core philosophies serve completely different workflows.
      </p>

      {/* Quick Verdict Box */}
      <div className="my-8 p-6 bg-gray-900 border-l-4 border-blue-500 rounded-r-xl not-prose">
        <h3 className="text-lg font-bold text-white mb-2">⚡ Quick Summary / Verdict</h3>
        <p className="text-sm text-gray-300 mb-4">
          <strong>Choose Notion</strong> if you need a clean, beautifully organized company wiki or personal knowledge hub. <strong>Choose Coda</strong> if you want to build custom internal applications, button triggers, and deep data workflows inside text documents.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://notion.so"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors no-underline"
          >
            Try Notion Free &rarr;
          </a>
          <a
            href="https://coda.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg border border-gray-700 transition-colors no-underline"
          >
            Try Coda Free &rarr;
          </a>
        </div>
      </div>

      <h2 className="text-white">At a Glance Comparison</h2>
      <div className="overflow-x-auto not-prose my-6">
        <table className="table-auto w-full border-collapse border border-gray-800 text-left">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="border border-gray-800 p-3">Feature / Metric</th>
              <th className="border border-gray-800 p-3">Notion</th>
              <th className="border border-gray-800 p-3">Coda</th>
            </tr>
          </thead>
          <tbody className="text-gray-300 text-sm">
            <tr className="border-b border-gray-800">
              <td className="border border-gray-800 p-3 font-bold text-white">Best For</td>
              <td className="border border-gray-800 p-3">Company wikis, clean notes & simple databases</td>
              <td className="border border-gray-800 p-3">Interactive app-like docs & complex automations</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="border border-gray-800 p-3 font-bold text-white">Free Tier</td>
              <td className="border border-gray-800 p-3">Generous for individual users</td>
              <td className="border border-gray-800 p-3">Unrestricted viewers/editors, limit on doc size</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="border border-gray-800 p-3 font-bold text-white">Starting Price</td>
              <td className="border border-gray-800 p-3">~$8 / seat / month</td>
              <td className="border border-gray-800 p-3">~$10 / Doc Maker / month (Viewers free)</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="border border-gray-800 p-3 font-bold text-white">Formula & Logic</td>
              <td className="border border-gray-800 p-3">Basic to Moderate</td>
              <td className="border border-gray-800 p-3">Advanced (Excel/Code-like depth)</td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-3 font-bold text-white">Direct Action</td>
              <td className="border border-gray-800 p-3">
                <a
                  href="https://notion.so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs bg-blue-600 hover:bg-blue-500 text-white font-bold py-1.5 px-3 rounded transition-colors"
                >
                  Visit Notion
                </a>
              </td>
              <td className="border border-gray-800 p-3">
                <a
                  href="https://coda.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 font-bold py-1.5 px-3 rounded transition-colors"
                >
                  Visit Coda
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-white">1. Core Difference</h2>
      <p>
        <strong>Notion</strong> is a document-first tool that acts as your company’s second brain. It excels at knowledge management and aesthetic organization.
      </p>
      <p>
        <strong>Coda</strong> is an app-first tool disguised as a document. It allows you to build custom internal applications, button triggers, and deep programmatic workflows inside text pages.
      </p>

      <h2 className="text-white">Final Recommendation</h2>
      <ul>
        <li><strong>Choose Notion if:</strong> You need a beautifully organized team wiki, content calendar, or personal productivity hub.</li>
        <li><strong>Choose Coda if:</strong> You want to build custom internal tools, complex data tables, and automated workflows without writing software code.</li>
      </ul>
    </article>
  );
}
