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
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="GeoBucket home"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          width="36"
          height="36"
          rx="8"
          className={light ? "fill-teal" : "fill-navy"}
        />
        <path
          d="M8 22.5C8 16 12 10 18 8c6 2 10 8 10 14.5"
          stroke={light ? "#0B1C2C" : "#E8D5B5"}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="18" cy="23" r="3.2" className="fill-teal" />
        <path
          d="M12 18h12M14 14.5h8"
          stroke={light ? "#F7F5F1" : "#1FA6A0"}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-display text-xl tracking-tight ${light ? "text-cream" : "text-navy"} group-hover:text-teal transition-colors`}
      >
        GeoBucket
      </span>
    </Link>
  );
}
