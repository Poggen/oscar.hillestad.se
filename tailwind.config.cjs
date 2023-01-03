/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: {
          50: "#F9FBF3",
          100: "#EFF5E0",
          200: "#DEEBBD",
          300: "#CCE099",
          400: "#B6D36E",
          DEFAULT: "#9DC43E",
          600: "#90B437",
          700: "#7E9C30",
          800: "#688127",
          900: "#485A1B",
        },
      },
      fontFamily: {
        sans: ["AsapVariable", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "translateZ(0)",
          },

          "15%": {
            transform: "translate3d(-15%,0,0) rotate(50deg)",
          },

          "30%": {
            transform: "translate3d(20%,0,0) rotate(-30deg)",
          },

          "45%": {
            transform: "translate3d(-15%,0,0) rotate(30deg)",
          },

          "60%": {
            transform: "translate3d(10%,0,0) rotate(-20deg)",
          },

          "75%": {
            transform: "translate3d(-5%,0,0) rotate(10deg)",
          },

          "100%": {
            transform: "translateZ(0)",
          },
        },
        tada: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },

          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },

          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },

          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },

          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        purple: {
          to: {
            color: "rgba(0,0,0,.4)",
            textShadow: "0 0 0 purple",
          },
        },
        appear: {
          from: {
            opacity: 0,
            transform: "translateY(-8rem)",
          },
          to: {
            opacity: 1,
            transform: "translateY(-5rem) rotate(18deg)",
          },
        },
        bump: {
          from: {
            transform: "scale3d(1, 1, 1)",
          },

          "50%": {
            transform: "scale3d(1.15, 1.15, 1.15)",
          },

          to: {
            transform: "scale3d(1, 1, 1)",
          },
        },
        shake: {
          "from, to": {
            transform: "translate3d(0, 0, 0)",
          },

          "10%, 30%, 50%, 70%, 90%": {
            transform: "translate3d(-10px, 0, 0)",
          },

          "20%, 40%, 60%, 80%": {
            transform: "translate3d(10px, 0, 0)",
          },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.primary[DEFAULT]"),
              "&:hover": {
                color: theme("colors.primary[700]"),
                transition: "150ms cubic-bezier(0.4, 0, 0.2, 1) color",
              },
            },
            // ...
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-fluid-type"),
  ],
};
