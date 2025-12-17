import { CompanyProfile } from "@/types/companyTypes";
import { UserRef } from "@/types/userType";

const founder: UserRef = {
  id: "user-1",
  firstName: "Alice",
  lastName: "Martin",
  title: "CEO & Co-founder",
  avatarUrl: "https://example.com/avatars/alice.png",
};

const cto: UserRef = {
  id: "user-2",
  firstName: "Julien",
  lastName: "Dubois",
  title: "CTO & Co-founder",
  avatarUrl: "https://example.com/avatars/julien.png",
};

export const companyProfileMock: CompanyProfile = {
  id: "company-123",

  company: {
    name: "Acme Tech",
    pseudo: "acmetech",
    legalName: "Acme Technology SAS",
    description:
      "Acme Tech est une startup spécialisée dans les solutions SaaS basées sur l’intelligence artificielle pour les entreprises.",
    tagline: "Powering smart businesses",
    logoUrl: "https://example.com/logos/acme.png",
    websiteUrl: "https://www.acmetech.io",
    domain: "acmetech.io",
  },

  lifecycle: {
    yearFounded: 2019,
    status: "operating",
  },

  workforce: {
    employeeCount: 42,
    employeeRange: "11-50",
    contractorsCount: 8,
    averageEmployeeAge: 32,
    demographics: {
      menPercentage: 55,
      womenPercentage: 40,
      otherPercentage: 5,
    },
    founders: [founder, cto],
    executives: [
      {
        id: "user-3",
        firstName: "Claire",
        lastName: "Lefevre",
        title: "COO",
      },
    ],
    boardMembers: [
      {
        id: "user-4",
        firstName: "Marc",
        lastName: "Renaud",
        title: "Board Member",
      },
    ],
    keyEmployees: [
      {
        id: "user-5",
        firstName: "Sophie",
        lastName: "Nguyen",
        title: "Lead Product Manager",
      },
    ],
    hiringStatus: "hiring",
    openPositionsCount: 5,
  },

  locations: {
    headquarters: {
      street: "10 rue de la Paix",
      city: "Paris",
      postalCode: "75002",
      country: "France",
    },
    offices: [
      {
        city: "Lyon",
        country: "France",
      },
      {
        city: "Berlin",
        country: "Germany",
      },
    ],
    remoteFriendly: true,
  },

  financials: {
    fundingRounds: [
      {
        roundType: "Seed",
        amountRaised: 1_200_000,
        date: "2020-09-01",
        investors: [
          {
            name: "EarlyBird Capital",
            investmentAmount: 800_000,
            websiteUrl: "https://earlybird.com",
          },
        ],
      },
      {
        roundType: "Series A",
        amountRaised: 6_000_000,
        date: "2022-06-15",
        investors: [
          {
            name: "Tech Ventures",
            investmentAmount: 4_000_000,
            websiteUrl: "https://techventures.com",
          },
        ],
      },
    ],
    lastFundingRound: {
      roundType: "Series A",
      amountRaised: 6_000_000,
      date: "2022-06-15",
    },
    totalFundingAmount: 7_200_000,
    valuation: 35_000_000,
    revenue: 4_500_000,
    revenueRange: "1M-10M",
    annualRecurringRevenue: 3_800_000,
    profitabilityStatus: "loss_making",
    investors: [
      {
        name: "EarlyBird Capital",
        websiteUrl: "https://earlybird.com",
      },
      {
        name: "Tech Ventures",
        websiteUrl: "https://techventures.com",
      },
    ],
    acquisitions: [
      {
        company: {
          id: "company-789",
          name: "DataPulse",
          pseudo: "datapulse",
          description: "Startup spécialisée en data analytics",
          websiteUrl: "https://datapulse.io",
        },
        date: "2023-03-20",
        price: 1_500_000,
      },
    ],
  },

  techStack: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "NestJS", "GraphQL"],
    database: ["PostgreSQL", "Redis"],
    devOps: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
  },

  identity: {
    mainColor: "#2563EB",
    actionColor: "#22C55E",
    theme: "light",
  },

  media: {
    socialLinks: {
      twitter: "https://twitter.com/acmetech",
      linkedin: "https://linkedin.com/company/acmetech",
      github: "https://github.com/acmetech",
      instagram: "https://instagram.com/acmetech",
      youtube: "https://youtube.com/@acmetech",
      websites: ["https://blog.acmetech.io"],
    },
    pressMentions: [
      {
        source: "TechCrunch",
        title: "Acme Tech lève 6M€ pour accélérer son expansion",
        url: "https://techcrunch.com/acme-tech-series-a",
        date: "2022-06-16",
      },
    ],
    awards: [
      {
        name: "Best AI Startup",
        year: 2023,
        issuer: "France Digitale",
      },
    ],
    certifications: [
      {
        name: "ISO 27001",
        issuer: "ISO",
        year: 2024,
      },
    ],
  },
};
