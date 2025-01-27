/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Moderustic", "sans-serif"],
      },
      animation: {
        jump: "jump 0.3s ease-in-out forwards",
      },
      keyframes: {
        jump: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-0.5rem)" },
        },
      },
      colors: {
        b: "rgba(41, 95, 209, 0.8)",
        w: "#FAF8F6",
        s: "#A78377",
      },
    },
  },
  plugins: [],
};
