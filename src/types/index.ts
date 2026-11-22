export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface VentureItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "coaching" | "wellness" | "nutrition";
  badge: string;
  accentColor: string;
  link: string;
  highlights: string[];
  audience: string[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  detailedDesc: string;
  targetAudience: string;
  commonChallenges: string[];
  deliverables: string[];
  formats: ("Individual 1:1" | "Executive Cohort" | "Corporate Workshop")[];
  iconName: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: "record" | "milestone" | "rotary" | "certification";
  organization: string;
  year?: string;
  description: string;
  image?: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  location?: string;
  category: "Leadership" | "Mentorship" | "Wellness" | "Student Counseling" | "Workplace Counseling" | "Personal Growth";
}

