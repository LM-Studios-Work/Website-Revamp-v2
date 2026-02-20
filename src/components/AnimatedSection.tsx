import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  /** Extra classes on the outer section tag */
  className?: string;
  /** Intersection Observer threshold (desktop). Default 0.15. */
  threshold?: number;
  /** Animation delay in CSS format, e.g. "0.2s". Default "0.2s". */
  delay?: string;
  /** Max-width class. Default "max-w-[1400px]". Pass "" to disable wrapper. */
  maxWidth?: string;
  /** If true, children receive the ref and visibility directly (no outer wrapper). */
  bare?: boolean;
}

/**
 * Drop-in wrapper that applies the standard scroll-triggered fadeInUp animation.
 * Replaces the repetitive `useScrollAnimation` + ternary pattern used across every page.
 */
export const AnimatedSection = ({
  children,
  className = "",
  threshold = 0.15,
  delay = "0.2s",
  maxWidth = "max-w-[1400px]",
  bare = false,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation(threshold);

  const animClass = isVisible
    ? `animate-[fadeInUp_0.8s_ease-out_${delay}_both]`
    : "";

  if (bare) {
    return (
      <div
        ref={ref}
        className={`opacity-0 ${animClass} ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <section ref={ref} className={`relative py-16 md:py-28 px-6 ${className}`}>
      <div className={`${maxWidth} w-full mx-auto`}>
        <div className={`opacity-0 ${animClass}`}>{children}</div>
      </div>
    </section>
  );
};

/**
 * Lightweight animated child element within an already-visible parent.
 * Applies fadeInUp with a stagger delay relative to its siblings.
 */
export const AnimatedChild = ({
  children,
  isVisible,
  delay = "0.2s",
  className = "",
}: {
  children: React.ReactNode;
  isVisible: boolean;
  delay?: string;
  className?: string;
}) => (
  <div
    className={`opacity-0 ${
      isVisible ? `animate-[fadeInUp_0.8s_ease-out_${delay}_both]` : ""
    } ${className}`}
  >
    {children}
  </div>
);
