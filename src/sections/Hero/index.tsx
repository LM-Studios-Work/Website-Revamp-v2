import { HeroHeading } from "@/sections/Hero/components/HeroHeading";
import { HeroDescription } from "@/sections/Hero/components/HeroDescription";
import { SocialSidebar } from "@/components/SocialSidebar";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";

export const Hero = () => {
  return (
    <section className="relative flex flex-col justify-end items-start min-h-screen pt-20 md:pt-40 pb-16 md:pb-28 overflow-hidden">
      <HeroVideoOverlay />
      <SocialSidebar />

      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 md:mx-auto text-left flex flex-col items-start pl-8 md:pl-0">
        <HeroHeading />
        <HeroDescription />
      </div>
    </section>
  );
};
