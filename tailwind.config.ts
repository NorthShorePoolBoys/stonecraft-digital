import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "hsl(var(--charcoal))",
        mid: "hsl(var(--mid))",
        concrete: "hsl(var(--concrete))",
        accent: "hsl(var(--accent))",
        "accent-hover": "hsl(var(--accent-hover))",
        light: "hsl(var(--light))",
        off: "hsl(var(--off))",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        body: ["'Source Sans 3'", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
