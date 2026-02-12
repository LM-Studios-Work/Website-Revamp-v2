import { Link } from "react-router-dom";
import { ProcessCard } from "../components/ProcessCard";
import { ScrollableCardRow } from "../components/ScrollableCardRow";
import { FAQ } from "@/sections/FAQ";
import { seoFAQ } from "@/sections/FAQ/constants";

const pricingFeatures = [
  {
    label: "Technical Site Audit",
    essential: true,
    growth: true,
    dominance: true,
  },
  {
    label: "Keyword Research",
    essential: "Top 20",
    growth: "Advanced Strategy",
    dominance: "High-Volume",
  },
  {
    label: "Google Business Profile Setup",
    essential: true,
    growth: true,
    dominance: true,
  },
  {
    label: "Meta Tag Optimization",
    essential: true,
    growth: true,
    dominance: true,
  },
  {
    label: "Content Creation",
    essential: "Basic Recommendations",
    growth: "2 articles/mo",
    dominance: "High-Volume Production",
  },
  {
    label: "Backlink Management",
    essential: false,
    growth: true,
    dominance: "Digital PR & Link Building",
  },
  {
    label: "Reporting",
    essential: "Monthly",
    growth: "Bi-Weekly",
    dominance: "Real-time Dashboard",
  },
  {
    label: "Strategy Consultations",
    essential: "Quarterly Review",
    growth: "Conversion Rate Suggestions",
    dominance: "Unlimited",
  },
];

