import { COMPANIES, USERS, POSTS } from "../data";

export const resolvers = {
  Query: {
    // Company queries
    companies: () => Object.values(COMPANIES),
    company: (_: unknown, { slug }: { slug: string }) =>
      COMPANIES[slug] || null,
    companyJobs: (_: unknown, { slug }: { slug: string }) => {
      const company = COMPANIES[slug];
      return company ? company.jobs : [];
    },

    // User queries
    users: () => Object.values(USERS),
    user: (_: unknown, { username }: { username: string }) =>
      USERS[username] || null,

    // Post queries
    posts: () => POSTS,
    post: (_: unknown, { id }: { id: string }) =>
      POSTS.find((p) => p.id === id) || null,
    postsByAuthor: (_: unknown, { username }: { username: string }) =>
      POSTS.filter(
        (p) => p.author.type === "user" && p.author.username === username
      ),
    postsByCompany: (_: unknown, { slug }: { slug: string }) =>
      POSTS.filter(
        (p) => p.author.type === "company" && p.author.username === slug
      ),
  },
};
