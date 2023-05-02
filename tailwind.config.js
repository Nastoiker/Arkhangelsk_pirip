/** @type {import('tailwindcss').Config} */
export default  {
  content: [
      "./index.html",
      "./src/**/*.{vue, js, jsx, tsx}",
  ],
  theme: {
    extend: {},
      colors: {
          'GreenLight': '#B3C8AA',
            'white': '#ffffff',
          'DarkGreen': '#2C3D40',
      },
  },
  plugins: [],
}

