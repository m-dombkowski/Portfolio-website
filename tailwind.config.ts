import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs1: "350px",
      xs2: "425px",
      xs3: "500px",
      ...defaultTheme.screens,
      tv: "2000px",
    },
    backgroundPosition: {
      "p-double-50": "50% 50%",
    },

    backgroundSize: {
      "s-double-0": "0 0",
      "s-double-200": "200% 200%",
    },
    extend: {
      transitionProperty: {
        height: "height",
        backgroundSize: "backgroundSize",
        color: "color",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        calc: ["var(--font-calsans)"],
      },
      backgroundImage: {
        "gradient-radial-chrono": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
        galaxy: "url('/public/galaxy-bg.png')",
        "mobile-nav-gradient":
          "radial-gradient(circle at center , blue 50%, transparent 50%)",
      },
    },
    animation: {
      "fade-left": "fade-left 3s ease-in-out forwards",
      "fade-right": "fade-right 3s ease-in-out forwards",
      slider: "slider 14s linear infinite",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      slider: {
        from: {
          transform: "translate3d(0, 0, 0)",
        },

        to: {
          transform: "translate3d(-100%, 0, 0)",
        },
      },
      "fade-left": {
        "0%": {
          transform: "translateX(100%)",
          opacity: "0%",
        },

        "30%": {
          transform: "translateX(0%)",
          opacity: "100%",
        },
        "100%": {
          opacity: "0%",
        },
      },
      "fade-right": {
        "0%": {
          transform: "translateX(-100%)",
          opacity: "0%",
        },

        "30%": {
          transform: "translateX(0%)",
          opacity: "100%",
        },
        "100%": {
          opacity: "0%",
        },
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
      "zinc-300": "hsla(240,5%,84%,0)",
      "zinc-300-flipped": "hsla(240,5%,84%,.5)",
      "zinc-100-flipped": "hsla(240,5%,96%,0)",
      "dark-gradient":
        "linear-gradient( to bottom, hsla(158, 23%, 18%, 0) 0%, hsla(158, 23%, 18%, .013) 9.7%, hsla(158, 23%, 18%, .049) 18.1%, hsla(158, 23%, 18%, .104) 25.5%, hsla(158, 23%, 18%, .175) 31.9%, hsla(158, 23%, 18%, .259) 37.7%, hsla(158, 23%, 18%, .352) 43%, hsla(158, 23%, 18%, .45) 47.9%, hsla(158, 23%, 18%, .55) 52.8%, hsla(158, 23%, 18%, .648) 57.7%, hsla(158, 23%, 18%, .741) 63%, hsla(158, 23%, 18%, .825) 68.7%, hsla(158, 23%, 18%, .896) 75%, hsla(158, 23%, 18%, .951) 82.2%, hsla(158, 23%, 18%, .987) 90.5%, hsl(158, 23%, 18%) 100% )",
      "color-bg": "#233831",
      "color-text-lighter": "#d4ede4",
      "color-text-primary": "#8fdcc2",
      "color-bg-lighter": "#8fdcc2",
      "color-text-darker": "#7bbea8",
      "dark-bg": "#020a13",
      "bg-dark-gray": "#282828",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
