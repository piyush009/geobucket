import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  light?: boolean;
  /** nav = compact cropped mark+wordmark; full = entire brand sheet */
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
        className={`group inline-flex items-center ${className}`}
        aria-label="GeoBucket home"
      >
        <Image
          src="/logo.jpeg"
          alt="GeoBucket — Intelligent Solutions. Infinite Possibilities."
          width={480}
          height={520}
          className={`h-auto w-56 object-contain sm:w-64 ${light ? "brightness-110" : ""}`}
          sizes="(max-width: 640px) 224px, 256px"
        />
      </Link>
    );
  }

  // Crop to the upper mark + GEOBUCKET wordmark so text stays readable in the header.
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center ${className}`}
      aria-label="GeoBucket home"
    >
      <span
        className={`relative block h-14 w-[11.5rem] overflow-hidden rounded-md bg-cream sm:h-16 sm:w-[14rem] md:h-[4.75rem] md:w-[17rem] ${light ? "bg-transparent" : ""}`}
      >
        <Image
          src="/logo.jpeg"
          alt="GeoBucket — Intelligent Solutions. Infinite Possibilities."
          fill
          priority
          sizes="(max-width: 640px) 184px, (max-width: 768px) 224px, 272px"
          className={`object-cover object-[center_8%] ${light ? "brightness-110" : ""}`}
        />
      </span>
    </Link>
  );
}
