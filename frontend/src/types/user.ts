export interface Experience {
  id: number;
  role: string;
  institutionName: string;
  startDate: string;
  endDate: string;
  description?: string;
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
