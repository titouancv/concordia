import { User } from "../types";

export const USERS: Record<string, User> = {
  sarahj: {
    name: "Sarah Jenkins",
    username: "sarahj",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "Senior Frontend Developer | React | Next.js | UI/UX Enthusiast",
    location: "London, UK",
    professional: [
      {
        id: 1,
        role: "Senior Frontend Developer",
        institutionName: "TechFlow",
        startDate: "2021",
        endDate: "Present",
      },
      {
        id: 2,
        role: "Frontend Developer",
        institutionName: "WebSolutions",
        startDate: "2018",
        endDate: "2021",
      },
    ],
    education: [
      {
        id: 1,
        role: "BSc Computer Science",
        institutionName: "University of London",
        startDate: "2014",
        endDate: "2018",
      },
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"],
    hobbies: ["Hiking", "Photography", "Cooking"],
  },
  johndoe: {
    name: "John Doe",
    username: "johndoe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    bio: "CEO & Co-founder at Acme Corp | Serial Entrepreneur | Tech Enthusiast",
    location: "San Francisco, CA",
    professional: [
      {
        id: 1,
        role: "CEO & Co-founder",
        institutionName: "Acme Corp",
        startDate: "2015",
        endDate: "Present",
      },
    ],
    education: [
      {
        id: 1,
        role: "MBA",
        institutionName: "Stanford University",
        startDate: "2010",
        endDate: "2012",
      },
    ],
    skills: ["Leadership", "Strategy", "Product Management"],
    hobbies: ["Golf", "Reading", "Travel"],
  },
  janesmith: {
    name: "Jane Smith",
    username: "janesmith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    bio: "CTO & Co-founder at Acme Corp | Engineering Leader",
    location: "San Francisco, CA",
    professional: [
      {
        id: 1,
        role: "CTO & Co-founder",
        institutionName: "Acme Corp",
        startDate: "2015",
        endDate: "Present",
      },
    ],
    education: [
      {
        id: 1,
        role: "PhD Computer Science",
        institutionName: "MIT",
        startDate: "2008",
        endDate: "2013",
      },
    ],
    skills: ["System Architecture", "Machine Learning", "Cloud Infrastructure"],
    hobbies: ["Chess", "Hiking", "Piano"],
  },
};
