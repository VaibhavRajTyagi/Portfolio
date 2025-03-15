/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist Mono", "monospace"],
        playfair:["Playfair", "monospace"],
        oswald:["Oswald", "monospace"],
        merriweather: ["merriweather", "serif"],
      },
      colors:{
        naturalblack : '#181818',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
