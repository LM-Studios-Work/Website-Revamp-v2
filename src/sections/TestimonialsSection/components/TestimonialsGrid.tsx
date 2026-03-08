"use client";
import { useState, useEffect } from "react";
import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Review } from "@/types/reviews";

export const TestimonialsGrid = () => {
  const [expanded, setExpanded] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref, isVisible } = useScrollAnimation(0.1);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        console.log(`[Reviews] source: ${data.source ?? "unknown"}, count: ${data.reviews?.length ?? 0}`);
        setReviews(data.reviews ?? []);
      })
      .catch(() => setReviews([]))
      .finally(() => setLoading(false));
  }, []);

  const displayedReviews = expanded ? reviews : reviews.slice(0, 4);

  return (
    <section ref={ref} className="relative px-6 py-8 md:py-16">
      <div className="max-w-[1400px] w-full mx-auto">
        {loading ? (
          /* Skeleton placeholders while fetching */
          <div className="flex flex-wrap -mx-3">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="w-full px-3 py-2 md:w-1/2 lg:w-1/4 md:py-3">
                <div className="bg-white/5 rounded-2xl border border-white/5 h-48 animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="flex flex-wrap -mx-3">
              {displayedReviews.map((review, idx) => (
                <TestimonialCard
                  key={`${review.name}-${idx}`}
                  name={review.name}
                  title={review.title}
                  testimonial={review.testimonial}
                  rating={review.rating}
                  url={review.url}
                  className="block"
                  index={idx}
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* Show more / show less button */}
            {reviews.length > 4 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setExpanded((s) => !s)}
                  className="text-sm font-semibold px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                >
                  {expanded ? "Show less" : "Show more testimonials"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
