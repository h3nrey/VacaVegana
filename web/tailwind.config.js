/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "md": "750px",
        "lg": "1000px"
      }, 

      keyframes: {
        pop: {
          "0": { transform: "translateY(-20%)"},
          "50%": { transform: "translateY(10%)"},
          "100%": { transform: "translateY(0)"},
        }
      },

      animation: {
        pop: "pop 400ms ease-in"
      },

      colors: {
        "primary-base": "#4AAE48",
        "primary-light": "#8ED676",
        "white": "#ffffff",
        "gray": "#EdddEF",
        "yellow": "#FBD34A",
      },
      borderRadius: {
        "sm": "6px",
        "md": "12px",
        "lg": "96px"
      },
      fontFamily: {
        "sans": ['var(--font-poppins)'],
        "title": ['var(--font-chewy)'],
      }
    },
  },
  plugins: [],
}
