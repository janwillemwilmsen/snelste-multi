module.exports = {
  mode: 'jit',
  purge: [
    './**/*.js',
    './**/*.11ty.js',
    './**/*.njk',
    './*.njk'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
