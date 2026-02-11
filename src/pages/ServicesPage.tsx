import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ServicesSection } from "@/sections/ServicesSection";
import { useState } from "react";

export const ServicesPage = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative min-h-screen pt-32 overflow-hidden">
      {/* Clean background, video removed */}
      <div className="relative z-10">
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
