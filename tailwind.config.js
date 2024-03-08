/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FAFAFF',
        secondary: '#EEF0F2',
        tertiary: '#ECEBE4',
        quaternary: '#DADDD8',
        quinary: '#1C1C1C',

      },
      fontFamily: {
        custom:['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

