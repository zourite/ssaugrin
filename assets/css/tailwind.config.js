module.exports = {
    theme: {
      purge: {
        content: ['./layouts/**/*.html'],
        options: {
          whitelist: [],
        }
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1280px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1400px',
        // => @media (min-width: 1280px) { ... }
      },
      extend: {
        colors: {
          'drk-green-octo': '#114b5f',
          'lgt-green-octo': '#028090',
          'light': '#fafafa',
          'dragon': '#c33c54',
        }
      }
    },
    variants: {},
    plugins: [
      require('tailwindcss-animatecss')({
            classes: ['animate__animated', 'animate__fadeIn', 'animate__bounceIn', 'animate__lightSpeedOut', 'animate__slideInDown'],
            settings: {
              animatedSpeed: 1000,
              heartBeatSpeed: 1000,
              hingeSpeed: 2000,
              bounceInSpeed: 750,
              bounceOutSpeed: 750,
              animationDelaySpeed: 1000
            },
            variants: ['responsive', 'hover', 'reduced-motion'],
          }),
    ]
  }