import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "#FBF501",
        orange: "#F2BF28",
        blue: "#63F1D6",
        black: "#150C1D",
        white: "#F9FAF4",
        whiteLight: "#FFFFFF",
        gray: "#666666",
      },
      fontFamily: {
        sans: ["Red Hat Display"],
      },
    },
  },
  plugins: [],
} satisfies Config;
