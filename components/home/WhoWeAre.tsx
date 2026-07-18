import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function WhoWeAre() {
  return (
    <Section eyebrow="Who we are" title="We are a decision systems company">
      <FadeIn>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-navy/80">
              Management consulting? Mathematics? Software? Data analytics? AI?
            </p>
            <p className="mt-4 font-display text-2xl leading-snug text-navy sm:text-3xl">
              Truth is, we&apos;re all of the above—art plus science, done at
              scale, implemented as one.
            </p>
          </div>
          <div className="space-y-4 text-navy/70 leading-relaxed">
            <p>
              GeoBucket helps leaders unlock evidence-based insight and ship the
              software that operationalizes it. We build analytical models,
              distributed systems, and infrastructure platforms that turn
              complexity into advantage.
            </p>
            <p>
              Cross-industry. Multi-discipline. Obsessed with outcomes that
              survive contact with production.
            </p>
            <Button href="/about" variant="primary" className="mt-4">
              About GeoBucket
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
