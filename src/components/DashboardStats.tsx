'use client'

import { motion } from 'framer-motion'
import { useFavorites } from '@/context/FavoritesContext'
import { usePreferences } from '@/context/PreferencesContext'

const DashboardStats = () => {
  const { favorites } = useFavorites()
  const { categories } = usePreferences()

  const stats = [
    { label: 'Active Categories', value: categories.length },
    { label: 'Saved Favorites', value: favorites.length },
    { label: 'Daily Updates', value: '24+' },
    { label: 'Sources', value: '12' }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.05 }}
        >
          <div className="text-sm font-semibold uppercase tracking-wide opacity-80">
            {stat.label}
          </div>
          <div className="text-3xl font-extrabold mt-2">{stat.value}</div>
        </motion.div>
      ))}
    </div>
  )
}

export default DashboardStats
