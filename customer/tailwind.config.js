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
            DEFAULT: '#f8fafc'
          },
          secondary: {
            foreground: '#00072c',
            DEFAULT: '#ffffff'
          },
          default: {
            foreground: '#ffffff',
            DEFAULT: '#00072c'
          },
        },
      }
    }
  })]
}