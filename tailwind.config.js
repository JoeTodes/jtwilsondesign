module.exports = {
  theme: {
    gradients: theme => ({
      // Array definition (defaults to linear gradients).

      'whitegrad': [theme('colors.white'), theme('colors.white')]
    }),
    extend: {
      fontFamily: {
        'display': ['Nunito'],
        'body': ['Montserrat']
      },
      colors: {
        'text-green': '#17DDD0',
        'text-blue': '#2F8DF7',
        'ice': {
          100: '#E6F7FF',
          200: '#BFEBFF',
          300: '#99DFFF',
          400: '#4DC6FF',
          500: '#00AEFF',
          600: '#009DE6',
          700: '#006899',
          800: '#004E73',
          900: '#00344D',
        },
        'fullblue': {
          100: '#E6E6FF',
          200: '#BFBFFF',
          300: '#9999FF',
          400: '#4D4DFF',
          500: '#0000FF',
          600: '#0000E6',
          700: '#000099',
          800: '#000073',
          900: '#00004D',
        },
      }
    }
  },
  variants: {
    gradients: ['responsive', 'hover'],
    borderWidth: ['hover'],
    borderColor: ['hover'],
    margin: ['hover']
  },
  plugins: [
    require('tailwindcss-plugins/gradients'),
  ]
}
