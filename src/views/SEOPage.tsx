"use client";
import Link from "next/link";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessCard } from "@/components/ProcessCard";
import { CTASection } from "@/components/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/*
 * ──────────────────────────────────────────────────────
 * LAUNCH-READY SEO CONTENT — preserved below as comments.
 * When ready to launch, remove the "Launching Soon" sections
 * and uncomment the full SEO page content.
 * See git history or the bottom of this file for the full content.
 * ──────────────────────────────────────────────────────
 */

export const SEOPage = () => {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.15);
  const { ref: teaserRef, isVisible: teaserVisible } = useScrollAnimation(0.15);

  return (
    <>
      {/* Hero — uses the same ServiceHero as every other service page */}
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

      {/* What to expect — teaser cards using the site's ProcessCard component */}
      <section ref={cardsRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 opacity-0 ${
              cardsVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              What to{" "}
              <span className="italic text-outline-2">expect</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[600px]">
              A preview of the SEO strategies we are preparing for your business.
            </p>
          </div>

          <div className="overflow-x-auto scrollbar-hide -mx-6 md:mx-0 md:overflow-visible">
            <div className="flex gap-4 px-6 md:grid md:grid-cols-3 md:gap-6 md:px-0">
              {[
                {
                  step: 1,
                  variant: "purple" as const,
                  title: "Technical Audits",
                  description:
                    "Deep-dive analysis of your site health, speed, and structure to uncover every missed opportunity.",
                },
                {
                  step: 2,
                  variant: "cyan" as const,
                  title: "Keyword Strategy",
                  description:
                    "Targeted keyword research and content planning designed to capture traffic that converts.",
                },
                {
                  step: 3,
                  variant: "lime" as const,
                  title: "Authority Building",
                  description:
                    "Local citations, link building, and Google Business Profile optimization to establish your brand as the authority.",
                },
              ].map((card, idx) => (
                <div
                  key={card.step}
                  className={`min-w-[280px] w-[calc(100vw-120px)] flex-shrink-0 md:min-w-0 md:w-auto opacity-0 ${
                    cardsVisible
                      ? `animate-[fadeInUp_0.8s_ease-out_${
                          ["0.2s", "0.4s", "0.6s"][idx]
                        }_both]`
                      : ""
                  }`}
                >
                  <ProcessCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaser section */}
      <section ref={teaserRef} className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div
              className={`md:w-1/2 opacity-0 ${
                teaserVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                  : ""
              }`}
            >
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
                Get found on
                <br />
                <span className="italic text-outline-2">Google</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Being online is irrelevant if you {"can't"} be found. Our upcoming SEO
                packages will cover everything from local visibility to national
                reach -- tailored specifically for South African businesses.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                From technical audits and on-page optimisation to content
                strategy and link building, {"we're"} building service tiers that fit
                every budget and growth stage.
              </p>
            </div>
            <div
              className={`md:w-1/2 opacity-0 ${
                teaserVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                  : ""
              }`}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Local SEO", color: "#d5bff0" },
                  { label: "Technical Audits", color: "#72f5e3" },
                  { label: "Content Strategy", color: "#e7fe56" },
                  { label: "Link Building", color: "#d5bff0" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition-colors hover:bg-white/[0.08]"
                  >
                    <div
                      className="w-3 h-3 rounded-full mx-auto mb-4"
                      style={{ backgroundColor: item.color }}
                    />
                    <p className="text-white/80 text-sm font-semibold font-obviously uppercase tracking-wide">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — same component used across all service pages */}
      <CTASection
        heading={
          <>
            {"Don't"} wait to
            <br />
            get <span className="italic text-outline-15">noticed</span>
          </>
        }
        linkTo="/contact"
        linkText="Get in touch"
        color="purple"
      />
    </>
  );
};
