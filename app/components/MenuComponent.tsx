'use client'

import { useState, Dispatch, SetStateAction } from 'react'
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
  language: 'el' | 'en' | 'bg'
  setLanguage: Dispatch<SetStateAction<'el' | 'en' | 'bg'>>
  translations: {
    title: string
    subtitle: string
    allCategories: string
    noPhoto: string
    loadingImage: string
  }
}

export default function MenuComponent({ categories, language, setLanguage, translations }: MenuComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(category => category.title === selectedCategory)

  return (
    <div className="min-h-screen bg-greek-gradient">
      {/* Ultra-Compact Mobile Header */}
      <div className="sticky top-0 bg-gradient-to-r from-white/90 via-olive-50/80 to-white/90 backdrop-blur-md z-20 shadow-mediterranean border-b border-white/20">
        <div className="px-3 py-3">
          <div className="flex justify-between items-center gap-2">
            {/* Category Filters - Full Width */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-1.5 justify-center">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`group relative overflow-hidden px-3 py-2 rounded-full font-medium text-xs transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-terracotta-500 to-sunset-500 text-white shadow-warm scale-105'
                      : 'bg-white/80 backdrop-blur-sm text-olive-700 hover:bg-white hover:text-olive-800 shadow-soft hover:scale-105 border border-olive-200/50'
                  }`}
                >
                  <span className="relative z-10">{translations.allCategories}</span>
                </button>
                
                {categories.map((category) => (
                  <button
                    key={category.title}
                    onClick={() => setSelectedCategory(category.title)}
                    className={`group relative overflow-hidden px-3 py-2 rounded-full font-medium text-xs transition-all duration-300 ${
                      selectedCategory === category.title
                        ? 'bg-gradient-to-r from-terracotta-500 to-sunset-500 text-white shadow-warm scale-105'
                        : 'bg-white/80 backdrop-blur-sm text-olive-700 hover:bg-white hover:text-olive-800 shadow-soft hover:scale-105 border border-olive-200/50'
                    }`}
                  >
                    <span className="relative z-10 whitespace-nowrap">{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Language Toggle - Right Side */}
            <div className="flex-shrink-0 ml-2">
              <LanguageToggle language={language} setLanguage={setLanguage} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Optimized Menu Content */}
      <div className="px-3 pb-6 space-y-8">
        {filteredCategories.map((category, categoryIndex) => (
          <div 
            key={category.title} 
            className="animate-fade-in-up"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            {/* Compact Mobile Category Header */}
            <div className="bg-gradient-to-r from-olive-50 to-aegean-50 border-l-4 border-terracotta-400 px-4 py-3 rounded-r-lg shadow-soft mb-4">
              <div className="flex items-center justify-center gap-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-terracotta-300 to-transparent"></div>
                <h2 className="text-elegant text-xl font-semibold text-olive-800 text-center px-2">
                  {category.title}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-terracotta-300 to-transparent"></div>
              </div>
            </div>

            {/* Mobile Optimized Items Grid */}
            <div className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <div
                  key={item.slug}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(categoryIndex * 0.1) + (itemIndex * 0.05)}s` }}
                >
                  <MenuItemCard
                    item={item}
                    index={itemIndex}
                    translations={{
                      noPhoto: translations.noPhoto,
                      loadingImage: translations.loadingImage,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* End Decoration */}
        <div className="flex justify-center pt-8">
          <div className="flex items-center gap-3 text-olive-400">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-olive-300 to-transparent"></div>
            <div className="text-2xl">🌿</div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-olive-300 to-transparent"></div>
          </div>
        </div>
      </div>
      
      <Footer language={language} />
    </div>
  )
} 