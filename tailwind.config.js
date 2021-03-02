module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ], //https://markus.oberlehner.net/blog/setting-up-tailwind-css-with-vue/
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ],
}
