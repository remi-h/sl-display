import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DotGothic16'],
        // serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        base: '44px',
        md: '24px',
        xl: '48px',
        '2xl': '96px',
      },
    },
  },
  plugins: [],
};
export default config;
