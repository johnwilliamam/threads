import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Clone threads',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br" className='bg-threads-bg-default text-threads-text'>
      <head>
        <link data-default-icon="https://static.cdninstagram.com/rsrc.php/v3/yV/r/_8T3PbCSTRI.png" rel="icon" sizes="192x192" href="https://static.cdninstagram.com/rsrc.php/v3/yV/r/_8T3PbCSTRI.png" />
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
