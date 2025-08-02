import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tactix - Fantasy Football. Real Competition.',
  description: 'Tactix brings football strategy to your fingertips. Pick your players, track live stats, and compete with your friends in weekly matchups.',
  keywords: 'fantasy football, mobile app, football strategy, competition, sports gaming',
  authors: [{ name: 'Tactix Team' }],
  openGraph: {
    title: 'Tactix - Fantasy Football. Real Competition.',
    description: 'Tactix brings football strategy to your fingertips. Pick your players, track live stats, and compete with your friends in weekly matchups.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tactix - Fantasy Football. Real Competition.',
    description: 'Tactix brings football strategy to your fingertips. Pick your players, track live stats, and compete with your friends in weekly matchups.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 