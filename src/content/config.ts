import { defineCollection, z } from "astro:content";

import { docsSchema } from "@astrojs/starlight/schema";

const icon = [
  "fa6-solid:link",
  "simple-icons:firefish",
  "simple-icons:archiveofourown",
  "simple-icons:mastodon",
  "simple-icons:tumblr",
  "simple-icons:twitter",
  "simple-icons:instagram",
] as const;

const communities = ["discord", "dreamwidth", "pillowfort"] as const;

const events = ["arlathan", "da poly"] as const;

const modCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: (tools) =>
    z.object({
      name: z.string(),
      avatar: tools.image(),
      links: z
        .object({
          icon: z.enum(icon),
          url: z.string().url(),
        })
        .array(),
      mod_duties: z.enum([...communities, ...events]).array(),
    }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  mods: modCollection,
};
