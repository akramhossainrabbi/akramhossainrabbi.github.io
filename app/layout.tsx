import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akram Hossain — Lead Software Engineer',
  description:
    'Backend-focused software engineer specializing in Laravel and PHP — ERP systems, VAT compliance platforms, and API architecture.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={jbMono.variable}>
      <body>{children}</body>
    </html>
  )
}
