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
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Main card content */}
      <div 
        className="px-4 py-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        onClick={toggleExpanded}
      >
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 text-lg">
              {item.name}
            </h3>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="font-bold text-warm-orange text-lg">
              {formatPrice(item.price)}
            </span>
            <div className={`transform transition-transform ${
              isExpanded ? 'rotate-180' : 'rotate-0'
            }`}>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded content with image */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-stone-200/60 bg-gradient-to-b from-stone-50 to-stone-100">
          <div className="pt-4">
            {imageLoading ? (
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center animate-pulse">
                <div className="text-gray-500 text-sm flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-warm-orange border-t-transparent rounded-full animate-spin"></div>
                  {translations.loadingImage}
                </div>
              </div>
            ) : imageExists ? (
              <div 
                className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-sm border border-stone-200/60 relative"
                style={{ backgroundColor: imageStyles.backgroundColor }}
              >
                <Image
                  src={currentImageSrc}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="hover:scale-105 transition-all duration-300 object-contain"
                  style={{
                    objectPosition: imageStyles.objectPosition
                  }}
                  quality={90}
                  priority={index < 3} // Priority loading for first 3 items
                  loading={index < 3 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT/9k="
                  onError={() => {
                    // Smart fallback - try different formats
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
              </div>
            ) : (
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg flex flex-col items-center justify-center text-gray-500 border border-stone-200/60">
                <div className="text-5xl mb-3 opacity-50">📷</div>
                <div className="text-sm text-center font-medium">
                  {translations.noPhoto}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {currentImageSrc.split('/').pop()}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 