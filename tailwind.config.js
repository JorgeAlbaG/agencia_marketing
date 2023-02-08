/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "paleblue-button":'#5065A8'
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline = {
          '.underline': {
              'textDecoration': 'underline',
              'text-decoration-color': '5065A8',
          },
      }
      addUtilities(extendUnderline)
  }
  ],
}
