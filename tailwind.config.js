/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        title: ['Oswald', 'sans-serif']
      },

      colors: {
        'primary-blue': 'rgb(var(--primary-blue))',
        'secondary-blue': 'rgb(var(--secondary-blue))',
      },

      backgroundImage: {
        banner: "url('/src/assets/portada.jpg')"
      }
    }
  },
  plugins: [],
}