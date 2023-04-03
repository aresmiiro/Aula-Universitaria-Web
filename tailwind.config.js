/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(400px, 1fr))',
      },
      
      backgroundColor: {
         
         'bg-img': "url('public/img/DSC_0543.JPG')"
      }
    },
  },
  fontFamily: {
      
        'font': ["'Poppins'" , 'sans-serif']
    },
  plugins: []
}