'use client'

import { usePreferences } from '../context/PreferencesContext'

const PreferencesSelector = () => {
  const { categories, toggleCategory } = usePreferences()
  const allCategories = ['Technology', 'Sports', 'Finance', 'Movies']

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 mb-4">
      <h2 className="text-lg font-semibold mb-3">🎯 Select Preferences</h2>
      <div className="flex flex-wrap gap-3">
        {allCategories.map((cat) => (
          <label
            key={cat}
            className="flex items-center space-x-2 text-sm cursor-pointer"
          >
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
    </div>
  )
}

export default PreferencesSelector
