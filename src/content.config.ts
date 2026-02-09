import { defineCollection, z } from "astro:content";

import { SocialLinks } from "@fujocoded/zod-transform-socials";
import { autoSidebarLoader } from "starlight-auto-sidebar/loader";
import { autoSidebarSchema } from "starlight-auto-sidebar/schema";
import { avatarUrlForName } from "./utils/avatarURL";
import { docsSchema } from "@astrojs/starlight/schema";
import { parse } from "csv-parse/sync";

interface RowData {
  Name: string;
  Events: string;
  "Social 1": string;
  "Social 2"?: string;
  "Social 3"?: string;
  "Social 4"?: string;
}

const modCollection = defineCollection({
  loader: async () => {
    const res = await fetch(
      "https://docs.google.com/spreadsheets/d/1GJP6ADFCmNZAGGZF79CjMcWJYPx1hyHkjy26tOdmsc4/export?format=csv"
    );
    const csv = await res.text();

    const rows: RowData[] = parse(csv, {
      columns: true,
      skip_empty_lines: true,
    });

    return rows.map((row) => {
      const name = row["Name"];
      const avatar = avatarUrlForName(name);

      const links = [
        row["Social 1"],
        row["Social 2"],
        row["Social 3"],
        row["Social 4"],
      ]
        .map((s) => (typeof s === "string" ? s.trim() : ""))
        .filter((s) => s.length > 0)
        .map((url) => ({ url }));

      const id = name.toLowerCase().replace(/\s+/g, "-");

      const modDuties = row["Events"]
        .split(",")
        .map((d) => d.trim().toLowerCase())
        .filter(Boolean);

      return {
        id,
        name,
        avatar,
        links,
        mod_duties: modDuties,
      };
    });
  },

  schema: () =>
    z.object({
      id: z.string(),
      name: z.string(),
      avatar: z.string().url(),
      links: SocialLinks,
      mod_duties: z.array(z.string()),
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
