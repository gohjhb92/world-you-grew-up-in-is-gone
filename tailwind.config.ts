import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#07090b",
        ink: "#0d1115",
        graphite: "#131920",
        line: "rgba(213, 224, 230, 0.12)",
        paper: "#eef2ed",
        muted: "#98a4a9",
        amber: "#f2b84b",
        cyan: "#60d5dc",
        danger: "#ef6b5c",
        green: "#73c27b"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"]
      },
      boxShadow: {
        glass: "0 18px 70px rgba(0, 0, 0, 0.35)",
        glow: "0 0 40px rgba(96, 213, 220, 0.12)"
      },
      backgroundImage: {
        scan: "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
