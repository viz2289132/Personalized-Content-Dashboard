'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { useFavorites } from '../context/FavoritesContext'

type Props = {
  article: {
    title: string
    description: string
    url: string
    urlToImage: string
    source: { name: string }
  }
}

const ContentCard = ({ article }: Props) => {
  const { toggleFavorite, isFavorite } = useFavorites()
  const liked = isFavorite(article)

  return (
    <motion.div
      layout
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col transition-all hover:shadow-xl"
    >
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-52 w-full object-cover"
        />
      )}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h2 className="text-lg font-semibold line-clamp-2">{article.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{article.description}</p>
        <p className="text-xs text-gray-500 mt-auto">Source: {article.source.name}</p>

        <div className="flex justify-between items-center mt-4">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
          >
            Read More →
          </a>
          <button
            onClick={() => toggleFavorite(article)}
            className={`text-xs px-3 py-1 rounded border ${
              liked
                ? 'bg-yellow-100 text-yellow-700 border-yellow-400 dark:bg-yellow-800 dark:text-white'
                : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
            } transition`}
          >
            {liked ? '★ Favorited' : '☆ Favorite'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ContentCard
