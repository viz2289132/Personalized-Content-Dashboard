'use client'

import React, { useEffect, useState } from 'react'

type Movie = {
  title: string
  description: string
  url: string
  urlToImage: string
  source: { name: string }
}

const Recommendations = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecommendations = async () => {
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

    fetchRecommendations()
  }, [])

  return (
    <section className="mt-6 px-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Recommended Movies</h2>

      {loading && <p className="text-gray-500">Loading recommendations...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow transition">
            <img
              src={movie.urlToImage}
              alt={movie.title}
              className="h-48 w-full object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{movie.description}</p>
            <a
              href={movie.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              View on OMDB →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Recommendations
