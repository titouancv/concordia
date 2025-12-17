import { Certification, SocialLinks } from "./types";
export interface UserRef {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  title?: string; // e.g. "Senior Frontend Developer"
}

interface User {
  email: string;
  status?: UserStatus;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  title?: string; // e.g. "Senior Frontend Developer"
  bio?: string;
  createdAt?: string; // ISO date
  updatedAt?: string; // ISO date
  lastLoginAt?: string;
}

export interface UserProfile {
  id: string;

  user: User;

  jobPreferences?: JobPreferences;

  professionalSkills?: ProfessionalSkills;

  socialLinks?: SocialLinks;
}

// ─────────────────────────────────────────────
// Supporting types
// ─────────────────────────────────────────────

type UserStatus = "active" | "suspended" | "deleted";

type EmploymentType = "full_time" | "part_time" | "contract" | "internship";

type SeniorityLevel = "junior" | "mid" | "senior" | "lead";

interface JobPreferences {
  jobTitlePreferences?: string[];
  employmentTypes?: EmploymentType[];
  seniorityLevels?: SeniorityLevel[];
  salaryExpectation?: SalaryExpectation;
  openToRemote?: boolean;
  preferredLocations?: string[];
}

interface ProfessionalSkills {
  skills?: Skill[];
  yearsOfExperience?: number;
  languages?: LanguageProficiency[];
  education?: Education[];
  experiences?: WorkExperience[];
  certifications?: Certification[];
}

interface SalaryExpectation {
  min?: number;
  max?: number;
  currency?: string;
  period?: "monthly" | "yearly";
}

interface Skill {
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

interface LanguageProficiency {
  language: string;
  level?: "basic" | "professional" | "native";
}

interface Education {
  institution: string;
  degree?: string;
  fieldOfStudy?: string;
  startYear?: number;
  endYear?: number;
  description?: string;
}

interface WorkExperience {
  companyName: string;
  role: string;
  startDate: string; // ISO
  endDate?: string; // ISO
  description?: string;
}
