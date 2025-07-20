import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ψηφιακό Μενού - Ψητοπωλείο το Πάρκο',
  description: 'Ψηφιακό μενού ψητοπωλείου το Πάρκο',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="el">
      <body className="font-greek antialiased">
        {children}
      </body>
    </html>
  )
} 