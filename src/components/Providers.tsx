'use client'

import { SessionProvider } from 'next-auth/react'
import { PreferencesProvider } from '../context/PreferencesContext'
import { SearchProvider } from '../context/SearchContext'
import { FavoritesProvider } from '../context/FavoritesContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <PreferencesProvider>
        <SearchProvider>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>
        </SearchProvider>
      </PreferencesProvider>
    </SessionProvider>
  )
}