export const SEOPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center min-h-screen pt-40 pb-16 px-6 overflow-hidden">
        <div className="relative z-10 max-w-[900px] w-full text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-white/50 text-sm uppercase tracking-widest">
              SEO
            </span>
            <span className="text-xs font-thin inline-block text-center whitespace-nowrap align-middle border-white/30 px-4 py-1.5 rounded-full border border-solid text-white/50">
              25h min.
            </span>
          </div>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-white mb-8">
            Search Engine
            <br />
            Optimization
          </h1>
          <svg
            className="mx-auto mb-12 w-[200px] h-[18px]"
            viewBox="0 0 400 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 9C0 9 10 2 25 2C40 2 45 16 60 16C75 16 80 2 95 2C110 2 115 16 130 16C145 16 150 2 165 2C180 2 185 16 200 16C215 16 220 2 235 2C250 2 255 16 270 16C285 16 290 2 305 2C320 2 325 16 340 16C355 16 360 2 375 2C390 2 400 9 400 9"
              stroke="#e7fe56"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[750px] mx-auto">
            Being online is irrelevant if you can't be found. We engineer
            data-driven SEO strategies that push your website to the top of
            search results. Whether you need local visibility or global
            dominance, we turn your organic traffic into your most valuable
            revenue stream.
          </p>
        </div>
      </section>

      {/* Ready to dominate section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
                Ready to{" "}
                <span className="italic text-outline-15">dominate</span>
                <br />
                the search results?
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Your position on Google determines your digital success, acting
                as the filter for how customers discover your business. We
                understand the algorithms so you don't have to. A
                high-performing SEO strategy complements your beautiful website
                by ensuring it gets seen by the right people at the exact moment
                they are ready to buy.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-[#e7fe56] text-4xl font-bold mb-2">
                    #1
                  </div>
                  <p className="text-white/60 text-sm">Page Rankings</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-[#d5bff0] text-4xl font-bold mb-2">
                    300%
                  </div>
                  <p className="text-white/60 text-sm">Traffic Growth</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-[#72f5e3] text-4xl font-bold mb-2">
                    90%
                  </div>
                  <p className="text-white/60 text-sm">Client Retention</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-white text-4xl font-bold mb-2">
                    24/7
                  </div>
                  <p className="text-white/60 text-sm">Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16 mb-12">
            <div className="md:w-5/12 shrink-0">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                Our{" "}
                <span className="italic text-outline-15">process</span>
              </h2>
              <p className="text-base text-white/60 leading-relaxed">
                From audit to execution, we build roadmaps that capture traffic
                and authority.
              </p>
            </div>
          </div>
          <ScrollableCardRow desktopGridCols="md:grid-cols-3">
            <ProcessCard
              step={1}
              variant="purple"
              title="Audit"
              description="We dive deep into your current site health. We analyze technical errors, competitor rankings, and missed opportunities to establish a baseline."
            />
            <ProcessCard
              step={2}
              variant="yellow"
              title="Strategy"
              description="We build a custom roadmap. This involves identifying high-value keywords and planning content that aligns with your specific user intent."
            />
            <ProcessCard
              step={3}
              variant="cyan"
              title="Growth"
              description="Execution begins. We optimize on-page elements, fix technical issues, and build authority through off-page signals to drive ranking improvements."
            />
          </ScrollableCardRow>
        </div>
      </section>

      {/* Data-Driven SEO Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
                Data-Driven SEO
                <br />
                That Drives{" "}
                <span className="italic text-outline-15">Revenue</span>
              </h2>
            </div>
            <div className="md:w-1/2 flex flex-col gap-6">
              <p className="text-lg text-white/70 leading-relaxed">
                Our team of SEO specialists is dedicated to ethical, white-hat
                tactics that ensure long-term stability. We avoid quick hacks
                that risk penalties. Instead, we focus on the three pillars of
                search:{" "}
                <strong className="text-white font-semibold">
                  Technical Excellence
                </strong>
                ,{" "}
                <strong className="text-white font-semibold">
                  Content Relevance
                </strong>
                , and{" "}
                <strong className="text-white font-semibold">
                  Authority Building
                </strong>
                .
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We don't just chase traffic; we chase qualified leads. By
                aligning your site structure with how your customers actually
                search, we ensure that every click has the potential to convert.
                Let us help you build a digital footprint that dominates your
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
              What you will get
            </h2>
          </div>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-4 gap-0 mb-0">
            <div />
            <div className="text-center pb-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#e7fe56] border border-[#e7fe56] px-4 py-1 rounded-full mb-4">
                essential
              </span>
              <div className="text-5xl font-bold text-white mb-1">25h</div>
              <p className="text-white/40 text-sm">Local / Startup</p>
            </div>
            <div className="text-center pb-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#72f5e3] border border-[#72f5e3] px-4 py-1 rounded-full mb-4">
                growth
              </span>
              <div className="text-5xl font-bold text-white mb-1">50h</div>
              <p className="text-white/40 text-sm">Regional / SME</p>
            </div>
            <div className="text-center pb-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d5bff0] border border-[#d5bff0] px-4 py-1 rounded-full mb-4">
                dominance
              </span>
              <div className="text-5xl font-bold text-white mb-1">100h</div>
              <p className="text-white/40 text-sm">National / Enterprise</p>
            </div>
          </div>

          {/* Table Rows - Desktop */}
          <div className="hidden md:block border-t border-white/10">
            {pricingFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="grid grid-cols-4 gap-0 border-b border-white/10"
              >
                <div className="flex items-center py-5 px-4 text-sm text-white/80 font-medium">
                  {feature.label}
                </div>
                {(["essential", "growth", "dominance"] as const).map((tier) => {
                  const value = feature[tier];
                  return (
                    <div
                      key={tier}
                      className="flex items-center justify-center py-5 px-4 text-sm text-center border-l border-white/10"
                    >
                      {value === true ? (
                        <svg
                          className="w-5 h-5 text-[#e7fe56]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : value === false ? (
                        <span className="text-white/20">-</span>
                      ) : (
                        <span className="text-white/70">{value}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="flex flex-col gap-8 md:hidden">
            {(
              [
                {
                  tier: "essential" as const,
                  label: "Essential",
                  hours: "25h",
                  subtitle: "Local / Startup",
                  color: "#e7fe56",
                },
                {
                  tier: "growth" as const,
                  label: "Growth",
                  hours: "50h",
                  subtitle: "Regional / SME",
                  color: "#72f5e3",
                },
                {
                  tier: "dominance" as const,
                  label: "Dominance",
                  hours: "100h",
                  subtitle: "National / Enterprise",
                  color: "#d5bff0",
                },
              ] as const
            ).map((plan) => (
              <div
                key={plan.tier}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="text-center mb-6">
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full mb-3 border"
                    style={{ color: plan.color, borderColor: plan.color }}
                  >
                    {plan.label}
                  </span>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.hours}
                  </div>
                  <p className="text-white/40 text-sm">{plan.subtitle}</p>
                </div>
                <div className="border-t border-white/10">
                  {pricingFeatures.map((feature, idx) => {
                    const value = feature[plan.tier];
                    if (value === false) return null;
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                      >
                        <span className="text-sm text-white/60">
                          {feature.label}
                        </span>
                        <span className="text-sm text-white/80 font-medium">
                          {value === true ? (
                            <svg
                              className="w-4 h-4 text-[#e7fe56]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : (
                            value
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/30 text-xs text-center mt-6">
            * This pack is only available with a web design project.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={seoFAQ} title="SEO — FAQ" />

      {/* CTA Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div>
                <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                  Ready to scale
                  <br />
                  your{" "}
                  <span className="italic text-outline-15">traffic?</span>
                </h2>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm md:text-base font-semibold text-black bg-[#e7fe56] pl-6 pr-2 py-3 rounded-full hover:bg-[#e7fe56]/80 transition-colors"
                >
                  Get a free audit
                  <span className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-black/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-black -rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
