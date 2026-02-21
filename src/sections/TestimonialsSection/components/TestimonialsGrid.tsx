import { useState } from "react";
import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Omhle Zuma",
    title: "Business Owner",
    testimonial:
      '"We brought in LM Studios\' Web Design Team to deploy and implement our predefined mock-up pages. Throughout the project, the team applied its combined expertise to refine and enhance these designs before efficiently bringing them to life. Communication with the team was straightforward and seamless, allowing us to launch our site swiftly."',
  },
  {
    name: "Nkoka Logan",
    title: "Business Owner",
    testimonial:
      '"Do you want a confusing and ugly website? Stay away from LM Studios web designers. Before you know, they\'ll start showing their understanding of design and technicalities (who likes a know-it-all, right?), might create beautiful components, answer your stupidly detailed questions or even suggest UI/UX solutions you never asked for. Consider yourself warned!"',
  },
  {
    name: "Neo Leeuw",
    title: "Business Owner",
    testimonial:
      '"A huge thanks to the Web design team of LM Studios for their expert advice, incredible patience, and quick responses. Their dedication made the entire experience smooth and enjoyable. I truly appreciated how attentive and responsive they were throughout the process. I highly recommend their services!"',
  },
  {
    name: "Rokunda Mboyi",
    title: "Business Owner",
    testimonial:
      '"We have sought LM Studios\' assistance in transferring and enhancing certain features of our existing site. Their expertise has enabled us to bring our ideas to life with a high level of customization, a crucial advantage in a context where the website plays a central role in standing out."',
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
