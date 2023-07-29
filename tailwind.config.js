/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: "Proxima Nova, system-ui, sans-serif",
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        newColor: "#8062D6",
      },
    },
  },
  plugins: [],
};
