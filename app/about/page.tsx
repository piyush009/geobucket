import type { Metadata } from "next";
import { principles, differentiators } from "@/content/home";
import { site } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GeoBucket"
        title="Decision systems and software, implemented as one"
        subtitle="We are a consultancy and product studio for AI/ML, blockchain, decision science, and infrastructure software."
      />

      <Section title="Our approach">
        <FadeIn>
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-navy/75">
            <p>
              GeoBucket exists for organizations that are drowning in tools and
              starving for decisions. We diagnose complexity, design the
              architecture, and ship the systems that make better choices
              repeatable.
            </p>
            <p>
              Our teams blend mathematicians, engineers, and operators. We stay
              through delivery—so capability compounds inside your walls.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section dark eyebrow="Principles" title="What we believe">
        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <h3 className="font-display text-2xl text-sand">{p.title}</h3>
              <p className="mt-3 text-sm text-cream/65 leading-relaxed">{p.body}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section eyebrow="How we show up" title="What partners notice">
        <div className="grid gap-6 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <FadeIn key={d.title} delay={i * 0.04}>
              <div className="border-l-2 border-teal pl-5">
                <h3 className="font-display text-xl text-navy">{d.title}</h3>
                <p className="mt-2 text-sm text-navy/65">{d.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/contact">Work with us</Button>
        </div>
      </Section>
    </>
  );
}
