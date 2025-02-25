import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plex: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        primary: "rgb(42 34 1)", 
        // primary: "#000000", 
        secondary: "#000000",
        textColor: "#ffffff",
        accent: "#ebc32a",
        muted: "#E5E5EA",
      },
    },
  },
  plugins: [],
} satisfies Config;

