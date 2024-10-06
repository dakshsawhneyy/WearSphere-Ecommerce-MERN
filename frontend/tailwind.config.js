/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode via the 'class' strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a202c', // Example custom color for dark mode
        darkText: '#e2e8f0', // Example custom color for dark mode text
      },
    },
  },
  plugins: [],
}
