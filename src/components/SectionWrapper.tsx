import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}

/**
 * Consistent section layout wrapper used across all pages.
 * Provides standard vertical padding, horizontal padding, and max-width container.
 */
export const SectionWrapper = ({
  children,
  className = "",
  maxWidth = "max-w-[1400px]",
}: SectionWrapperProps) => (
  <section className={`relative py-16 md:py-28 px-6 ${className}`}>
    <div className={`${maxWidth} w-full mx-auto`}>{children}</div>
  </section>
);
