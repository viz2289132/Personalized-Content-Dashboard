'use client'

import React, { useEffect, useState } from 'react'
import { Reorder } from 'framer-motion'
import { usePreferences } from '../context/PreferencesContext'
import { useSearch } from '../context/SearchContext'
import ContentCard from './ContentCard'
import PreferencesSelector from './PreferencesSelector' // ✅ Import the new component

type Article = {
  title: string
  description: string
  url: string
  urlToImage: string
  source: { name: string }
}

const Feed = () => {
  const { categories } = usePreferences()
  const { searchTerm } = useSearch()
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      if (categories.length === 0) {
        setArticles([])
        return
      }

      setLoading(true)
      setError(null)

      try {
        const res = await fetch('/api/news', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ categories }),
        })

        const data = await res.json()
        setArticles(data.articles || [])
      } catch (err) {
        console.error(err)
        setError('Failed to fetch news')
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [categories])

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm) ||
    article.description?.toLowerCase().includes(searchTerm)
  )

  const handleReorder = (newOrder: Article[]) => {
    setArticles(newOrder)
  }

  return (
    <section className="flex-1 p-6 bg-white dark:bg-gray-950 text-black dark:text-white">
      {/* ✅ Preferences on mobile view */}
      <div className="md:hidden mb-4">
        <PreferencesSelector />
      </div>

      <h1 className="text-3xl font-bold mb-6">📚 Your Personalized Feed</h1>


      {loading && <p className="text-blue-500 animate-pulse">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && filteredArticles.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">
          No content found for the selected categories or search.
        </p>
      )}

      <Reorder.Group
        axis="y"
        values={articles}
        onReorder={handleReorder}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
      >
        {filteredArticles.map((article) => (
          <Reorder.Item
            key={article.url}
            value={article}
            className="cursor-move"
          >
            <ContentCard article={article} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </section>
  )
}

export default Feed
