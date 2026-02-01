/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollBackground: {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "800px 0px" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "scroll-bg": "scrollBackground 5s linear infinite",
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};