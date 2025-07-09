'use client'

import React from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import ContentCard from '@/components/ContentCard'
import { useFavorites } from '@/context/FavoritesContext'
import { useSearch } from '@/context/SearchContext'

export default function FavoritesPage() {
  const { favorites } = useFavorites()
  const { searchTerm } = useSearch()

  const filteredFavorites = favorites.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.description?.toLowerCase().includes(searchTerm)
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-white text-black dark:bg-gray-950 dark:text-white">
          <h1 className="text-2xl font-bold mb-4">Your Favorite Content</h1>

          {filteredFavorites.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No favorites matched your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFavorites.map((article, index) => (
                <ContentCard key={index} article={article} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
