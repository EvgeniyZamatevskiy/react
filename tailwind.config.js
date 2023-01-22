const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  safelist: ["l-1/4", "text-emerald-500"],
  theme: {
    extend: {
      colors: {
        pink: {
          550: "#CD29B5"
        },
        gray: {
          150: "#E0E0E0",
          250: "#F2F2F2",
          350: "#BDBDBD",
          450: "#828282",
          550: "#E6E7F2",
          650: "#4F4F4F"
        },
        blue: {
          750: "#353EEF",
          850: "#272DAF"
        },
        purple: {
          550: "#8533D0"
        },
        yellow: {
          250: "#F5EC9B",
          350: "#FFD100",
          450: "#EACE4F"
        },
        violet: {
          850: "#575875"
        },
        sky: {
          550: "#0085FF"
        },
        black: {
          primary: "#2C2C2C"
        }
      },
      maxWidth: {
        "8xl": "83rem",
        "1/2": "50%"
      },
      container: {
        padding: {
          DEFAULT: "1rem"
        }
      },
      gridTemplateColumns: {
        "auto-sm": "repeat(auto-fit, minmax(0, 1fr))"
      },
      fontFamily: {
        huge: ["TitanOne", ...defaultTheme.fontFamily.serif],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        title: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        tag: ["Roboto", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        radial: "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "radial-at-bl": "radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))",
        "radial-at-br": "radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))"
      },
      borderRadius: {
        2.5: "0.625rem"
      },
      order: {
        0: 0
      }
    },
    container: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "980px",
        xl: "1320px"
      },
      center: true
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "980px",
      xl: "1320px"
    }
  },
  plugins: []
};
