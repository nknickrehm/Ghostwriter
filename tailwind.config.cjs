const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './*.hbs',
    './partials/*.hbs',
    './assets/js/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
      maxWidth: {
        '1/4': '25%',
        '1/3': '33.33%',
        '1/2': '50%',
        '2/3': '66.66%',
        '3/4': '75%',
      },
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1.2rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/3': '33.33%',
      '1/2': '50%',
      '2/3': '66.66%',
      '3/4': '75%',
      'full': '100%',
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
