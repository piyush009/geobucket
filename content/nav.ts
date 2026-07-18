export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "AI & Machine Learning",
        href: "/services/ai-ml",
        description: "Models, agents, and intelligent automation",
      },
      {
        label: "Decision Science",
        href: "/services/decision-science",
        description: "From data to decisions that stick",
      },
      {
        label: "Blockchain",
        href: "/services/blockchain",
        description: "Distributed systems with real utility",
      },
      {
        label: "Consultancy",
        href: "/services/consultancy",
        description: "Strategy through delivery",
      },
      {
        label: "Infra Software",
        href: "/services/infra-software",
        description: "Platforms that scale with your load",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Fintech & Banking", href: "/industries/fintech" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Energy", href: "/industries/energy" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Government", href: "/industries/government" },
      { label: "High Tech", href: "/industries/high-tech" },
    ],
  },
  { label: "Platforms", href: "/platforms" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI & ML", href: "/services/ai-ml" },
    { label: "Decision Science", href: "/services/decision-science" },
    { label: "Blockchain", href: "/services/blockchain" },
    { label: "Consultancy", href: "/services/consultancy" },
    { label: "Infra Software", href: "/services/infra-software" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "FAQs", href: "/faq" },
  ],
};
