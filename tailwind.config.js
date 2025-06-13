/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-blue': 'rgb(0, 122, 255)',
        'brand-blue-light': 'rgba(0, 122, 255, 0.1)',
        'health-green': 'rgb(52, 199, 89)',
        'health-yellow': 'rgb(255, 204, 0)',
        'health-red': 'rgb(255, 69, 58)',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'soft-hover': '0 6px 16px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'xl': '1rem', // 16px
        '2xl': '1.25rem', // 20px
        '3xl': '1.5rem', // 24px
      },
    },
  },
  plugins: [],
}