import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/content/services";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        subtitle={service.summary}
      >
        <div className="mt-8">
          <Button href="/contact" variant="secondary">
            Discuss this capability
          </Button>
        </div>
      </PageHero>

      <Section title="How we help" subtitle={service.description}>
        <div className="grid gap-8 md:grid-cols-3">
          {service.capabilities.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06}>
              <div className="border-t border-teal pt-5">
                <h3 className="font-display text-xl text-navy">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/65">{c.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section dark eyebrow="Outcomes" title="What success looks like">
        <ul className="grid gap-4 sm:grid-cols-3">
          {service.outcomes.map((o) => (
            <li
              key={o}
              className="rounded-xl border border-cream/10 bg-navy-soft p-5 text-cream/85"
            >
              {o}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button href="/contact" variant="secondary">
            Start a conversation
          </Button>
        </div>
      </Section>
    </>
  );
}
