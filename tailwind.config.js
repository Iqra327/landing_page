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
        'gradient-pink' : 'linear-gradient(116.04deg, #F81A84 3.64%, #2200F3 95.71%)',
        'gradient-blue' : 'linear-gradient(-89.99deg, rgba(232, 247, 247, 0) 27.06%, #0F004B 65.51%)',
        'gradient-voilet': 'linear-gradient(180deg, #9281FF 0%, #2200F3 100%)'
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif']
      },
      fontSize: {
        '14': ['14px', '16.8px'],
        '18': ['18px', '21px'],
        '60': ['60px', '72px'],
        '30': ['30px', '36px'],
        '40': ['40px', '48px'],
        '100': ['100px', '120px']
      },
      colors: {
        'dark-grey': 'var(--dark-grey)',
        'navy-blue': 'rgba(31, 0, 224, 1)',
        'pink-final': 'rgba(248, 26, 132, 1)',
        'light-grey': 'rgba(111, 111, 111, 1)',
        'gradient-violet' : 'transparent'
      },
      boxShadow: {
        'custom-light': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'lg-custom': '928px',
      },
    },
  },
  variants: {
    extend: {
      backgroundClip: ['hover', 'focus'],
    },
  },
  plugins: [],
}

