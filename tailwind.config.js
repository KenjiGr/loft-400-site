module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'nav': '#111111',
        'selected-text': '#333',
        'theme': '#077',
        'secondary': '#077',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans serif']
      },
      backgroundImage: {
        'main-bg': "url('https://images.unsplash.com/photo-1576482921454-776d28ab1bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80')"
      }
    },
  },
  plugins: [],
}
