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
      {/* Premium Sticky Header */}
      <div className="sticky top-0 bg-gradient-to-r from-white/90 via-olive-50/80 to-white/90 backdrop-blur-md z-20 shadow-mediterranean border-b border-white/20">
        <div className="px-4 py-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              {/* Main Title with Premium Styling */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-terracotta-400 to-transparent"></div>
                  <h1 className="text-elegant text-4xl font-bold text-olive-800">
                    {translations.title}
                  </h1>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent via-terracotta-400 to-transparent"></div>
                </div>
                <p className="text-olive-600 text-base font-light leading-relaxed max-w-lg mx-auto">
                  {translations.subtitle}
                </p>
                
                {/* Decorative elements */}
                <div className="flex justify-center mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-terracotta-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-mediterranean-400 rounded-full animate-bounce-gentle"></div>
                    <div className="w-2 h-2 bg-sunset-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-4 flex-shrink-0">
              <LanguageToggle language={language} setLanguage={setLanguage} />
            </div>
          </div>
        </div>

        {/* Premium Category Filters */}
        <div className="px-4 pb-6">
          <div className="max-w-4xl mx-auto">
            {/* Filter Header */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 text-olive-600 text-sm font-medium">
                <div className="w-3 h-px bg-olive-300"></div>
                <span>Κατηγορίες Μενού</span>
                <div className="w-3 h-px bg-olive-300"></div>
              </div>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`group relative overflow-hidden px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-terracotta-500 to-sunset-500 text-white shadow-warm-glow scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-olive-700 hover:bg-white hover:text-olive-800 shadow-soft hover:shadow-taverna hover:scale-105 border border-olive-200/50'
                }`}
              >
                <span className="relative z-10">{translations.allCategories}</span>
                {selectedCategory === 'all' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-sunset-600 to-terracotta-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
              
              {categories.map((category, index) => (
                <button
                  key={category.title}
                  onClick={() => setSelectedCategory(category.title)}
                  className={`group relative overflow-hidden px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category.title
                      ? 'bg-gradient-to-r from-terracotta-500 to-sunset-500 text-white shadow-warm-glow scale-105'
                      : 'bg-white/80 backdrop-blur-sm text-olive-700 hover:bg-white hover:text-olive-800 shadow-soft hover:shadow-taverna hover:scale-105 border border-olive-200/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{category.title}</span>
                  {selectedCategory === category.title && (
                    <div className="absolute inset-0 bg-gradient-to-r from-sunset-600 to-terracotta-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Menu Content */}
      <div className="px-4 pb-12 space-y-12">
        {filteredCategories.map((category, categoryIndex) => (
          <div 
            key={category.title} 
            className="animate-fade-in-up"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            {/* Elegant Category Header */}
            <div className="category-header">
              <div className="flex items-center justify-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-terracotta-300 to-transparent"></div>
                <h2 className="text-elegant text-3xl font-semibold text-olive-800 text-center px-4">
                  {category.title}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-terracotta-300 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="flex justify-center mt-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-terracotta-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-sunset-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-mediterranean-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>

            {/* Premium Items Grid */}
            <div className="space-y-4">
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