import { Address, Certification, SocialLinks } from "./types";
import { UserRef } from "./userType";
export interface CompanyRef {
  id: string;
  name: string;
  pseudo: string;
  description?: string;
  websiteUrl?: string;
  logoUrl?: string;
}

export interface Company {
  name: string;
  pseudo: string;
  legalName?: string;
  description?: string;
  tagline?: string;
  logoUrl?: string;
  websiteUrl?: string;
  domain?: string;
}

export interface CompanyProfile {
  id: string;

  company: Company;

  lifecycle?: Lifecycle;

  workforce?: Workforce;

  locations?: Locations;

  financials?: Financials;

  techStack?: TechStack;

  identity?: Identity;

  media?: Media;
}

// ─────────────────────────────────────────────
// Supporting types
// ─────────────────────────────────────────────

type CompanyStatus = "operating" | "acquired" | "ipo" | "closed" | "unknown";
type HiringStatus = "hiring" | "not_hiring" | "unknown";
type ProfitabilityStatus =
  | "profitable"
  | "loss_making"
  | "break_even"
  | "unknown";

export interface Lifecycle {
  yearFounded?: number;
  status?: CompanyStatus;
}

export interface Workforce {
  employeeCount?: number;
  employeeRange?: string; // e.g. "11-50"
  contractorsCount?: number;
  averageEmployeeAge?: number;
  demographics?: Demographics;
  founders?: UserRef[];
  executives?: UserRef[];
  boardMembers?: UserRef[];
  keyEmployees?: UserRef[];
  hiringStatus?: HiringStatus;
  openPositionsCount?: number;
}

export interface Locations {
  headquarters?: Address;
  offices?: Address[];
  remoteFriendly?: boolean;
}

export interface Financials {
  fundingRounds?: FundraisingRound[];
  lastFundingRound?: FundraisingRound;
  totalFundingAmount?: number;
  valuation?: number;
  revenue?: number;
  revenueRange?: string;
  annualRecurringRevenue?: number;
  profitabilityStatus?: ProfitabilityStatus;
  investors?: Investor[];
  acquisitions?: Acquisition[];
  acquiredBy?: CompanyRef;
}
export interface Identity {
  mainColor?: string;
  actionColor?: string;
  theme?: "light" | "dark";
}

export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  devOps?: string[];
}

export interface Media {
  socialLinks?: SocialLinks;
  pressMentions?: PressMention[];
  awards?: Award[];
  certifications?: Certification[];
}

interface Demographics {
  menPercentage: number;
  womenPercentage: number;
  otherPercentage?: number;
}

interface FundraisingRound {
  roundType: string; // Seed, Series A, etc.
  amountRaised: number;
  date: string; // ISO date
  investors?: Investor[];
}

interface Investor {
  name: string;
  investmentAmount?: number;
  websiteUrl?: string;
}

interface Acquisition {
  company: CompanyRef;
  date?: string; // ISO date
  price?: number;
}

interface PressMention {
  source: string;
  title?: string;
  url?: string;
  date?: string;
}

interface Award {
  name: string;
  year?: number;
  issuer?: string;
}
