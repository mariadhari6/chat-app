module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '10px 35px 60px -5px rgba(0, 0, 0, 0.6)'
      },
      translate: {
        '7': '1.875rem'
      },
      borderWidth: {
        '1': '1px',
        '50': '50px',
        '100': '100px'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        "asap": ['Asap', 'sans-serif'],
        'metropolis': ['Metropolis', 'sans-serif']
      },
      colors: {
        purple: {
          primary: '#615EF0',
          transparent: 'rgba(97, 94, 240, 0.06)',
        },
        orange: {
          transparent: 'rgba(245, 101, 101, 0.06)'
        },
        green: {
          transparent: 'rgba(72, 187, 120, 0.06)'
        },
        blue: {
          transparent: 'rgba(66, 153, 225, 0.06)'
        },
        gray: {
          '150': '#EDF2F7',
          '250': '#F1F1F1',
          '350': '#F3F3F',
        }
      },
      spacing: {
        '2.5': '0.625rem',
        '4.5': '1.063rem'
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 0.5fr))',
        'footer': '200px minmax(900px, 1fr) 100px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
