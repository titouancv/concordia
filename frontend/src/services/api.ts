import { COMPANIES, USERS, POSTS } from "@/mock/db";
import { Post } from "@/types/feed";
import { Company } from "@/types/company";
import { User } from "@/types/user";

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  company: {
    get: async (slug: string): Promise<Company | null> => {
      await delay(100); // Simulate latency
      return COMPANIES[slug as keyof typeof COMPANIES] || null;
    },
    getPosts: async (slug: string): Promise<Post[]> => {
      await delay(100);
      return POSTS.filter((p) => p.author.username === slug);
    },
  },
  user: {
    get: async (username: string): Promise<User | null> => {
      await delay(100);
      return USERS[username as keyof typeof USERS] || null;
    },
    getPosts: async (username: string): Promise<Post[]> => {
      await delay(100);
      return POSTS.filter((p) => p.author.username === username);
    },
  },
  feed: {
    get: async (): Promise<Post[]> => {
      await delay(200);
      return POSTS;
    },
  },
};
