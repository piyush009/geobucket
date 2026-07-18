"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav } from "@/content/nav";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy/10 bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {mainNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() =>
                setActiveMenu(item.children ? item.label : null)
              }
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-navy/80 transition-colors hover:text-teal"
              >
                {item.label}
                {item.children && (
                  <span className="ml-1 text-[10px] text-navy/40">▾</span>
                )}
              </Link>

              {item.children && activeMenu === item.label && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="min-w-[280px] rounded-xl border border-navy/10 bg-cream p-3 shadow-xl shadow-navy/10">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-navy/[0.04]"
                      >
                        <span className="block text-sm font-medium text-navy">
                          {child.label}
                        </span>
                        {child.description && (
                          <span className="mt-0.5 block text-xs text-navy/55">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" className="!py-2 !text-xs uppercase tracking-wider">
            Connect
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy/15 text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-navy transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-navy transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-navy transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-navy/10 bg-cream lg:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {mainNav.map((item) => (
              <div key={item.href} className="border-b border-navy/5 py-2">
                <Link
                  href={item.href}
                  className="block py-2 text-base font-medium text-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mb-2 ml-3 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1.5 text-sm text-navy/65"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                Connect with us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
