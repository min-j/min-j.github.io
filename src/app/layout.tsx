import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jonathan Min — Senior Software Engineer',
  description:
    'Senior Software Engineer based in New York.',
  openGraph: {
    title: 'Jonathan Min',
    description: 'Senior Software Engineer based in New York.',
    url: 'https://www.jonathanmin.com',
    siteName: 'Jonathan Min',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
