import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  light?: boolean;
  /** nav = large left wordmark; full = entire banner */
  variant?: "nav" | "full";
};

export function Logo({
  className = "",
  light = false,
  variant = "nav",
}: LogoProps) {
  if (variant === "full") {
    return (
      <Link
        href="/"
        className={`group inline-flex max-w-full items-center ${className}`}
        aria-label="GeoBucket home"
      >
        <Image
          src="/logo.jpeg"
          alt="GeoBucket — Intelligent Solutions. Infinite Possibilities."
          width={960}
          height={280}
          className={`h-auto w-full max-w-md object-contain object-left ${light ? "brightness-110" : ""}`}
          sizes="(max-width: 640px) 90vw, 448px"
        />
      </Link>
    );
  }

  // Wide banner: zoom into the left G + GEOBUCKET wordmark so the name stays readable.
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center ${className}`}
      aria-label="GeoBucket home"
    >
      <span className="relative block h-16 w-[15.5rem] overflow-hidden sm:h-[4.75rem] sm:w-[20rem] md:h-20 md:w-[24rem] lg:h-[5.25rem] lg:w-[28rem]">
        <Image
          src="/logo.jpeg"
          alt="GeoBucket — Intelligent Solutions. Infinite Possibilities."
          fill
          priority
          sizes="(max-width: 640px) 248px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
          className={`object-cover object-left ${light ? "brightness-110" : ""}`}
        />
      </span>
    </Link>
  );
}
