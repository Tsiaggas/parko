import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ψητοπωλείο το Πάρκο - Αυθεντικές Γεύσεις της Παράδοσης',
  description: 'Ανακαλύψτε την αυθεντική ελληνική κουζίνα στο Ψητοπωλείο το Πάρκο. Φρέσκα σουβλάκια, παραδοσιακά ορεκτικά και οικογενειακές συνταγές που μεταφέρουν γεύσεις γεμάτες αγάπη και παράδοση.',
  keywords: 'ψητοπωλείο, σουβλάκι, ελληνική κουζίνα, παραδοσιακό φαγητό, γύρος, ορεκτικά, ταβέρνα',
  authors: [{ name: 'Ψητοπωλείο το Πάρκο' }],
  creator: 'Ψητοπωλείο το Πάρκο',
  publisher: 'Ψητοπωλείο το Πάρκο',
  robots: 'index, follow',
  openGraph: {
    title: 'Ψητοπωλείο το Πάρκο - Αυθεντικές Γεύσεις',
    description: 'Φρέσκα σουβλάκια και παραδοσιακές γεύσεις που ξυπνούν αναμνήσεις',
    type: 'website',
    locale: 'el_GR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ψητοπωλείο το Πάρκο',
    description: 'Αυθεντικές ελληνικές γεύσεις',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#748c5f',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="el" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="font-greek antialiased min-h-screen">
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
} 