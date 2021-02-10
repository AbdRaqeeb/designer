const plugin = require('tailwindcss/plugin')


module.exports = {
  purge: {
    enabled: true,
    content: ['./public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#1A1A1A',
        judge: {
          100: '#055DE5',
          200: '#10CFCF'
        },
        eyo: '#C9874A',
        touch: '#C4C4C4',
        kiyah: '#CC131D',
        maal: '#21995A',
        cabin: '#4CC9F0',
        doktor: '#07B892',
      },
      fontFamily: {
        body: ['Open Sans', 'sans-serif'],
        name: ['Fraunces', 'serif']
      },
      boxShadow: {
        nav: '2px 4px 4px rgba(0, 0, 0, 0.1)',
        card: '2px 2px 5px 5px rgba(0, 0, 0, 0.1)'
      },
      width: {
        name: '504px',
        img: '360px',
        card: '1120px',
        small: '426px',
        open: '427px',
        prod: '657px',
        ball: '45rem'
      },
      height: {
        img: '384px',
        card: '711px',
        small: '560px',
        ball: '45rem',
        down: '90vh'
      },
      borderRadius: {
        card: '21px'
      },
      screens: {
        xs: {'max': '320px'},
        mp: {'max': '375px'}
      }
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus']
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.filter-none': {
          filter: 'none',
        },
        '.filter-blur': {
          filter: 'blur(100px)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}

