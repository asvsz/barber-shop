/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E8E9F3',
        secondary: '#CECECE',
        tertiary: '#A6A6A8',
        quaternary: '#272635',
        quinary: '#B1E5F2',

      },
      fontFamily: {
        custom:['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

