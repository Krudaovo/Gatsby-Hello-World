/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "coco": "#F0E7DB", // rgba(240, 231, 219, 1)
        "psyche-main": "#795548",
        "psyche-sub": "#5D4037",
        "psyche-accent": "#4CAF50"
      },
      fontFamily: {
        jetbrains: ["'JetBrains Mono', monospace"],
      },
      screens: {
        "xs": "375px",
        "sm":	"640px",
        "md":	"768px",
        "lg":	"1024px",
        "xl":	"1280px",
        "2xl": "1536px",
      },
      animation: {
        "shadow-inset-lr": "shadow-inset-lr 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-in-elliptic-bottom-fwd": "slide-in-elliptic-bottom-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "shadow-drop-2-center": "shadow-drop-2-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-fwd-center": "slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "fade-in": "fade-in .5s cubic-bezier(.39,.575,.565,1)   both"
      },
      keyframes: {
        "shadow-inset-lr": {
          "0%": {
            "box-shadow": "inset 0 0 0 0 transparent, inset 0 0 0 0 transparent"
          },
          to: {
            "box-shadow": "inset -6px 0 14px -6px rgba(0, 0, 0, .5), inset 6px 0 14px -6px rgba(0, 0, 0, .5)"
          }
        },
        "slide-in-elliptic-bottom-fwd": {
          "0%": {
            transform: "translateY(600px) rotateX(30deg) scale(0)",
            "transform-origin": "50% 100%",
            opacity: "0"
          },
          to: {
            transform: "translateY(0) rotateX(0) scale(1)",
            "transform-origin": "50% -1400px",
            opacity: "1"
          }
        },
        "shadow-drop-2-center": {
          "0%": {
              transform: "translateZ(0)",
              "box-shadow": "0 0 0 0 transparent"
          },
          to: {
              transform: "translateZ(50px)",
              "box-shadow": "0 0 20px 0 rgba(0, 0, 0, .35)"
          }
        },
        "slide-fwd-center": {
          "0%": {
              transform: "translateZ(0)"
          },
          to: {
              transform: "translateZ(160px)"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          to: {
            opacity: "1"
          }
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0px 2px 3px darkgrey"
        },
        ".text-shadow-md": {
          textShadow: "0px 3px 3px darkgrey"
        },
        ".text-shadow-lg": {
          textShadow: "0px 5px 3px darkgrey"
        },
        ".text-shadow-xl": {
          textShadow: "0px 7px 3px darkgrey"
        },
        ".text-shadow-2xl": {
          textShadow: "0px 10px 3px darkgrey"
        },
        ".text-shadow-none": {
          textShadow: "none"
        }
      };
      addUtilities(newUtilities);
    }
  ],
}