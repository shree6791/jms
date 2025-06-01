/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#D72638',
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'Lato', 'sans-serif'],
        quote: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      spacing: {
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
};