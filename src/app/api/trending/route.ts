// src/app/api/trending/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const mockTrending = [
    {
      title: 'AI is changing everything',
      description: 'Explore how artificial intelligence is impacting our world.',
      url: 'https://example.com/ai-trend',
      urlToImage: 'https://via.placeholder.com/500x300',
      source: { name: 'TechCrunch' },
    },
    {
      title: 'Top 10 Movies in 2025',
      description: 'Check out the most popular movies trending now.',
      url: 'https://example.com/top-movies',
      urlToImage: 'https://via.placeholder.com/500x300',
      source: { name: 'IMDB' },
    },
  ]

  return NextResponse.json({ articles: mockTrending })
}
