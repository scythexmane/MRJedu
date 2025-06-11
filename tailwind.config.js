/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D92329',
        primaryHover: '#B71C1F',
        borderInput: '#F4F4F4',
        placeholder: '#A3A3A3',
        footerBg: '#121212',
        bodyBg: '#FFFFFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        md: '6px',            // радиус по макету
      },
    },
  },
  plugins: [],
};
