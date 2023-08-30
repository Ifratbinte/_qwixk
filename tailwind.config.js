/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-green": "#00B860",
        "base-green-medium": "#59B68A",
        "base-green-light": "#ABE0C7",
        "base-blue": "#38B3C3",
        "base-blue-light": "#53C8D8",
        "base-black": "#2C2C2C",
        "base-paragraph": "#666666",

        "app-blue": "#4E43FF",
        "app-purple": "#CB6BED",
        "app-green": "#00BF58",
        "app-purple-light": "#8981FE",
        "app-blue-light": "#6D50BD",
        "app-blue-dark": "#8981FE",
      },
      fontFamily: {
        DmSans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      letterSpacing: {
        widest: ".55em",
      },
      boxShadow: {
        base: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        regular: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
      },
      rotate: {
        37: "37deg",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
          "@screen xl": {
            maxWidth: "1600px",
          },
        },
        ".section-gap": {
          padding: "100px 0",
        },
        ".section-gap-m": {
          padding: "50px 0px",
        },
        ".section-gap-sm": {
          padding: "30px 10px ",
        },
      });
    },
  ],
};
