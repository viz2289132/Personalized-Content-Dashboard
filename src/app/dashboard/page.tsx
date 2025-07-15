'use client'


import EnhancedSidebar from '@/components/Sidebar' // Updated Sidebar
import Feed from '@/components/Feed'
import DashboardStats from '@/components/DashboardStats'


export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex flex-1 bg-gray-50 dark:bg-gray-950">
        <EnhancedSidebar />
        <main className="flex-1 p-6 overflow-auto space-y-6">
          <DashboardStats />
          
          <Feed />
        </main>
      </div>
    </div>
  )
}
