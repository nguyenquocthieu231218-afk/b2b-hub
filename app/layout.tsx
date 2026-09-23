import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B2B Software Review Hub | 2026 Enterprise Standards",
  description: "Rigorous, data-driven side-by-side SaaS comparisons for modern enterprises.",
  // Tích hợp mã xác minh Impact vào đây để hệ thống tự động render ra thẻ meta <head>
  other: {
    "impact-site-verification": "8b40ba0e-e24c-4340-bb46-5f63f9772766",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
