'use client'

import { useState, useEffect } from 'react'
import menuData from '../menu.json'
import menuDataEn from '../menu-en.json'
import menuDataBg from '../menu-bg.json'
import MenuComponent from './components/MenuComponent'
import DesktopWarning from './components/DesktopWarning'
import { translations } from '../translations'

interface MenuItem {
  name: string
  price: number
  slug: string
}

interface Category {
  title: string
  items: MenuItem[]
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [language, setLanguage] = useState<'el' | 'en' | 'bg'>('el')

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)
      const isSmallScreen = window.innerWidth <= 768
      
      setIsMobile(isMobileDevice || isSmallScreen)
      setIsLoading(false)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const currentMenuData = language === 'el' ? menuData : language === 'en' ? menuDataEn : menuDataBg
  const t = translations[language]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-greek-gradient flex items-center justify-center p-6">
        <div className="card-premium p-8 text-center max-w-sm mx-auto">
          <div className="loading-shimmer w-16 h-16 rounded-full mx-auto mb-4"></div>
          <div className="text-elegant text-2xl text-olive-700 mb-2">{t.loading}</div>
          <div className="text-olive-500 text-sm">Φόρτωση μενού...</div>
        </div>
      </div>
    )
  }

  if (!isMobile) {
    return <DesktopWarning language={language} translations={t} />
  }

  return (
    <div className="min-h-screen bg-greek-gradient">
      {/* Decorative Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta-100/30 via-transparent to-aegean-100/30"></div>
        <div className="relative px-4 py-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-terracotta-400 to-sunset-500 rounded-full"></div>
            <h1 className="text-elegant text-3xl text-olive-800 font-semibold">
              Ψητοπωλείο το Πάρκο
            </h1>
            <div className="w-2 h-8 bg-gradient-to-b from-sunset-500 to-terracotta-400 rounded-full"></div>
          </div>
          <p className="text-olive-600 text-lg font-light max-w-md mx-auto leading-relaxed">
            Γεύσεις που ξυπνούν αναμνήσεις, φτιαγμένες με αγάπη και παράδοση
          </p>
        </div>
      </div>

      <MenuComponent 
        categories={currentMenuData.categories as Category[]} 
        language={language}
        setLanguage={setLanguage}
        translations={t}
      />
      
      {/* Elegant Footer */}
      <div className="mt-12 pb-8 px-4 text-center">
        <div className="inline-flex items-center gap-2 text-olive-500 text-sm">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-olive-300"></div>
          <span className="font-light">Καλή σας όρεξη</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-olive-300"></div>
        </div>
      </div>
    </div>
  )
} 