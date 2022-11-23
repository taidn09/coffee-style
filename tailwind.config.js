/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '470px'
      },
      fontFamily: {
        Karla: ['Karla', 'san-serif']
      },
      colors: {
        'light-coffee': '#c89f94'
      },
      keyframes: {
        slidedown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      animation: {
        slidedown: 'slidedown 0.4s ease-in-out'
      }
    },
  },
  plugins: [],
}
