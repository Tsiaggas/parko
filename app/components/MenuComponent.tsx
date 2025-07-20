'use client'

import { useState } from 'react'
import MenuItemCard from './MenuItemCard'
import LanguageToggle from './LanguageToggle'
import Footer from './Footer'

interface MenuItem {
  name: string
  price: number
  slug: string
}

interface Category {
  title: string
  items: MenuItem[]
}

interface MenuComponentProps {
  categories: Category[]
  language: string
  setLanguage: (lang: string) => void
  translations: any
}

export default function MenuComponent({ categories, language, setLanguage, translations }: MenuComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(category => category.title === selectedCategory)

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Header */}
      <div className="sticky top-0 bg-warm-cream/95 backdrop-blur-sm z-10 shadow-sm">
        <div className="px-4 py-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-center text-warm-brown mb-2">
                {translations.title}
              </h1>
              <p className="text-center text-gray-600 text-sm">
                {translations.subtitle}
              </p>
            </div>
            <div className="ml-4">
              <LanguageToggle language={language} setLanguage={setLanguage} />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-warm-orange text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
                          >
                {translations.allCategories}
              </button>
            {categories.map(category => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.title
                    ? 'bg-warm-orange text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="px-4 pb-6">
        {filteredCategories.map(category => (
          <div key={category.title} className="mb-8">
            <h2 className="text-2xl font-bold text-warm-brown mb-4 text-center">
              {category.title}
            </h2>
            <div className="space-y-3">
              {category.items.map(item => (
                <MenuItemCard 
                  key={item.slug} 
                  item={item} 
                  translations={translations}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <Footer language={language} />
    </div>
  )
} 