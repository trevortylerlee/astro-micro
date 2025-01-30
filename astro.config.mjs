import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

import rehypeDocument from 'rehype-document';
import rehypeKatex from 'rehype-katex';
// import rehypeMathjax from "rehype-mathjax";
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
  site: "https://astro-micro.vercel.app",
  integrations: [sitemap(), mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
    rehypePlugins: [
      [rehypeDocument, { css: 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css' }],
      rehypeKatex,
      // rehypeMathjax,
    ],
    remarkPlugins: [
      remarkMath,
    ],
  },
});
