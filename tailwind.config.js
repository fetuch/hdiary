const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        rose: colors.rose,
        "primary": "#001965",
        "alert": "#ED2C20",
        "secondary": "#9ACA3C",
        "darker-gray": "#787878",
        "lighter-gray": "#AAAAAA",
        "light-blue": "#CBD4F0",
        blue: {
          1000: '#001965',
        },
        green: {
          1000: '#9ACA3C',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize:{
        "xxs": "10px"
      },
      height:{
        "18": "4.5rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};

