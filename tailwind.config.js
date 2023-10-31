/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(17 24 39 / var(--tw-bg-opacity))',
        secondary: '#F9DE4B',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans'],
      },
    },
  },
  plugins: [],
}