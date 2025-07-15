'use client'

import { usePreferences } from '../context/PreferencesContext'
import { Settings, Monitor, Trophy, DollarSign, Film } from 'lucide-react'
import { useState } from 'react'

const Sidebar = () => {
  const { categories, toggleCategory } = usePreferences()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Reorder categories to ensure Technology is first
  const categoryItems = [
    { name: 'Technology', icon: <Monitor className="h-4 w-4" /> },
    { name: 'Sports', icon: <Trophy className="h-4 w-4" /> },
    { name: 'Finance', icon: <DollarSign className="h-4 w-4" /> },
    { name: 'Movies', icon: <Film className="h-4 w-4" /> }
  ].sort((a, b) => {
    // Force Technology to be first
    if (a.name === 'Technology') return -1
    if (b.name === 'Technology') return 1
    return 0
  })

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg"
        >
          <Settings className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Desktop and Mobile */}
      <aside className={`
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transform transition-transform duration-300 ease-in-out
        fixed md:relative z-40 flex flex-col w-72 h-screen bg-white/90 dark:bg-gray-900/90 
        backdrop-blur-lg border-r border-gray-200/50 dark:border-gray-800/50
      `}>
        {/* Sidebar Header */}
        <div className="p-5 border-b border-gray-200/50 dark:border-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <Settings className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              Content Preferences
            </h2>
          </div>
        </div>

        {/* Categories Section */}
        <div className="flex-1 p-5 overflow-y-auto">
          <div className="space-y-2">
            {categoryItems.map((item) => {
              const isSelected = categories.includes(item.name)
              return (
                <button
                  key={item.name}
                  onClick={() => toggleCategory(item.name)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                    ${isSelected 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800/50'
                      : 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                    }
                  `}
                >
                  <div className={`
                    p-2 rounded-lg
                    ${isSelected 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                      : 'bg-gray-200/70 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300'
                    }
                  `}>
                    {item.icon}
                  </div>
                  <span className={`font-medium ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
                    {item.name}
                  </span>
                  <div className={`ml-auto h-2 w-2 rounded-full ${isSelected ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`} />
                </button>
              )
            })}
          </div>

          {/* Selected Categories Preview */}
          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Your Selections
            </h3>
            {categories.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span 
                    key={category}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50"
                  >
                    {category}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                No categories selected yet
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-200/50 dark:border-gray-800/50">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            Select at least 2 categories for best results
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar