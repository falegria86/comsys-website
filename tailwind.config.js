/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#f6f6f6",
        lighAlt: "#f2f2f2",
        darkerBG: "#e8e8e8",
        dark: "#2b2b2b",
        adorno: "#b7b7b7",
      },
    },
  },
  plugins: [],
};
