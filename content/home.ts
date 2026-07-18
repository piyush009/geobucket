export const platforms = [
  {
    slug: "decision-os",
    title: "Decision OS",
    summary:
      "A structured system for framing problems, running experiments, and scaling decisions across teams.",
    points: [
      "Shared problem taxonomy",
      "Experiment registry",
      "Decision audit trails",
    ],
  },
  {
    slug: "agent-forge",
    title: "Agent Forge",
    summary:
      "Our agentic toolkit for designing, evaluating, and deploying tool-using AI workflows with guardrails.",
    points: [
      "Tool & policy graphs",
      "Eval harnesses",
      "Human escalation paths",
    ],
  },
  {
    slug: "infra-kit",
    title: "Infra Kit",
    summary:
      "Composable infrastructure patterns for data platforms, APIs, and cloud foundations that stay reliable under load.",
    points: [
      "Paved-road templates",
      "Observability defaults",
      "Cost-aware architectures",
    ],
  },
] as const;

export const principles = [
  {
    title: "Flow over noise",
    body: "Organizations thrive when information and decisions move cleanly. We design for flow—fewer handoffs, clearer ownership, faster learning.",
  },
  {
    title: "Systems, not slides",
    body: "Insight without an operating system decays. We ship decision architectures and software that persist after the workshop ends.",
  },
  {
    title: "Human + machine",
    body: "Automation amplifies judgment; it does not replace accountability. We fuse models with the people who own outcomes.",
  },
] as const;

export const differentiators = [
  {
    title: "We build decision systems, not decks.",
    body: "Architectures that combine math, data, and human judgment—so enterprises decide smarter and evolve faster.",
  },
  {
    title: "We turn complexity into advantage.",
    body: "Nonlinear markets need nonlinear thinking. We find the levers that actually move performance.",
  },
  {
    title: "We operationalize intelligence at scale.",
    body: "From MLOps to Decision OS patterns, we make intelligence repeatable—not a one-off pilot.",
  },
  {
    title: "We fuse human and machine.",
    body: "Systems that amplify judgment with computation, with clear override and audit paths.",
  },
  {
    title: "We deliver measurable impact.",
    body: "Outcomes over activity: accuracy, cost, cycle time, and adoption—tracked, not assumed.",
  },
] as const;

export const heroSlides = [
  {
    headline: "Built for Decisions.",
    support:
      "We don't decorate slides. We engineer AI, decision science, and infrastructure software that move markets.",
    cta: { label: "Explore services", href: "/services" },
  },
  {
    headline: "Intelligence That Ships.",
    support:
      "From agentic AI to blockchain and cloud platforms—GeoBucket takes systems from prototype to production.",
    cta: { label: "See platforms", href: "/platforms" },
  },
  {
    headline: "Clarity Under Complexity.",
    support:
      "Consultancy that stays through delivery. Decision systems your teams can run without us in the room.",
    cta: { label: "Talk to us", href: "/contact" },
  },
] as const;

export const testimonials = [
  {
    quote:
      "One of the best partners we've worked with—solving tough problems under pressure and leaving capability behind.",
    role: "VP, Strategy & Insights",
    sector: "Healthcare",
  },
  {
    quote:
      "GeoBucket turned our attribution chaos into a system the whole marketing org trusts.",
    role: "Head of Digital Marketing",
    sector: "Technology",
  },
  {
    quote:
      "They didn't stop at the roadmap. They built the platform and trained our engineers to own it.",
    role: "Director, Data Platforms",
    sector: "Fintech",
  },
] as const;

export const careers = {
  culture:
    "GeoBucket culture is built on first-principles thinking, extreme experimentation, and shipping systems that matter.",
  roles: [
    {
      title: "Decision Scientist",
      location: "Bengaluru / Remote",
      type: "Full-time",
    },
    {
      title: "ML Engineer",
      location: "San Francisco / Remote",
      type: "Full-time",
    },
    {
      title: "Platform Engineer",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Blockchain Engineer",
      location: "Remote",
      type: "Contract / Full-time",
    },
  ],
};
