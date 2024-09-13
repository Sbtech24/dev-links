import type { Config } from "tailwindcss";

const config: Config = {
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
        purple: "var(--purple)",
        pupleHover: "var(--purpleHover)",
        lightPurple: "var(--light-purple)",
        white: "var(--white)",
        lightGrey: "var(--light-grey)",
        borders: "var(--borders)",
        grey: "var(--grey)",
        red: "var(--red)",

      },
    },
  },
  plugins: [],
};
export default config;
