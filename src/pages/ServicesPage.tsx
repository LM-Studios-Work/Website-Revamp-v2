import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ServicesSection } from "@/sections/ServicesSection";
import { useState } from "react";

export const ServicesPage = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative min-h-screen pt-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" onError={() => setVideoError(true)}>
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <img src="/newhero.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>
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
