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
      },
      colors: {
        'warm-orange': '#ff6b35',
        'warm-cream': '#fff8f5',
        'warm-brown': '#8b4513',
        'warm-gray': '#f5f5f5'
      }
    },
  },
  plugins: [],
} 