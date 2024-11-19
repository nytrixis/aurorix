/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#2C3E50',
        mystic: '#8E44AD',
        forest: '#1E824C',
        enchanted: '#F39C12',
        smoke: '#BDC3C7',
        ruby: '#C0392B'
      },
      fontFamily: {
        almendra: ['Almendra', 'serif'],
        harryp: ['HarryPotter', 'sans-serif']
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
