/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '640px'},
        'md': {'max': '768px'},
        'lg': {'max': '1070px'},
        'xl': {'max': '1440px'},
        '2xl': {'min': '1441px'}
      },

      fontFamily: {
        vietnam: ['Be Vietnam Pro', 'sans-serif']
      },

      colors: {
        'Very-Dark-Blue': 'hsl(228, 39%, 23%)',
        'Dark-Grayish-Blue': 'hsl(227, 12%, 61%)',  //gray light sado no hwDER HOVER
        'Vary-Light-Gray': 'hsl(233, 12%, 13%)'//
      },
      backgroundColor: {
        'Dark-Blue': 'hsl(233, 12%, 13%)',
        'Bright-Red': 'hsl(12, 88%, 59%)',
        "Vary-Light-Gray": "hsl(0, 0%, 98%)"
      }
    },
  },
  plugins: [],
}

// 'hsl(228, 39%, 23%)',