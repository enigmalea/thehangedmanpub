import { defineConfig } from "astro/config";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import starlightAutoSidebar from "starlight-auto-sidebar";
import starlightLinksValidator from "starlight-links-validator";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://thehangedmanpub.netlify.app",

  integrations: [
    icon(),
    sitemap(),
    metaTags(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: ["/search", "/_astro/"],
          crawlDelay: 5,
        },
        {
          userAgent: "Googlebot",
          allow: "/",
          disallow: ["/_astro/"],
          crawlDelay: 5,
        },
        {
          userAgent: "CCBot",
          disallow: "/",
        },
        {
          userAgent: "GPTBot",
          disallow: "/",
        },
        {
          userAgent: "ChatGPT-User",
          disallow: "/",
        },
        {
          userAgent: "Slurp",
          crawlDelay: 30,
        },
      ],
    }),
    ,
    starlight({
      head: [
        {
          tag: "meta",
          attrs: {
            property: "theme-color",
            content: "#2F3136",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "./banner.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:type",
            content: "image/png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:height",
            content: "499",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:width",
            content: "1072",
          },
        },
      ],
      title: "The Hanged Man",
      favicon: "/favicon.ico",
      logo: {
        src: "./src/assets/logo.gif",
      },
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      customCss: [
        "./src/styles/global.css",
        "@fontsource/patrick-hand-sc",
        "@fontsource/monaspace-krypton",
        "@fontsource-variable/lexend",
        "@fontsource/germania-one",
      ],
      social: [
        {
          icon: "blueSky",
          label: "BlueSky",
          href: "https://bsky.app/profile/thehangedmanpub.bsky.social",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/9RERC6R",
        },
      ],
      sidebar: [
        { label: "Code of Conduct", link: "/code" },
        { label: "Leadership Team", link: "/leadership" },
        {
          label: "Discord Server Resources",
          autogenerate: { directory: "discord" },
        },
        {
          label: "Events",
          items: [
            {
              label: "Arlathan eXchange",
              link: "https://arlathanxchange.neocities.org",
              attrs: { target: "_blank" },
            },
            {
              label: "DA Polyshipping",
              link: "https://dapolyshipping.neocities.org",
              attrs: { target: "_blank" },
            },
          ],
        },
        { label: "Credits", link: "/credits" },
      ],
      plugins: [starlightLinksValidator(), starlightAutoSidebar()],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
