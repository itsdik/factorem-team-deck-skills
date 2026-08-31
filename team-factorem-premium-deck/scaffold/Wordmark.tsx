"use client";

/** Factorem logo (white). Height via className, e.g. "h-10".
 *  Put the asset at /public/images/factorem-logo-white.png — never invent a wordmark. */
export default function Wordmark({ className = "h-8" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/factorem-logo-white.png"
      alt="Factorem"
      className={`w-auto ${className}`}
    />
  );
}
