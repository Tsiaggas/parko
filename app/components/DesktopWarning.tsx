'use client'

import Footer from './Footer'

interface DesktopWarningProps {
  language: string
  translations: any
}

export default function DesktopWarning({ language, translations }: DesktopWarningProps) {
  return (
    <div className="min-h-screen bg-warm-cream flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">📱</div>
          <h1 className="text-3xl font-bold text-warm-brown mb-4">
            {translations.desktopWarning.title}
          </h1>
          <h2 className="text-xl text-warm-brown mb-6">
            {translations.desktopWarning.subtitle}
          </h2>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-warm-orange">
          <p className="text-lg text-gray-700 mb-4">
            {translations.desktopWarning.message}
          </p>
          <p className="text-sm text-gray-600">
            {translations.desktopWarning.instruction}
          </p>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>📧 {translations.desktopWarning.contact}</p>
          <p>☎️ {translations.desktopWarning.phone}</p>
        </div>
      </div>
      
      <Footer language={language} />
    </div>
  )
} 