const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-up": {
          "0%, 50%": {
            transform: "translateY(100%)",
            opacity: "0"
          },
          "60%, 100%": {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        "slide-left": {
          "0%, 50%": {
            transform: "translateX(10%)",
            opacity: "0"
          },
          "60%, 100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "slide-right": {
          "0%, 50%": {
            transform: "translateX(-10%)",
            opacity: "0"
          },
          "60%, 100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "blink": {
          "50%": {
            opacity: "0"
          }
        }
      },
      animation: {
        "slide-up": 'slide-up 1s ease-out forwards',
        "blink": "blink 1s  step-start infinite",
        "slide-left": "slide-left 1s cubic-bezier(0, 0.55, 0.45, 1) forwards",
        "slide-right": "slide-right 1s cubic-bezier(0, 0.55, 0.45, 1) forwards",
      },
      colors: {
        "maroon": "#810000",
        "black": "#1b1717",
        "beige": "#eeebdd",
        "custom-red": "#ce1212",
        "gray": "rgb(156 163 175) ",
      },
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require("tailwindcss-animation-delay"),
  ],
}
