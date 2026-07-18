import { principles } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export function Principles() {
  return (
    <Section
      dark
      eyebrow="Belief system"
      title="Principles that turn complexity into better decisions"
    >
      <div className="grid gap-8 md:grid-cols-3">
        {principles.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08}>
            <div className="border-t border-teal/40 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
                0{i + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl text-cream">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">{p.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
