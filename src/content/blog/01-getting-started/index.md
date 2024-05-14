---
title: "Getting started"
description: "Hit the ground running."
date: "03/22/24"
---

---

## Customize the website's metadata

To change the website's metadata, edit `src/consts.ts`.

```ts
// src/consts.ts

export const SITE: Site = {
  NAME: "Astro Micro",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
  EMAIL: "trevortylerlee@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};
```

| Field        | Req | Description                                          |
| :----------- | :-- | :--------------------------------------------------- |
| TITLE        | Yes | Displayed in header and footer. Used in SEO and RSS. |
| DESCRIPTION  | Yes | Used in SEO and RSS.                                 |
| EMAIL        | Yes | Displayed in contact section.                        |
| NUM_POSTS    | Yes | Limit number of posts on home page.                  |
| NUM_PROJECTS | Yes | Limit number of projects on home page.               |

---

## Customize metadata for individual pages

```ts
// src/consts.ts

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Astro Micro is a fork of Astro Nano.",
};
```

| Field       | Req | Description                                    |
| :---------- | :-- | :--------------------------------------------- |
| TITLE       | Yes | Displayed in browser tab. Used in SEO and RSS. |
| DESCRIPTION | Yes | Used in SEO and RSS.                           |

---

## Customize the social media links

```ts
// src/consts.ts

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/boogerbuttcheeks",
  },
  {
    NAME: "github",
    HREF: "https://github.com/trevortylerlee",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/trevortylerlee",
  },
];
```

| Field | Req | Description                             |
| :---- | :-- | :-------------------------------------- |
| NAME  | Yes | Displayed in contact section as a link. |
| HREF  | Yes | External url to social media profile.   |
