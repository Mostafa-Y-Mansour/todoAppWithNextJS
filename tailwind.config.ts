import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(140deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    boxShadow: {
      "3xl": "0 15px 35px -12px var(--tw-shadow-color)",
    },

    colors: {
      transparent: "transparent",
      white: "hsl(0, 0%, 100%)",
      gray: "hsl(0, 0%, 98%)",
      primary: {
        brightBlue: "hsl(220, 98%, 61%)",
      },
      light: {
        grayishBlue: {
          Light: {
            DEFAULT: "hsl(236, 33%, 92%)",
            XX: "hsl(233, 11%, 84%)",
          },
          dark: {
            DEFAULT: "hsl(236, 9%, 61%)",
            XX: "hsl(235, 19%, 35%)",
          },
        },
      },
      dark: {
        blue: {
          veryDark: {
            DEFAULT: "hsl(235, 21%, 11%)",
            desaturated: "hsl(235, 24%, 19%)",
          },
          grayishBlue: {
            light: {
              DEFAULT: "hsl(234, 39%, 85%)",
              hover: "hsl(236, 33%, 92%)",
            },
            dark: {
              DEFAULT: "hsl(233, 14%, 35%)",
              XX: "hsl(237, 14%, 26%)",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
