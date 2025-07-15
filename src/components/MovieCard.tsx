'use client'

import { Bookmark } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'

type Movie = {
  title: string
  year: string
  url: string
  urlToImage: string
  source: { name: string }
}

// Helper type to convert Movie to Article-like type for favorites
type FavoriteMovie = {
  title: string
  description: string // Adding empty description for compatibility
  url: string
  urlToImage: string
  source: { name: string }
}

export default function MovieCard({ movie }: { movie: Movie }) {
  const { toggleFavorite, isFavorite } = useFavorites()
  
  // Convert movie to FavoriteMovie type
  const favoriteMovie: FavoriteMovie = {
    ...movie,
    description: '' // Empty description for compatibility
  }

  const isFavorited = isFavorite(favoriteMovie)

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      {/* Movie Poster with Gradient Overlay */}
      {movie.urlToImage ? (
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={movie.urlToImage}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>
      ) : (
        <div className="aspect-[2/3] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">No Image</span>
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={() => toggleFavorite(favoriteMovie)}
        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all ${
          isFavorited 
            ? 'text-yellow-400 bg-yellow-400/20 hover:bg-yellow-400/30'
            : 'text-white/80 bg-black/20 hover:bg-black/30 hover:text-white'
        }`}
        aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Bookmark 
          className={`h-5 w-5 transition-transform ${isFavorited ? 'fill-current' : ''}`}
        />
      </button>

      {/* Movie Info */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-lg font-bold line-clamp-2">{movie.title}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {movie.year}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {movie.source.name}
        </p>

        <a
          href={movie.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium"
        >
          View on IMDb
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </a>
      </div>
    </div>
  )
}