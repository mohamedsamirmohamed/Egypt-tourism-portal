import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif-base',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-base',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'New Smart Travel — Egypt Travel Curators',
  description:
    'Curated tours to Egypt: Pyramids, Historic Cairo, Red Sea, Desert Safaris, and Religious Journeys.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#2a2416',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
