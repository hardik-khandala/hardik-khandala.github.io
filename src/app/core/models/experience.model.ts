import { EmploymentType, WorkMode } from '../enums/experience.enum';

export interface Role {
  title:       string;
  type:        EmploymentType;
  startDate:   Date;        // 'MMM YYYY' e.g. 'Jul 2025'
  endDate:     Date | null; // null = Present
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