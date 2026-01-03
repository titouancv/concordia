import { Theme } from "./app";
import { Post } from "./feed";
import { UserRecap } from "./user";
import { Benefit, FAQItem, Feature, PricingPlan, Stat, Step } from "./widget";

export interface CompanyRecap {
  id: string;
  name: string;
  slug: string;
  logo: string;
}

export interface Company {
  name: string;
  slug: string;
  logo: string;
  cover: string;
  theme: Theme;
  description: string;
  location: string;
  website: string;
}

export interface CompanyHome {
  widgets: Widgets;
}

export interface CompanyPosts {
  posts: Post[];
}

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

export interface CompanyContact {
  employees: UserRecap[];
}

export interface CompanyCareers {
  jobs: Job[];
}

export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  remote: boolean;
}

export interface Widgets {
  benefits?: Benefit[];
  faqItems?: FAQItem[];
  processSteps?: Step[];
  features?: Feature[];
  pricingPlans?: PricingPlan[];
  stats?: Stat[];
}

// Type complet retourné par le backend
export interface CompanyFull extends Company {
  stats: CompanyStats;
  about: CompanyAbout;
  employees: UserRecap[];
  jobs: Job[];
  widgets: Widgets;
}
