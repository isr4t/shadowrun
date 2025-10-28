/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['Orbitron', 'sans-serif'], // 👈 replaces font-zentry
      },
    },
  },
  plugins: [],
}
