'use client'

import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import ContentCard from '@/components/ContentCard'
import { useSearch } from '@/context/SearchContext'

type Article = {
  title: string
  description: string
  url: string
  urlToImage: string
  source: { name: string }
}

export default function TrendingPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { searchTerm } = useSearch()

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true)
      try {
        const res = await fetch('/api/trending')
        const data = await res.json()
        setArticles(data.articles || [])
      } catch (err) {
        console.error(err)
        setError('Failed to fetch trending articles')
      } finally {
        setLoading(false)
      }
    }

    fetchTrending()
  }, [])

  const filtered = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.description?.toLowerCase().includes(searchTerm)
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-white dark:bg-gray-950 text-black dark:text-white overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Trending</h1>

          {loading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {filtered.length === 0 && !loading && (
            <p className="text-gray-500 dark:text-gray-400">No trending content matches your search.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((article, index) => (
              <ContentCard key={index} article={article} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
