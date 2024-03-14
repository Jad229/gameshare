import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "controller-image": "url('/images/background-1.jpg')",
        "isometric-pattern": "url('/images/isometric-pattern.png')",
      },
    },
  },
  plugins: [],
};
export default config;
