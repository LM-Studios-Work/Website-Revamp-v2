"use client";
import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COLORS, type BrandColor } from "@/constants/colors";

interface CTASectionProps {
  heading: React.ReactNode;
  linkTo: string;
  linkText: string;
  /** Brand color for the CTA button */
  color?: BrandColor | string;
}

/**
 * Reusable animated CTA banner that appears at the bottom of service pages.
 * Replaces the duplicated CTA pattern in SEOPage, AppPage, and WebDesignPage.
 */
export const CTASection = ({
  heading,
  linkTo,
  linkText,
  color = "lime",
}: CTASectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const bgColor = color in COLORS ? COLORS[color as BrandColor] : color;

  return (
    <section ref={ref} className="relative py-16 md:py-28 px-6">
      <div className="max-w-[1400px] w-full mx-auto">
        <div
          className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16 opacity-0 ${
            isVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                {heading}
              </h2>
            </div>
            <div>
              <Link href={linkTo}
                className="inline-flex items-center text-sm md:text-base font-semibold text-black pl-6 pr-2 py-3 rounded-full hover:opacity-80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#e7fe56]"
                style={{ backgroundColor: bgColor }}
              >
                {linkText}
                <span className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-black/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black -rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
