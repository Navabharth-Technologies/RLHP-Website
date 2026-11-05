/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rlhp: {
          green: '#236B28',
          darkgreen: '#154219',
          lightgreen: '#EAF4EC',
          accentgreen: '#4CAF50',
          orange: '#E67E22',
          darkorange: '#D35400',
          darkfooter: '#0D2614',
          cream: '#FAF9F5',
          gold: '#F39C12'
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
