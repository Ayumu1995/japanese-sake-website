/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "8px",
      },

      animation: {
        scroll: "bgscroll 300s linear infinite",
      },
      keyframes: {
        bgscroll: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".writing-vertical": {
          writingMode: "vertical-rl",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
