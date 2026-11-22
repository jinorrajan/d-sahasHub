import { ExpertiseItem } from "@/types";

export interface ClassifiedServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  audiences: string[];
  keyPillars: string[];
}

export const classifiedServices: ClassifiedServiceItem[] = [
  {
    id: "business-owners",
    title: "Counseling for Business Owners & MSMEs",
    category: "Strategic Growth & Leadership",
    shortDesc:
      "Business owners and executives face unique challenges in balancing professional responsibilities with personal well-being.",
    description:
      "Our specialized executive counseling services offer personalized support for stress management, high-stakes decision-making, founder bottleneck resolution, and sustainable leadership development.",
    audiences: ["Proprietors", "MSME Founders", "Freelance Workers", "Corporate Executives"],
    keyPillars: [
      "Decision-Making Under Pressure",
      "Executive Stress Management",
      "Founder-to-Leader Transition",
      "Sustainable Business Governance",
    ],
  },
  {
    id: "workplace-counseling",
    title: "Workplace Counseling & Culture",
    category: "Corporate & Team Harmony",
    shortDesc:
      "Workplace stress, burnout, and interpersonal friction can heavily impact performance, team culture, and overall health.",
    description:
      "Designed to help working professionals and corporate teams manage cognitive stress, enhance communication, resolve inter-departmental conflicts, and build a productive, emotionally safe work environment.",
    audiences: ["Corporate Teams", "Department Heads", "Mid-Management", "Working Professionals"],
    keyPillars: [
      "Burnout Mitigation & Energy Management",
      "Conflict Resolution Protocols",
      "Interpersonal Communication",
      "Work-Life Balance Integration",
    ],
  },
  {
    id: "student-counseling",
    title: "Student Counseling & Future Clarity",
    category: "Youth Empowerment",
    shortDesc:
      "Academic pressure, peer relationships, and future career uncertainties can be overwhelming for aspiring students.",
    description:
      "We provide a safe, empathetic space to address anxiety, conquer imposter syndrome, develop effective emotional coping strategies, build authentic confidence, and set realistic milestones for academic and life success.",
    audiences: ["School & College Students", "Competitive Exam Aspirants", "Young Innovators"],
    keyPillars: [
      "Academic Pressure & Exam Anxiety Release",
      "Confidence & Vocal Presence",
      "Career Alignment & Clarity",
      "Goal-Setting Habit Architectures",
    ],
  },
  {
    id: "womens-counseling",
    title: "Women's Counseling & Empowerment",
    category: "Personal Growth & Self-Worth",
    shortDesc:
      "Women navigate multi-dimensional challenges intersecting leadership, work responsibilities, family dynamics, and personal growth.",
    description:
      "Targeted emotional and tactical support addressing stress management, self-esteem, boundary setting, relationship challenges, and holistic vitality — empowering women to thrive and lead fulfilling lives.",
    audiences: ["Women Entrepreneurs", "Working Mothers", "Aspiring Leaders", "Homemakers"],
    keyPillars: [
      "Self-Esteem & Personal Boundary-Setting",
      "Multi-Role Balance (Work, Family & Self)",
      "Overcoming Emotional Barriers",
      "Financial & Strategic Independence",
    ],
  },
  {
    id: "relationships-counseling",
    title: "Relationships & Marriage Counseling",
    category: "Emotional Well-Being",
    shortDesc:
      "Meaningful relationships require conscious effort, emotional safety, open dialogue, and proactive communication.",
    description:
      "Our marriage and couples counseling sessions assist partners in de-escalating misunderstandings, navigating challenging conversations with mutual respect, healing trust, and fostering deeper emotional connection.",
    audiences: ["Couples", "Family Business Partners", "Marital Relationships"],
    keyPillars: [
      "Constructive Dialogue Without Defense",
      "Emotional Trigger Identification",
      "Mutual Trust Rebuilding",
      "Shared Family & Personal Vision",
    ],
  },
  {
    id: "parenting-counseling",
    title: "Counseling for Parents and Children",
    category: "Family Wellness",
    shortDesc:
      "Parenting can be immensely rewarding yet deeply challenging across different childhood and teenage stages.",
    description:
      "Empathetic guidance on positive parenting methodologies, open child-parent communication, understanding behavioral signals, addressing digital addiction, and nurturing a harmonious home atmosphere.",
    audiences: ["Parents", "Adolescents & Children", "Blended Families"],
    keyPillars: [
      "Empathetic & Firm Parenting Techniques",
      "Understanding Teen Behavioral Signals",
      "Digital Overuse & Focus Recovery",
      "Family Emotional Harmony",
    ],
  },
];

