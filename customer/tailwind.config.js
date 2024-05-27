// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        layout: {},
        colors: {
          foreground: '#18181B',
          primary: {
            foreground: '#18181B',
            DEFAULT: 'rgb(248 250 252)'
          },
          secondary: {
            foreground: 'rgb(255 255 255)',
            DEFAULT: 'rgb(15 23 42)'
          },
          default: {
            foreground: 'rgb(255 255 255)',
            DEFAULT: 'rgb(15 23 42)'
          },
        },
      }
    }
  })]
}