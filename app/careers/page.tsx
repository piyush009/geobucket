import type { Metadata } from "next";
import { careers } from "@/content/home";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join GeoBucket — build decision systems and infrastructure software.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Grow with us"
        subtitle={careers.culture}
      >
        <div className="mt-8">
          <Button href="/contact" variant="secondary">
            See open roles
          </Button>
        </div>
      </PageHero>

      <Section eyebrow="Open roles" title="Join a team that ships systems">
        <div className="divide-y divide-navy/10 border-y border-navy/10">
          {careers.roles.map((role, i) => (
            <FadeIn key={role.title} delay={i * 0.04}>
              <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-xl text-navy">{role.title}</h3>
                  <p className="mt-1 text-sm text-navy/55">
                    {role.location} · {role.type}
                  </p>
                </div>
                <Button href="/contact" variant="secondary" className="!text-xs">
                  Apply
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-8 text-sm text-navy/55">
          Don&apos;t see a fit?{" "}
          <a href="/contact" className="text-teal hover:underline">
            Reach out via our contact form
          </a>{" "}
          with your story.
        </p>
      </Section>
    </>
  );
}
