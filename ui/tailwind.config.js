/*
 * Copyright (c) 2019, Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

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
        "7.5": ['1.875rem'],
        "170": ['42.5rem'],
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
