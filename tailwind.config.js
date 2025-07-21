/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'greek': ['Georgia', 'Times', 'serif'],
        'display': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'elegant': ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        // Premium Greek-inspired palette
        'warm-orange': '#ff6b35',
        'warm-cream': '#fff8f5',
        'warm-brown': '#8b4513',
        'warm-gray': '#f5f5f5',
        
        // New sophisticated colors
        'aegean': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'mediterranean': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        'olive': {
          50: '#f7f8f3',
          100: '#e8eee2',
          200: '#d2ddc7',
          300: '#b4c5a4',
          400: '#92a67e',
          500: '#748c5f',
          600: '#5c6f4a',
          700: '#48563c',
          800: '#3b4632',
          900: '#32392c',
        },
        'terracotta': {
          50: '#fef7ed',
          100: '#feecd4',
          200: '#fed6a8',
          300: '#fd9a5b',
          400: '#fb7518',
          500: '#ea570c',
          600: '#db4507',
          700: '#b6360a',
          800: '#922c10',
          900: '#78260f',
        },
        'sunset': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      backgroundImage: {
        'greek-gradient': 'linear-gradient(135deg, #fef7ed 0%, #fff8f5 50%, #f0f9ff 100%)',
        'taverna-sunset': 'linear-gradient(135deg, #fed7aa 0%, #fdba74 50%, #fb923c 100%)',
        'olive-mist': 'linear-gradient(135deg, #f7f8f3 0%, #e8eee2 50%, #d2ddc7 100%)',
        'mediterranean-breeze': 'linear-gradient(135deg, #fefce8 0%, #fef9c3 30%, #e0f2fe 100%)',
      },
      boxShadow: {
        'greek': '0 4px 6px -1px rgba(139, 69, 19, 0.1), 0 2px 4px -1px rgba(139, 69, 19, 0.06)',
        'taverna': '0 10px 15px -3px rgba(251, 146, 60, 0.1), 0 4px 6px -2px rgba(251, 146, 60, 0.05)',
        'mediterranean': '0 20px 25px -5px rgba(14, 165, 233, 0.1), 0 10px 10px -5px rgba(14, 165, 233, 0.04)',
        'warm-glow': '0 0 20px rgba(251, 146, 60, 0.15)',
        'soft-elevation': '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'warm': '0 4px 6px -1px rgba(251, 146, 60, 0.1), 0 2px 4px -1px rgba(251, 146, 60, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-warm': 'pulseWarm 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateY(0px)' },
        },
        pulseWarm: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(251, 146, 60, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(251, 146, 60, 0.25)' },
        }
      }
    },
  },
  plugins: [],
} 