/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fonte': ['Press\\ Start\\ 2P', 'cursive']
      },
      backgroundImage: {
        'papel': "url('/assets/img/papel.jpg')",
      }

    },
  },
  plugins: [],
}