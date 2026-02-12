import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ServicesSection } from "@/sections/ServicesSection";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";

export const ServicesPage = () => {
  return (
    <div className="relative min-h-screen pt-32 overflow-hidden">
      <HeroVideoOverlay />
      <div className="relative z-30">
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
    </div>
  );
};
