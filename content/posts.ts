export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "decision-systems-not-decks",
    title: "Build Decision Systems, Not Decks",
    excerpt:
      "Most analytics programs stall at storytelling. The winners operationalize judgment into software and rhythms.",
    category: "Decision Science",
    date: "2026-03-12",
    readMinutes: 6,
    body: [
      "Enterprises do not fail because they lack dashboards. They fail because insight never becomes a repeatable decision.",
      "A decision system encodes who decides, on what evidence, under which constraints, and how learning feeds the next cycle. Slides cannot do that.",
      "At GeoBucket we treat decision science as product work: models, interfaces, ownership, and feedback loops. The artifact is not a PDF—it is an operating system for choices.",
      "Start by naming the decision, not the dataset. Then instrument the path from signal to action. Everything else is decoration.",
    ],
  },
  {
    slug: "agentic-ai-operating-model",
    title: "Agentic AI Needs an Operating Model",
    excerpt:
      "Agents without governance become expensive chaos. Here is how to design autonomy with accountability.",
    category: "AI & ML",
    date: "2026-02-28",
    readMinutes: 7,
    body: [
      "Tool-using agents can compress workflows that used to take teams days. They can also amplify mistakes at machine speed.",
      "An operating model for agentic AI defines scopes of autonomy, escalation paths, evaluation harnesses, and cost budgets before the first demo goes viral.",
      "We recommend separating exploration sandboxes from production agents, with clear promotion criteria: accuracy, latency, auditability, and human override.",
      "The organizations that win will treat agents like junior colleagues with privileges—not magic.",
    ],
  },
  {
    slug: "blockchain-where-it-earns",
    title: "Blockchain Where It Earns Its Keep",
    excerpt:
      "Skip the theater. Use distributed ledgers when multi-party trust and settlement complexity justify them.",
    category: "Blockchain",
    date: "2026-01-20",
    readMinutes: 5,
    body: [
      "Blockchain is a tool for shared state under contested trust. It is not a default architecture for every database problem.",
      "The highest-ROI use cases we see: multi-party settlement, provenance across supply chains, and audit trails that cannot be quietly rewritten.",
      "Success looks boring: clear contracts, identity, integration with existing systems, and operators who understand failure modes.",
      "If a single party owns the data and the rules, you probably need a well-built API—not a ledger.",
    ],
  },
  {
    slug: "infra-as-product",
    title: "Treat Infrastructure Software as a Product",
    excerpt:
      "Platforms that ignore developer experience become shadow IT magnets. Product thinking fixes that.",
    category: "Infra",
    date: "2025-12-08",
    readMinutes: 6,
    body: [
      "Internal platforms fail when they optimize for architecture purity instead of time-to-safe-change.",
      "Productized infra means paved roads, self-service, clear SLOs, and a roadmap informed by the teams who ship on top of you.",
      "GeoBucket builds data and cloud foundations as products: opinionated defaults, escape hatches, and observability from day one.",
      "Measure platform success by feature velocity and incident load—not by how many tools you installed.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
