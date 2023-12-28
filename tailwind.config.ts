import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#000000",
        secondaryDark: "#111111",
        primaryLight: "#ffffff",
        secondaryLight: "#f1f5f9",
        darkHover: "#6b72804d",
        lightHover: "#6b72801a",
        border: "#6b72804d",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        pulse2: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 40s linear infinite",
        "large-marquee": "largeMarquee 80s linear infinite",
        marquee2: "marquee 40s linear infinite",
        "large-marquee2": "largeMarquee2 80s linear infinite",
      },
      keyframes: {
        pulse: {
          "50%": { opacity: ".5" },
        },
        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-400%)",
          },
        },
        largeMarquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-200%)",
          },
        },
        marquee2: {
          "0%": {
            transform: "translateX(400%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        largeMarquee2: {
          "0%": {
            transform: "translateX(200%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
