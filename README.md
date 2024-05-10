# Introducing Astro Micro 🔬

Astro Micro is an accessible theme for [Astro](https://astro.build/). It's a fork of [Mark Horn's](https://github.com/markhorn-dev) popular theme [Astro Nano](https://github.com/markhorn-dev/astro-nano).

Like Nano, Micro comes with zero frameworks installed. Micro adds features like [Pagefind](https://pagefind.app) for search, [Giscus](https://giscus.app) for comments, and more. For a full list of changes, see this [blog post](https://astro-micro.vercel.app).

---

## Project Structure 🚀

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where Astro likes to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands 🧞

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Want to learn more? 👀

Feel free to check [the documentation](https://docs.astro.build) or jump into Astro's [Discord server](https://astro.build/chat).
