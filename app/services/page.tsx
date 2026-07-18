import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI/ML, decision science, blockchain, consultancy, and infrastructure software from GeoBucket.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Capabilities that compound"
        subtitle="End-to-end expertise—from decision architectures to production platforms."
      />
      <Section>
        <div className="grid gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 0.04}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid gap-4 border-b border-navy/10 pb-8 transition-colors hover:border-teal sm:grid-cols-[1fr_2fr] sm:gap-10"
              >
                <h2 className="font-display text-2xl text-navy group-hover:text-teal sm:text-3xl">
                  {s.title}
                </h2>
                <div>
                  <p className="text-navy/70 leading-relaxed">{s.summary}</p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-teal">
                    Explore →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
