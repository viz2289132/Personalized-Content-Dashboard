'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Providers from '@/components/Providers'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Only show header on internal pages (not on home page '/')
  const shouldShowHeader = pathname !== '/'

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 transition-colors`}>
        <Providers>
          {shouldShowHeader && <Header />}
          {children}
        </Providers>
      </body>
    </html>
  )
}
