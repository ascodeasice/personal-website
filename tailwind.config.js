// for dynamic class name in react component

const animationDelaySafeList = []

for (let i = 0; i < 1000; i += 100) {
  animationDelaySafeList.push(`animation-delay-${i}`)
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: animationDelaySafeList,
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
        },
        "pop-up": {
          "0%": {
            transform: "scale(0)"
          },
          "50%": {
            transform: "scale(1.4)"
          },
          "60%": {
            transform: "scale(1.1)"
          },
          "70%": {
            transform: "scale(1.2)"
          },
          "80%": {
            transform: "scale(1)"
          },
          "90%": {
            transform: "scale(1.1)"
          },
          "100%": {
            transform: "scale(1)",
          }
        },
        "image-slide-right": {
          "0%": {
            transform: "translateX(-20%)",
            opacity: "0"
          },
          "0.01%": {
            opacity: "1"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "contact-slide-right": {
          "0%": {
            transform: "translateX(-50px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        }
      },
      animation: {
        "slide-up": 'slide-up 1s ease-out forwards',
        "blink": "blink 1s  step-start infinite",
        "image-slide-right": "image-slide-right .3s cubic-bezier(0, 0.55, 0.45, 1) forwards",
        "slide-left": "slide-left 1s cubic-bezier(0, 0.55, 0.45, 1) forwards",
        "slide-right": "slide-right 1s cubic-bezier(0, 0.55, 0.45, 1) forwards",
        "contact-slide-right": "contact-slide-right .5s ease-out forwards",
        "pop-up": "pop-up 0.8s  cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards"
      },
      colors: {
        "maroon": "#810000",
        "black": "#1b1717",
        "beige": "#eeebdd",
        "custom-red": "#ce1212",
        "gray": "rgb(156 163 175) ",
      },
      screens: {
        'project-break': '830px'
      }
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require("tailwindcss-animation-delay"),
  ],
}
