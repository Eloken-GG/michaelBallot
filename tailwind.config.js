module.exports = {


  purge: {
    mode: 'layers',
    content: [
      "./templates/**/*.html.twig",
      "./templates/*.html.twig"
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },

      colors: {
        'rose': {
          DEFAULT: '#E30067',
          '50': '#FFC9E2',
          '100': '#FFB0D4',
          '200': '#FF7DB8',
          '300': '#FF4A9C',
          '400': '#FF1780',
          '500': '#E30067',
          '600': '#B00050',
          '700': '#7D0039',
          '800': '#4A0022',
          '900': '#17000A',
        },
        },
      },
    },


  variants: {
    extend: {
      appearance: ['hover', 'focus'],
    },
  },
  plugins: [


  ],

}
