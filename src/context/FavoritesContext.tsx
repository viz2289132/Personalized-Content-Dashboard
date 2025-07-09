'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Article = {
  title: string
  description: string
  url: string
  urlToImage: string
  source: { name: string }
}

type FavoritesContextType = {
  favorites: Article[]
  toggleFavorite: (article: Article) => void
  isFavorite: (article: Article) => boolean
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
})

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Article[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (article: Article) => {
    setFavorites((prev) => {
      const isAlreadyFav = prev.find((a) => a.url === article.url)
      if (isAlreadyFav) {
        return prev.filter((a) => a.url !== article.url)
      } else {
        return [...prev, article]
      }
    })
  }

  const isFavorite = (article: Article) => {
    return favorites.some((a) => a.url === article.url)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavoritesContext)
