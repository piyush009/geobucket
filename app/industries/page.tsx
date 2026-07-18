import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/content/industries";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "GeoBucket serves fintech, healthcare, energy, retail, government, and high tech.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Domain depth. Cross-industry patterns."
        subtitle="We bring decision science and software craft to sectors where complexity is the job."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <FadeIn key={ind.slug} delay={i * 0.05}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white/50 p-6 transition-colors hover:border-teal"
              >
                <h2 className="font-display text-2xl text-navy group-hover:text-teal">
                  {ind.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-navy/65">{ind.summary}</p>
                <div className="mt-6 flex gap-5">
                  {ind.stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-xl text-teal">{s.value}</p>
                      <p className="text-[11px] text-navy/45">{s.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
