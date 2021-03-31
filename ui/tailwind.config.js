const colors = require('tailwindcss/colors');

module.exports = {
  purge: [], // './src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#4c6fea',
        trueGray: colors.trueGray,
        blueGray: colors.blueGray,
      },
      fontFamily: {
        'alata': ['Alata'],
      },
      spacing: {
        "px25": ['25px'],
        "px30": ['30px'],
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
