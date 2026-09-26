/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#080b0a',
          900: '#0b0f0e',
          800: '#121716',
          700: '#1a1f1d',
        },
        ivory: {
          50: '#fdfcf8',
          100: '#faf8f2',
          200: '#f4f0e7',
          300: '#e8e0d1',
        },
        gold: {
          300: '#dec68f',
          400: '#c9a15a',
          500: '#b48b43',
          600: '#946f32',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      letterSpacing: {
        editorial: '0.18em',
      },
      boxShadow: {
        luxury: '0 24px 80px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
}
