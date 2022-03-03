module.exports = {
  content: ['index.html'],
  theme: {
    screens: {
      'sm': {'max': '767px'},

      'md': {'max': '1023px'},

      'lg': {'max': '1279px'}
    },
    extend: {
      width: {
        'agency': '75.05%'
      },
      maxWidth: {
        'agency': '1440px'
      },
      colors: {
        'agency-dark-gray': '#26272d',
        'agency-light-gray': '#9fa3a7',
        'agency-light-green': '#6fc754',
        'agency-blue': '#267df4'
      },
      fontFamily: {
        'agency-font': "'Montserrat', sans-serif",
        'fa-free': "'Font Awesome 5 Free'",
        'fa-brands': "'Font Awesome 5 Brands'"
      }
    },
  },
  plugins: [],
}
