export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  outcomes: string[];
  capabilities: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    shortTitle: "AI & ML",
    summary:
      "Production-grade models, agentic workflows, and intelligent automation that improve decisions—not just dashboards.",
    description:
      "We design, train, and operationalize AI systems that fit your domain. From classical ML to generative and agentic architectures, GeoBucket focuses on measurable lift: accuracy, latency, cost, and adoption.",
    outcomes: [
      "Faster cycle time from prototype to production",
      "Governed model ops with observability baked in",
      "Human-in-the-loop designs that teams actually trust",
    ],
    capabilities: [
      {
        title: "Predictive & classical ML",
        body: "Forecasting, scoring, anomaly detection, and optimization tuned to your data reality.",
      },
      {
        title: "Generative & agentic AI",
        body: "Retrieval systems, tool-using agents, and workflow automation with guardrails.",
      },
      {
        title: "MLOps & evaluation",
        body: "Pipelines, monitoring, A/B frameworks, and continuous evaluation so models stay honest.",
      },
    ],
  },
  {
    slug: "decision-science",
    title: "Decision Science",
    shortTitle: "Decision Science",
    summary:
      "We architect the math behind better choices—turning fragmented data into systems leaders can act on.",
    description:
      "Decision science at GeoBucket fuses statistics, causal reasoning, simulation, and product thinking. We help enterprises replace slideware with repeatable decision architectures.",
    outcomes: [
      "Clear decision frameworks under uncertainty",
      "Evidence-backed prioritization of levers",
      "Cross-functional alignment on what to measure",
    ],
    capabilities: [
      {
        title: "Analytical modeling",
        body: "Experiment design, causal inference, and scenario modeling for high-stakes choices.",
      },
      {
        title: "Decision systems",
        body: "Playbooks and software that encode how your organization learns and decides.",
      },
      {
        title: "Insight to action",
        body: "Visualization and operating rhythms that move insight into owned next steps.",
      },
    ],
  },
  {
    slug: "blockchain",
    title: "Blockchain & Distributed Systems",
    shortTitle: "Blockchain",
    summary:
      "Distributed ledgers and trust layers where they earn their keep—settlement, provenance, and multi-party workflows.",
    description:
      "We build blockchain and distributed systems with a bias toward utility: clear settlement, auditability, and interoperability—not hype. Smart contracts, indexers, and enterprise integrations included.",
    outcomes: [
      "Transparent multi-party processes",
      "Reduced reconciliation overhead",
      "Secure, auditable transaction trails",
    ],
    capabilities: [
      {
        title: "Protocol & smart contracts",
        body: "Secure contract design, audits coordination, and upgrade strategies.",
      },
      {
        title: "Enterprise integration",
        body: "Bridges between on-chain events and your ERP, KYC, and data platforms.",
      },
      {
        title: "Tokenization & provenance",
        body: "Asset registries, supply-chain provenance, and permissioned networks.",
      },
    ],
  },
  {
    slug: "consultancy",
    title: "Consultancy",
    shortTitle: "Consultancy",
    summary:
      "Strategy through delivery—partners who stay until the system works in production.",
    description:
      "GeoBucket consultancy blends discovery, architecture, and hands-on build. We diagnose complexity, design the path, and implement alongside your teams so capability stays when we leave.",
    outcomes: [
      "Roadmaps tied to revenue and risk",
      "Architecture that survives contact with reality",
      "Knowledge transfer that compounds",
    ],
    capabilities: [
      {
        title: "Discovery & diagnosis",
        body: "Map stakeholders, data, constraints, and the true decision bottlenecks.",
      },
      {
        title: "Architecture & delivery",
        body: "Reference architectures, build plans, and squad embedding.",
      },
      {
        title: "Change & enablement",
        body: "Operating models, training, and governance that make adoption durable.",
      },
    ],
  },
  {
    slug: "infra-software",
    title: "Infrastructure Software",
    shortTitle: "Infra Software",
    summary:
      "Platforms, pipelines, and cloud foundations that keep products reliable under load.",
    description:
      "We design and ship infrastructure-related software: data platforms, API layers, observability stacks, and cloud-native systems that make everything else possible.",
    outcomes: [
      "Lower cost-to-serve at higher reliability",
      "Faster feature velocity on stable foundations",
      "Security and compliance without theater",
    ],
    capabilities: [
      {
        title: "Data & platform engineering",
        body: "Lakes, warehouses, streaming, and governed pipelines as a product.",
      },
      {
        title: "Cloud & DevOps",
        body: "IaC, CI/CD, multi-env promotion, and cost-aware architectures.",
      },
      {
        title: "Reliability & security",
        body: "SLOs, incident tooling, secrets, identity, and zero-trust patterns.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
