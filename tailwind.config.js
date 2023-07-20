/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home': "url('../src/assets/background.jpg')"
      }
    },
  },
  plugins: [],
}