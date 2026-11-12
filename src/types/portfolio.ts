export interface ProfileData {
  name: string;
  role: string;
  academicStatus: string;
  degree: string;
  collegeName: string;
  registrationNo: string;
  graduationYear: string;
  email: string;
  linkedin: string;
  github: string;
  bio: string;
  aboutBio: string;
  careerGoals: string[];
  interests: {
    title: string;
    description: string;
    icon: string;
    tags: string[];
  }[];
}

export interface SkillItem {
  name: string;
  category: 'core' | 'web' | 'ai';
  level: string;
  proficiencyScore: number; // 0 to 100 for visual bar
  description: string;
  topics: string[];
  badgeColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  status: 'Completed' | 'In Progress';
  techStack: string[];
  summary: string;
  problemSolved: string;
  keyFeatures: string[];
  learningTakeaways: string[];
  codeSnippet: string;
  demoType: 'grade-calculator' | 'basic-calculator';
}

export interface MilestoneItem {
  id: string;
  category: 'milestone' | 'certificate-placeholder';
  title: string;
  timeframe: string;
  statusText: string;
  isPlaceholder: boolean;
  description: string;
  details: string[];
}
