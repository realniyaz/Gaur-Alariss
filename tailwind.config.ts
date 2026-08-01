import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peacock: {
          dark: "#061826",     /* Deep royal peacock night */
          blue: "#0b3c5d",     /* Rich royal blue */
          bright: "#1d5f8a",   /* Vibrant sapphire accent */
        },
        gold: {
          light: "#dfc184",    /* Champagne gold */
          base: "#c5a059",     /* Classic metallic gold */
          dark: "#9a7b3c",     /* Deep antique gold */
        },
        cream: {
          bg: "#fbf9f5",       /* Off-white luxury background */
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;