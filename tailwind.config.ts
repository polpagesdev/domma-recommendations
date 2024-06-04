import type { Config } from "tailwindcss/types";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FEEBEB",
          100: "#FED7D8",
          200: "#fb696c",
          400: "#ea504e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
