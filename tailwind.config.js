module.exports = {
    content: [
      './layouts/**/*.{html,js}',
      './content/**/*.md',
    ],
    theme: {
      extend: {
        colors: {
          'drk-green-octo': '#114b5f',
          'lgt-green-octo': '#028090',
          'light': '#fafafa',
          'dragon': '#c33c54',
          'blue-deep': '#2c3e50',
        },
        fontFamily: {
          'sans': ['Inter var', 'Helvetica', 'Arial', 'sans-serif']
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