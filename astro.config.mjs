import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-micro.vercel.app",
  integrations: [tailwind(), sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
