import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ServicesSection } from "@/sections/ServicesSection";

export const ServicesPage = () => {
  return (
    <div className="pt-32">
      <ServicesMarquee
        variant="pt-[60px] md:pt-[120px]"
        primaryText="Our services"
        secondaryText="What we do"
      />
      <ServicesMarquee
        variant="pb-[60px] md:pb-[120px]"
        primaryText="Our services"
        secondaryText="What we do"
      />
      <ServicesSection />
    </div>
  );
};
