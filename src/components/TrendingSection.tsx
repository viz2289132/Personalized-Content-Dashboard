'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ContentCard from './ContentCard'

type Article = {
  title: string
  description: string
  url: string
  urlToImage: string
  source: { name: string }
}

export default function TrendingSection() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch('/api/trending')
        const data = await res.json()
        setArticles(data.articles || [])
      } catch (err) {
        console.error('Error fetching trending:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchTrending()
  }, [])

  return (
    <motion.section
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800 dark:text-white">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-lg text-lg">
            🔥
          </span>
          Trending Today
        </h2>
        <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm px-3 py-1 rounded-full font-semibold">
          Live
        </span>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse flex flex-col space-y-4 rounded-xl bg-gray-200 dark:bg-gray-700 h-48"
            ></div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {articles.slice(0, 3).map((article, index) => (
            <motion.div
              key={index}
              className="hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <ContentCard article={article} compact={false} />
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  )
}
