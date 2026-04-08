import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#0D2137",
          "deep-light": "#163352",
          silver: "#A8B8C8",
          "silver-light": "#C5D1DC",
          "silver-dark": "#8A9AAC",
          ice: "#E8F4F8",
          pearl: "#F5F7FA",
          accent: "#2E86AB",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
