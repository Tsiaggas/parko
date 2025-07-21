'use client'

import { Dispatch, SetStateAction } from 'react'

interface LanguageToggleProps {
  language: 'el' | 'en' | 'bg'
  setLanguage: Dispatch<SetStateAction<'el' | 'en' | 'bg'>>
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-soft border border-white/40">
      <button
        onClick={() => setLanguage('el')}
        className={`group relative overflow-hidden px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
          language === 'el'
            ? 'bg-gradient-to-r from-terracotta-500 to-sunset-500 text-white shadow-warm scale-105'
            : 'text-olive-600 hover:text-olive-800 hover:bg-olive-50/50 hover:scale-105'
        }`}
      >
        <span className="relative z-10 flex items-center gap-1">
          <span className="text-base">🇬🇷</span>
          <span className="font-bold">ΕΛ</span>
        </span>
        {language === 'el' && (
          <div className="absolute inset-0 bg-gradient-to-r from-sunset-600 to-terracotta-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className={`group relative overflow-hidden px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
          language === 'en'
            ? 'bg-gradient-to-r from-terracotta-500 to-sunset-500 text-white shadow-warm scale-105'
            : 'text-olive-600 hover:text-olive-800 hover:bg-olive-50/50 hover:scale-105'
        }`}
      >
        <span className="relative z-10 flex items-center gap-1">
          <span className="text-base">🇬🇧</span>
          <span className="font-bold">EN</span>
        </span>
        {language === 'en' && (
          <div className="absolute inset-0 bg-gradient-to-r from-sunset-600 to-terracotta-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
      </button>
      
      <button
        onClick={() => setLanguage('bg')}
        className={`group relative overflow-hidden px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
          language === 'bg'
            ? 'bg-gradient-to-r from-terracotta-500 to-sunset-500 text-white shadow-warm scale-105'
            : 'text-olive-600 hover:text-olive-800 hover:bg-olive-50/50 hover:scale-105'
        }`}
      >
        <span className="relative z-10 flex items-center gap-1">
          <span className="text-base">🇧🇬</span>
          <span className="font-bold">BG</span>
        </span>
        {language === 'bg' && (
          <div className="absolute inset-0 bg-gradient-to-r from-sunset-600 to-terracotta-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
      </button>
    </div>
  )
} 