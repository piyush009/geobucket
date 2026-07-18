import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about GeoBucket.",
};

const faqs = [
  {
    q: "What does GeoBucket do?",
    a: "We build decision systems and software across AI/ML, blockchain, decision science, consultancy, and infrastructure platforms.",
  },
  {
    q: "Do you only do strategy?",
    a: "No. We diagnose and design, then stay through implementation so systems work in production—not just in workshops.",
  },
  {
    q: "Where are you based?",
    a: "We operate across San Francisco, Bengaluru, and remote-first squads.",
  },
  {
    q: "How do engagements start?",
    a: "Start with a conversation via our contact form. Typical paths: discovery sprint, architecture engagement, or embedded build squad.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Frequently asked questions"
        subtitle="Short answers. Clear next steps."
      />
      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-navy/10">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <h2 className="font-display text-xl text-navy">{f.q}</h2>
              <p className="mt-2 text-navy/65 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
