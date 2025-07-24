/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        gelasio: ['Gelasio', 'serif'],
        crossfit: ['Crossfit', 'sans-serif']
      },
    },
  },
  plugins: [],
}