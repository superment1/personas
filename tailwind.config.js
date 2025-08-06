// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skin: '#E1DCCD',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        gelasio: ['Gelasio', 'serif'],
        crossfit: ['Crossfit', 'sans-serif']
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        
      })
    }
  ],
}
