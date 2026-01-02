import { UserRecap } from "./user";
import { Benefit, FAQItem, Feature, PricingPlan, Stat, Step } from "./widget";

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
  theme: {
    primary: string;
    secondary: string;
    action: string;
    primaryText: string;
    secondaryText: string;
    actionText: string;
  };
  widgets: Widgets;
  description: string;
  location: string;
  website: string;
  stats: CompanyStats;
  about: CompanyAbout;
  employees: UserRecap[];
  jobs: Job[];
}
