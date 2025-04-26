/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
         'ppk-green': '#1A9850', // Vibrant Kenyan green
         'ppk-grey': '#4A5568',   
        },
      },
    },
    plugins: [],
  }