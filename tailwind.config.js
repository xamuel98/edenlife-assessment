/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dgi-gray-light': '#F5F5F5',
        'dgi-gray-dark': '#5A6774',
      },
    },
  },
  plugins: [],
}