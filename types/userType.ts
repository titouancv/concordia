import { SocialLinks } from "./types";

// ─────────────────────────────────────────────
// Base user (all users of the job platform)
// ─────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  role: UserRole; // candidate | recruiter | admin
  status?: UserStatus;

  createdAt?: string; // ISO date
  updatedAt?: string; // ISO date
  lastLoginAt?: string;
}

// ─────────────────────────────────────────────
// Candidate (job seeker)
// ─────────────────────────────────────────────

export interface CandidateProfile {
  userId: string;

  // Identity
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  headline?: string; // e.g. "Senior Frontend Developer"
  bio?: string;

  // Job search preferences
  jobTitlePreferences?: string[];
  employmentTypes?: EmploymentType[];
  seniorityLevels?: SeniorityLevel[];
  salaryExpectation?: SalaryExpectation;
  openToRemote?: boolean;
  preferredLocations?: string[];

  // Professional info
  skills?: Skill[];
  yearsOfExperience?: number;
  languages?: LanguageProficiency[];
  education?: Education[];
  experiences?: WorkExperience[];
  certifications?: Certification[];

  // Assets
  socialLinks?: SocialLinks;
}

// ─────────────────────────────────────────────
// Supporting types
// ─────────────────────────────────────────────

export type UserRole = "candidate" | "recruiter" | "admin";

export type UserStatus = "active" | "suspended" | "deleted";

export type EmploymentType =
  | "full_time"
  | "part_time"
  | "contract"
  | "internship";

export type SeniorityLevel = "junior" | "mid" | "senior" | "lead";

export interface SalaryExpectation {
  min?: number;
  max?: number;
  currency?: string;
  period?: "monthly" | "yearly";
}

export interface Skill {
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface LanguageProficiency {
  language: string;
  level?: "basic" | "professional" | "native";
}

export interface Education {
  institution: string;
  degree?: string;
  fieldOfStudy?: string;
  startYear?: number;
  endYear?: number;
  description?: string;
}

export interface WorkExperience {
  companyName: string;
  role: string;
  startDate: string; // ISO
  endDate?: string; // ISO
  description?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  year?: number;
}
