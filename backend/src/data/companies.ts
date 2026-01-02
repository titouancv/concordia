import { Company } from "../types";

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
        address: "105 Jessie St, San Francisco, CA 94105, USA",
        mapImage: "https://picsum.photos/seed/map/800/400",
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
    widgets: {
      stats: [
        { label: "Employees", value: "120" },
        { label: "Founded", value: "2015" },
        { label: "Raised", value: "$45M" },
        { label: "Funding", value: "Series B" },
      ],
      benefits: [
        {
          title: "Global Reach",
          description:
            "Connect with talent and opportunities from all around the world without barriers.",
        },
        {
          title: "Secure Platform",
          description:
            "Enterprise-grade security ensures your data and communications are always protected.",
        },
        {
          title: "Real-time Analytics",
          description:
            "Get insights into your performance with our advanced real-time dashboard.",
        },
      ],
      processSteps: [
        {
          title: "Create Account",
          description: "Sign up in seconds and set up your company profile.",
        },
        {
          title: "Post Opportunities",
          description:
            "Share your job openings or project requirements with the community.",
        },
        {
          title: "Connect & Grow",
          description:
            "Match with the right talent and scale your business effectively.",
        },
      ],
      features: [
        {
          title: "Advanced Search",
          description:
            "Find exactly what you're looking for with powerful filters.",
        },
        {
          title: "Team Collaboration",
          description:
            "Invite your team members and manage permissions effortlessly.",
        },
        {
          title: "Automated Reports",
          description:
            "Receive weekly updates on your activity and engagement metrics.",
        },
        {
          title: "Custom Branding",
          description:
            "Personalize your company page to match your brand identity.",
        },
        {
          title: "API Access",
          description:
            "Integrate with your existing tools using our robust API.",
        },
      ],
      pricingPlans: [
        {
          name: "Basic",
          price: "$29",
          description: "Best for startups and small teams.",
          features: ["5 Job Posts", "Basic Analytics", "Email Support"],
          ctaText: "Start Free Trial",
        },
        {
          name: "Pro",
          price: "$79",
          description: "Best for growing companies.",
          features: [
            "Unlimited Job Posts",
            "Advanced Analytics",
            "Priority Support",
            "Team Collaboration",
          ],
          isPopular: true,
          ctaText: "Start Free Trial",
        },
        {
          name: "Enterprise",
          price: "$149",
          description: "Best for large organizations.",
          features: [
            "Custom Solutions",
            "Dedicated Account Manager",
            "SLA",
            "SSO Integration",
          ],
          ctaText: "Contact Sales",
        },
      ],
      faqItems: [
        {
          question: "How do I get started?",
          answer:
            "Simply click the 'Get Started' button and follow the registration process. It takes less than 2 minutes.",
        },
        {
          question: "Can I cancel my subscription?",
          answer:
            "Yes, you can cancel your subscription at any time from your account settings. No questions asked.",
        },
        {
          question: "Do you offer a free trial?",
          answer:
            "Yes, we offer a 14-day free trial on all our paid plans so you can explore the features risk-free.",
        },
      ],
    },
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
    widgets: {
      stats: [
        { label: "Employees", value: "120" },
        { label: "Founded", value: "2015" },
        { label: "Raised", value: "$45M" },
        { label: "Funding", value: "Series B" },
      ],
      benefits: [
        {
          title: "Global Reach",
          description:
            "Connect with talent and opportunities from all around the world without barriers.",
        },
        {
          title: "Secure Platform",
          description:
            "Enterprise-grade security ensures your data and communications are always protected.",
        },
        {
          title: "Real-time Analytics",
          description:
            "Get insights into your performance with our advanced real-time dashboard.",
        },
      ],
      processSteps: [
        {
          title: "Create Account",
          description: "Sign up in seconds and set up your company profile.",
        },
        {
          title: "Post Opportunities",
          description:
            "Share your job openings or project requirements with the community.",
        },
        {
          title: "Connect & Grow",
          description:
            "Match with the right talent and scale your business effectively.",
        },
      ],
      features: [
        {
          title: "Advanced Search",
          description:
            "Find exactly what you're looking for with powerful filters.",
        },
        {
          title: "Team Collaboration",
          description:
            "Invite your team members and manage permissions effortlessly.",
        },
        {
          title: "Automated Reports",
          description:
            "Receive weekly updates on your activity and engagement metrics.",
        },
        {
          title: "Custom Branding",
          description:
            "Personalize your company page to match your brand identity.",
        },
        {
          title: "API Access",
          description:
            "Integrate with your existing tools using our robust API.",
        },
      ],
      pricingPlans: [
        {
          name: "Basic",
          price: "$29",
          description: "Best for startups and small teams.",
          features: ["5 Job Posts", "Basic Analytics", "Email Support"],
          ctaText: "Start Free Trial",
        },
        {
          name: "Pro",
          price: "$79",
          description: "Best for growing companies.",
          features: [
            "Unlimited Job Posts",
            "Advanced Analytics",
            "Priority Support",
            "Team Collaboration",
          ],
          isPopular: true,
          ctaText: "Start Free Trial",
        },
        {
          name: "Enterprise",
          price: "$149",
          description: "Best for large organizations.",
          features: [
            "Custom Solutions",
            "Dedicated Account Manager",
            "SLA",
            "SSO Integration",
          ],
          ctaText: "Contact Sales",
        },
      ],
      faqItems: [
        {
          question: "How do I get started?",
          answer:
            "Simply click the 'Get Started' button and follow the registration process. It takes less than 2 minutes.",
        },
        {
          question: "Can I cancel my subscription?",
          answer:
            "Yes, you can cancel your subscription at any time from your account settings. No questions asked.",
        },
        {
          question: "Do you offer a free trial?",
          answer:
            "Yes, we offer a 14-day free trial on all our paid plans so you can explore the features risk-free.",
        },
      ],
    },
  },
};
