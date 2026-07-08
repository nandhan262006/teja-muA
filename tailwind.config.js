/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          950: '#1a0000',
          900: '#2b0000',
          850: '#3d0000',
          800: '#5c0000',
          700: '#8b0000',
          600: '#b30000',
          500: '#cc0000',
          400: '#e60000',
          300: '#ff1a1a',
        },
        accent: {
          300: '#f0f0f0',
          400: '#d4d4d4',
          500: '#b8b8b8',
          600: '#9e9e9e',
          700: '#808080',
        },
        cream: '#fff5f5',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],

        body: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #d4d4d4 0%, #f0f0f0 50%, #b8b8b8 100%)',
        'red-gradient': 'linear-gradient(180deg, #1a0000 0%, #5c0000 40%, #b30000 70%, #3d0000 100%)',
      },
    },
  },
  plugins: [],
}
