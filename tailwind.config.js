/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: '480px',
      sm: '768px',
      md: '976px',
      lg: '1367px',
      xl: '1440px',
    },
  },
  plugins: [],
}
