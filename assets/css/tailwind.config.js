module.exports = {
    theme: {
      purge: {
        content: ['./layouts/**/*.html'],
        options: {
          whitelist: [],
        }
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
    plugins: []
  }