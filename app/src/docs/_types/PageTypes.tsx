import { JSX } from "react";

export interface Page {
  info: Info;
  postInfo?: PostInfo;
  content: PageContent;
}

export interface Info {
  slug: string;
  title: string;
  title_display?: (string | JSX.Element)
  summary: string;
  pageType: PageType;
}

export const Roles = {
  author: "author",
  illustration: "illustration",
  design: "design",
  program: "program",
}

export interface PostInfo {
  update: [number, number, number];
  cover: string;
  author: Author[];
}

export type Role = (typeof Roles)[keyof typeof Roles];

export type Author = {
  data: Page;
  role: Role;
}

export type PageType = "post" | "channel" | "person" | "demo";

export type PageContent = (string | JSX.Element)[]