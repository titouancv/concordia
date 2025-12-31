import { Theme } from "./app";
import { UserRecap } from "./user";

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

export interface Company {
  name: string;
  slug: string;
  logo: string;
  cover: string;
  theme: Theme;
  description: string;
  location: string;
  website: string;
  stats: CompanyStats;
  about: CompanyAbout;
  employees: UserRecap[];
  jobs: Job[];
}
