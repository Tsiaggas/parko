'use client'

import { Dispatch, SetStateAction } from 'react'

interface LanguageToggleProps {
  language: 'el' | 'en' | 'bg'
  setLanguage: Dispatch<SetStateAction<'el' | 'en' | 'bg'>>
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-0.5 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-soft border border-white/40">
      <button
        onClick={() => setLanguage('el')}
        className={`group relative overflow-hidden w-8 h-8 rounded-full text-xs font-semibold transition-all duration-300 flex items-center justify-center ${
          language === 'el'
            ? 'bg-gradient-to-r from-terracotta-500 to-sunset-500 text-white shadow-warm scale-110'
            : 'text-olive-600 hover:text-olive-800 hover:bg-olive-50/50 hover:scale-105'
        }`}
      >
        <span className="relative z-10 text-sm">🇬🇷</span>
        {language === 'el' && (
          <div className="absolute inset-0 bg-gradient-to-r from-sunset-600 to-terracotta-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        )}
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className={`group relative overflow-hidden w-8 h-8 rounded-full text-xs font-semibold transition-all duration-300 flex items-center justify-center ${
          language === 'en'
            ? 'bg-gradient-to-r from-terracotta-500 to-sunset-500 text-white shadow-warm scale-110'
            : 'text-olive-600 hover:text-olive-800 hover:bg-olive-50/50 hover:scale-105'
        }`}
      >
        <span className="relative z-10 text-sm">🇬🇧</span>
        {language === 'en' && (
          <div className="absolute inset-0 bg-gradient-to-r from-sunset-600 to-terracotta-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        )}
      </button>
      
      <button
        onClick={() => setLanguage('bg')}
        className={`group relative overflow-hidden w-8 h-8 rounded-full text-xs font-semibold transition-all duration-300 flex items-center justify-center ${
          language === 'bg'
            ? 'bg-gradient-to-r from-terracotta-500 to-sunset-500 text-white shadow-warm scale-110'
            : 'text-olive-600 hover:text-olive-800 hover:bg-olive-50/50 hover:scale-105'
        }`}
      >
        <span className="relative z-10 text-sm">🇧🇬</span>
        {language === 'bg' && (
          <div className="absolute inset-0 bg-gradient-to-r from-sunset-600 to-terracotta-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        )}
      </button>
    </div>
  )
} 