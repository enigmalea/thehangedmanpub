import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import metaTags from "astro-meta-tags";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://thehangedmanpub.netlify.app",
  extends: "astro/tsconfigs/strictest",
  integrations: [
    tailwind(),
    sitemap(),
    metaTags(),
    expressiveCode({
      themes: ["nord"],
    }),
    starlight({
      title: "The Hanged Man",
      favicon: "/favicon.ico",
      logo: {
        src: "./src/assets/logo.gif",
      },
      customCss: [
        "./src/tailwind.css",
        "@fontsource/comfortaa",
        "@fontsource/syne-mono",
        "@fontsource/special-elite",
      ],
      social: {
        discord: "https://discord.gg/9RERC6R",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      plugins: [starlightLinksValidator()],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
