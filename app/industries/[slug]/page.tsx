import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getIndustry } from "@/content/industries";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={industry.title}
        subtitle={industry.summary}
      />

      <Section title="How we engage" subtitle={industry.description}>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-xl text-navy">Focus areas</h3>
            <ul className="mt-4 space-y-3">
              {industry.focus.map((f) => (
                <li key={f} className="flex items-center gap-3 text-navy/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-navy p-8 text-cream">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">
              Illustrative outcomes
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {industry.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-teal-light">{s.value}</p>
                  <p className="mt-1 text-sm text-cream/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Button href="/contact">Talk about your industry</Button>
        </div>
      </Section>
    </>
  );
}
