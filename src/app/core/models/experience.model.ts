import { EmploymentType, WorkMode } from '../enums/experience.enum';

export interface Role {
  title:       string;
  type:        EmploymentType;
  startDate:   string;        // 'MMM YYYY' e.g. 'Jul 2025'
  endDate:     string | null; // null = Present
  description: string[];
  skills:      string[];
}

export interface Experience {
  company:  string;
  logo:     string;
  location: string;
  workMode: WorkMode;
  roles:    Role[];
}