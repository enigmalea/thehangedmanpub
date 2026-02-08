import { defineCollection, z } from "astro:content";

import { SocialLinks } from "@fujocoded/zod-transform-socials";
import { autoSidebarLoader } from "starlight-auto-sidebar/loader";
import { autoSidebarSchema } from "starlight-auto-sidebar/schema";
import { docsSchema } from "@astrojs/starlight/schema";

const communities = ["discord", "dreamwidth", "pillowfort"] as const;

const events = ["arlathan", "da poly"] as const;

const modCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: (tools) =>
    z.object({
      name: z.string(),
      avatar: tools.image(),
      links: SocialLinks,
      mod_duties: z.enum([...communities, ...events]).array(),
    }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  mods: modCollection,
  autoSidebar: defineCollection({
    loader: autoSidebarLoader(),
    schema: autoSidebarSchema(),
  }),
};
