'use client'

import { useState, useEffect } from 'react'
import { useSearch } from '../context/SearchContext'
import useDebounce from '../hooks/useDebounce'

const SearchBar = () => {
  const { setSearchTerm } = useSearch()
  const [input, setInput] = useState('')

  const debounced = useDebounce(input, 400)

  useEffect(() => {
    setSearchTerm(debounced.toLowerCase().trim())
  }, [debounced, setSearchTerm])

  return (
    <input
      type="text"
      placeholder="Search..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="border px-3 py-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none"
    />
  )
}

export default SearchBar
