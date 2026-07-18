import Link from "next/link";
import { services } from "@/content/services";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export function Capabilities() {
  return (
    <Section
      eyebrow="What we build"
      title="Solving the toughest problems"
      subtitle="AI/ML, decision science, blockchain, consultancy, and infrastructure software—fused into systems that ship."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <FadeIn key={s.slug} delay={i * 0.06}>
            <Link
              href={`/services/${s.slug}`}
              className="group flex h-full flex-col border-t border-navy/15 pt-6 transition-colors hover:border-teal"
            >
              <h3 className="font-display text-xl text-navy group-hover:text-teal">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">
                {s.summary}
              </p>
              <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-teal">
                Know more →
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
