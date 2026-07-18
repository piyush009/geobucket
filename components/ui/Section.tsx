import { type ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
};

export function Section({
  children,
  className = "",
  id,
  eyebrow,
  title,
  subtitle,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 ${dark ? "bg-navy text-cream" : "bg-cream text-navy"} ${className}`}
    >
      <Container>
        {(eyebrow || title || subtitle) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <p
                className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-teal-light" : "text-teal"}`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`font-display text-3xl leading-tight sm:text-4xl lg:text-5xl text-balance ${dark ? "text-cream" : "text-navy"}`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-cream/70" : "text-navy/70"}`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
