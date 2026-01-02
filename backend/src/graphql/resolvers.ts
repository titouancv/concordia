import { prisma } from "../lib/db";
import type { Experience, Post, User, Company, Theme } from "@prisma/client";

type PostWithRelations = Post & {
  authorUser: User | null;
  authorCompany: (Company & { theme: Theme }) | null;
  theme: Theme | null;
};

export const resolvers = {
  Query: {
    // Company queries
    companies: async () => {
      return prisma.company.findMany({
        include: {
          theme: true,
          stats: true,
          about: {
            include: {
              founders: true,
              officeLocation: true,
            },
          },
          employees: true,
          jobs: true,
          widgets: {
            include: {
              stats: true,
              benefits: true,
              processSteps: true,
              features: true,
              pricingPlans: true,
              faqItems: true,
            },
          },
        },
      });
    },

    company: async (_: unknown, { slug }: { slug: string }) => {
      return prisma.company.findUnique({
        where: { slug },
        include: {
          theme: true,
          stats: true,
          about: {
            include: {
              founders: true,
              officeLocation: true,
            },
          },
          employees: true,
          jobs: true,
          widgets: {
            include: {
              stats: true,
              benefits: true,
              processSteps: true,
              features: true,
              pricingPlans: true,
              faqItems: true,
            },
          },
        },
      });
    },

    companyJobs: async (_: unknown, { slug }: { slug: string }) => {
      const company = await prisma.company.findUnique({
        where: { slug },
        include: { jobs: true },
      });
      return company?.jobs || [];
    },

    // User queries
    users: async () => {
      return prisma.user.findMany({
        include: {
          experiences: true,
        },
      });
    },

    user: async (_: unknown, { username }: { username: string }) => {
      const user = await prisma.user.findUnique({
        where: { username },
        include: {
          experiences: true,
        },
      });

      if (!user) return null;

      // Transform experiences into professional and education arrays
      return {
        ...user,
        professional: user.experiences
          .filter((e: Experience) => e.type === "professional")
          .map((e: Experience) => ({
            id: e.id,
            role: e.role,
            institutionName: e.institutionName,
            startDate: e.startDate,
            endDate: e.endDate,
          })),
        education: user.experiences
          .filter((e: Experience) => e.type === "education")
          .map((e: Experience) => ({
            id: e.id,
            role: e.role,
            institutionName: e.institutionName,
            startDate: e.startDate,
            endDate: e.endDate,
          })),
      };
    },

    // Post queries
    posts: async () => {
      const posts = (await prisma.post.findMany({
        include: {
          authorUser: true,
          authorCompany: {
            include: { theme: true },
          },
          theme: true,
        },
        orderBy: { createdAt: "desc" },
      })) as PostWithRelations[];

      return posts.map((post: PostWithRelations) => ({
        id: post.id,
        content: post.content,
        image: post.image,
        createdAt: formatTimeAgo(post.createdAt),
        likes: post.likes,
        comments: post.comments,
        author: post.authorUser
          ? {
              name: post.authorUser.name,
              avatar: post.authorUser.avatar,
              type: "user",
              username: post.authorUser.username,
              theme: null,
            }
          : {
              name: post.authorCompany!.name,
              avatar: post.authorCompany!.logo,
              type: "company",
              username: post.authorCompany!.slug,
              theme: post.theme,
            },
      }));
    },

    post: async (_: unknown, { id }: { id: string }) => {
      const post = (await prisma.post.findUnique({
        where: { id },
        include: {
          authorUser: true,
          authorCompany: {
            include: { theme: true },
          },
          theme: true,
        },
      })) as PostWithRelations | null;

      if (!post) return null;

      return {
        id: post.id,
        content: post.content,
        image: post.image,
        createdAt: formatTimeAgo(post.createdAt),
        likes: post.likes,
        comments: post.comments,
        author: post.authorUser
          ? {
              name: post.authorUser.name,
              avatar: post.authorUser.avatar,
              type: "user",
              username: post.authorUser.username,
              theme: null,
            }
          : {
              name: post.authorCompany!.name,
              avatar: post.authorCompany!.logo,
              type: "company",
              username: post.authorCompany!.slug,
              theme: post.theme,
            },
      };
    },

    postsByAuthor: async (_: unknown, { username }: { username: string }) => {
      const posts = (await prisma.post.findMany({
        where: {
          authorUser: { username },
        },
        include: {
          authorUser: true,
          theme: true,
        },
        orderBy: { createdAt: "desc" },
      })) as PostWithRelations[];

      return posts.map((post: PostWithRelations) => ({
        id: post.id,
        content: post.content,
        image: post.image,
        createdAt: formatTimeAgo(post.createdAt),
        likes: post.likes,
        comments: post.comments,
        author: {
          name: post.authorUser!.name,
          avatar: post.authorUser!.avatar,
          type: "user",
          username: post.authorUser!.username,
          theme: null,
        },
      }));
    },

    postsByCompany: async (_: unknown, { slug }: { slug: string }) => {
      const posts = (await prisma.post.findMany({
        where: {
          authorCompany: { slug },
        },
        include: {
          authorCompany: {
            include: { theme: true },
          },
          theme: true,
        },
        orderBy: { createdAt: "desc" },
      })) as PostWithRelations[];

      return posts.map((post: PostWithRelations) => ({
        id: post.id,
        content: post.content,
        image: post.image,
        createdAt: formatTimeAgo(post.createdAt),
        likes: post.likes,
        comments: post.comments,
        author: {
          name: post.authorCompany!.name,
          avatar: post.authorCompany!.logo,
          type: "company",
          username: post.authorCompany!.slug,
          theme: post.theme,
        },
      }));
    },
  },
};

// Helper function to format time ago
function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "just now";
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else {
    return date.toLocaleDateString();
  }
}
