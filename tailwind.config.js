/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './layouts/**/*.{html,js}',
        './assets/**/*.{html,js}',
        './content/**/*.md',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1200px',
        },
        animatedSettings: {
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
        },
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
        require('tailwindcss-animatecss'),
    ]
}
