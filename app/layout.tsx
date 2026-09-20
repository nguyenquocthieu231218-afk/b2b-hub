import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B2B Software Comparisons & Reviews 2026",
  description: "In-depth, data-driven comparisons of top enterprise software, SaaS tools, and business solutions.",
  verification: {
    google: "NW5omGCof5QYd-Ibszs5WrgrxsOn1B4iPBqah6w1pkk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
