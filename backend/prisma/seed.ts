import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting seed...");

  // Clean database
  await prisma.post.deleteMany();
  await prisma.fAQItem.deleteMany();
  await prisma.pricingPlan.deleteMany();
  await prisma.feature.deleteMany();
  await prisma.step.deleteMany();
  await prisma.benefit.deleteMany();
  await prisma.stat.deleteMany();
  await prisma.widgets.deleteMany();
  await prisma.job.deleteMany();
  await prisma.employment.deleteMany();
  await prisma.officeLocation.deleteMany();
  await prisma.companyFounder.deleteMany();
  await prisma.companyAbout.deleteMany();
  await prisma.companyStats.deleteMany();
  await prisma.company.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.user.deleteMany();
  await prisma.theme.deleteMany();

  console.log("🧹 Database cleaned");

  // Create themes
  const acmeTheme = await prisma.theme.create({
    data: {
      primary: "#0066cc",
      primaryText: "#ffffffff",
      secondary: "#e6f0ff",
      secondaryText: "#000000ff",
      action: "#ff9900",
      actionText: "#ffffffff",
    },
  });

  const techflowTheme = await prisma.theme.create({
    data: {
      primary: "#8a2be2",
      secondary: "#f3e6ff",
      action: "#00cc99",
      primaryText: "#ffffffff",
      secondaryText: "#000000ff",
      actionText: "#000000ff",
    },
  });

  console.log("🎨 Themes created");

  // Create users
  const sarahUser = await prisma.user.create({
    data: {
      name: "Sarah Jenkins",
      username: "sarahj",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      bio: "Senior Frontend Developer | React | Next.js | UI/UX Enthusiast",
      location: "London, UK",
      skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"],
      hobbies: ["Hiking", "Photography", "Cooking"],
    },
  });

  const johnUser = await prisma.user.create({
    data: {
      name: "John Doe",
      username: "johndoe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      bio: "CEO & Co-founder at Acme Corp | Serial Entrepreneur | Tech Enthusiast",
      location: "San Francisco, CA",
      skills: ["Leadership", "Strategy", "Product Management"],
      hobbies: ["Golf", "Reading", "Travel"],
    },
  });

  const janeUser = await prisma.user.create({
    data: {
      name: "Jane Smith",
      username: "janesmith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      bio: "CTO & Co-founder at Acme Corp | Engineering Leader",
      location: "San Francisco, CA",
      skills: [
        "System Architecture",
        "Machine Learning",
        "Cloud Infrastructure",
      ],
      hobbies: ["Chess", "Hiking", "Piano"],
    },
  });

  console.log("👤 Users created");

  // Create Acme company
  const acmeCompany = await prisma.company.create({
    data: {
      name: "Acme Corp",
      slug: "acme",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=AC",
      cover: "https://picsum.photos/seed/acme/1200/400",
      description: "Innovation for the future.",
      location: "San Francisco, CA",
      website: "https://acme.com",
      theme: { connect: { id: acmeTheme.id } },
      stats: {
        create: {
          employees: 120,
          founded: 2015,
          genderRatio: "60% M / 40% F",
          lastFunding: "Series B",
          totalRaised: "$45M",
        },
      },
      about: {
        create: {
          history:
            "Founded in 2015 by a group of visionary engineers, Acme Corp started in a small garage in Silicon Valley. We've since grown into a global leader in innovation.",
          mission:
            "To provide cutting-edge solutions that empower businesses to achieve their full potential.",
          vision:
            "A world where technology seamlessly integrates with daily life to improve human productivity and happiness.",
          officeLocation: {
            create: {
              address: "105 Jessie St, San Francisco, CA 94105, USA",
              mapImage: "https://picsum.photos/seed/map/800/400",
            },
          },
        },
      },
      jobs: {
        create: [
          {
            title: "Senior Frontend Engineer",
            type: "Full-time",
            location: "San Francisco, CA",
            remote: true,
          },
          {
            title: "Product Designer",
            type: "Full-time",
            location: "Remote",
            remote: true,
          },
          {
            title: "Marketing Manager",
            type: "Full-time",
            location: "New York, NY",
            remote: false,
          },
        ],
      },
      widgets: {
        create: {
          stats: {
            create: [
              { label: "Employees", value: "120" },
              { label: "Founded", value: "2015" },
              { label: "Raised", value: "$45M" },
              { label: "Funding", value: "Series B" },
            ],
          },
          benefits: {
            create: [
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
          },
          processSteps: {
            create: [
              {
                title: "Create Account",
                description:
                  "Sign up in seconds and set up your company profile.",
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
          },
          features: {
            create: [
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
          },
          pricingPlans: {
            create: [
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
          },
          faqItems: {
            create: [
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
      },
    },
  });

  console.log("🏢 Acme company created");

  // Create TechFlow company
  const techflowCompany = await prisma.company.create({
    data: {
      name: "TechFlow",
      slug: "techflow",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=TF",
      cover: "https://picsum.photos/seed/techflow/1200/400",
      description: "Seamless integration for your workflow.",
      location: "New York, NY",
      website: "https://techflow.io",
      theme: { connect: { id: techflowTheme.id } },
      stats: {
        create: {
          employees: 45,
          founded: 2018,
          genderRatio: "50% M / 50% F",
          lastFunding: "Series A",
          totalRaised: "$12M",
        },
      },
      about: {
        create: {
          history:
            "TechFlow was born out of frustration with existing workflow tools. We set out to build something better, faster, and more intuitive.",
          mission:
            "To streamline complex workflows and make work enjoyable again.",
          vision: "To be the operating system for modern business.",
          officeLocation: {
            create: {
              address: "456 Tech Blvd, New York, NY 10001",
              mapImage: "https://picsum.photos/seed/map2/800/400",
            },
          },
        },
      },
      jobs: {
        create: [
          {
            title: "DevOps Engineer",
            type: "Full-time",
            location: "Remote",
            remote: true,
          },
          {
            title: "Sales Representative",
            type: "Full-time",
            location: "New York, NY",
            remote: false,
          },
        ],
      },
      widgets: {
        create: {
          stats: {
            create: [
              { label: "Employees", value: "45" },
              { label: "Founded", value: "2018" },
              { label: "Raised", value: "$12M" },
              { label: "Funding", value: "Series A" },
            ],
          },
          benefits: {
            create: [
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
          },
          processSteps: {
            create: [
              {
                title: "Create Account",
                description:
                  "Sign up in seconds and set up your company profile.",
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
          },
          features: {
            create: [
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
          },
          pricingPlans: {
            create: [
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
          },
          faqItems: {
            create: [
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
      },
    },
  });

  console.log("🏢 TechFlow company created");

  // Create CompanyFounder relations for Acme
  await prisma.companyFounder.create({
    data: {
      userId: johnUser.id,
      companyId: acmeCompany.id,
      role: "CEO & Co-founder",
    },
  });

  await prisma.companyFounder.create({
    data: {
      userId: janeUser.id,
      companyId: acmeCompany.id,
      role: "CTO & Co-founder",
    },
  });

  // Create additional users for employees
  const aliceUser = await prisma.user.create({
    data: {
      name: "Alice Johnson",
      username: "alicej",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      bio: "Product Manager at Acme Corp",
      location: "San Francisco, CA",
      skills: ["Product Management", "User Research", "Analytics"],
      hobbies: ["Running", "Yoga"],
    },
  });

  const bobUser = await prisma.user.create({
    data: {
      name: "Bob Williams",
      username: "bobw",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
      bio: "Senior Engineer at Acme Corp",
      location: "San Francisco, CA",
      skills: ["Python", "AWS", "Docker"],
      hobbies: ["Gaming", "Cycling"],
    },
  });

  const charlieUser = await prisma.user.create({
    data: {
      name: "Charlie Brown",
      username: "charlieb",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
      bio: "Designer at Acme Corp",
      location: "San Francisco, CA",
      skills: ["Figma", "UI Design", "Illustration"],
      hobbies: ["Drawing", "Music"],
    },
  });

  const davidUser = await prisma.user.create({
    data: {
      name: "David Lee",
      username: "davidl",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      bio: "Backend Engineer at TechFlow",
      location: "New York, NY",
      skills: ["Node.js", "PostgreSQL", "GraphQL"],
      hobbies: ["Basketball", "Cooking"],
    },
  });

  const mikeUser = await prisma.user.create({
    data: {
      name: "Mike Ross",
      username: "mikeross",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      bio: "CEO at TechFlow",
      location: "New York, NY",
      skills: ["Leadership", "Business Development"],
      hobbies: ["Tennis", "Reading"],
    },
  });

  // Create CompanyFounder relation for TechFlow
  await prisma.companyFounder.create({
    data: {
      userId: mikeUser.id,
      companyId: techflowCompany.id,
      role: "CEO",
    },
  });

  // Create Employment relations for Acme
  await prisma.employment.create({
    data: {
      userId: aliceUser.id,
      companyId: acmeCompany.id,
      role: "Product Manager",
    },
  });

  await prisma.employment.create({
    data: {
      userId: bobUser.id,
      companyId: acmeCompany.id,
      role: "Senior Engineer",
    },
  });

  await prisma.employment.create({
    data: {
      userId: charlieUser.id,
      companyId: acmeCompany.id,
      role: "Designer",
    },
  });

  await prisma.employment.create({
    data: {
      userId: sarahUser.id,
      companyId: acmeCompany.id,
      role: "Senior Frontend Developer",
    },
  });

  // Create Employment relations for TechFlow
  await prisma.employment.create({
    data: {
      userId: sarahUser.id,
      companyId: techflowCompany.id,
      role: "Senior Frontend Developer",
    },
  });

  await prisma.employment.create({
    data: {
      userId: davidUser.id,
      companyId: techflowCompany.id,
      role: "Backend Engineer",
    },
  });

  console.log("👥 Company founders and employees created");

  // Create experiences linked to companies
  await prisma.experience.create({
    data: {
      type: "professional",
      role: "Senior Frontend Developer",
      startDate: "2021",
      endDate: "Present",
      userId: sarahUser.id,
      companyId: techflowCompany.id,
    },
  });

  await prisma.experience.create({
    data: {
      type: "professional",
      role: "Frontend Developer",
      startDate: "2018",
      endDate: "2021",
      userId: sarahUser.id,
    },
  });

  await prisma.experience.create({
    data: {
      type: "education",
      role: "BSc Computer Science",
      startDate: "2014",
      endDate: "2018",
      userId: sarahUser.id,
    },
  });

  await prisma.experience.create({
    data: {
      type: "professional",
      role: "CEO & Co-founder",
      startDate: "2015",
      endDate: "Present",
      userId: johnUser.id,
      companyId: acmeCompany.id,
    },
  });

  await prisma.experience.create({
    data: {
      type: "education",
      role: "MBA",
      startDate: "2010",
      endDate: "2012",
      userId: johnUser.id,
    },
  });

  await prisma.experience.create({
    data: {
      type: "professional",
      role: "CTO & Co-founder",
      startDate: "2015",
      endDate: "Present",
      userId: janeUser.id,
      companyId: acmeCompany.id,
    },
  });

  await prisma.experience.create({
    data: {
      type: "education",
      role: "PhD Computer Science",
      startDate: "2008",
      endDate: "2013",
      userId: janeUser.id,
    },
  });

  console.log("💼 Experiences created");

  // Create posts
  await prisma.post.create({
    data: {
      content:
        "We are thrilled to announce our Series B funding round led by TopTier Ventures! 🚀 This milestone will help us accelerate our mission to revolutionize the industry.",
      likes: 124,
      comments: 18,
      authorType: "COMPANY",
      authorId: acmeCompany.id,
      companyId: acmeCompany.id,
      themeId: acmeTheme.id,
    },
  });

  await prisma.post.create({
    data: {
      content:
        "Just finished a great workshop on React Server Components. The performance improvements are mind-blowing! #NextJS #React #WebDev",
      likes: 45,
      comments: 7,
      authorType: "USER",
      authorId: sarahUser.id,
    },
  });

  await prisma.post.create({
    data: {
      content:
        "Our new API documentation is live! Check it out to see how you can integrate our services into your workflow seamlessly.",
      image: "https://picsum.photos/seed/techflow/800/400",
      likes: 89,
      comments: 12,
      authorType: "COMPANY",
      authorId: techflowCompany.id,
      companyId: techflowCompany.id,
      themeId: techflowTheme.id,
    },
  });

  console.log("📝 Posts created");

  console.log("✅ Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
