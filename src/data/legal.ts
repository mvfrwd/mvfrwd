export interface LegalSection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    subtitle: string;
    items: string[];
  }[];
}

export const LEGAL_CONFIG = {
  lastUpdated: "12 AUGUST 2026",
  legalEntityName: "MoveForward",
  businessAddress: "[confidential business address to be inserted]",
  privacyEmail: "mvfrwdco@gmail.com",
  contactEmail: "mvfrwdco@gmail.com",
  websiteUrl: "https://mvfrwd.com",
  governingLaw: "[confidential governing law to be inserted]",
};

export const PRIVACY_POLICY_SECTIONS: LegalSection[] = [
  {
    id: "introduction",
    title: "01 / Introduction",
    content: [
      `mvfrwd. ("we," "our," or "us") respects your privacy and is committed to being transparent about how digital information is processed. This Privacy Policy outlines how information is collected, used, and safeguarded when you interact with ${LEGAL_CONFIG.websiteUrl} and our associated digital presence.`,
      `mvfrwd. is the digital agency brand operated by ${LEGAL_CONFIG.legalEntityName}. By utilizing our website, contacting us regarding projects, or communicating with us, you agree to the practices described in this policy.`
    ]
  },
  {
    id: "information-we-collect",
    title: "02 / Information We Collect",
    content: [
      "We strictly collect information necessary to deliver, optimize, and communicate regarding our digital services and website experience."
    ],
    subsections: [
      {
        subtitle: "A. Information You Provide Voluntarily",
        items: [
          "Project Inquiry Data: Name, business email address, phone number, company name, project scope, budget selection, and project details provided via our contact form.",
          "Direct Communications: Information contained in messages or emails sent directly to our team."
        ]
      },
      {
        subtitle: "B. Information Collected Automatically",
        items: [
          "Technical Metadata: Standard browser requests including IP address, browser type, device information, operating system, and timestamp data.",
          "Usage Data: Basic navigational metrics detailing how visitors interact with our visual layouts and pages."
        ]
      }
    ]
  },
  {
    id: "how-we-use-information",
    title: "03 / How We Use Information",
    content: [
      "Information collected through our website is used strictly for legitimate business operational purposes, including:"
    ],
    subsections: [
      {
        subtitle: "Primary Purpose Breakdown",
        items: [
          "Evaluating project requests and initiating proposals/conversations.",
          "Responding directly to inquiries and providing client support.",
          "Maintaining, optimizing, and securing website performance.",
          "Fulfilling technical and legal obligations associated with our service operations."
        ]
      }
    ]
  },
  {
    id: "cookies",
    title: "04 / Cookies & Technical Data",
    content: [
      "Cookies are small text files stored on your device that assist with technical website operation.",
      "Essential Cookies: Required for fundamental technical features and navigation integrity across our platform.",
      "Analytics & Performance: [PLACEHOLDER: If analytics tools such as Google Analytics are integrated, details regarding performance cookie tracking should be updated here].",
      "You may configure your browser settings to reject or restrict non-essential cookies. However, disabling technical cookies may affect visual rendering."
    ]
  },
  {
    id: "data-sharing",
    title: "05 / Data Sharing & Retention",
    content: [
      "We do not sell, rent, or trade your personal information to third parties or marketing platforms.",
      "Information may be disclosed to trusted service providers (such as hosting infrastructure or domain communication tools) solely to maintain operations, bound by appropriate confidentiality requirements.",
      "Data Retention: Contact inquiries and project communications are retained for the duration necessary to evaluate, deliver, or fulfill project inquiries and statutory legal record obligations."
    ]
  },
  {
    id: "your-rights",
    title: "06 / Your Rights & Choices",
    content: [
      "Depending on your jurisdiction, you may hold rights regarding your personal information, including:",
      "• Requesting access to personal data held by us.",
      "• Requesting correction or updating of inaccurate records.",
      "• Requesting deletion of personal information where no statutory retention obligation exists.",
      `To exercise any applicable privacy choice, please reach out directly to ${LEGAL_CONFIG.privacyEmail}.`
    ]
  },
  {
    id: "changes",
    title: "07 / Policy Changes",
    content: [
      "We reserve the right to modify this Privacy Policy as our digital operations, tools, or legal requirements evolve.",
      `Any updates will be published on this page with an updated "LAST UPDATED" revision date.`
    ]
  },
  {
    id: "contact",
    title: "08 / Contact Information",
    content: [
      "For questions regarding this Privacy Policy or our data practices, please contact:",
      `Entity: mvfrwd. (operated by ${LEGAL_CONFIG.legalEntityName})`,
      `Address: ${LEGAL_CONFIG.businessAddress}`,
      `Privacy Email: ${LEGAL_CONFIG.privacyEmail}`,
      `General Inquiries: ${LEGAL_CONFIG.contactEmail}`
    ]
  }
];

