import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://thehangedmanpub.netlify.app",

  integrations: [
    icon(),
    sitemap(),
    metaTags(),
    expressiveCode({
      themes: ["nord"],
    }),
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
          items: [
            { label: "Links", link: "/discord/links" },
            {
              label: "Fic Club",
              items: [
                { label: "Introduction", link: "/discord/club" },
                { label: "Suggest a Fic", link: "/discord/club/suggest" },
                { label: "Fic Club Database", link: "/discord/club/database" },
              ],
            },
            {
              label: "Question of the Day",
              items: [
                { label: "Introduction", link: "/discord/qotd" },
                { label: "Submit a Question", link: "/discord/qotd/question" },
                {
                  label: "Submit a Monthly Prompt",
                  link: "/discord/qotd/prompt",
                },
                { label: "Submit a Picrew", link: "/discord/qotd/picrew" },
                { label: "Archives", link: "/discord/qotd/archives" },
              ],
            },
          ],
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
      plugins: [starlightLinksValidator()],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
