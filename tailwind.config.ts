import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1A3A2A",
          DEFAULT: "#22543D",
          light: "#2D6A4F",
          gold: "#D4A017",
          "gold-light": "#F5D060",
          gray: "#333333",
          muted: "#F8FAF9",
        },
      },
      boxShadow: {
        soft: "0 4px 24px rgba(30, 86, 49, 0.08)",
        card: "0 8px 32px rgba(30, 86, 49, 0.10)",
        "card-hover": "0 16px 48px rgba(30, 86, 49, 0.16)",
        glow: "0 0 60px rgba(212, 160, 23, 0.15)",
      },
      backgroundImage: {
        hero: "linear-gradient(180deg, rgba(26,58,42,0.92), rgba(26,58,42,0.78))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
