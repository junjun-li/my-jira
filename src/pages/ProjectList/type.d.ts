export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
}

interface Project {
  id: number;
  name: string;
  personId: number;
  pin: boolean;
  organization: string;
  created: number;
}