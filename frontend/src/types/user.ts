import { Company } from "./company";
export interface UserRecap {
  id: string;
  name: string;
  role: string;
  avatar: string;
  username: string;
}

export interface User {
  name: string;
  username: string;
  avatar: string;
  location: string;
}

export interface UserHome {
  bio: string;
  professional: Experience[];
  education: Experience[];
  skills?: string[];
  hobbies?: string[];
}
export interface Experience {
  id: string;
  role: string;
  company: Company | null;
  startDate: string;
  endDate: string;
  description?: string;
}
