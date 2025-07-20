'use client'

import { Dispatch, SetStateAction } from 'react'

interface LanguageToggleProps {
  language: 'el' | 'en' | 'bg'
  setLanguage: Dispatch<SetStateAction<'el' | 'en' | 'bg'>>
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-1 bg-white rounded-full p-1 shadow-sm border border-gray-200">
      <button
        onClick={() => setLanguage('el')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'el'
            ? 'bg-warm-orange text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        🇬🇷 ΕΛ
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-warm-orange text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => setLanguage('bg')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'bg'
            ? 'bg-warm-orange text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        🇧🇬 BG
      </button>
    </div>
  )
} 