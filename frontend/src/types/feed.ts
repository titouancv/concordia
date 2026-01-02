import { Theme } from "./app";

export interface PostAuthor {
  name: string;
  avatar: string;
  type: "user" | "company";
  username: string;
  theme?: Theme;
}

export interface Post {
  id: string;
  author: PostAuthor;
  content: string;
  image?: string;
  createdAt: string;
  likes: number;
  comments: number;
  theme?: Theme;
}
