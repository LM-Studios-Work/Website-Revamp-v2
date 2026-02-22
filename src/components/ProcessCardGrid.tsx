import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProcessCard, type ProcessCardProps } from "@/components/ProcessCard";

interface ProcessCardGridProps {
  heading?: React.ReactNode;
  description?: string;
  cards: ProcessCardProps[];
}

/**
 * A 3-column grid of ProcessCards with staggered scroll animations.
 * Replaces the pattern duplicated in WebDesignPage, SEOPage, AppPage, and AboutPage.
 */
export const ProcessCardGrid = ({
  heading,
  description,
  cards,
}: ProcessCardGridProps) => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  const DELAYS = ["0.2s", "0.4s", "0.6s"];

  return (
    <section ref={ref} className="relative py-16 md:py-28 px-6">
      <div className="max-w-[1400px] w-full mx-auto">
        {heading && (
          <div
            className={`mb-12 opacity-0 ${
              isVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              {heading}
            </h2>
            {description && (
              <p className="text-lg text-white/70 leading-relaxed max-w-[600px]">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="overflow-x-auto scrollbar-hide -mx-6 md:mx-0 md:overflow-visible">
          <div className="flex gap-4 px-6 md:grid md:grid-cols-3 md:gap-6 md:px-0">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`min-w-[calc(100vw-80px)] flex-shrink-0 md:min-w-0 opacity-0 ${
                  isVisible
                    ? `animate-[fadeInUp_0.8s_ease-out_${DELAYS[idx] || DELAYS[DELAYS.length - 1]}_both]`
                    : ""
                }`}
              >
                <ProcessCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
