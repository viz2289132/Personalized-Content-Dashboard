'use client'

import { motion } from 'framer-motion'
import { useFavorites } from '@/context/FavoritesContext'
import { Bookmark } from 'lucide-react'

type Props = {
  article: {
    title: string
    description: string
    url: string
    urlToImage: string
    source: { name: string }
  }
  compact?: boolean
}

const ContentCard = ({ article, compact = false }: Props) => {
  const { toggleFavorite, isFavorite } = useFavorites()
  const liked = isFavorite(article)

  if (compact) {
    return (
      <motion.div
        layout
        className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors"
      >
        <div className="flex-shrink-0 relative">
          {article.urlToImage ? (
            <img src={article.urlToImage} alt={article.title} className="w-16 h-16 rounded-lg object-cover" />
          ) : (
            <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl w-16 h-16" />
          )}
          <div className="absolute bottom-1 right-1 bg-blue-500 text-white text-xs px-1 rounded">
            {article.source.name}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-medium line-clamp-2">{article.title}</h3>
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={() => toggleFavorite(article)}
              className={`text-xs flex items-center gap-1 ${liked ? 'text-yellow-500' : 'text-gray-500'}`}
            >
              <Bookmark size={14} fill={liked ? 'currentColor' : 'none'} />
              {liked ? 'Saved' : 'Save'}
            </button>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-xs"
            >
              Read →
            </a>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      layout
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col transition-all hover:shadow-xl h-full"
      whileHover={{ y: -5 }}
    >
      {article.urlToImage ? (
        <img src={article.urlToImage} alt={article.title} className="h-52 w-full object-cover" />
      ) : (
        <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed w-full h-52" />
      )}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold line-clamp-2">{article.title}</h2>
          <button
            onClick={() => toggleFavorite(article)}
            className={`p-1.5 rounded-full ${
              liked
                ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500'
                : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Bookmark size={18} fill={liked ? 'currentColor' : 'none'} />
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{article.description}</p>
        <div className="mt-auto pt-3 flex justify-between items-center">
          <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{article.source.name}</span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
          >
            Read More
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ContentCard
