/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  darkMode: 'class', 
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        roboto: ['Roboto', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif']
  
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
          lexend: ["Lexend", "sans-serif"],
          arvo: ["Arvo", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          outfit: ["Outfit", "sans-serif"],
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      }
    },

    
    plugins: [],
  }