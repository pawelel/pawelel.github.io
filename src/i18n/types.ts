export interface TechItem {
  name: string;
  icon: string;
}

export interface TechGroup {
  category: string;
  items: TechItem[];
}

export interface Project {
  title: string;
  type: string;
  stack: string[];
  description: string;
  highlights: string[];
  criteria?: string[];
  link: string | null;
}

export interface Job {
  role: string;
  company: string;
  period: string;
  items: string[];
}

export interface Phase {
  name: string;
  items: string[];
}

export interface ApproachItem {
  title: string;
  desc: string;
}

export interface Translations {
  lang: 'en' | 'pl';
  altLang: 'en' | 'pl';
  altPath: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    stack: string;
    experience: string;
    projects: string;
    approach: string;
    education: string;
    toggleMenu: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    bio: string;
    scrollDown: string;
  };
  sections: {
    stack: { label: string; title: string };
    experience: { label: string; title: string };
    projects: { label: string; title: string };
    approach: { label: string; title: string };
    education: { label: string; title: string };
  };
  approach: {
    withinSprint: string;
    beyondSprint: string;
    phases: Phase[];
    items: ApproachItem[];
  };
  education: {
    degree: string;
    school: string;
    period: string;
    beyondWork: string;
    interests: string[];
  };
  projects: {
    criteriaLabel: string;
    viewOnGithub: string;
  };
  footer: string;
  techStack: TechGroup[];
  projectsList: Project[];
  experienceList: Job[];
}
