/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0F1A2A',
          deep: '#09101B',
          surface: '#152338',
          border: 'rgba(212, 154, 53, 0.15)',
        },
        saffron: {
          DEFAULT: '#D49A35',
          hover: '#BA8428',
          subtle: 'rgba(212, 154, 53, 0.1)',
        },
        ivory: {
          DEFAULT: '#F8F5ED',
          warm: '#F3EFE3',
          border: 'rgba(15, 26, 42, 0.08)',
        },
        indiangreen: {
          DEFAULT: '#3E604C',
          deep: '#314D3C',
          light: '#4C735C',
          surface: '#2B4234',
        },
        softgold: {
          DEFAULT: '#C4A15A',
          subtle: 'rgba(196, 161, 90, 0.3)',
          line: 'rgba(196, 161, 90, 0.4)',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        editorial: '0.18em',
      },
      lineHeight: {
        editorial: '1.15',
      },
    },
  },
  plugins: [],
}
