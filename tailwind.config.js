module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'nav': '#333',
        'selected-text': '#333',
        'theme': '#3F3FFF',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans serif']
      }
    },
  },
  plugins: [],
}
