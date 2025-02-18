/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}" 
  ],
  theme: {
    extend: {
      colors: {
        'brand-color': 'var(--brand-color)',
        'seconed-color': 'var(--seconed-color)',
      },
      fontFamily: {
        cairo: ['var(--font-family)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
