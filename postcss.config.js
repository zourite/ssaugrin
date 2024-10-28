module.exports = {
  plugins: [
    require('postcss-nested-ancestors'),
    require('postcss-viewport-unit-fallback'),
    require('postcss-nested'),
    require('rfs'),
    require('postcss-import')({
      root: './assets/css',
    }),
    require('tailwindcss'),
    require('autoprefixer')({
      overrideBrowserslist: ['>1%']
    })
  ]
}
