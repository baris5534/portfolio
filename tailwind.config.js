/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"], // Montserrat font ailesi
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
      },
    },
    },
  plugins: [],
}

