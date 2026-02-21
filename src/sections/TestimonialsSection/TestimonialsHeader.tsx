import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const TestimonialsHeader = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative pt-16 md:pt-28 px-6">
      <div className="max-w-[1400px] w-full mx-auto text-center">
        <h2
          id="testimonials-heading"
          className={`text-4xl md:text-[50px] font-bold leading-tight text-white text-balance transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          People We Have Helped
        </h2>
      </div>
    </section>
  );
};
