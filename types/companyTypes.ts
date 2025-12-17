import { SocialLinks } from "./types";

/**
 * Minimal company reference (used for competitors, acquisitions, customers, etc.)
 */
export interface CompanyRef {
  id: string;
  name: string;
  description?: string;
  websiteUrl?: string;
  logoUrl?: string;
}

/**
 * Main knowledge base for a company
 */
export interface CompanyKnowledgeBase {
  // ─────────────────────────────────────────────
  // Core identity
  // ─────────────────────────────────────────────
  id: string;
  name: string;
  legalName?: string;
  description?: string;
  tagline?: string;
  logoUrl?: string;
  websiteUrl?: string;
  domain?: string;

  // ─────────────────────────────────────────────
  // Dates & lifecycle
  // ─────────────────────────────────────────────
  yearFounded?: number;
  foundedDate?: string; // ISO date
  incorporationDate?: string; // ISO date
  lastUpdated?: string; // ISO date
  status?: CompanyStatus;

  // ─────────────────────────────────────────────
  // People & workforce
  // ─────────────────────────────────────────────
  employeeCount?: number;
  employeeRange?: string; // e.g. "11-50"
  contractorsCount?: number;
  averageEmployeeAge?: number;
  demographics?: Demographics;
  founders?: Person[];
  executives?: Person[];
  boardMembers?: Person[];
  keyEmployees?: Person[];
  hiringStatus?: HiringStatus;
  openPositionsCount?: number;

  // ─────────────────────────────────────────────
  // Locations
  // ─────────────────────────────────────────────
  headquarters?: Address;
  offices?: Address[];
  countriesOfOperation?: string[];
  regionsServed?: string[];
  remoteFriendly?: boolean;

  // ─────────────────────────────────────────────
  // Industry & market
  // ─────────────────────────────────────────────
  industries?: string[];
  subIndustries?: string[];
  marketCategory?: MarketCategory;
  targetCustomers?: string[];
  customerSegments?: string[];
  businessModel?: string;
  revenueModels?: string[];
  competitors?: CompanyRef[];
  competitiveAdvantages?: string[];

  // ─────────────────────────────────────────────
  // Financials
  // ─────────────────────────────────────────────
  fundingRounds?: FundraisingRound[];
  lastFundingRound?: FundraisingRound;
  totalFundingAmount?: number;
  valuation?: number;
  revenue?: number;
  revenueRange?: string;
  annualRecurringRevenue?: number;
  profitabilityStatus?: ProfitabilityStatus;
  burnRate?: number;
  runwayMonths?: number;
  investors?: Investor[];

  // ─────────────────────────────────────────────
  // M&A
  // ─────────────────────────────────────────────
  acquisitions?: Acquisition[];
  acquiredBy?: CompanyRef;

  // ─────────────────────────────────────────────
  // Products & technology
  // ─────────────────────────────────────────────
  products?: Product[];
  services?: Service[];
  mainProduct?: string;
  techStack?: string[];
  programmingLanguages?: string[];
  platforms?: string[];
  patents?: Patent[];

  // ─────────────────────────────────────────────
  // Customers & traction
  // ─────────────────────────────────────────────
  customersCount?: number;
  notableCustomers?: CompanyRef[] | string[];
  userBaseSize?: number;
  growthRateYoY?: number;
  churnRate?: number;
  retentionRate?: number;
  netPromoterScore?: number;

  // ─────────────────────────────────────────────
  // Marketing & sales
  // ─────────────────────────────────────────────
  brandColors?: string[];
  marketingChannels?: string[];
  salesModel?: SalesModel;
  partnerships?: Partnership[];

  // ─────────────────────────────────────────────
  // Online presence & media
  // ─────────────────────────────────────────────
  socialLinks?: SocialLinks;
  pressMentions?: PressMention[];
  awards?: Award[];
  certifications?: Certification[];

  // ─────────────────────────────────────────────
  // Legal & compliance
  // ─────────────────────────────────────────────
  legalStructure?: string; // SAS, LLC, Inc.
  registrationNumber?: string;
  taxId?: string;
  complianceStandards?: string[]; // GDPR, ISO 27001
  lawsuits?: LegalCase[];

  // ─────────────────────────────────────────────
  // ESG & impact
  // ─────────────────────────────────────────────
  missionStatement?: string;
  visionStatement?: string;
  values?: string[];
  sustainabilityInitiatives?: string[];
  environmentalImpactNotes?: string;
  socialImpactNotes?: string;
  governanceNotes?: string;

  // ─────────────────────────────────────────────
  // Risk & misc
  // ─────────────────────────────────────────────
  riskFactors?: string[];
  swot?: SWOT;
  notes?: string;
  tags?: string[];
  dataSources?: string[];
}

// ─────────────────────────────────────────────
// Supporting types
// ─────────────────────────────────────────────

export type CompanyStatus =
  | "operating"
  | "acquired"
  | "ipo"
  | "closed"
  | "unknown";
export type HiringStatus = "hiring" | "not_hiring" | "unknown";
export type ProfitabilityStatus =
  | "profitable"
  | "loss_making"
  | "break_even"
  | "unknown";
export type MarketCategory = "B2B" | "B2C" | "B2B2C" | "Marketplace" | "Other";
export type SalesModel =
  | "self_serve"
  | "inside_sales"
  | "enterprise_sales"
  | "mixed";

export interface Demographics {
  menPercentage: number;
  womenPercentage: number;
  otherPercentage?: number;
}

export interface Address {
  street?: string;
  city: string;
  state?: string;
  postalCode?: string;
  country: string;
}

export interface Person {
  name: string;
  role?: string;
  title?: string;
  linkedinUrl?: string;
}

export interface FundraisingRound {
  roundType: string; // Seed, Series A, etc.
  amountRaised: number;
  date: string; // ISO date
  investors?: Investor[];
}

export interface Investor {
  name: string;
  investmentAmount?: number;
  websiteUrl?: string;
}

export interface Acquisition {
  company: CompanyRef;
  date?: string; // ISO date
  price?: number;
}

export interface Product {
  name: string;
  description?: string;
  status?: "active" | "deprecated" | "beta";
}

export interface Service {
  name: string;
  description?: string;
}

export interface Patent {
  title: string;
  patentNumber?: string;
  year?: number;
}

export interface Partnership {
  name: string;
  type?: string;
}

export interface PressMention {
  source: string;
  title?: string;
  url?: string;
  date?: string;
}

export interface Award {
  name: string;
  year?: number;
  issuer?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  year?: number;
}

export interface LegalCase {
  title: string;
  status?: string;
}

export interface SWOT {
  strengths?: string[];
  weaknesses?: string[];
  opportunities?: string[];
  threats?: string[];
}
