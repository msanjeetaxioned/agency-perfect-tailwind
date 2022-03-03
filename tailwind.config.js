module.exports = {
  content: ['index.html'],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
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
