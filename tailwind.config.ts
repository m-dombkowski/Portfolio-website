import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-calsans)"],
      },
      backgroundImage: {
        "gradient-radial-chrono": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
        galaxy: "url('/public/galaxy-bg.png')",
      },
    },

    colors: {
      orange: "#ec4e39",
      "light-brown": "#b7ab98",
      "light-brown-transparent": "rgb(183, 171, 152,1)",
      black: "#010101",
      shadow: "#1c1c1c",
      "zinc-900-flipped": "rgb(24,24,27,0)",
      "zinc-900": "#18181b",
      "zinc-900-transparent": "rgb(24,24,27,.7)",
      "zinc-nav-active": "rgb(47,47,50,.7)",
      "zinc-600": "rgb(82, 82, 91, 0)",
      "zinc-800-flipped": "rgba(39,39,42,.1)",
      "zinc-100-flipped": "hsla(240,5%,96%,0)",
    },
  },
  plugins: [],
};
export default config;
