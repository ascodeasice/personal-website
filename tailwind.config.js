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
      }
    },
    animation: {
      "slide-up": 'slide-up 1s ease-out forwards',
    },
    colors: {
      "maroon": "#810000",
      "black": "#1b1717",
      "beige": "#eeebdd",
      "custom-red": "#ce1212",
      "gray": "rgb(156 163 175) ",
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require("tailwindcss-animation-delay"),
  ],
}
