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
        galaxy: "url('/public/galaxy-bg.png')",
      },
    },
    colors: {
      orange: "#ec4e39",
      "light-brown": "#b7ab98",
      black: "#010101",
      shadow: "#1c1c1c",
    },
  },
  plugins: [],
};
export default config;
