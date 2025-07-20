'use client'

interface FooterProps {
  language: 'el' | 'en' | 'bg'
}

export default function Footer({ language }: FooterProps) {
  const isGreek = language === 'el'

  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-100 mt-8 py-6">
      <div className="px-4 text-center space-y-3">
        {/* Disclaimer */}
        <div className="text-xs text-gray-500 border border-gray-200 bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-center gap-1 mb-1">
            <span>⚠️</span>
            <span className="font-medium">
              {isGreek ? 'Σημείωση' : 'Note'}
            </span>
          </div>
          <p>
            {isGreek 
              ? 'Οι εικόνες είναι ενδεικτικές και μπορεί να διαφέρουν από το πραγματικό πιάτο.'
              : 'Images are indicative and may differ from the actual dish.'
            }
          </p>
        </div>

        {/* Credits */}
        <div className="text-xs text-gray-400 space-y-1">
          <div className="flex items-center justify-center gap-1">
            <span>💻</span>
            <span>
              {isGreek ? 'Ανάπτυξη:' : 'Development:'}{' '}
              <a 
                href="https://github.com/tsiaggas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-warm-orange hover:text-warm-brown transition-colors underline"
              >
                Sakis Tsiaggas
              </a>
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-1">
            <span>📸</span>
            <span>
              {isGreek ? 'Φωτογραφίες:' : 'Photography:'}{' '}
              <span className="text-gray-600">Κωνσταντίνος Δρουμαλιάς</span>
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-300 pt-2 border-t border-gray-100">
          © 2025 {isGreek ? 'Ψητοπωλείο το Πάρκο' : 'Grill House To Parko'}
        </div>
      </div>
    </footer>
  )
} 