import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="GeoBucket home"
    >
      <Image
        src="/logo.jpeg"
        alt="GeoBucket"
        width={220}
        height={80}
        priority
        className={`h-10 w-auto object-contain sm:h-12 ${light ? "brightness-110" : ""}`}
      />
    </Link>
  );
}
