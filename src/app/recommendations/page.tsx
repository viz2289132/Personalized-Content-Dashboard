'use client'

import React, { useEffect, useState } from 'react'

import Sidebar from '@/components/Sidebar'
import ContentCard from '@/components/ContentCard'
import { useSearch } from '@/context/SearchContext'

type Movie = {
  title: string
  description: string
  url: string
  urlToImage: string
  source: { name: string }
}

export default function RecommendationsPage() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { searchTerm } = useSearch()

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      try {
        const res = await fetch('/api/recommendations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ genre: 'action' }),
        })
        const data = await res.json()
        setMovies(data.movies || [])
      } catch (err) {
        console.error(err)
        setError('Failed to fetch recommendations')
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.description?.toLowerCase().includes(searchTerm)
  )

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Recommended Movies</h1>

          {loading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {filteredMovies.length === 0 && !loading && (
            <p className="text-gray-500 dark:text-gray-400">No matches found.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMovies.map((movie, index) => (
              <ContentCard key={index} article={movie} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
