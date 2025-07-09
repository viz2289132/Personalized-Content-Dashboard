'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

// Preferences structure
type Preferences = {
  categories: string[]
  toggleCategory: (category: string) => void
}

// Default values
const defaultPreferences: Preferences = {
  categories: [],
  toggleCategory: () => {},
}

// Create context
const PreferencesContext = createContext<Preferences>(defaultPreferences)

// Context provider component
export const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<string[]>([])

  // Load saved categories on first render
  useEffect(() => {
    const stored = localStorage.getItem('selectedCategories')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) setCategories(parsed)
      } catch (err) {
        console.error('Invalid JSON in localStorage', err)
      }
    }
  }, [])

  // Save to localStorage whenever categories change
  useEffect(() => {
    localStorage.setItem('selectedCategories', JSON.stringify(categories))
  }, [categories])

  const toggleCategory = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  return (
    <PreferencesContext.Provider value={{ categories, toggleCategory }}>
      {children}
    </PreferencesContext.Provider>
  )
}

// Hook to access preferences in other components
export const usePreferences = () => useContext(PreferencesContext)
