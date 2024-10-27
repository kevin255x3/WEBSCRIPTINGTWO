/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html",
            "./src/**/*.{js,jsx,ts,,tsx}"
          ],
  theme: {
    extend: {
      fontFamily: {
        Garamond: ['EB Garamond', 'sans-serif'],
        Sans: ['Work Sans', 'sans-serif'],
        Archivo: ['Archivo Black', 'sans-serif'],
      },
      margin: {
        'quarter-screen': '25vw',
        'parent': '2em',
      }
    },
  },
  plugins: [],
}

