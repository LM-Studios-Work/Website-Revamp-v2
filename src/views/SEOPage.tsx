"use client";
import { ServiceHero } from "@/components/ServiceHero";

/*
 * Full SEO page content preserved in SEOPage.launch-ready.tsx.
 * When ready to launch, replace this file with that one.
 */

export const SEOPage = () => {
  return (
    <ServiceHero
      title={
        <>
          SEO Services
          <br />
          <span className="italic text-outline-2">Launching Soon</span>
        </>
      }
      underlineColor="purple"
      description="We're putting the finishing touches on our data-driven SEO service offerings for South African businesses. Get in touch to be the first to know when we go live, or to discuss your SEO needs now."
      badge={
        <>
          <span className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#d5bff0] text-[#d5bff0]">
            Coming Soon
          </span>
        </>
      }
    />
  );
};
