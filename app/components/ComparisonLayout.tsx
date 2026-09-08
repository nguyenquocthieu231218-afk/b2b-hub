import React from 'react';

export interface TableRowData {
  metric: string;
  toolA: string;
  toolB: string;
}

export interface ComparisonProps {
  title: string;
  lead: string;
  toolAName: string;
  toolBName: string;
  toolALink: string;
  toolBLink: string;
  verdictText: string;
  tableData: TableRowData[];
  coreDifferenceTextA: string;
  coreDifferenceTextB: string;
  recommendationA: string;
  recommendationB: string;
}

export default function ComparisonLayout({
  title,
  lead,
  toolAName,
  toolBName,
  toolALink,
  toolBLink,
  verdictText,
  tableData,
  coreDifferenceTextA,
  coreDifferenceTextB,
  recommendationA,
  recommendationB,
}: ComparisonProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': title,
    'description': lead,
    'author': {
      '@type': 'Organization',
      'name': 'B2B Software Hub',
    },
    'mainEntity': [
      {
        '@type': 'Product',
        'name': toolAName,
      },
      {
        '@type': 'Product',
        'name': toolBName,
      },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 prose lg:prose-xl text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-white font-extrabold tracking-tight">{title}</h1>
      
      <p className="lead text-gray-300">{lead}</p>

      {/* Quick Summary / Verdict */}
      <div className="my-8 p-6 bg-gray-900 border-l-4 border-blue-500 rounded-r-xl not-prose">
        <h3 className="text-lg font-bold text-white mb-2">⚡ Quick Summary / Verdict</h3>
        <p className="text-sm text-gray-300 mb-4">{verdictText}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href={toolALink}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors no-underline"
          >
            Try {toolAName} Free &rarr;
          </a>
          <a
            href={toolBLink}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg border border-gray-700 transition-colors no-underline"
          >
            Try {toolBName} Free &rarr;
          </a>
        </div>
      </div>

      <h2 className="text-white">At a Glance Comparison</h2>
      <div className="overflow-x-auto not-prose my-6">
        <table className="table-auto w-full border-collapse border border-gray-800 text-left">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="border border-gray-800 p-3">Feature / Metric</th>
              <th className="border border-gray-800 p-3">{toolAName}</th>
              <th className="border border-gray-800 p-3">{toolBName}</th>
            </tr>
          </thead>
          <tbody className="text-gray-300 text-sm">
            {tableData.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-800">
                <td className="border border-gray-800 p-3 font-bold text-white">{row.metric}</td>
                <td className="border border-gray-800 p-3">{row.toolA}</td>
                <td className="border border-gray-800 p-3">{row.toolB}</td>
              </tr>
            ))}
            <tr>
              <td className="border border-gray-800 p-3 font-bold text-white">Direct Action</td>
              <td className="border border-gray-800 p-3">
                <a
                  href={toolALink}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="inline-block text-xs bg-blue-600 hover:bg-blue-500 text-white font-bold py-1.5 px-3 rounded transition-colors"
                >
                  Visit {toolAName}
                </a>
              </td>
              <td className="border border-gray-800 p-3">
                <a
                  href={toolBLink}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="inline-block text-xs bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 font-bold py-1.5 px-3 rounded transition-colors"
                >
                  Visit {toolBName}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-white">1. Core Differences</h2>
      <p>
        <strong>{toolAName}</strong> {coreDifferenceTextA}
      </p>
      <p>
        <strong>{toolBName}</strong> {coreDifferenceTextB}
      </p>

      <h2 className="text-white">Final Recommendation</h2>
      <ul>
        <li><strong>Choose {toolAName} if:</strong> {recommendationA}</li>
        <li><strong>Choose {toolBName} if:</strong> {recommendationB}</li>
      </ul>
    </article>
  );
}
