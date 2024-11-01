module.exports = {
  plugins: [
    require('postcss-nested-ancestors'),
    require('postcss-nested'),
    require('rfs'),
    require('postcss-import')({
      root: './assets/css',
    }),
    require('tailwindcss'),
    require('postcss-viewport-unit-fallback'),
    require('autoprefixer')({
      overrideBrowserslist: ['>1%']
    })
  ]
}
