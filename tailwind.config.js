/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    container: {
      center: true,
      padding: {
        "3xl": "4rem",
        "2xl": "3rem",
        xl: "2rem",
        DEFAULT: "15px",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#312783",
        secondary: "#00A75D",
      },
    },
  },
  plugins: [],
};
