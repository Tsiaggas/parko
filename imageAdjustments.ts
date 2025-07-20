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
  // Πικάντικη σαλάτα - κατέβασμα του πιάτου για καλύτερη θέαση
  'pikantiki': {
    objectPosition: 'center 20%',
    objectFit: 'cover'
  },
  
  // Φλωρίνης γεμιστή - zoom out για κάθετο προϊόν
  'florinis-gemisti': {
    objectPosition: 'center center',
    objectFit: 'contain',
    backgroundColor: '#f9fafb' // Light gray background για contain
  }
}

// Helper function to get image styles
export const getImageStyles = (slug: string): ImageAdjustment => {
  return imageAdjustments[slug] || {
    objectPosition: 'center center',
    objectFit: 'cover'
  }
} 