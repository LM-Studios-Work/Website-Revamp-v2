import { HeroHeading } from "@/sections/Hero/components/HeroHeading";
import { HeroDescription } from "@/sections/Hero/components/HeroDescription";
import { SocialSidebar } from "@/components/SocialSidebar";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";

export const Hero = () => {
  return (
    // justify-center (mobile) centers vertically; md:justify-end (desktop) stays at bottom
    // items-start ensures the text stays indented to the left on all screens
    <section className="relative flex flex-col justify-center md:justify-end items-start min-h-screen pt-20 md:pt-40 pb-16 md:pb-28 overflow-hidden">
      <HeroVideoOverlay />
      <SocialSidebar />

      {/* translate-y-[25%] shifts it 10% further down on mobile only */}
      {/* md:translate-y-0 ensures the desktop version is untouched */}
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 text-left transform translate-y-[30%] md:translate-y-0">
        <HeroHeading />
        <HeroDescription />
      </div>
    </section>
  );
};