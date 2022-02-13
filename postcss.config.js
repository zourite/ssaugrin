module.exports = {    
  
  plugins: [
    require('postcss-nested-ancestors'),
    require('postcss-nested'),        
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')({
      overrideBrowserslist: ['>1%']
    })
  ]

}