'use client'

import { usePreferences } from '../context/PreferencesContext'

const Sidebar = () => {
  const { categories, toggleCategory } = usePreferences()
  const allCategories = ['Technology', 'Sports', 'Finance', 'Movies']

  return (
    <aside className="w-64 hidden md:block min-h-screen bg-gray-50 text-black dark:bg-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700 p-6">
      <h2 className="font-semibold text-xl mb-6">🎯 Preferences</h2>

      <div className="space-y-3">
        {allCategories.map((cat) => (
          <label key={cat} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={categories.includes(cat)}
              onChange={() => toggleCategory(cat)}
              className="accent-blue-500"
            />
            <span>{cat}</span>
          </label>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
