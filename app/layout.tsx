import type { Metadata } from 'next';
import './globals.css';
import ImpactVerification from '@/components/ImpactVerification';

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
      <body className="bg-slate-950 text-slate-100 font-sans antialiased">
        <ImpactVerification />
        {children}
      </body>
    </html>
  );
}
