/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 1s ease-in',
        scale: 'scale .5s ease-in',
        translateIn: 'translateIn .5s ease-in',
        dropdown: 'dropdown .2s ease-in',
        zoomin: 'zoom-in 1s ease-in-out 0.25s both',
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        fruktur: ['Fruktur', 'sans-serif']
      },

      fontSize: {
        '11xl': ['250px', {
          lineHeight: '1',
        }],
        '10xl': ['150px', {
          lineHeight: '1',
        }],
      },

      keyframes: theme => ({
        fadeOut: {
          '0%': {opacity: .0},
          '100%': {opacity: 1},
        },

        scale: {
          '0%': { width: '0%'},
          '100%' : { width: 'fit'},
        },

        translateIn: {
          '0%': { width : 'fit', transform: 'translateX(-200%)'},
          '100%': { width : 'fit', transform: 'translateX(0%)'},
        },

        dropdown: {
          '0%' : { transform: 'translate(-100%, 3rem)'},
          '100%' : { transform: 'translate(0%, 3rem)'},
        },
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },
      })
    },
  },
  plugins: [],
};
