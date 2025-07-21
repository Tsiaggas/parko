'use client'

import { useState } from 'react'
import Image from 'next/image'
import { getImageStyles } from '../../imageAdjustments'

interface MenuItem {
  name: string
  price: number
  slug: string
}

interface MenuItemCardProps {
  item: MenuItem
  index?: number // Add index for priority loading
  translations: {
    noPhoto: string
    loadingImage: string
  }
}

export default function MenuItemCard({ item, index = 0, translations }: MenuItemCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageExists, setImageExists] = useState<boolean | null>(null)
  const [imageLoading, setImageLoading] = useState(false)
  const [currentImageSrc, setCurrentImageSrc] = useState(`/images/${item.slug}.png`)
  
  // Get custom image styles for this item
  const imageStyles = getImageStyles(item.slug)

  const toggleExpanded = async () => {
    setIsExpanded(!isExpanded)
    
    // Check if image exists when first expanding
    if (!isExpanded && imageExists === null) {
      setImageLoading(true)
      try {
        // Check multiple image formats - PNG first since we're removing backgrounds
        const extensions = ['png', 'jpg', 'jpeg', 'webp']
        let found = false
        
        for (const ext of extensions) {
          const imagePath = `/images/${item.slug}.${ext}`
          const response = await fetch(imagePath, { method: 'HEAD' })
          if (response.ok) {
            setImageExists(true)
            found = true
            break
          }
        }
        
        if (!found) {
          setImageExists(false)
        }
      } catch {
        setImageExists(false)
      }
      setImageLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return `${price.toFixed(2).replace('.', ',')}€`
  }

  return (
    <div className="menu-item-card group">
      {/* Premium Card Content */}
      <div 
        className="cursor-pointer transition-all duration-300 ease-out"
        onClick={toggleExpanded}
      >
        <div className="flex justify-between items-center">
          {/* Dish Name with Enhanced Typography */}
          <div className="flex-1 pr-4">
            <h3 className="text-display text-xl font-semibold text-olive-800 group-hover:text-olive-900 transition-colors duration-200 leading-tight">
              {item.name}
            </h3>
            {/* Subtle description line */}
            <div className="mt-1 flex items-center gap-2">
              <div className="w-6 h-px bg-gradient-to-r from-terracotta-300 to-transparent"></div>
              <span className="text-xs text-olive-500 font-light tracking-wide">🍽️</span>
            </div>
          </div>
          
          {/* Premium Price Badge & Expand Button */}
          <div className="flex items-center gap-4">
            <div className="price-badge">
              {formatPrice(item.price)}
            </div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-olive-200/50 transition-all duration-300 ${
              isExpanded 
                ? 'rotate-180 bg-terracotta-50 border-terracotta-200' 
                : 'group-hover:bg-olive-50 group-hover:border-olive-300'
            }`}>
              <svg className="w-5 h-5 text-olive-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Expanded Content */}
      {isExpanded && (
        <div className="menu-item-expanded mt-4 p-6 rounded-2xl animate-slide-up">
          {/* Content Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-terracotta-400 rounded-full"></div>
              <div className="w-2 h-2 bg-mediterranean-400 rounded-full"></div>
            </div>
            <span className="text-elegant text-lg text-olive-700 font-medium">Εικόνα πιάτου</span>
            <div className="flex-1 h-px bg-gradient-to-r from-olive-200 to-transparent"></div>
          </div>

          {imageLoading ? (
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-olive-50 to-aegean-50 rounded-2xl flex items-center justify-center shadow-soft border border-olive-100/50">
              <div className="text-center">
                <div className="loading-shimmer w-20 h-20 rounded-2xl mx-auto mb-4"></div>
                <div className="text-olive-600 text-sm font-medium">{translations.loadingImage}</div>
                <div className="text-olive-400 text-xs mt-1">Παρακαλώ περιμένετε...</div>
              </div>
            </div>
          ) : imageExists ? (
            <div className="group/image cursor-zoom-in">
              <div 
                className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-mediterranean border-2 border-white/50 relative backdrop-blur-sm"
                style={{ backgroundColor: imageStyles.backgroundColor }}
              >
                {/* Image Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-10"></div>
                
                <Image
                  src={currentImageSrc}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="group-hover/image:scale-110 transition-all duration-500 ease-out object-contain"
                  style={{
                    objectPosition: imageStyles.objectPosition
                  }}
                  quality={90}
                  priority={index < 3}
                  loading={index < 3 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT/9k="
                  onError={() => {
                    const extensions = ['jpg', 'jpeg', 'webp']
                    const currentExt = currentImageSrc.split('.').pop()
                    const nextExt = extensions.find(ext => ext !== currentExt)
                    
                    if (nextExt) {
                      setCurrentImageSrc(`/images/${item.slug}.${nextExt}`)
                    } else {
                      setImageExists(false)
                    }
                  }}
                />
                
                {/* Premium Image Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-olive-200/50 shadow-soft">
                    <span className="text-xs text-olive-600 font-medium">HD</span>
                  </div>
                </div>
              </div>
              
              {/* Image Caption */}
              <div className="mt-3 text-center">
                <div className="text-olive-600 text-sm font-light italic">
                  {item.name} - Φρέσκο και νόστιμο
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-olive-50 via-aegean-50 to-mediterranean-50 rounded-2xl flex flex-col items-center justify-center shadow-soft border-2 border-olive-100/30">
              {/* Elegant No Photo State */}
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-40">🍽️</div>
                <div className="text-olive-600 font-medium mb-2">
                  {translations.noPhoto}
                </div>
                <div className="text-xs text-olive-400 bg-white/50 px-3 py-1 rounded-full border border-olive-200/30">
                  {currentImageSrc.split('/').pop()}
                </div>
              </div>
            </div>
          )}
          
          {/* Bottom decoration */}
          <div className="flex justify-center mt-6 pt-4 border-t border-olive-100/30">
            <div className="flex items-center gap-2 text-olive-400">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-olive-200"></div>
              <span className="text-xs font-light">Φτιαγμένο με αγάπη</span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-olive-200"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 