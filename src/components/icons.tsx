// components/icons.tsx
'use client'

import { Home, Bookmark, Film, Flame, Sun, Moon, ExternalLink } from 'lucide-react'

export const Icons = {
  logo: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  ),
  home: Home,
  trending: Flame,
  bookmark: Bookmark,
  film: Film,
  sun: Sun,
  moon: Moon,
  externalLink: ExternalLink,
}