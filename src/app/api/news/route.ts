// src/app/api/news/route.ts

import { NextResponse } from 'next/server'

const CATEGORY_TO_QUERY: Record<string, string> = {
  Technology: 'technology',
  Sports: 'sports',
  Finance: 'business',
  Movies: 'entertainment',
}

export async function POST(req: Request) {
  const { categories } = await req.json()

  const apiKey = process.env.NEWS_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not set' }, { status: 500 })
  }

  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return NextResponse.json({ articles: [] })
  }

  const fetchPromises = categories.map((cat) => {
    const query = CATEGORY_TO_QUERY[cat] || cat.toLowerCase()
    return fetch(
      `https://newsapi.org/v2/top-headlines?category=${query}&language=en&pageSize=5&apiKey=${apiKey}`
    ).then((res) => res.json())
  })

  const results = await Promise.all(fetchPromises)
  const allArticles = results.flatMap((res) => res.articles || [])

  return NextResponse.json({ articles: allArticles })
}
