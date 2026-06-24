export interface Project {
  title:        string;
  description:  string;
  details:      string[];
  githubUrl:    string | null;
  liveUrl:      string | null;
  technologies: string[];
}