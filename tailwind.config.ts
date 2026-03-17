import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      colors: {
        background: "#F4F4F4",
        "primary-orange": "#F57C00",
        "dark-orange": "#E65100",
        "deep-onyx": "#121212",
        "deep-slate": "#0F172A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
