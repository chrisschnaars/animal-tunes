const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['system-ui', 'sans-serif'],
      serif: ['NewsReader', 'serif'],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hover-focus', ['&:hover', '&:focus']);
    }),
  ],
}