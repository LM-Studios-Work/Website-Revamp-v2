import React from "react";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";
import { WavyUnderline } from "@/components/WavyUnderline";
import type { BrandColor } from "@/constants/colors";

interface ServiceHeroProps {
  title: React.ReactNode;
  description: string;
  /** Brand color for the wavy underline */
  underlineColor?: BrandColor | string;
  /** Optional badge/subtitle above the title */
  badge?: React.ReactNode;
}

/**
 * Shared hero section for all service pages (WebDesign, SEO, AppDevelopment).
 * Eliminates the duplicated hero + HeroVideoOverlay + WavyUnderline pattern.
 */
export const ServiceHero = ({
  title,
  description,
  underlineColor = "lime",
  badge,
}: ServiceHeroProps) => (
  <section className="relative flex flex-col justify-center items-center min-h-screen pt-40 pb-16 px-6 overflow-hidden">
    <HeroVideoOverlay />
    <div className="relative z-30 max-w-[900px] w-full text-center animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
      {badge && (
        <div className="flex items-center justify-center gap-3 mb-6">
          {badge}
        </div>
      )}
      <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-white mb-8">
        {title}
      </h1>
      <WavyUnderline color={underlineColor} className="mx-auto mb-12" />
      <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[750px] mx-auto">
        {description}
      </p>
    </div>
  </section>
);
