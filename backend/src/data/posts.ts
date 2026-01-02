import { Post } from "../types";

export const POSTS: Post[] = [
  {
    id: "1",
    author: {
      name: "Acme Corp",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AC",
      type: "company",
      username: "acme",
      theme: {
        primary: "#0066cc",
        primaryText: "#ffffffff",
        secondary: "#e6f0ff",
        secondaryText: "#000000ff",
        action: "#ff9900",
        actionText: "#ffffffff",
      },
    },
    content:
      "We are thrilled to announce our Series B funding round led by TopTier Ventures! 🚀 This milestone will help us accelerate our mission to revolutionize the industry.",
    createdAt: "2 hours ago",
    likes: 124,
    comments: 18,
  },
  {
    id: "2",
    author: {
      name: "Sarah Jenkins",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      type: "user",
      username: "sarahj",
    },
    content:
      "Just finished a great workshop on React Server Components. The performance improvements are mind-blowing! #NextJS #React #WebDev",
    createdAt: "5 hours ago",
    likes: 45,
    comments: 7,
  },
  {
    id: "3",
    author: {
      name: "TechFlow",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=TF",
      type: "company",
      username: "techflow",
      theme: {
        primary: "#8a2be2",
        secondary: "#f3e6ff",
        action: "#00cc99",
        primaryText: "#ffffffff",
        secondaryText: "#000000ff",
        actionText: "#000000ff",
      },
    },
    content:
      "Our new API documentation is live! Check it out to see how you can integrate our services into your workflow seamlessly.",
    image: "https://picsum.photos/seed/techflow/800/400",
    createdAt: "1 day ago",
    likes: 89,
    comments: 12,
  },
  {
    id: "4",
    author: {
      name: "TechFlow",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=TF",
      type: "company",
      username: "techflow",
      theme: {
        primary: "#8a2be2",
        secondary: "#f3e6ff",
        action: "#00cc99",
        primaryText: "#ffffffff",
        secondaryText: "#000000ff",
        actionText: "#000000ff",
      },
    },
    content:
      "Our new API documentation is live! Check it out to see how you can integrate our services into your workflow seamlessly.",
    image: "https://picsum.photos/seed/techflow/800/400",
    createdAt: "1 day ago",
    likes: 89,
    comments: 12,
  },
];
