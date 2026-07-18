import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Connect with GeoBucket — ${site.email}`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build the system"
        subtitle="Tell us about your challenge. We'll respond with clarity—not a deck of buzzwords."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />
          <aside className="rounded-2xl bg-navy p-8 text-cream lg:self-start">
            <h2 className="font-display text-2xl text-sand">Direct lines</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-cream/45">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-teal-light hover:underline"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-cream/45">Phone</dt>
                <dd className="mt-1 text-cream/85">{site.phone}</dd>
              </div>
              <div>
                <dt className="text-cream/45">Presence</dt>
                <dd className="mt-1 text-cream/85">{site.address}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>
    </>
  );
}
