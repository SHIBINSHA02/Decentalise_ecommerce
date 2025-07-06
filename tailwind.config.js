/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Include all files in src/app
    './src/components/**/*.{js,ts,jsx,tsx}', // Include all components
    './src/pages/**/*.{js,ts,jsx,tsx}', // Include pages (if any)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};