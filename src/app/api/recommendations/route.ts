// app/api/recommendations/route.ts
import { NextResponse } from 'next/server'

const OMDB_API_KEY = process.env.OMDB_API_KEY

// Define allowed genres
const allowedGenres = ['action', 'comedy', 'horror', 'drama', 'romance'] as const
type Genre = typeof allowedGenres[number]

const movieTitles: Record<Genre, string[]> = {
  action: ['John Wick', 'Mad Max', 'Die Hard'],
  comedy: ['The Hangover', 'Superbad', 'Step Brothers'],
  horror: ['The Conjuring', 'Get Out', 'Hereditary'],
  drama: ['The Shawshank Redemption', 'Forrest Gump', 'Fight Club'],
  romance: ['The Notebook', 'La La Land', 'Titanic'],
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const inputGenre = (body.genre || 'action').toLowerCase()

    const genre: Genre = allowedGenres.includes(inputGenre) ? inputGenre : 'action'

    const fetchMovie = async (title: string) => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(title)}`
      )
      const data = await res.json()

      return {
        title: data.Title,
        description: data.Plot,
        url: `https://www.imdb.com/title/${data.imdbID}`,
        urlToImage: data.Poster,
        source: { name: 'OMDB' },
      }
    }

    const movies = await Promise.all(movieTitles[genre].map(fetchMovie))

    return NextResponse.json({ movies })
  } catch (error) {
    console.error('Recommendation API error:', error)
    return NextResponse.json({ error: 'Failed to fetch recommendations' }, { status: 500 })
  }
}
