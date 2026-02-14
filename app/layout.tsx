import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blue Sky Youth Leadership Program',
  description: 'Empowering Today\'s Youth, Building Tomorrow\'s Leaders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
