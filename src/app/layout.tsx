import './globals.css'
import { PreferencesProvider } from '../context/PreferencesContext'
import { SearchProvider } from '../context/SearchContext'
import { FavoritesProvider } from '../context/FavoritesContext'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Personalized Dashboard',
  description: 'News, Movies, Posts',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PreferencesProvider>
          <SearchProvider>
            <FavoritesProvider>
              {children}
            </FavoritesProvider>
          </SearchProvider>
        </PreferencesProvider>
      </body>
    </html>
  )
}
