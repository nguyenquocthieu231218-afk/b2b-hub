import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B2B Hub - Trung tâm đánh giá phần mềm B2B SaaS',
  description: 'Nền tảng đánh giá và so sánh phần mềm B2B SaaS hàng đầu giúp doanh nghiệp tối ưu lựa chọn.',
  verification: {
    google: 'NW5omGCof5QYd-Ibszs5WrgrxsOn1B4iPBqah6w1pkk',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
