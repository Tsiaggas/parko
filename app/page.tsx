'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
            {/* 🔥 GRILL FIRE HEADER 🔥 */}
      <div className="relative overflow-hidden header-with-fire">
        {/* Fire Animation Container */}
        <div className="fire-container">
          {/* Animated Fire Flames */}
          <div className="fire-flame"></div>
          <div className="fire-flame"></div>
          <div className="fire-flame"></div>
          <div className="fire-flame"></div>
          
          {/* Floating Embers */}
          <div className="ember"></div>
          <div className="ember"></div>
          <div className="ember"></div>
          <div className="ember"></div>
          
          {/* Fire Glow Effect */}
          <div className="fire-glow"></div>
        </div>
        
        {/* Main Content (Above Fire) */}
        <div className="relative px-4 py-6 text-center z-10">
          <div className="inline-flex items-center gap-3 mb-4">
            {/* Enhanced Decorative Lines with Fire Colors */}
            <div className="w-2 h-6 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400 rounded-full shadow-warm animate-pulse"></div>
            
            {/* Brand Logo/Text */}
            <div className="relative">
              <Image
                src="/images/parko.png"
                alt="Ψητοπωλείο το Πάρκο"
                width={200}
                height={60}
                className="object-contain max-w-full h-auto filter drop-shadow-md"
                priority
                quality={95}
                onError={(e) => {
                  // Fallback to text if image fails
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement
                  if (fallback) fallback.style.display = 'block'
                }}
              />
              <h1 className="text-elegant text-2xl text-orange-800 font-semibold hidden drop-shadow-sm">
                Ψητοπωλείο το Πάρκο
              </h1>
            </div>
            
            <div className="w-2 h-6 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 rounded-full shadow-warm animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Enhanced Subtitle with Fire Theme */}
          <p className="text-orange-700 text-base font-light max-w-md mx-auto leading-relaxed drop-shadow-sm">
            Γεύσεις που ξυπνούν αναμνήσεις, φτιαγμένες με <span className="text-red-600 font-medium">φωτιά</span> και παράδοση
          </p>
          
          {/* Fire Emojis for Extra Effect */}
          <div className="flex justify-center gap-2 mt-3 text-xl">
            <span className="animate-bounce">🔥</span>
            <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>🥩</span>
            <span className="animate-bounce" style={{ animationDelay: '1s' }}>🔥</span>
          </div>
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