import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we handle information you share with GeoBucket."
      />
      <Section>
        <div className="prose-like max-w-3xl space-y-5 text-navy/75 leading-relaxed">
          <p>
            When you contact us via forms or email, we collect the details you
            provide (name, email, company, message) solely to respond to your
            inquiry and improve our services.
          </p>
          <p>
            We do not sell personal data. We may use trusted processors to host
            this site and deliver email. Retention is limited to what is needed
            for correspondence and legitimate business records.
          </p>
          <p>
            For privacy requests, use our{" "}
            <a href="/contact" className="text-teal hover:underline">
              contact form
            </a>
            .
          </p>
          <p className="text-sm text-navy/45">Last updated: July 2026</p>
        </div>
      </Section>
    </>
  );
}
