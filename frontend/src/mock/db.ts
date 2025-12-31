import { Company } from "@/types/company";
import { Post } from "@/types/feed";

export const COMPANIES: Record<string, Company> = {
  acme: {
    name: "Acme Corp",
    slug: "acme",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=AC",
    cover: "https://picsum.photos/seed/acme/1200/400",
    theme: {
      primary: "#0066cc",
      primaryText: "#ffffffff",
      secondary: "#e6f0ff",
      secondaryText: "#000000ff",
      action: "#ff9900",
      actionText: "#ffffffff",
    },
    description: "Innovation for the future.",
    location: "San Francisco, CA",
    website: "https://acme.com",
    stats: {
      employees: 120,
      founded: 2015,
      genderRatio: "60% M / 40% F",
      lastFunding: "Series B",
      totalRaised: "$45M",
    },
    about: {
      history:
        "Founded in 2015 by a group of visionary engineers, Acme Corp started in a small garage in Silicon Valley. We've since grown into a global leader in innovation.",
      mission:
        "To provide cutting-edge solutions that empower businesses to achieve their full potential.",
      vision:
        "A world where technology seamlessly integrates with daily life to improve human productivity and happiness.",
      founders: [
        {
          id: "1",
          name: "John Doe",
          role: "CEO & Co-founder",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
          username: "johndoe",
        },
        {
          id: "2",
          name: "Jane Smith",
          role: "CTO & Co-founder",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
          username: "janesmith",
        },
      ],
      officeLocation: {
        address: "123 Innovation Way, San Francisco, CA 94105",
        mapImage: "https://picsum.photos/seed/map/800/400", // Placeholder for map
      },
    },
    employees: [
      {
        id: "1",
        name: "Alice Johnson",
        role: "Product Manager",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
        username: "alicej",
      },
      {
        id: "2",
        name: "Bob Williams",
        role: "Senior Engineer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
        username: "bobw",
      },
      {
        id: "3",
        name: "Charlie Brown",
        role: "Designer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
        username: "charlieb",
      },
      {
        id: "4",
        name: "Sarah Jenkins",
        role: "Senior Frontend Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        username: "sarahj",
      },
    ],
    jobs: [
      {
        id: "1",
        title: "Senior Frontend Engineer",
        type: "Full-time",
        location: "San Francisco, CA",
        remote: true,
      },
      {
        id: "2",
        title: "Product Designer",
        type: "Full-time",
        location: "Remote",
        remote: true,
      },
      {
        id: "3",
        title: "Marketing Manager",
        type: "Full-time",
        location: "New York, NY",
        remote: false,
      },
    ],
  },
  techflow: {
    name: "TechFlow",
    slug: "techflow",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=TF",
    cover: "https://picsum.photos/seed/techflow/1200/400",
    theme: {
      primary: "#8a2be2",
      secondary: "#f3e6ff",
      action: "#00cc99",
      primaryText: "#ffffffff",
      secondaryText: "#000000ff",
      actionText: "#000000ff",
    },
    description: "Seamless integration for your workflow.",
    location: "New York, NY",
    website: "https://techflow.io",
    stats: {
      employees: 45,
      founded: 2018,
      genderRatio: "50% M / 50% F",
      lastFunding: "Series A",
      totalRaised: "$12M",
    },
    about: {
      history:
        "TechFlow was born out of frustration with existing workflow tools. We set out to build something better, faster, and more intuitive.",
      mission: "To streamline complex workflows and make work enjoyable again.",
      vision: "To be the operating system for modern business.",
      founders: [
        {
          id: "1",
          name: "Mike Ross",
          role: "CEO",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
          username: "mikeross",
        },
      ],
      officeLocation: {
        address: "456 Tech Blvd, New York, NY 10001",
        mapImage: "https://picsum.photos/seed/map2/800/400",
      },
    },
    employees: [
      {
        id: "1",
        name: "Sarah Jenkins",
        role: "Senior Frontend Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        username: "sarahj",
      },
      {
        id: "5",
        name: "David Lee",
        role: "Backend Engineer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        username: "davidl",
      },
    ],
    jobs: [
      {
        id: "4",
        title: "DevOps Engineer",
        type: "Full-time",
        location: "Remote",
        remote: true,
      },
      {
        id: "5",
        title: "Sales Representative",
        type: "Full-time",
        location: "New York, NY",
        remote: false,
      },
    ],
  },
};

export const USERS = {
  sarahj: {
    name: "Sarah Jenkins",
    username: "sarahj",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "Senior Frontend Developer | React | Next.js | UI/UX Enthusiast",
    location: "London, UK",
    experiences: [
      {
        id: 1,
        role: "Senior Frontend Developer",
        company: "TechFlow",
        startDate: "2021",
        endDate: "Present",
      },
      {
        id: 2,
        role: "Frontend Developer",
        company: "WebSolutions",
        startDate: "2018",
        endDate: "2021",
      },
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"],
  },
};

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
];
