import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'euclid': ['Euclid Galactic', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'nycd': ['NothingYouCouldDo','Arial', 'cursive'], // Make sure this matches
        'nycd-bold': ['NothingYouCouldDoBold','Arial', 'cursive']
      },
    },
  },
  plugins: [],
};
export default config;
