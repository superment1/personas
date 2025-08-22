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
        crossfit: ['Crossfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        'marquee-fast': 'marquee 5s linear infinite',
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        
      })
    }
  ],
}
