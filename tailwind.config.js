import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
export default {
  plugins: [typography, daisyui],
  theme: {
    extend: {},
  },
  purge: ["./index.html", './src/**/*.{svelte,js}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: 'media', // or 'media' or 'class'
}