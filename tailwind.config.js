export default {
  content: ["./index.html", "./src/**/*.{vue,ts,js}"],
  theme: {
    extend: {
      colors: {
    primary: {
      DEFAULT: "#b100cd",
      light: "#e05cff",
      dark: "#7a0091",
    }
      }
    }
  },
  plugins: []
}
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b100cd'
      }
    }
  },
  plugins: [],
}