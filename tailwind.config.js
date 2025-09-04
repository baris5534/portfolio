/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"], // Montserrat font ailesi
        rockwell: ["Rockwell", "serif"],
        caveat: ["Caveat", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        newrocker: ["New Rocker", "cursive"],
        pirateone: ["Pirate One", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        lobster: ["Lobster", "cursive"],
      },
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontWeight: {
        montserratThin: 100,
        montserratExtraLight: 200,
        montserratLight: 300,
        montserratRegular: 400,
        montserratMedium: 500,
        montserratSemiBold: 600,
        montserratBold: 700,
        montserratExtraBold: 800,
        montserratBlack: 900,
        poppinsThin: 100,
        poppinsExtraLight: 200,
        poppinsLight: 300,
        poppinsRegular: 400,
        poppinsMedium: 500,
        poppinsSemiBold: 600,
        poppinsBold: 700,
        poppinsExtraBold: 800,
        poppinsBlack: 900,
        newrockerThin: 100,
        newrockerExtraLight: 200,
        newrockerLight: 300,
        newrockerRegular: 400,
        newrockerMedium: 500,
        newrockerSemiBold: 600,
        newrockerBold: 700,
        newrockerExtraBold: 800,
        newrockerBlack: 900,
        pirateoneThin: 100,
        pirateoneExtraLight: 200,
        pirateoneLight: 300,
        pirateoneRegular: 400,
        pirateoneMedium: 500,
        pirateoneSemiBold: 600,
        pirateoneBold: 700,
        pirateoneExtraBold: 800,
        pirateoneBlack: 900,
        lobsterThin: 100,
        lobsterExtraLight: 200,
        lobsterLight: 300,
        lobsterRegular: 400,
        lobsterMedium: 500,
        lobsterSemiBold: 600,
        lobsterBold: 700,
        lobsterExtraBold: 800,
        lobsterBlack: 900,
      },
      colors: {
        darkmossgreen: "#2B2E1D",
        paletaupe: "#D7C6B7",
      },
    },
  },
  plugins: [],
};

