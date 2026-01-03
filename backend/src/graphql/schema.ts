export const typeDefs = `#graphql
  # Theme type used by companies and posts
  type Theme {
    primary: String!
    secondary: String!
    action: String!
    primaryText: String!
    secondaryText: String!
    actionText: String!
  }

  # User experience (professional or education)
  type Experience {
    id: String!
    role: String!
    company: CompanyRecap
    startDate: String!
    endDate: String!
  }

  # Simplified company reference
  type CompanyRecap {
    id: String!
    name: String!
    slug: String!
    logo: String!
  }

  # Full user profile
  type User {
    name: String!
    username: String!
    avatar: String!
    location: String!
  }

  # User home details
  type UserHome {
    bio: String!
    professional: [Experience!]!
    education: [Experience!]!
    skills: [String!]
    hobbies: [String!]
  }

  # Simplified user reference
  type UserRecap {
    id: String!
    name: String!
    role: String!
    avatar: String!
    username: String!
  }

  # Company statistics
  type CompanyStats {
    employees: Int!
    founded: Int!
    genderRatio: String!
    lastFunding: String!
    totalRaised: String!
  }

  # Office location
  type OfficeLocation {
    address: String!
    mapImage: String!
  }

  # Company about section
  type CompanyAbout {
    history: String!
    mission: String!
    vision: String!
    founders: [UserRecap!]!
    officeLocation: OfficeLocation!
  }

  # Job listing
  type Job {
    id: String!
    title: String!
    type: String!
    location: String!
    remote: Boolean!
  }

  # Widget types
  type Benefit {
    title: String!
    description: String!
  }

  type FAQItem {
    question: String!
    answer: String!
  }

  type Feature {
    title: String!
    description: String!
    image: String
  }

  type PricingPlan {
    name: String!
    price: String!
    description: String!
    features: [String!]!
    isPopular: Boolean
    ctaText: String!
  }

  type Step {
    title: String!
    description: String!
  }

  type Stat {
    label: String!
    value: String!
  }

  type Widgets {
    benefits: [Benefit!]
    faqItems: [FAQItem!]
    processSteps: [Step!]
    features: [Feature!]
    pricingPlans: [PricingPlan!]
    stats: [Stat!]
  }

  # Full company profile
  type Company {
    name: String!
    slug: String!
    logo: String!
    cover: String!
    theme: Theme!
    widgets: Widgets!
    description: String!
    location: String!
    website: String!
    stats: CompanyStats!
    about: CompanyAbout!
    employees: [UserRecap!]!
    jobs: [Job!]!
  }

  # Post author
  type PostAuthor {
    name: String!
    avatar: String!
    type: String!
    username: String!
    theme: Theme
  }

  # Post
  type Post {
    id: String!
    author: PostAuthor!
    content: String!
    image: String
    createdAt: String!
    likes: Int!
    comments: Int!
  }

  # Queries
  type Query {
    # Company queries
    companies: [Company!]!
    company(slug: String!): Company
    companyJobs(slug: String!): [Job!]!
    
    # User queries
    users: [User!]!
    user(username: String!): User
    userHome(username: String!): UserHome
    
    # Post queries
    posts: [Post!]!
    post(id: String!): Post
    postsByAuthor(username: String!): [Post!]!
    postsByCompany(slug: String!): [Post!]!
  }
`;
