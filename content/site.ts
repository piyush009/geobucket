export const site = {
  name: "GeoBucket",
  legalName: "GEOBUCKET SOLUTIONS PRIVATE LIMITED",
  tagline: "Decision systems. Infrastructure software. Measurable outcomes.",
  description:
    "GeoBucket builds AI/ML, blockchain, decision science, and infrastructure software for enterprises that need clarity under complexity.",
  url: "https://www.geobucket.in",
  /** Inbox for form submissions and mailto destinations (not shown on Contact). */
  email: "piyush.tiwary@geobucket.in",
  addressLines: [
    "House No. 33, GEOBUCKET SOLUTIONS PRIVATE LIMITED",
    "Road No. 1A, LBS Nagar, Behind A.N. College",
    "Shivpuri, Patna, Bihar 800023",
  ],
  addressLine:
    "House No. 33, Road No. 1A, LBS Nagar, Shivpuri, Patna, Bihar 800023",
  social: {
    linkedin: "https://www.linkedin.com/company/geobucket",
    twitter: "https://twitter.com/geobucket",
  },
} as const;

export type SiteConfig = typeof site;
