/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        san: 'Josefin',
      },
      boxShadow: {
        '3xl': '0px 0px 500px 2px rgba(255,255,255, 0.3)',
        '4xl': '-5px 5px 30px 1px rgba(25,255,25, 0.3)',
      }
    },
  },
  plugins: [],
}