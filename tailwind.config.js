/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Lato", "sans-serif"],
      },
      colors: {
        dark: "#232323",
        navy: "#343C6A",
        "light-blue": "#718EBF",
        red: "#FF4B4A",
        green: "#41D4A8",
        "catskill-white": "#F5F7FA",
        "gray-blue": "#8BA3CB",
        gray: "#B1B1B1",
        "light-gray": "#DFEAF2",
        blue: "#396AFF",
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)",
        "gradient-light": "#F5F7FA",
        "gradient-blue":
          "linear-gradient(107.38deg, #4C93FF 2.61%, #0056B3 101.2%)",
        "gradient-overlay":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
};
