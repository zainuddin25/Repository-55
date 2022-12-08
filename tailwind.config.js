/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'black' : '#1e1e2c',
        'white' : '#dfdfe6',
        'black-secondary' : '#242636',
        'blue' : '#0277fa',
        'pure-white' : "#fff"
      }, 
      fontFamily : {
        'berkshire' : ['Berkshire Swash']
      }
    },
  },
  plugins: [],
}
