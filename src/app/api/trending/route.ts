// app/api/trending/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
    const mockTrending = [
        {
          title: 'AI Breakthrough: New Model Surpasses Human Performance',
          description: 'Researchers develop AI that outperforms humans in complex reasoning tasks',
          url: 'https://example.com/ai-breakthrough',
          urlToImage: 'https://picsum.photos/seed/ai/400/250',
          source: { name: 'Tech Today' },
        },
        {
          title: 'Stock Market Hits All-Time High',
          description: 'Global markets surge as economic recovery exceeds expectations',
          url: 'https://example.com/market-high',
          urlToImage: 'https://picsum.photos/seed/stock/400/250',
          source: { name: 'Financial Times' },
        },
        {
          title: 'Championship Finals: Underdog Team Wins Title',
          description: 'Unexpected victory in the season finale shocks sports world',
          url: 'https://example.com/sports-victory',
          urlToImage: 'https://picsum.photos/seed/sports/400/250',
          source: { name: 'Sports Daily' },
        },
        {
          title: 'New Climate Change Report Released',
          description: 'Scientists warn of accelerating effects of global warming',
          url: 'https://example.com/climate-report',
          urlToImage: 'https://picsum.photos/seed/climate/400/250',
          source: { name: 'Environmental News' },
        },
        {
          title: 'Streaming Platform Announces Original Series',
          description: 'Major streaming service reveals lineup of new exclusive shows',
          url: 'https://example.com/streaming-shows',
          urlToImage: 'https://picsum.photos/seed/streaming/400/250',
          source: { name: 'Entertainment Weekly' },
        }
      ]
      
  return NextResponse.json({ articles: mockTrending })
}