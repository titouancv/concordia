// Theme
export interface Theme {
  primary: string;
  secondary: string;
  action: string;
  primaryText: string;
  secondaryText: string;
  actionText: string;
}

// User types
export interface Experience {
  id: number;
  role: string;
  institutionName: string;
  startDate: string;
  endDate: string;
}

export interface User {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  location: string;
  professional: Experience[];
  education: Experience[];
  skills?: string[];
  hobbies?: string[];
}

export interface UserRecap {
  id: string;
  name: string;
  role: string;
  avatar: string;
  username: string;
}

// Company types
export interface CompanyStats {
  employees: number;
  founded: number;
  genderRatio: string;
  lastFunding: string;
  totalRaised: string;
}

export interface OfficeLocation {
  address: string;
  mapImage: string;
}

export interface CompanyAbout {
  history: string;
  mission: string;
  vision: string;
  founders: UserRecap[];
  officeLocation: OfficeLocation;
}

export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  remote: boolean;
}

// Widget types
export interface Benefit {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  image?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Widgets {
  benefits?: Benefit[];
  faqItems?: FAQItem[];
  processSteps?: Step[];
  features?: Feature[];
  pricingPlans?: PricingPlan[];
  stats?: Stat[];
}

export interface Company {
  name: string;
  slug: string;
  logo: string;
  cover: string;
  theme: Theme;
  widgets: Widgets;
  description: string;
  location: string;
  website: string;
  stats: CompanyStats;
  about: CompanyAbout;
  employees: UserRecap[];
  jobs: Job[];
}

// Post types
export interface PostAuthor {
  name: string;
  avatar: string;
  type: "user" | "company";
  username: string;
  theme?: Theme;
}

export interface Post {
  id: string;
  author: PostAuthor;
  content: string;
  image?: string;
  createdAt: string;
  likes: number;
  comments: number;
}
