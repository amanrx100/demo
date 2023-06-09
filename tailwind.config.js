/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green' : '#0f8461',
        'custom-hover' : '#0c6a4e',
      }
    },
  },
  plugins: [],
}

