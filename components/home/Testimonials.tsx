import { testimonials } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export function Testimonials() {
  return (
    <Section
      dark
      eyebrow="Customer voices"
      title="Hear from our partners"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <FadeIn key={t.role} delay={i * 0.07}>
            <blockquote className="flex h-full flex-col rounded-2xl border border-cream/10 bg-navy-soft p-6">
              <p className="flex-1 text-base leading-relaxed text-cream/85">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-cream/10 pt-4">
                <p className="text-sm font-medium text-sand">{t.role}</p>
                <p className="text-xs text-cream/45">{t.sector}</p>
              </footer>
            </blockquote>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
