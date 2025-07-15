'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'


export default function Home() {
  const features = [
    {
      title: 'Personalized Feed',
      description: 'Content curated just for you based on your preferences',
      icon: '🎯',
    },
    {
      title: 'Real-time Updates',
      description: 'Get the latest news and trends as they happen',
      icon: '⚡',
    },
    {
      title: 'Smart Organization',
      description: 'Drag-and-drop to customize your dashboard layout',
      icon: '🧩',
    },
    {
      title: 'Multi-platform',
      description: 'News, movies, social media - all in one place',
      icon: '🔀',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">


      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Personalized Content Hub
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Discover, organize, and enjoy content tailored specifically for your interests.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/dashboard"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Explore Dashboard →
          </Link>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-900 rounded-3xl my-16">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <div className="flex items-start mb-8">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Set Your Preferences</h3>
                <p className="text-gray-600 dark:text-gray-300">Choose your favorite categories like tech, sports, or entertainment</p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Discover Content</h3>
                <p className="text-gray-600 dark:text-gray-300">Get personalized recommendations from multiple sources</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Organize & Save</h3>
                <p className="text-gray-600 dark:text-gray-300">Drag-and-drop to arrange your feed and save favorites</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">What Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * item, duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 dark:text-white">Alex Johnson</h4>
                  <p className="text-gray-600 dark:text-gray-400">Tech Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "This dashboard has completely changed how I consume content. I get all my news, movie recommendations, and social updates in one beautifully organized place!"
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Ready to Transform Your Content Experience?
        </h2>
        <Link
          href="/dashboard"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          Go to Dashboard
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Personalized Content Hub. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
