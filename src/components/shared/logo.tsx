import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The Nexora brand mark:
 * A sleek geometric 'N' emblem formed by dynamic overlapping gradient ribbons,
 * symbolizing speed, precision and modern digital technology.
 */
export function LogoMark({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={cn("relative inline-flex shrink-0 items-center justify-center", className)}>
      <svg
        width="36"
        height="30"
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-8 w-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="nx-grad-a" x1="0" y1="40" x2="48" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#153ddc" />
            <stop offset="0.5" stopColor="#1d82f0" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="nx-grad-b" x1="10" y1="0" x2="38" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" />
            <stop offset="0.6" stopColor="#2563eb" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="nx-glow" x1="0" y1="0" x2="48" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="1" stopColor="#1d4ed8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Left vertical ribbon */}
        <path d="M4 36L14.5 4H22.7L12.2 36H4Z" fill="url(#nx-grad-a)" />

        {/* Diagonal crossing ribbon with rich depth */}
        <path d="M14.5 4H22.7L33.3 36H25.1L14.5 4Z" fill="url(#nx-grad-b)" opacity="0.95" />

        {/* Right vertical ribbon */}
        <path d="M25.1 36L35.7 4H44L33.4 36H25.1Z" fill="url(#nx-grad-a)" />

        {/* Vibrant luminous accent dot */}
        <circle cx="39.5" cy="8.5" r="3" fill="#22d3ee" className="animate-pulse" />
      </svg>
    </div>
  );
}

/** Site logo: Nexora brand mark + wordmark. */
export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Nexora — home"
      className={cn("group inline-flex items-center gap-2.5 rounded-lg outline-offset-4", className)}
    >
      <LogoMark light={light} />
      <span
        className={cn(
          "font-heading text-[1.45rem] leading-none font-extrabold tracking-tight whitespace-nowrap",
          light ? "text-white" : "text-navy-950",
        )}
      >
        Nexora
      </span>
    </Link>
  );
}
