import { apolloClient } from "@/lib/apollo-client";
import {
  GET_COMPANY,
  GET_USER,
  GET_POSTS,
  GET_POSTS_BY_AUTHOR,
  GET_POSTS_BY_COMPANY,
} from "@/lib/graphql-queries";
import { Post } from "@/types/feed";
import { Company } from "@/types/company";
import { User } from "@/types/user";

export const api = {
  company: {
    get: async (slug: string): Promise<Company | null> => {
      try {
        const { data } = await apolloClient.query<{ company: Company }>({
          query: GET_COMPANY,
          variables: { slug },
        });
        return data?.company ?? null;
      } catch (error) {
        console.error("Error fetching company:", error);
        return null;
      }
    },
    getPosts: async (slug: string): Promise<Post[]> => {
      try {
        const { data } = await apolloClient.query<{ postsByCompany: Post[] }>({
          query: GET_POSTS_BY_COMPANY,
          variables: { slug },
        });
        return data?.postsByCompany ?? [];
      } catch (error) {
        console.error("Error fetching company posts:", error);
        return [];
      }
    },
  },
  user: {
    get: async (username: string): Promise<User | null> => {
      try {
        const { data } = await apolloClient.query<{ user: User }>({
          query: GET_USER,
          variables: { username },
        });
        return data?.user ?? null;
      } catch (error) {
        console.error("Error fetching user:", error);
        return null;
      }
    },
    getPosts: async (username: string): Promise<Post[]> => {
      try {
        const { data } = await apolloClient.query<{ postsByAuthor: Post[] }>({
          query: GET_POSTS_BY_AUTHOR,
          variables: { username },
        });
        return data?.postsByAuthor ?? [];
      } catch (error) {
        console.error("Error fetching user posts:", error);
        return [];
      }
    },
  },
  feed: {
    get: async (): Promise<Post[]> => {
      try {
        const { data } = await apolloClient.query<{ posts: Post[] }>({
          query: GET_POSTS,
        });
        return data?.posts ?? [];
      } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
      }
    },
  },
};