export const TERMS_CONDITIONS_SECTIONS: LegalSection[] = [
  {
    id: "introduction",
    title: "01 / Terms Overview",
    content: [
      `Welcome to mvfrwd. ("we," "our," or "us"). These Terms & Conditions govern your access to and use of the website located at ${LEGAL_CONFIG.websiteUrl}.`,
      `By browsing or accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please discontinue website access.`
    ]
  },
  {
    id: "website-use",
    title: "02 / Website Use & Intellectual Property",
    content: [
      "All content presented on this website—including but not limited to visual design systems, editorial layouts, custom code, logos, wordmarks, graphics, and text—is owned by or licensed to mvfrwd.",
      "You are granted a limited, non-exclusive, non-transferable license to access and view website content solely for informational, non-commercial purposes.",
      "You may not reproduce, distribute, modify, scrape, or engineer website elements without explicit prior written authorization from mvfrwd."
    ]
  },
  {
    id: "service-inquiries",
    title: "03 / Project Inquiries & Services",
    content: [
      "mvfrwd. provides digital services across Web Engineering, Search Engine Optimization, Digital Marketing, Branding, Creative Systems, and AI & Automation.",
      "Website Statements & Estimates: Descriptions of capabilities on this website do not constitute a binding legal contract or formal price quote.",
      "Binding Agreements: Specific project scopes, deliverables, timelines, pricing structures, and payment terms are defined exclusively through individual, mutually executed client service contracts or formal proposals."
    ]
  },
  {
    id: "intellectual-property-deliverables",
    title: "04 / Project Deliverables & IP Ownership",
    content: [
      "Unless explicitly detailed in a separate signed client agreement:",
      "• Pre-existing tools, code libraries, frameworks, and methodologies developed by mvfrwd. remain the sole property of mvfrwd.",
      "• Ownership and usage rights of bespoke final deliverables constructed for clients are governed strictly by the terms outlined in individual client service contracts following complete payment fulfillment."
    ]
  },
  {
    id: "disclaimers-limitation",
    title: "05 / Disclaimers & Limitation of Liability",
    content: [
      `This website is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied.`,
      "mvfrwd. makes no representations regarding continuous, uninterrupted, or error-free site availability.",
      "To the fullest extent permitted by applicable law, mvfrwd. shall not be liable for any indirect, incidental, consequential, or special damages arising from or related to your use of this website."
    ]
  },
  {
    id: "external-links",
    title: "06 / Third-Party Services & Links",
    content: [
      "This website may contain links to third-party platforms, social channels, or external resources. mvfrwd. is not responsible for the content, security practices, or availability of third-party external sites."
    ]
  },
  {
    id: "governing-law",
    title: "07 / Governing Law & Jurisdiction",
    content: [
      `These Terms & Conditions shall be governed by and construed in accordance with the laws of ${LEGAL_CONFIG.governingLaw}, without giving effect to conflict of law principles.`
    ]
  },
  {
    id: "changes",
    title: "08 / Modifications to Terms",
    content: [
      "We reserve the right to modify these Terms at any time. Changes become effective immediately upon publication to this page."
    ]
  },
  {
    id: "contact",
    title: "09 / Contact",
    content: [
      `For questions regarding these Terms & Conditions, please contact us at ${LEGAL_CONFIG.contactEmail}.`
    ]
  }
];