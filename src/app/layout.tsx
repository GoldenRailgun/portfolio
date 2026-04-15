import type { Metadata } from 'next'
import '@/styles/globals.css'
import Nav from '@/components/ui/Nav'
import SphereContainer from '@/components/ui/SphereContainer'

export const metadata: Metadata = {
  title: 'Khush Patel — AI Engineer',
  description: 'I build the AI layer that products actually run on.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <SphereContainer />
      </body>
    </html>
  )
}