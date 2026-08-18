export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  issuerIcon: string;
  skills: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
  color?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  badgeColor: string;
  skills: SkillItem[];
}

export interface GithubRepo {
  name: string;
  description: string | null;
  language: string | null;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  topics?: string[];
  updatedAt?: string;
}
