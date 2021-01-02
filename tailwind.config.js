const defaultTheme = require('tailwindcss/defaultTheme')
const aspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Hero', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        blue: '#01AFEF',
        indigo: '#2F3392',
        'dark-gray': '#4D4D4D',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [aspectRatio],
}
