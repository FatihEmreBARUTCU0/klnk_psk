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
        bg: "#FAF8F5",
        surface: "#F2EDE8",
        accent: "#C9B8A8",
        "accent-2": "#A8BDB8",
        text: "#2C2C2C",
        muted: "#7A7268",
        border: "#E5DDD6",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
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
        "mesh-drift-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, 6%) scale(1.05)" },
          "66%": { transform: "translate(-3%, 3%) scale(0.97)" },
        },
        "mesh-drift-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-5%, 4%) scale(1.04)" },
          "66%": { transform: "translate(3%, -4%) scale(0.98)" },
        },
        "mesh-drift-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(5%, -5%) scale(1.06)" },
        },
        "blob-float": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-12px, 16px) rotate(2deg)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        "ken-burns-slow": {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.15)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "mesh-drift-1": "mesh-drift-1 28s ease-in-out infinite",
        "mesh-drift-2": "mesh-drift-2 32s ease-in-out infinite",
        "mesh-drift-3": "mesh-drift-3 24s ease-in-out infinite",
        "blob-float": "blob-float 18s ease-in-out infinite",
        "ken-burns": "ken-burns 25s ease-in-out infinite alternate",
        "ken-burns-slow": "ken-burns-slow 30s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
