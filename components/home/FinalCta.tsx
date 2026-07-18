import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-cream py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(31,166,160,0.12), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Next step
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl text-navy sm:text-5xl text-balance">
            It&apos;s time to build the system.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-navy/65">
            Let&apos;s turn your data, algorithms, and infrastructure into
            decisions that move the market.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">Connect with us</Button>
            <Button href="/careers" variant="secondary">
              See open roles
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
