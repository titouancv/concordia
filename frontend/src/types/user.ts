export interface Experience {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
}

export interface User {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  location: string;
  experiences: Experience[];
  skills: string[];
}

export interface UserRecap {
  id: string;
  name: string;
  role: string;
  avatar: string;
  username: string;
}
