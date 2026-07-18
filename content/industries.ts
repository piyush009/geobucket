export type Industry = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stats: { value: string; label: string }[];
  focus: string[];
};

export const industries: Industry[] = [
  {
    slug: "fintech",
    title: "Fintech & Banking",
    summary:
      "Fraud, credit, pricing, and customer intelligence—built for regulated environments.",
    description:
      "We help banks and fintechs turn telemetry and transaction data into sharper risk, growth, and ops decisions—with AI systems that pass scrutiny.",
    stats: [
      { value: "21%", label: "Lift in fraud detection accuracy" },
      { value: "30%", label: "Faster recovery workflows" },
    ],
    focus: [
      "Fraud & AML detection",
      "Credit decisioning",
      "Personalization & retention",
      "Regulatory-ready MLOps",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary:
      "Responsible AI for diagnosis support, operations, and patient experience.",
    description:
      "From clinical decision support to hospital ops, we build systems that respect privacy, evidence, and the realities of care delivery.",
    stats: [
      { value: "90%", label: "Faster triage pathways" },
      { value: "9×", label: "Reduction in manual review load" },
    ],
    focus: [
      "Clinical analytics",
      "Ops & capacity planning",
      "Patient journey intelligence",
      "Privacy-preserving pipelines",
    ],
  },
  {
    slug: "energy",
    title: "Energy",
    summary:
      "Asset uptime, forecasting, and transition planning with decision-grade models.",
    description:
      "We help energy operators sense change earlier, reduce false alarms, and allocate capital with clearer scenarios.",
    stats: [
      { value: "86%", label: "Fewer false alarms" },
      { value: "$30M", label: "Ops cost avoided (illustrative)" },
    ],
    focus: [
      "Predictive maintenance",
      "Demand & price forecasting",
      "Emissions & transition models",
      "Field data platforms",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    summary:
      "Demand sensing, inventory, and marketing systems that personalize at scale.",
    description:
      "Retail margins live in the details. We connect merchandising, supply, and CX data into decisions that move sell-through and loyalty.",
    stats: [
      { value: "18%", label: "Higher marketing ROI" },
      { value: "50%", label: "Less manual inventory work" },
    ],
    focus: [
      "Demand forecasting",
      "Assortment & pricing",
      "Supply chain visibility",
      "Customer lifetime value",
    ],
  },
  {
    slug: "government",
    title: "Government",
    summary:
      "Citizen-scale platforms and decision systems for public impact.",
    description:
      "We partner with public institutions on analytics, digital public infrastructure patterns, and AI that is explainable and accountable.",
    stats: [
      { value: "1M+", label: "Citizens served (programs)" },
      { value: "21", label: "Languages supported" },
    ],
    focus: [
      "Service delivery analytics",
      "Fraud & integrity",
      "Policy simulation",
      "Secure data exchange",
    ],
  },
  {
    slug: "high-tech",
    title: "High Tech",
    summary:
      "Product telemetry, CX intelligence, and platform engineering for builders.",
    description:
      "For software and hardware companies, we unify product, support, and market signals so roadmaps and ops decisions move faster.",
    stats: [
      { value: "+15%", label: "Customer retention lift" },
      { value: "6%", label: "Sentiment improvement" },
    ],
    focus: [
      "Product analytics",
      "Support & CX copilots",
      "Platform modernization",
      "Developer experience",
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
