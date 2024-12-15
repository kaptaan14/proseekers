import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          100: "#c0d6ed",
          200: "#2489EE",
        },
        gray: {
          100: "#D9D9D9",
          200: "#6F6F6F",
        },
        green:{
          100: '#9AFFE7'
        }
      },
      overflow: ["no-scroll"],
    },
  },
  plugins: [],
} satisfies Config;
