import Link from "next/link";
import { industries } from "@/content/industries";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export function IndustriesStrip() {
  return (
    <Section
      dark
      eyebrow="Industries we serve"
      title="Systems that move markets"
      subtitle="From data to decision, we engineer outcomes that accelerate enterprise performance."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <FadeIn key={ind.slug} delay={i * 0.05}>
            <Link
              href={`/industries/${ind.slug}`}
              className="group block rounded-2xl border border-cream/10 bg-navy-soft/80 p-6 transition-colors hover:border-teal/50"
            >
              <h3 className="font-display text-xl text-cream group-hover:text-teal-light">
                {ind.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                {ind.summary}
              </p>
              <div className="mt-6 flex gap-6">
                {ind.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl text-sand">{stat.value}</p>
                    <p className="mt-1 text-xs text-cream/45">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
