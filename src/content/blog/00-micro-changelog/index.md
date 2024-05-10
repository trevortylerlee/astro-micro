---
title: "Everything new in Astro Micro"
description: "Features, enhancements, and changes."
date: "05/09/24"
---

---

### Search 🔍

[Pagefind](https://pagefind.app) is a search library for static websites. Micro includes an adaptive and accessible Pagefind component. Press <kbd>/</kbd> or <kbd>CTRL</kbd> + <kbd>K</kbd> to open the search dialog. For Mac users, <kbd>⌘</kbd> + <kbd>K</kbd> can also be used.

To dismiss the search dialog, press <kbd>Esc</kbd> or click on an area outside the component.

#### Build and develop

Micro simplifies development with a modified build script.

```bash
# default build
"build": "astro check && astro build"

# modified build
"build": "astro check && astro build && pagefind --site dist && cp -r dist/pagefind public/",
```

`pagefind --site dist` indexes the site and creates a `dist` folder. `cp -r dist/pagefind public/` copies the `dist` folder to the `public` folder to enable Pagefind in development.

The site **must** be built at least once so Pagefind can index the content.

```bash
# Pagefind must index the site to function
npm run build
```

When developing you can continue to use `npm run dev` and Pagefind will use the index from the last available build.

---

### Comments 💬

Coming soon...

---

### UI enhancements 🎨

- Elements are styled and animate on focus
- Increased contrast in light mode
- Active theme is indicated by theme buttons
- Separate syntax highlight themes for light and dark mode
- Code blocks have a copy button

---

### Other changes

- Change fonts to Geist Sans and Geist Mono
- Switch base color from "stone" to "neutral"
- Change formatted date to use "long" option for month
- Minor spacing changes throughout
- Remove "work" collection and components
  - If desired, you can get the code from [Astro Nano](https://github.com/markhorn-dev/astro-nano)
- Slightly increased link decoration offset
- Slightly sped-up animations
- Reversed animation

---

### Issues ⚠️

- Disabled ViewTransitions due to Pagefind component (WIP)
