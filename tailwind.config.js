/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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