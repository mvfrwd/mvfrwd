export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  workingStyle: string;
  skills: string[];
  linkedin: string;
  instagram: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01",
    title: "WEB DEVELOPMENT",
    description: "Websites and digital experiences built to perform, convert, and represent your brand.",
    details: ["Next.js & Modern Stacks", "High-Performance UX Architecture", "Custom E-Commerce Systems"]
  },
  {
    id: "seo",
    number: "02",
    title: "SEO",
    description: "Make your brand easier to discover when your customers are searching.",
    details: ["Technical SEO & Performance", "On-Page Content Strategy", "Search Intent Optimization"]
  },
  {
    id: "marketing",
    number: "03",
    title: "DIGITAL MARKETING",
    description: "Turn attention into engagement, leads, and meaningful growth.",
    details: ["Targeted Acquisition Systems", "Performance Analytics", "Funnel Optimization"]
  },
  {
    id: "branding",
    number: "04",
    title: "BRANDING & CREATIVE",
    description: "Create an identity people recognize, remember, and connect with.",
    details: ["Visual Identity Systems", "Brand Strategy & Positioning", "Design Language Guidelines"]
  },
  {
    id: "ai-automation",
    number: "05",
    title: "AI & AUTOMATION",
    description: "Use technology to reduce repetitive work and build smarter business systems.",
    details: ["Workflow Automation", "AI Integration", "Custom Digital Operations"]
  }
];

export const ABOUT_PRINCIPLES = [
  {
    number: "01",
    title: "BUILD WITH PURPOSE.",
    copy: "Good design should have a reason behind it. Aesthetics without strategy are just decoration."
  },
  {
    number: "02",
    title: "KEEP IT SIMPLE.",
    copy: "Complex problems don't always need complicated solutions. Clarity drives execution."
  },
  {
    number: "03",
    title: "STAY CURIOUS.",
    copy: "Technology changes quickly. We intend to keep learning, testing, and adapting."
  },
  {
    number: "04",
    title: "MAKE IT MATTER.",
    copy: "Pretty is good. Useful is better. Impact is measured by real business progression."
  },
  {
    number: "05",
    title: "KEEP MOVING.",
    copy: "There is always a better version of what exists today. Stagnation is the only failure."
  }
];

export const THINKING_COLUMNS = [
  {
    category: "PEOPLE",
    copy: "We start with the people behind the business and the audience it serves."
  },
  {
    category: "PURPOSE",
    copy: "Every project needs a clear, measurable reason to exist before line one of code."
  },
  {
    category: "PROGRESS",
    copy: "Launch is not the finish line. It is the beginning of continuous optimization."
  }
];

export const JOURNEY_TIMELINE = [
  { phase: "01", label: "IDEA", status: "COMPLETED" },
  { phase: "02", label: "FIRST MOVE", status: "COMPLETED" },
  { phase: "03", label: "MVFRWD.", status: "ACTIVE" },
  { phase: "04", label: "FIRST PROJECT", status: "CURRENT FOCUS" },
  { phase: "05", label: "FIRST CLIENT", status: "COMING NEXT" },
  { phase: "06", label: "FIRST BIG WIN", status: "COMING NEXT" },
  { phase: "07", label: "WHAT'S NEXT?", status: "FUTURE" }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Co-Founder",
    role: "TECHNOLOGY",
    workingStyle: "Builds the systems that make ideas operational.",
    skills: ["Next.js", "TypeScript", "System Architecture", "Performance"],
    linkedin: "#",
    instagram: "#"
  },
  {
    name: "Co-Founder",
    role: "MARKETING",
    workingStyle: "Turns digital strategy into measurable conversion.",
    skills: ["Acquisition", "SEO Strategy", "Analytics", "Growth Funnels"],
    linkedin: "#",
    instagram: "#"
  },
  {
    name: "Co-Founder",
    role: "CREATIVE",
    workingStyle: "Makes visual identities people recognize and remember.",
    skills: ["UI/UX", "Brand Systems", "Motion Design", "Design Thinking"],
    linkedin: "#",
    instagram: "#"
  },
  {
    name: "Co-Founder",
    role: "OPERATIONS",
    workingStyle: "Keeps moving parts aligned, tested, and delivered on time.",
    skills: ["Project Management", "Process Automation", "Client Relations"],
    linkedin: "#",
    instagram: "#"
  }
];

export const CULTURE_POINTS = [
  "BUILD TO LEARN.",
  "LEARN TO BUILD.",
  "QUESTION EVERYTHING.",
  "GOOD IDEAS COME FROM ANYWHERE.",
  "SHIP. LEARN. IMPROVE."
];

export const PROCESS_STEPS = [
  { step: "01", title: "DISCOVER", text: "Understand the business, audience, and objective." },
  { step: "02", title: "STRATEGIZE", text: "Find the right direction and define the roadmap." },
  { step: "03", title: "BUILD", text: "Design, develop, and execute with precision." },
  { step: "04", title: "LAUNCH", text: "Put the work into the real world cleanly." },
  { step: "05", title: "OPTIMIZE", text: "Measure, learn, adapt, and refine." },
  { step: "06", title: "MOVE FORWARD", text: "Keep evolving as digital shifts." }
];