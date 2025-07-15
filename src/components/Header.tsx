'use client'

import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import {  Sparkles, Flame } from 'lucide-react'
import Link from 'next/link'
import SearchBar from './SearchBar'

import { motion, AnimatePresence } from 'framer-motion'
import TrendingSection from './TrendingSection'

const Header = () => {
 
  const { data: session, status } = useSession()
  const [showTrending, setShowTrending] = useState(false)

  return (
    <>
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Nav */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-gray-900 rounded-full p-1.5">
                    <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  ContentHub
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-1">
                <Link 
                  href="/dashboard" 
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  Dashboard
                </Link>
                <Link 
                  href="/favourites" 
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  Favorites
                </Link>
                <Link 
                  href="/recommendations" 
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  Recommendations
                </Link>
              </nav>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <SearchBar />
              </div>

              <button
                onClick={() => setShowTrending(true)}
                className="hidden md:flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Flame className="h-4 w-4" />
                <span>Trending</span>
              </button>

            

              {status === 'loading' ? null : session ? (
                <div className="flex items-center gap-2">
                  <div className="hidden md:flex items-center gap-2">
                    <img
                      src={session.user?.image || ''}
                      alt="avatar"
                      className="h-8 w-8 rounded-full border-2 border-purple-500"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {session.user?.name}
                    </span>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-lg text-white text-sm font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => signIn('google')}
                  className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-lg text-white text-sm font-medium shadow-md hover:shadow-lg transition-all"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Mobile Search and Trending */}
          <div className="mt-3 flex gap-2 md:hidden">
            <SearchBar />
            <button
              onClick={() => setShowTrending(true)}
              className="flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-full"
            >
              <Flame className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Trending Drawer */}
      <AnimatePresence>
        {showTrending && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowTrending(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Flame className="text-orange-500" />
                  Trending Now
                </h2>
                <button
                  onClick={() => setShowTrending(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="p-4">
                <TrendingSection />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header