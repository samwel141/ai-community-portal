import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        primary: "#232531",
        secondary: "#1E1E1E",
        textColor: "#CED0DC",
        accent: "#D6431E",
        muted: "#E5E5EA",
      },
    },
  },
  plugins: [],
} satisfies Config;

