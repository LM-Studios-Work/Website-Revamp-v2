"use client";
import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ServicesSection } from "@/sections/ServicesSection";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";

export const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen pt-40 pb-20 px-6 overflow-hidden">
        <HeroVideoOverlay />
        <div className="relative z-30 w-full">
          <ServicesMarquee
            variant="pt-[60px] md:pt-[120px]"
            primaryText="Our services"
            secondaryText="What we do"
            reverse
          />
          <ServicesMarquee
            variant="pb-[60px] md:pb-[120px]"
            primaryText="Our services"
            secondaryText="What we do"
          />
        </div>
      </section>

      {/* Services Content Section */}
      <section className="relative">
        <ServicesSection />
      </section>
    </>
  );
};
