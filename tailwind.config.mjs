import defaultTheme from "tailwindcss/defaultTheme";
import starlightPlugin from "@astrojs/starlight-tailwind";

const accent = {
  200: "#fcb3af",
  600: "#ca002b",
  900: "#640010",
  950: "#450c0f",
};
const gray = {
  100: "#f6f6f7",
  200: "#ededef",
  300: "#c2c2c3",
  400: "#8b8b8e",
  500: "#58585a",
  700: "#38383a",
  800: "#262629",
  900: "#181819",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [starlightPlugin()],
  theme: {
    extend: {
      colors: { accent, gray },
      fontFamily: {
        sans: ["Comfortaa", ...defaultTheme.fontFamily.sans],
        serif: ["Special Elite", ...defaultTheme.fontFamily.sans],
        mono: ["Syne Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
