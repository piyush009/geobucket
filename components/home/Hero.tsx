"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { heroSlides } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const slide = heroSlides[index];

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 70% 40%, rgba(31,166,160,0.25), transparent 55%),
            linear-gradient(rgba(31,166,160,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(31,166,160,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 56px 56px, 56px 56px",
        }}
      />
      <svg
        className="pointer-events-none absolute -right-20 top-10 h-[520px] w-[520px] opacity-30"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="160" stroke="#1FA6A0" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="110" stroke="#E8D5B5" strokeWidth="0.6" opacity="0.5" />
        <path
          d="M60 220 Q140 80 200 180 T340 160"
          stroke="#1FA6A0"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M80 280 Q160 200 220 260 T360 240"
          stroke="#E8D5B5"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />
        <circle cx="200" cy="180" r="5" fill="#1FA6A0" />
        <circle cx="140" cy="120" r="3" fill="#E8D5B5" />
        <circle cx="280" cy="150" r="3" fill="#1FA6A0" />
      </svg>

      <Container className="relative flex min-h-[calc(100vh-4.5rem)] flex-col justify-center py-20 sm:py-28">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-display text-4xl tracking-tight text-sand sm:text-5xl md:text-6xl"
        >
          GeoBucket
        </motion.p>

        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.headline}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display text-3xl leading-[1.15] text-cream sm:text-4xl lg:text-5xl text-balance">
                <span className="text-cream/55">Powered by systems.</span>
                <br />
                <span className="text-teal-light">{slide.headline}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
                {slide.support}
              </p>
              <div className="mt-8">
                <Button href={slide.cta.href} variant="primary">
                  {slide.cta.label}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex gap-2" role="tablist" aria-label="Hero slides">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-teal" : "w-2 bg-cream/30 hover:bg-cream/50"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
