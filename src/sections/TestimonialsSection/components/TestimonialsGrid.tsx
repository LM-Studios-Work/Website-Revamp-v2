"use client";
import { useState } from "react";
import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Omhle Zuma",
    title: "Business Owner",
    testimonial:
      "LMWebDesign turned our designs into a working website, and they even suggested some improvements that we liked. The site is fast, the communication was good, and the project was finished on schedule.",
  },
  {
    name: "Nkoka Logan",
    title: "Business Owner",
    testimonial:
      "The team knows their stuff. They handled our technical questions well and helped us refine the user experience. We're happy with the final product and the service was professional throughout.",
  },
  {
    name: "Neo Leeuw",
    title: "Business Owner",
    testimonial:
      "Working with LMWebDesign was a good experience. They were patient with our questions and responsive. We got the website we wanted and would recommend them.",
  },
  {
    name: "Rokunda Mboyi",
    title: "Business Owner",
    testimonial:
      "We needed custom work done on our existing site, and LMWebDesign delivered. They have the technical skills for complex jobs, which was exactly what we were looking for.",
  },
];

export const TestimonialsGrid = () => {
  const [expanded, setExpanded] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative px-6 py-8 md:py-16">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="flex flex-wrap -mx-3">
          {testimonials.map((t, idx) => {
            const extraClass =
              idx >= 2 ? (expanded ? "block" : "hidden md:block") : "block";
            return (
              <TestimonialCard
                key={t.name}
                {...t}
                className={extraClass}
                index={idx}
                isVisible={isVisible}
              />
            );
          })}
        </div>

        {/* Mobile-only show more / show less button */}
        <div className="mt-6 md:hidden text-center">
          <button
            onClick={() => setExpanded((s) => !s)}
            className="text-sm font-semibold px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </section>
  );
};
