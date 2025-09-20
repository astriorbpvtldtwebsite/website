export default {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {
      flexbox: true,
      grid: true,
      remove: false
    },
    'cssnano': {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        minifyFontValues: {
          removeQuotes: false
        }
      }]
    }
  },
};
