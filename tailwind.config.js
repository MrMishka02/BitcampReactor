/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { min: '641px' },
      md: { min: '768px' },
      xl: { min: '1280px' },
      lg: { min: '1024px' },
    },
    extend: {},
  },
  plugins: [],
}

