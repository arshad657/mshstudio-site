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
      },
      backgroundImage: {
        'pink-gradient': 'linear-gradient(204deg, #FA9AD0 19.68%, #D63AAA 54.68%, #953CD2 82.88%);',
      },
    },
  },
  plugins: [],
};
export default config;
