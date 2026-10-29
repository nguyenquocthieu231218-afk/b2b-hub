import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://stackevalify.com'),
  title: {
    default: 'StackEvalify | Technical Evaluations for Engineering Teams',
    template: '%s | StackEvalify',
  },
  description:
    'Evidence-led reviews and comparisons of B2B software and developer hardware for engineering teams.',
  openGraph: {
    siteName: 'StackEvalify',
    type: 'website',
    images: [{ url: '/logo.png', width: 2000, height: 2000, alt: 'StackEvalify logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'StackEvalify | Technical Evaluations for Engineering Teams',
    description: 'Evidence-led reviews and comparisons of B2B software and developer hardware for engineering teams.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="impact-site-verification" content="8b40ba0e-e24c-4340-bb46-5f63f9772766" />
      </head>
      <body className="bg-slate-950 font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
