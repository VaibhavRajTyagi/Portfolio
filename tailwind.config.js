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
      backgroundImage:{
        'dots-pattern': "radial-gradient(circle, #F1EFEC 1px, transparent 1px)",
      },
      backgroundSize:{
        'dot': '10px 10px',
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
