'use client'

import SearchBar from './SearchBar'
import useDarkMode from '../hooks/useDarkMode'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-white">
        
        {/* Logo and Brand */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-8"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
            <span className="text-2xl font-bold tracking-tight">MyDashboard</span>
          </Link>

          {/* Toggle for mobile */}
          <button
            onClick={toggleDarkMode}
            className="md:hidden p-2 rounded-full hover:bg-white/20 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-3 text-sm font-medium">
          <Link
            href="/"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            🏠 Home
          </Link>
          <Link
            href="/trending"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            📈 Trending
          </Link>
          <Link
            href="/favourites"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            💖 Favorites
          </Link>
          <Link
            href="/recommendations"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            🎬 Recommendations
          </Link>
        </nav>

        {/* Search + Theme Toggle */}
        <div className="flex items-center gap-4">
          <SearchBar />
          <button
            onClick={toggleDarkMode}
            className="hidden md:inline-flex p-2 rounded-full hover:bg-white/20 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
