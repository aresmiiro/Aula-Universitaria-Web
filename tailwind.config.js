/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      colors: {
        'purple' : '#b50069',
        'orange' : '#ff8906',
        'bgdark' : '#040010',
        'text-light': '#1b1c1e',
        'text-dark': '#a7a9be',
      },
      fontFamily: {
        primary: ["'Quicksand'", "'sans-serif'"],
        title: [ "'Alegreya Sans'", "sans-serif"],
        subtitle: ["'Lato'", "sans-serif"],
        text: ["'Frank Ruhl Libre'", "serif"],
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(400px, 1fr))',
      },
      
      backgroundColor: {
         
         'bg-img': "url('public/img/DSC_0543.JPG')"
      }
    },
  },
  plugins: []
}