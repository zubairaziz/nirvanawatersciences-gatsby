const defaultTheme = require('tailwindcss/defaultTheme')
const aspectRatio = require('@tailwindcss/aspect-ratio')
const forms = require('@tailwindcss/forms')

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
      spacing: {
        108: '27.5rem',
        120: '30rem',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      borderOpacity: ['active'],
    },
  },
  plugins: [aspectRatio, forms],
}
