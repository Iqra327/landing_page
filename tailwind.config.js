/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #010035 20%, #020056 100%)',
        'gradient' : 'linear-gradient(91.02deg, #9281FF 4.06%, #2200F3 96.16%)',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif']
      },
      fontSize: {
        '16': ['16px', '19.2px'], 
        '14': ['14px', '16.8px'],
        '18': ['18px', '21px'],
        '60': ['60px', '72px'],
        '30': ['30px', '36px'],
        '40': ['40px', '48px']
      },
      colors: {
        'dark-grey': 'var(--dark-grey)',
        'navy-blue': 'rgba(31, 0, 224, 1)',
        'pink-final': 'rgba(248, 26, 132, 1)',
        'light-grey': 'rgba(111, 111, 111, 1)'
      },
      boxShadow: {
        'custom-light': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

