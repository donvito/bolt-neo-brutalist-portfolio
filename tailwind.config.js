/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        yellow: {
          400: '#FFD600',
        },
        pink: {
          200: '#FFC0CB',
        },
        blue: {
          300: '#90E0EF',
        },
        lime: {
          200: '#CCFF00',
        },
      },
    },
  },
  plugins: [],
};