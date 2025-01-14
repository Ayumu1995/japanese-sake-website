/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      mobile: "480px", // new mobile breakpoint
      tablet: "820px", // for tablet
      desktop: "1024px", // for desktop
    },

    extend: {
      fontSize: {
        xxs: "8px",
      },

      colors: {
        darkbackground: "#0f1014",
        lightbackground: "#ffffff",
      },
      fontFamily: {
        tsukimi: ["Tsukimi Rounded", "sans-serif"], // Google Fonts
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
