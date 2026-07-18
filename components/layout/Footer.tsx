import Link from "next/link";
import { footerNav } from "@/content/nav";
import { site } from "@/content/site";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="border-b border-cream/10">
        <Container className="flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-balance">
              Ready to turn complexity into clarity?
            </h2>
            <p className="mt-3 max-w-lg text-cream/65">
              Let&apos;s build decision systems and infrastructure software that
              move your business.
            </p>
          </div>
          <Button href="/contact" variant="secondary">
            Connect with us
          </Button>
        </Container>
      </div>

      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            {site.tagline}
          </p>
          <p className="mt-4 text-sm text-cream/50">{site.address}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block text-sm text-teal-light hover:underline"
          >
            {site.email}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">
            Company
          </p>
          <ul className="mt-4 space-y-2">
            {footerNav.company.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-cream/70 transition-colors hover:text-teal-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">
            Services
          </p>
          <ul className="mt-4 space-y-2">
            {footerNav.services.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-cream/70 transition-colors hover:text-teal-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">
            Legal
          </p>
          <ul className="mt-4 space-y-2">
            {footerNav.legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-cream/70 transition-colors hover:text-teal-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={site.social.linkedin}
              className="hover:text-teal-light"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={site.social.twitter}
              className="hover:text-teal-light"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
