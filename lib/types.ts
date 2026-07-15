export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  challenges: string[];
  lessons: string[];
  futureScope: string[];
  tech: string[];
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  cover: string;
  screenshots: string[];
  accent: string;
  completionDate: string;
  duration: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  details: string;
};

export type AchievementItem = {
  title: string;
  date: string;
  detail: string;
  category: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  year: string;
  credentialUrl: string;
};

export type SkillItem = {
  name: string;
  level: number;
  description: string;
};

export type SkillCategory = {
  category: string;
  skills: SkillItem[];
};

export type PortfolioData = {
  person: {
    name: string;
    role: string;
    title: string;
    location: string;
    email: string;
    availability: string;
    summary: string;
    bio: string[];
    currentFocus: string;
    resumeUrl: string;
    avatar: string;
    stats: { label: string; value: string }[];
  };
  nav: NavItem[];
  hero: {
    greeting: string;
    subtitle: string;
    roles: string[];
    actions: { label: string; href: string; external?: boolean; variant?: "primary" | "secondary" | "outline" }[];
    social: SocialLink[];
  };
  about: {
    title: string;
    bio: string[];
    currentFocus: string;
    interests: string[];
  };
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  achievements: AchievementItem[];
  certifications: CertificationItem[];
  contact: {
    heading: string;
    blurb: string;
    links: SocialLink[];
  };
};
