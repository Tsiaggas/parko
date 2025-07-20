interface ImageAdjustment {
  objectPosition: string
  objectFit: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none'
  backgroundColor?: string
}

interface ImageAdjustments {
  [slug: string]: ImageAdjustment
}

// Custom image adjustments for specific dishes
export const imageAdjustments: ImageAdjustments = {
  // Πικάντικη σαλάτα - τώρα χρησιμοποιεί contain με warm background
  'pikantiki': {
    objectPosition: 'center center',
    objectFit: 'contain',
    backgroundColor: '#fefcf7'
  },
  
  // Φλωρίνης γεμιστή - παραμένει contain με warm background
  'florinis-gemisti': {
    objectPosition: 'center center',
    objectFit: 'contain',
    backgroundColor: '#fefcf7'
  }
}

// Helper function to get image styles
export const getImageStyles = (slug: string): ImageAdjustment => {
  return imageAdjustments[slug] || {
    objectPosition: 'center center',
    objectFit: 'contain',
    backgroundColor: '#fefcf7' // Very light cream/warm tone that matches the UI
  }
} 