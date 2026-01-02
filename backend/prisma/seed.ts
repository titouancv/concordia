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
  await prisma.employee.deleteMany();
  await prisma.officeLocation.deleteMany();
  await prisma.founder.deleteMany();
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
      experiences: {
        create: [
          {
            type: "professional",
            role: "Senior Frontend Developer",
            institutionName: "TechFlow",
            startDate: "2021",
            endDate: "Present",
          },
          {
            type: "professional",
            role: "Frontend Developer",
            institutionName: "WebSolutions",
            startDate: "2018",
            endDate: "2021",
          },
          {
            type: "education",
            role: "BSc Computer Science",
            institutionName: "University of London",
            startDate: "2014",
            endDate: "2018",
          },
        ],
      },
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
      experiences: {
        create: [
          {
            type: "professional",
            role: "CEO & Co-founder",
            institutionName: "Acme Corp",
            startDate: "2015",
            endDate: "Present",
          },
          {
            type: "education",
            role: "MBA",
            institutionName: "Stanford University",
            startDate: "2010",
            endDate: "2012",
          },
        ],
      },
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
      experiences: {
        create: [
          {
            type: "professional",
            role: "CTO & Co-founder",
            institutionName: "Acme Corp",
            startDate: "2015",
            endDate: "Present",
          },
          {
            type: "education",
            role: "PhD Computer Science",
            institutionName: "MIT",
            startDate: "2008",
            endDate: "2013",
          },
        ],
      },
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
          founders: {
            create: [
              {
                name: "John Doe",
                role: "CEO & Co-founder",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
                username: "johndoe",
              },
              {
                name: "Jane Smith",
                role: "CTO & Co-founder",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
                username: "janesmith",
              },
            ],
          },
          officeLocation: {
            create: {
              address: "105 Jessie St, San Francisco, CA 94105, USA",
              mapImage: "https://picsum.photos/seed/map/800/400",
            },
          },
        },
      },
      employees: {
        create: [
          {
            name: "Alice Johnson",
            role: "Product Manager",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
            username: "alicej",
          },
          {
            name: "Bob Williams",
            role: "Senior Engineer",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
            username: "bobw",
          },
          {
            name: "Charlie Brown",
            role: "Designer",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
            username: "charlieb",
          },
          {
            name: "Sarah Jenkins",
            role: "Senior Frontend Developer",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
            username: "sarahj",
          },
        ],
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
          founders: {
            create: [
              {
                name: "Mike Ross",
                role: "CEO",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
                username: "mikeross",
              },
            ],
          },
          officeLocation: {
            create: {
              address: "456 Tech Blvd, New York, NY 10001",
              mapImage: "https://picsum.photos/seed/map2/800/400",
            },
          },
        },
      },
      employees: {
        create: [
          {
            name: "Sarah Jenkins",
            role: "Senior Frontend Developer",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
            username: "sarahj",
          },
          {
            name: "David Lee",
            role: "Backend Engineer",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
            username: "davidl",
          },
        ],
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

  // Create posts
  await prisma.post.create({
    data: {
      content:
        "We are thrilled to announce our Series B funding round led by TopTier Ventures! 🚀 This milestone will help us accelerate our mission to revolutionize the industry.",
      likes: 124,
      comments: 18,
      authorCompany: { connect: { id: acmeCompany.id } },
      theme: { connect: { id: acmeTheme.id } },
    },
  });

  await prisma.post.create({
    data: {
      content:
        "Just finished a great workshop on React Server Components. The performance improvements are mind-blowing! #NextJS #React #WebDev",
      likes: 45,
      comments: 7,
      authorUser: { connect: { id: sarahUser.id } },
    },
  });

  await prisma.post.create({
    data: {
      content:
        "Our new API documentation is live! Check it out to see how you can integrate our services into your workflow seamlessly.",
      image: "https://picsum.photos/seed/techflow/800/400",
      likes: 89,
      comments: 12,
      authorCompany: { connect: { id: techflowCompany.id } },
      theme: { connect: { id: techflowTheme.id } },
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