export const expertiseData: ExpertiseItem[] = [
  {
    id: "tactical-leadership",
    title: "Strategic Leadership & Management Coaching",
    subtitle: "Moving from REACT to RESPOND under high pressure",
    shortDesc:
      "Empowering founders, MSMEs, and executives to build calm decision frameworks, eliminate burnout, and lead with clarity.",
    detailedDesc:
      "Tactical leadership focuses on day-to-day high-stakes execution where decisions carry direct consequences. Leaders are guided to identify subconscious stress triggers, transition from hasty emotional reactions to measured strategic responses, and instill structured communication across their teams.",
    targetAudience: "Entrepreneurs, MSME business owners, family business leaders, and corporate heads.",
    commonChallenges: [
      "Decision fatigue and high operational stress",
      "Knee-jerk firefighting rather than proactive delegation",
      "Communication breakdowns between generations or department heads",
      "Difficulty establishing authority while maintaining empathy",
    ],
    deliverables: [
      "1:1 Executive Leadership Assessment & Roadmap",
      "REACT-to-RESPOND Cognitive Framework Toolkit",
      "Executive Communication & People Management Playbook",
      "Bi-weekly Accountability & Strategic Alignment Calls",
    ],
    formats: ["Individual 1:1", "Executive Cohort"],
    iconName: "Compass",
  },
  {
    id: "business-consulting",
    title: "MSME Business Growth & Mentoring",
    subtitle: "Sustainable business direction rooted in 25+ years of enterprise experience",
    shortDesc:
      "Strategic mentoring for self-employed entrepreneurs, SME founders, and startups looking to scale operations, sales, and management systems.",
    detailedDesc:
      "Drawing from 22+ years in IT infrastructure solutions consulting and over 7 years of active BYST mentoring, Dr. Devi works directly with founders to streamline go-to-market strategies, sales architectures, and team management practices.",
    targetAudience: "Self-employed professionals, SME owners, second-generation family entrepreneurs.",
    commonChallenges: [
      "Stagnant revenue growth and unpredictable sales cycles",
      "Lack of structured management systems and operational SOPs",
      "Founder bottleneck: business cannot run without the owner's daily presence",
      "Unclear product-market alignment in competitive spaces",
    ],
    deliverables: [
      "Comprehensive Business Operations & Sales Diagnostic",
      "Sustainable Growth & Customer Pipeline Architecture",
      "Milestone-based Startup & SME Mentorship Framework",
      "Quarterly Strategy & Accountability Reviews",
    ],
    formats: ["Individual 1:1", "Corporate Workshop"],
    iconName: "Briefcase",
  },
  {
    id: "life-skills",
    title: "Emotional Intelligence & Life Skills",
    subtitle: "Building the self-mastery that underpins professional triumph",
    shortDesc:
      "Master emotional intelligence, confidence, public speaking, and problem-solving through proven behavioral paradigms.",
    detailedDesc:
      "Backed by a world-record 55-hour marathon life-skills training milestone, this module delivers immersive skill development covering interpersonal communication, emotional regulation, critical thinking, and decisive action under stress.",
    targetAudience: "Emerging leaders, career professionals, ambitious students, and changemakers.",
    commonChallenges: [
      "Imposter syndrome and lack of vocal presence in executive rooms",
      "Poor interpersonal dynamics and workplace friction",
      "Overthinking and paralysis in high-consequence scenarios",
      "Unbalanced priorities causing personal and professional discord",
    ],
    deliverables: [
      "Self-Awareness & Confidence Diagnostic Profile",
      "Interpersonal Communication & Persuasion Workshops",
      "Structured Problem-Solving & Critical Thinking Drills",
      "Actionable Personal Effectiveness Habit Systems",
    ],
    formats: ["Executive Cohort", "Corporate Workshop"],
    iconName: "Award",
  },
  {
    id: "wellness-balancing",
    title: "Holistic Wellness & Lifestyle Transformation",
    subtitle: "Reiki and energetic balance to ensure success does not cost your health",
    shortDesc:
      "Integrative stress management, self-care practices, and certified Reiki techniques to preserve vitality and mental poise.",
    detailedDesc:
      "True leadership endurance requires physical, emotional, and spiritual renewal. Dr. Devi integrates certified Reiki energy balance, mindfulness techniques, and grounded daily self-care rituals so leaders achieve high performance without sacrificing peace.",
    targetAudience: "High-demand executives, healthcare & consulting professionals, burnt-out founders.",
    commonChallenges: [
      "Chronic mental exhaustion, insomnia, and nervous fatigue",
      "Physical manifestations of unaddressed emotional stress",
      "Inability to unplug or recover during personal downtime",
      "Absence of restorative daily rituals",
    ],
    deliverables: [
      "Personal Stress Assessment & Energetic Balance Plan",
      "Guided Reiki Healing & Self-Healing Techniques",
      "Work-Life Equilibrium & Boundary-Setting Framework",
      "Daily Restorative Mindfulness & Breathwork Guides",
    ],
    formats: ["Individual 1:1", "Executive Cohort"],
    iconName: "HeartPulse",
  },
  {
    id: "relationship-development",
    title: "Financial Planning & Wealth Protection",
    subtitle: "Thoughtful financial security for families, professionals, and MSMEs",
    shortDesc:
      "As an accredited LIC Financial Advisor, Dr. Devi helps leaders safeguard business assets and structure lifelong family prosperity.",
    detailedDesc:
      "Financial peace of mind is an essential foundation of purposeful leadership. Through tailored life planning, business insurance structures, key-person risk mitigation, and retirement architectures, clients protect what they have worked hard to build.",
    targetAudience: "MSME owners, family heads, professionals, and corporate leaders.",
    commonChallenges: [
      "Unhedged key-man risk across enterprise operations",
      "Inadequate family wealth protection against unexpected contingencies",
      "Lack of structured retirement and wealth succession blueprints",
      "Blurring business capital with personal family financial reserves",
    ],
    deliverables: [
      "Comprehensive Family & Enterprise Risk Assessment",
      "LIC Tailored Wealth & Asset Protection Structures",
      "Key-Person & Succession Planning Frameworks",
      "Long-Term Financial Peace Milestone Reviews",
    ],
    formats: ["Individual 1:1", "Corporate Workshop"],
    iconName: "Users",
  },
];
