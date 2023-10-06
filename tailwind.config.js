/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        foreground: "#1B1F23",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#EDEDED",
        green: "#779556",
        brown: "#CD853F",
        "banner-bg": "#FFDE59",
      },
      backgroundImage: (theme) => ({
        "landing-bg":
            "url('/src/assets/chessbg.jpg')",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        merryweather: ["Merryweather", "serif"],
        plex: ["IBM Plex Sans", "roboto"],
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}

