import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ClientLogos = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative py-12 md:py-20 px-6">
      <div className="max-w-[1400px] w-full mx-auto text-center">
        <h2 className={`text-2xl font-semibold text-white/80 mb-8 transition-all duration-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>Our Clients</h2>
      </div>
    </section>
  );
};
