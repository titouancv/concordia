import { prisma } from "../lib/db";
import type { Experience, Post, User, Company, Theme } from "@prisma/client";

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
              officeLocation: true,
            },
          },
          founders: {
            include: {
              user: true,
            },
          },
          employments: {
            include: {
              user: true,
            },
          },
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
      const company = await prisma.company.findUnique({
        where: { slug },
        include: {
          theme: true,
          stats: true,
          about: {
            include: {
              officeLocation: true,
            },
          },
          founders: {
            include: {
              user: true,
            },
          },
          employments: {
            include: {
              user: true,
            },
          },
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

      if (!company) return null;

      return {
        ...company,
        about: company.about
          ? {
              ...company.about,
              founders: company.founders.map((f) => ({
                id: f.user.id,
                name: f.user.name,
                role: f.role,
                avatar: f.user.avatar,
                username: f.user.username,
              })),
            }
          : null,
        employees: company.employments.map((e) => ({
          id: e.user.id,
          name: e.user.name,
          role: e.role,
          avatar: e.user.avatar,
          username: e.user.username,
        })),
      };
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
          experiences: {
            include: {
              company: true,
            },
          },
        },
      });

      if (!user) return null;

      // Transform experiences into professional and education arrays
      return {
        ...user,
        professional: user.experiences
          .filter(
            (e: Experience & { company: Company | null }) =>
              e.type === "professional"
          )
          .map((e: Experience & { company: Company | null }) => ({
            id: e.id,
            role: e.role,
            institutionName: e.company?.name || "Unknown",
            startDate: e.startDate,
            endDate: e.endDate,
          })),
        education: user.experiences
          .filter(
            (e: Experience & { company: Company | null }) =>
              e.type === "education"
          )
          .map((e: Experience & { company: Company | null }) => ({
            id: e.id,
            role: e.role,
            institutionName: e.company?.name || "Unknown",
            startDate: e.startDate,
            endDate: e.endDate,
          })),
      };
    },

    // Post queries
    posts: async () => {
      const posts = await prisma.post.findMany({
        include: {
          theme: true,
        },
        orderBy: { createdAt: "desc" },
      });

      const postsWithAuthors = await Promise.all(
        posts.map(async (post) => {
          if (post.authorType === "USER") {
            const user = await prisma.user.findUnique({
              where: { id: post.authorId },
            });
            return {
              id: post.id,
              content: post.content,
              image: post.image,
              createdAt: formatTimeAgo(post.createdAt),
              likes: post.likes,
              comments: post.comments,
              author: {
                name: user!.name,
                avatar: user!.avatar,
                type: "user",
                username: user!.username,
                theme: null,
              },
            };
          } else {
            const company = await prisma.company.findUnique({
              where: { id: post.authorId },
              include: { theme: true },
            });
            return {
              id: post.id,
              content: post.content,
              image: post.image,
              createdAt: formatTimeAgo(post.createdAt),
              likes: post.likes,
              comments: post.comments,
              author: {
                name: company!.name,
                avatar: company!.logo,
                type: "company",
                username: company!.slug,
                theme: post.theme || company!.theme,
              },
            };
          }
        })
      );

      return postsWithAuthors;
    },

    post: async (_: unknown, { id }: { id: string }) => {
      const post = await prisma.post.findUnique({
        where: { id },
        include: {
          theme: true,
        },
      });

      if (!post) return null;

      if (post.authorType === "USER") {
        const user = await prisma.user.findUnique({
          where: { id: post.authorId },
        });
        return {
          id: post.id,
          content: post.content,
          image: post.image,
          createdAt: formatTimeAgo(post.createdAt),
          likes: post.likes,
          comments: post.comments,
          author: {
            name: user!.name,
            avatar: user!.avatar,
            type: "user",
            username: user!.username,
            theme: null,
          },
        };
      } else {
        const company = await prisma.company.findUnique({
          where: { id: post.authorId },
          include: { theme: true },
        });
        return {
          id: post.id,
          content: post.content,
          image: post.image,
          createdAt: formatTimeAgo(post.createdAt),
          likes: post.likes,
          comments: post.comments,
          author: {
            name: company!.name,
            avatar: company!.logo,
            type: "company",
            username: company!.slug,
            theme: post.theme || company!.theme,
          },
        };
      }
    },

    postsByAuthor: async (_: unknown, { username }: { username: string }) => {
      const user = await prisma.user.findUnique({ where: { username } });
      if (!user) return [];

      const posts = await prisma.post.findMany({
        where: {
          authorType: "USER",
          authorId: user.id,
        },
        include: {
          theme: true,
        },
        orderBy: { createdAt: "desc" },
      });

      return posts.map((post) => ({
        id: post.id,
        content: post.content,
        image: post.image,
        createdAt: formatTimeAgo(post.createdAt),
        likes: post.likes,
        comments: post.comments,
        author: {
          name: user.name,
          avatar: user.avatar,
          type: "user",
          username: user.username,
          theme: null,
        },
      }));
    },

    postsByCompany: async (_: unknown, { slug }: { slug: string }) => {
      const company = await prisma.company.findUnique({
        where: { slug },
        include: { theme: true },
      });
      if (!company) return [];

      const posts = await prisma.post.findMany({
        where: {
          authorType: "COMPANY",
          authorId: company.id,
        },
        include: {
          theme: true,
        },
        orderBy: { createdAt: "desc" },
      });

      return posts.map((post) => ({
        id: post.id,
        content: post.content,
        image: post.image,
        createdAt: formatTimeAgo(post.createdAt),
        likes: post.likes,
        comments: post.comments,
        author: {
          name: company.name,
          avatar: company.logo,
          type: "company",
          username: company.slug,
          theme: post.theme || company.theme,
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
