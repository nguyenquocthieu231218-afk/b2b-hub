import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StackEvalify | Data-Driven SaaS Comparisons & Tech Evaluations',
  description: 'Rigorous, side-by-side technical benchmarks and architectural analyses to help modern enterprises choose the optimal software infrastructure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="impact-site-verification" value="8b40ba0e-e24c-4340-bb46-5f63f9772766" />
      </head>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
