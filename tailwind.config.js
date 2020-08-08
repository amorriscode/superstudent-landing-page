module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ss-blue': '#59C8D9',
        'ss-pink': '#FB8D89',
        'ss-purple': '#BD96EE',
        'ss-gray': '#4F4F4F',
      },
      fontFamily: {
        'logo': ['"Fjalla One"', 'sans-serif'],
      }
    },
  },
  variants: {},
  plugins: [],
}
