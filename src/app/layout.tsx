import type { Metadata } from 'next'
import { Bebas_Neue, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Five X Five Flight | Elite Flight Training Academy — Conroe, Texas',
  description: 'Premier flight training academy in Conroe, Texas. Private pilot, instrument rating, commercial certificate, and CFI programs. Five X Five — loud and clear.',
  keywords: 'flight school, pilot training, Conroe Texas, private pilot, instrument rating, commercial pilot, aviation academy, FAA certified',
  openGraph: {
    title: 'Five X Five Flight | Elite Aviation Training',
    description: 'Elite flight training academy in Conroe, Texas. Train with the best.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${barlowCondensed.variable}`}>
      <body className="bg-space font-body antialiased">
        {children}
      </body>
    </html>
  )
}
