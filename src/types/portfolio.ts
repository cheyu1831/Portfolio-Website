export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI/ML & Privacy' | 'AI & Web' | 'Full-Stack' | 'Systems & ML';
  description: string;
  problemStatement?: string;
  solutionOverview?: string;
  keyFeatures: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  repoUrl?: string;
  demoUrl?: string;
  featured: boolean;
  architectureHighlights?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    featured?: boolean;
    categoryTag?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  department: string;
  location: string;
  year: string;
  highlights: string[];
}

export interface AchievementItem {
  title: string;
  roleOrContext: string;
  description: string;
  type: 'Leadership' | 'Hackathon' | 'Research' | 'Engineering';
  impact: string;
}

