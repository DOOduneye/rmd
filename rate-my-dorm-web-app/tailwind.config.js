/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "eerie-dark": "#141414",
        "charcoal": "#2F4550",
        "cadet": "#586F7C",
        "carrot": "#F18F01",
        "cultured": "#EDF2F4"
      },
    },
  },
  plugins: [require("daisyui"),require('flowbite/plugin'), require('@tailwindcss/forms')],
}