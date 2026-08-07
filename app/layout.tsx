import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const siteUrl = 'https://praneeth-portfolio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Maganti Praneeth Sri Satya Chowdary — AI & Machine Learning Engineer',
    template: '%s · Praneeth Maganti',
  },
  description:
    'Portfolio of Maganti Praneeth Sri Satya Chowdary — Computer Science Engineering student specializing in Data Science with AI. Building intelligent applications across Machine Learning, NLP, and Cloud Computing.',
  keywords: [
    'Praneeth Maganti',
    'AI Engineer',
    'Machine Learning',
    'Data Science',
    'NLP',
    'Python Developer',
    'KL University',
    'Software Engineer Portfolio',
  ],
  authors: [{ name: 'Maganti Praneeth Sri Satya Chowdary' }],
  creator: 'Maganti Praneeth Sri Satya Chowdary',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Maganti Praneeth Sri Satya Chowdary — AI & Machine Learning Engineer',
    description:
      'Computer Science Engineering student specializing in Data Science with AI. Machine Learning, NLP, and Cloud Computing.',
    siteName: 'Praneeth Maganti',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maganti Praneeth Sri Satya Chowdary — AI & ML Engineer',
    description:
      'Computer Science Engineering student specializing in Data Science with AI.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
