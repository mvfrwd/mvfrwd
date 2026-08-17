export type DemoCategory =
  | 'ALL'
  | 'E-COMMERCE'
  | 'BUSINESS'
  | 'HOSPITALITY'
  | 'SAAS'
  | 'CREATIVE'
  | 'CUSTOM';

export interface PlaygroundProject {
  slug: string;
  badge: string;
  name: string;
  category: Exclude<DemoCategory, 'ALL'>;
  industry: string;
  description: string;
  tagline: string;
  status: 'CONCEPT' | 'IN DEVELOPMENT' | 'LIVE DEMO';
  liveUrl?: string;
  image?: string;
  embedLive?: boolean;
  accentColor?: string;
  theIdea: string;
  designDirection: string[];
  keyFeatures: string[];
  technicalApproach: string[];
}

export const CATEGORIES: DemoCategory[] = [
  'ALL',
  'E-COMMERCE',
  'BUSINESS',
  'HOSPITALITY',
  'SAAS',
  'CREATIVE',
  'CUSTOM',
];

export const PLAYGROUND_PROJECTS: PlaygroundProject[] = [
  {
    slug: 'nova',
    badge: 'CONCEPT 001',
    name: 'NOVA',
    category: 'E-COMMERCE',
    industry: 'Fashion / D2C',
    tagline: 'A modern fashion commerce experience designed for a digital-first clothing brand.',
    description:
      'NOVA explores the intersection of fluid editorial motion and high-speed checkout funnels, turning standard apparel shopping into an interactive digital lookbook.',
    status: 'IN DEVELOPMENT',
    theIdea:
      'Modern direct-to-consumer apparel brands struggle with cookie-cutter shop templates that look identical. NOVA was built to test asymmetric catalog grids and instant product preview transitions without losing conversion speed.',
    designDirection: [
      'High-contrast editorial typography paired with full-bleed product showcases.',
      'Minimal cart drawers and micro-interaction-driven size/color pickers.',
      'Directional scroll animations that guide the user through collection stories.',
    ],
    keyFeatures: [
      'Instant Category Filtering without page reloads',
      'Dynamic Lookbook Scroller with integrated Quick-Buy',
      'Zero-layout-shift responsive sizing guides',
      'Frictionless multi-step checkout mock flow',
    ],
    technicalApproach: [
      'Next.js App Router for sub-second page transitions',
      'Tailwind CSS layout primitives optimized for multi-device viewports',
      'Framer Motion layout animations with GPU acceleration',
    ],
  },
  {
    slug: 'devrmc',
    badge: 'CONCEPT 002',
    name: 'Dev RMC',
    category: 'BUSINESS',
    industry: 'Construction / Infrastructure',
    tagline: 'A professional digital presence designed for a ready mix concreate company.',
    description:
      'Dev RMC is a high-trust digital platform engineered to present multi-million dollar engineering projects, technical equipment fleets, and structured client bidding pipelines.',
    status: 'LIVE DEMO',
    embedLive: true,
    liveUrl: 'https://demodev-ready-mix-concrete.vercel.app/',
    theIdea:
      'Industrial and infrastructure companies often suffer from outdated, unorganized websites. BUILDFLOW demonstrates how clean architectural layouts and structured case studies establish immediate credibility with institutional partners.',
    designDirection: [
      'Structured technical grids inspired by engineering blueprints.',
      'Monochrome foundation with high-visibility safety accent indicators.',
      'Clean typography prioritizing project metrics and completion dates.',
    ],
    keyFeatures: [
      'Interactive Project Fleet Matrix and Machinery Directory',
      'Bespoke Bid & RFP Inquiry Dispatcher',
      'Safety and Certification Compliance Showcase',
      'Multi-Location Infrastructure Map View',
    ],
    technicalApproach: [
      'Modular component breakdown for deep sub-service trees',
      'Optimized image loading pipelines for massive high-res site photography',
      'Accessible semantic structure meeting enterprise web standards',
    ],
  },
  {
    slug: 'ember',
    badge: 'CONCEPT 003',
    name: 'EMBER',
    category: 'HOSPITALITY',
    industry: 'Restaurant / Dining',
    tagline: 'A premium digital dining experience built around atmosphere, food, and reservations.',
    description:
      'EMBER translates the culinary atmosphere of an upscale dining room into a sensory digital journey, blending moody lighting aesthetics with effortless table reservations.',
    status: 'IN DEVELOPMENT',
    theIdea:
      'A restaurant website should evoke the same mood as walking through its front doors. EMBER eliminates clumsy PDF menus in favor of an interactive, responsive culinary tasting menu.',
    designDirection: [
      'Deep warm-charcoal palettes with subtle ember-orange highlights.',
      'Editorial menu typography formatted for effortless smartphone navigation.',
      'Ambient food photography layouts with micro-parallax depth.',
    ],
    keyFeatures: [
      'Interactive Course Tasting Menu with wine pairing notes',
      'Seamless Table Booking & Private Event Inquiry module',
      'Atmospheric Gallery with curated venue perspectives',
      'Direct Location, Valet, and Hours integration',
    ],
    technicalApproach: [
      'Mobile-first touch target optimization for on-the-go patrons',
      'Lightweight SVG path transitions mimicking ambient smoke & warmth',
      'Structured LocalBusiness schema architecture ready for search indexing',
    ],
  },
  {
    slug: 'flowbase',
    badge: 'CONCEPT 004',
    name: 'FLOWBASE',
    category: 'SAAS',
    industry: 'Software / SaaS',
    tagline: 'A modern SaaS product experience combining a marketing website with an intuitive dashboard.',
    description:
      'FLOWBASE unites a high-conversion marketing landing page with an authentic analytics control panel, illustrating how product-led software companies can educate and onboard users in one cohesive flow.',
    status: 'IN DEVELOPMENT',
    theIdea:
      'Modern software buyers want to see the product immediately, not read generic corporate buzzwords. FLOWBASE showcases how transparent dashboard previews drive higher trial conversion rates.',
    designDirection: [
      'Precision dark-mode interface with crisp data visualization charts.',
      'Interactive toggle components showing real-time pricing calculation.',
      'Subtle glowing borders highlighting key product features.',
    ],
    keyFeatures: [
      'Simulated Real-Time Analytics Dashboard Preview',
      'Interactive Tiered Pricing Calculator',
      'Feature Interactive Comparison Matrix',
      'Developer API Documentation layout shell',
    ],
    technicalApproach: [
      'Client-side state management for real-time chart filter simulations',
      'Zero-dependency CSS chart geometry for maximum rendering performance',
      'Keyboard-accessible interactive switch tabs',
    ],
  },
  {
    slug: 'frame',
    badge: 'CONCEPT 005',
    name: 'FRAME',
    category: 'CREATIVE',
    industry: 'Creative / Portfolio',
    tagline: 'An experimental portfolio experience designed for creatives, designers, and visual artists.',
    description:
      'FRAME is a minimalist digital exhibition space created for visual artists, photographers, and studios who need their work to take center stage without visual distraction.',
    status: 'IN DEVELOPMENT',
    theIdea:
      'Standard portfolio templates often distract from the creator’s art. FRAME uses spacious monochrome canvases and fluid scroll interactions to give each case study maximum visual weight.',
    designDirection: [
      'Generous whitespace with ultra-fine technical alignment borders.',
      'Cursor-guided artwork inspector and full-screen lightbox modes.',
      'Bold typographic chapter headers leading into visual case narratives.',
    ],
    keyFeatures: [
      'Adaptive Horizontal and Vertical Artwork Exhibitions',
      'Behind-the-Scenes Case Study deep-dive layouts',
      'Curated Project Credit and Exhibition History log',
      'Direct Studio Collaboration Booker',
    ],
    technicalApproach: [
      'Hardware-accelerated transforms for smooth inertial scrolling',
      'Dynamic aspect-ratio containers preventing layout shifts on image load',
      'Reduced-motion fallbacks for simplified reading',
    ],
  },
  {
    slug: 'custom',
    badge: 'CONCEPT 006',
    name: 'CUSTOM',
    category: 'CUSTOM',
    industry: 'Requirement-Based',
    tagline: 'Not every business fits a template. Built around unique, bespoke operational requirements.',
    description:
      'A flexible sandbox demonstrating how mvfrwd. architects custom web applications, internal tools, interactive configurators, and complex workflows that go beyond standard websites.',
    status: 'IN DEVELOPMENT',
    theIdea:
      'When off-the-shelf platforms hit their technical limit, custom engineering is what creates competitive advantage. This concept proves what happens when business logic dictates the design.',
    designDirection: [
      'Modular technical architecture adaptable to any operational requirement.',
      'Intuitive step-by-step logic workflows designed to reduce cognitive load.',
      'High-contrast interactive status feeds and operational summaries.',
    ],
    keyFeatures: [
      'Multi-Variable Workflow Builder',
      'Custom Formula & Calculation Engines',
      'Dynamic API Data Ingestion Preview',
      'Tailored User Permission and Role Framework',
    ],
    technicalApproach: [
      'Extensible TypeScript interfaces designed for multi-tenant scales',
      'Optimized backend-ready data models for complex business rules',
      'High-security client-side validation pipelines',
    ],
  },
];