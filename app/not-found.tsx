import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-cream px-5 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl text-navy">Page not found</h1>
      <p className="mt-3 max-w-md text-navy/60">
        The path you requested isn&apos;t on the map. Head home or explore
        services.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Home</Button>
        <Link href="/services" className="text-sm font-medium text-teal hover:underline self-center">
          Services
        </Link>
      </div>
    </div>
  );
}
