/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        cw: '96%',
      },
       height: {
        ch: '91%',
      }, 
    },
  },
  plugins: [],
}

