import { platforms } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function PlatformsTeaser() {
  return (
    <Section
      eyebrow="Platforms & frameworks"
      title="Engineering platforms that power curiosity"
      subtitle="Opinionated systems for decisions, agents, and infrastructure—ready to adapt to your enterprise."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {platforms.map((p, i) => (
          <FadeIn key={p.slug} delay={i * 0.07}>
            <div className="flex h-full flex-col rounded-2xl bg-navy p-7 text-cream">
              <h3 className="font-display text-2xl text-sand">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/65">
                {p.summary}
              </p>
              <ul className="mt-5 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-cream/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
      <div className="mt-10">
        <Button href="/platforms">Learn more about platforms</Button>
      </div>
    </Section>
  );
}
