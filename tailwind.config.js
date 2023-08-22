/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/styles/rafe/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        "brand": {
          "greenish": "#393922",
          "orange": "#F2960D",
          "slate": "#25272A",
          "gray": {
            "100": "#F8F8F8",
            "200": "#999999"
          },

        },
      }
    },
  },
  plugins: [],
}

