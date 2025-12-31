import { COMPANIES, USERS, POSTS } from "@/mock/db";
import { Post } from "@/components/feed/PostCard";

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  company: {
    get: async (slug: string) => {
      await delay(100); // Simulate latency
      return COMPANIES[slug as keyof typeof COMPANIES] || null;
    },
    getPosts: async (slug: string) => {
      await delay(100);
      return POSTS.filter((p) => p.author.username === slug);
    },
  },
  user: {
    get: async (username: string) => {
      await delay(100);
      return USERS[username as keyof typeof USERS] || null;
    },
    getPosts: async (username: string) => {
      await delay(100);
      return POSTS.filter((p) => p.author.username === username);
    },
  },
  feed: {
    get: async () => {
      await delay(200);
      return POSTS;
    },
  },
};
