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
    colors: {
      textcolor: "#4E62EE",
      white: "#ffffff",
      textblack: "#0B0D13",
      herotext: "rgba(255, 255, 255, 0.8)",
      cardbg: "#EFF1FF",
      garbg: "#F4F4FA",
      btncolor: "#F9705A",
    },
    boxShadow: {
      mainshadow: "37px 49px 0px rgba(0, 17, 141, 0.1)",
      smallshadow: "11px 12px 0px rgba(0, 17, 141, 0.1)",
      lgshadow: "0px 44px 44px rgba(35, 37, 55, 0.2)",
    },
    fontFamily: {
      Inter: "Inter, sans-serif",
      Poppins: "Poppins, sans-serif",
    },
    screens: {
      sm: "499px",
      md: "768px",
      // => @media (min-width: 640px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      laptop: "1190px",

      xl: "1315px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
