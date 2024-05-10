---
title: "Getting started"
description: "Hit the ground running."
date: "03/22/24"
---

Astro Micro is based on [astro-nano](https://github.com/markhorn-dev/astro-nano) by [Mark Horn](https://twitter.com/markhorn_dev).

The basic configuration of Micro is pretty simple.

Edit `src/consts.ts`

Customize the base site

```ts
// src/consts.ts

export const SITE: Site = {
  NAME: "Astro Micro",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  EMAIL: "trevortylerlee@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

const string = "string";
```

| Field        | Req | Description                                          |
| :----------- | :-- | :--------------------------------------------------- |
| TITLE        | Yes | Displayed in header and footer. Used in SEO and RSS. |
| DESCRIPTION  | Yes | Used in SEO and RSS.                                 |
| EMAIL        | Yes | Displayed in contact section.                        |
| NUM_POSTS    | Yes | Limit num of posts on home page.                     |
| NUM_PROJECTS | Yes | Limit num of projects on home page.                  |

Customize your page metadata

```ts
// src/consts.ts

export const SITE: Metadata = {
  TITLE: "Astro Micro",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
};
```

| Field       | Req | Description                                    |
| :---------- | :-- | :--------------------------------------------- |
| TITLE       | Yes | Displayed in browser tab. Used in SEO and RSS. |
| DESCRIPTION | Yes | Used in SEO and RSS.                           |

Customize your social media

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
