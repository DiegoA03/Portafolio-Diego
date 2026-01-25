/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ← IMPORTANTE: Habilita modo oscuro con clase
  theme: {
    extend: {},
  },
  plugins: [],
}