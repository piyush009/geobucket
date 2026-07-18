import { differentiators } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhyUs() {
  return (
    <Section
      dark
      eyebrow="Why choose us"
      title="Your partner in transforming complexity into clarity"
      subtitle="A pure-play decision systems and software consultancy, built to elevate decisions and drive impact."
    >
      <div className="grid gap-8 sm:grid-cols-2">
        {differentiators.map((d, i) => (
          <FadeIn key={d.title} delay={i * 0.05}>
            <div>
              <h3 className="font-display text-xl text-teal-light sm:text-2xl">
                {d.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">{d.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
