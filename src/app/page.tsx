// ✅ File: src/app/page.tsx
'use client'

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
// import Recommendations from '@/components/Recommendations'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Feed />
          {/* <Recommendations /> */}
        </main>
      </div>
    </div>
  )
}
