import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Kinchasa ",
  DESCRIPTION: "Kinchasa's Blog.",
  EMAIL: "kin5000@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 4,
  NUM_PROJECTS_ON_HOMEPAGE: 4,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Home sweet homepage.",
};

export const BLOG: Metadata = {
  TITLE: "Missives",
  DESCRIPTION: "Occasional musings, observations and essays.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Stuff I'm working on.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (Twitter)",
    HREF: "https://twitter.com/kinchasa5000",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/Kinchasa",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/garettlaugavitz/",
  },
];
