import { ServiceItem } from "@/sections/ServicesSection/components/ServiceItem";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative pb-10 md:pb-20">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="border-t border-neutral-800">
          <ServiceItem
            href="/services/web-design"
            number="01"
            title="Web Design"
            index={0}
            isVisible={isVisible}
          />
        </div>
        <div className="border-t border-neutral-800">
          <ServiceItem
            href="/services/e-commerce"
            number="02"
            title="E-Commerce"
            index={1}
            isVisible={isVisible}
          />
        </div>
        <div className="border-t border-neutral-800">
          <ServiceItem
            href="/services/seo"
            number="03"
            title="SEO"
            index={2}
            isVisible={isVisible}
          />
        </div>
        <div className="border-t border-b border-neutral-800">
          <ServiceItem
            href="/services/app-development"
            number="04"
            title="Custom Web Applications"
            index={3}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};
