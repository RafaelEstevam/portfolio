/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': { width: '0px', left: 0 },
          '50%': { width: '50%', left: '50%' },
          '100%': { width: '0%', left: '100%' },
        }
      },
      animation: {
        progress: 'progress 1s linear infinite',
      }
    },
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
