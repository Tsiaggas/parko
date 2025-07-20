'use client'

import { useState, useEffect } from 'react'
import menuData from '../menu.json'
import menuDataEn from '../menu-en.json'
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
  const [language, setLanguage] = useState<'el' | 'en'>('el')

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

  const currentMenuData = language === 'el' ? menuData : menuDataEn
  const t = translations[language]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-warm-cream flex items-center justify-center">
        <div className="text-warm-brown text-xl">{t.loading}</div>
      </div>
    )
  }

  if (!isMobile) {
    return <DesktopWarning language={language} translations={t} />
  }

  return (
    <div className="min-h-screen bg-warm-cream">
      <MenuComponent 
        categories={currentMenuData.categories as Category[]} 
        language={language}
        setLanguage={setLanguage}
        translations={t}
      />
    </div>
  )
} 