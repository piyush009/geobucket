export const site = {
  name: "GeoBucket",
  tagline: "Decision systems. Infrastructure software. Measurable outcomes.",
  description:
    "GeoBucket builds AI/ML, blockchain, decision science, and infrastructure software for enterprises that need clarity under complexity.",
  url: "https://www.geobucket.com",
  email: "hello@geobucket.com",
  phone: "+1 (415) 555-0142",
  address: "San Francisco · Bengaluru · Remote",
  social: {
    linkedin: "https://www.linkedin.com/company/geobucket",
    twitter: "https://twitter.com/geobucket",
  },
} as const;

export type SiteConfig = typeof site;
