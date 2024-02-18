import defaultTheme from "tailwindcss/defaultTheme";
import starlightPlugin from "@astrojs/starlight-tailwind";

const accent = {
  200: "#f9b4b1",
  600: "#ca002b",
  900: "#620713",
  950: "#430e11",
};
const gray = {
  100: "#f7f6f5",
  200: "#eeedec",
  300: "#c3c2c0",
  400: "#8d8b87",
  500: "#5a5854",
  700: "#3a3835",
  800: "#282723",
  900: "#191817",
};

import type { Config } from "tailwindcss";

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
} satisfies Config;
