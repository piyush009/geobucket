import type { Metadata } from "next";
import { platforms } from "@/content/home";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "Decision OS, Agent Forge, and Infra Kit — GeoBucket platforms for decisions, agents, and cloud foundations.",
};

export default function PlatformsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platforms"
        title="Engineering platforms that power curiosity"
        subtitle="Reusable systems that accelerate how enterprises learn, decide, and ship."
      />
      <Section>
        <div className="grid gap-8">
          {platforms.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.06}>
              <article className="grid gap-6 rounded-2xl border border-navy/10 bg-white/40 p-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                <div>
                  <h2 className="font-display text-3xl text-navy">{p.title}</h2>
                  <p className="mt-4 text-navy/70 leading-relaxed">{p.summary}</p>
                </div>
                <ul className="space-y-3 rounded-xl bg-navy p-6 text-cream">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/contact">Request a platform briefing</Button>
        </div>
      </Section>
    </>
  );
}
