import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 80% 20%, rgba(31,166,160,0.3), transparent 45%),
            linear-gradient(rgba(31,166,160,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(31,166,160,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }}
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-28">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-light">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/65 sm:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
