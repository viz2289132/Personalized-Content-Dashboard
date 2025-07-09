'use client'

type Movie = {
  title: string
  year: string
  url: string
  urlToImage: string
  source: { name: string }
}

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col transition-colors">
      {movie.urlToImage && (
        <img
          src={movie.urlToImage}
          alt={movie.title}
          className="w-full h-60 object-cover rounded"
        />
      )}
      <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Year: {movie.year}</p>
      <a
        href={movie.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
      >
        View on IMDb
      </a>
    </div>
  )
}
