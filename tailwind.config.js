/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    screens: {
      sm: "530px",
      md: "875px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: { primary: "Arial", default: "sans-serif" },
      colors: {
        darkBlue: "hsl(228, 39%, 23%)",
        lightbox: "rgba(0, 0, 0, 0.5)",
        russianViolet: "#161336",
        frenchGrey: "#bec1d5",
        lightGrey: "#d3d3d3",
        accent: "#cb3cf0",
        darkAccent: "#312950",
        logoClr: "#2c498c",
        paraClr: "#16181e",
        green: "#24bc97",
      },
      backgroundImage: {
        gradient:
          " linear-gradient(90deg, rgba(22,19,54,1) 0%, rgba(49,41,80,1) 61%)",
        img: "url('/public/images/scribble.png')",
        blob: "url('/public/images/blob.svg')",
        gradient2:
          "linear-gradient(153deg, rgba(22,19,54,1) 0%, rgba(36,188,151,1) 75%)",
      },
      spacing: {
        330: "330px",
        145: "145px",
        150: "150px",
        0.25: ".25px",
        "-10": "-10px",
        "15vw": "15vw",
        50: "50%",
        23: "23rem",
      },
      textShadow: { black: "2px 2px #000" },
      fontFamily: {
        playfairDisplay: ["Playfair Display"],
        sans: ["roboto", "helvetica", "Arial", "sans-serif"],
      },
      height: { 370: "370px", calc: "calc(100vh - 80px)" },
      gridTemplateColumns: { 350: "repeat(2, 350px)" },
    },
  },
  plugins: [],
};
