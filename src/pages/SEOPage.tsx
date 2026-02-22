import { Link } from "react-router-dom";
import { FAQ } from "@/sections/FAQ";
import { seoFAQ } from "@/sections/FAQ/constants";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessCardGrid } from "@/components/ProcessCardGrid";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COLORS } from "@/constants/colors";

const pricingFeatures = [
  { label: "Technical Site Audit", essential: true, growth: true, dominance: true },
  { label: "Keyword Research & Strategy", essential: "5-10 Local Keywords", growth: "15-25 Keywords", dominance: "50+ High-Volume Keywords" },
  { label: "Google Business Profile", essential: "Setup & Optimization", growth: "Management & Posts", dominance: "Full Management + Review Strategy" },
  { label: "On-Page Optimization", essential: "Meta Tags & Headers", growth: "Full Content Optimization", dominance: "Enterprise-Level Optimization" },
  { label: "Content Creation", essential: false, growth: "2 articles/month", dominance: "4+ articles/month" },
  { label: "Link Building", essential: false, growth: "Local Citations", dominance: "Digital PR & Authority Links" },
  { label: "Monthly Reporting", essential: true, growth: true, dominance: "Real-time Dashboard" },
  { label: "Strategy Consultations", essential: "Quarterly", growth: "Monthly", dominance: "Bi-weekly" },
];

const TIERS = [
  { tier: "essential" as const, label: "Essential", title: "Local Focus", subtitle: "Perfect for startups & local businesses", color: COLORS.lime },
  { tier: "growth" as const, label: "Growth", title: "Regional Reach", subtitle: "Ideal for growing SMEs", color: COLORS.cyan },
  { tier: "dominance" as const, label: "Dominance", title: "National Scale", subtitle: "Enterprise-level SEO campaigns", color: COLORS.purple },
] as const;

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const SEOPage = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.15);

  return (
    <>
      <ServiceHero
        title={<>Search Engine<br />Optimization</>}
        underlineColor="purple"
        description="Being online is irrelevant if you can't be found. We turn South African search traffic into revenue with data-driven SEO strategies designed for your business. Whether you're a local service provider or growing SME, we build the digital foundation that makes you visible exactly when customers are ready to buy."
        badge={
          <>
            <span className="text-white/50 text-sm uppercase tracking-widest">
              SEO SERVICES
            </span>
            <span className="text-xs font-thin inline-block text-center whitespace-nowrap align-middle border-white/30 px-4 py-1.5 rounded-full border border-solid text-white/50">
              Tailored Strategies
            </span>
          </>
        }
      />

      {/* Ready to dominate section */}
      <section ref={statsRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            <div className={`md:w-1/2 opacity-0 ${statsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
                Ready to{" "}
                <span className="italic text-outline-15">dominate</span>
                <br />
                the search results?
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Your position on Google acts as the filter for your business's success.
                At LM Studios, we build data-driven SEO strategies that put your
                brand in front of customers exactly when they are ready to buy. Whether you're a local business in Pretoria needing more
                foot traffic or a startup in Cape Town looking for your first leads, we
                build the digital foundation that makes you visible.
              </p>
            </div>
            <div className={`md:w-1/2 opacity-0 ${statsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "#1", label: "Page Rankings", color: COLORS.purple },
                  { value: "300%", label: "Traffic Growth", color: COLORS.purple },
                  { value: "90%", label: "Client Retention", color: COLORS.cyan },
                  { value: "24/7", label: "Monitoring", color: "white" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <ProcessCardGrid
        heading={
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
            <div className="md:w-5/12 shrink-0">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                Our <span className="italic text-outline-15">process</span>
              </h2>
              <p className="text-base text-white/60 leading-relaxed">
                A proven methodology that drives sustainable ranking improvements
                and qualified traffic.
              </p>
            </div>
          </div>
        }
        cards={[
          { step: 1, variant: "purple", title: "The Audit", description: "We dive deep into your current site health, analyzing technical errors, competitor rankings, and missed local opportunities to establish a baseline." },
          { step: 2, variant: "cyan", title: "The Fix", description: "Before we build, we repair. We fix technical issues holding your site back—improving speed, mobile responsiveness, and site structure." },
          { step: 3, variant: "lime", title: "The Climb", description: "Execution begins. We optimize your content for local search terms and build the citations needed to prove your authority to Google." },
        ]}
      />

      {/* Data-Driven SEO Section */}
      <SectionWrapper>
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
              <strong className="text-white font-semibold">Technical Excellence</strong>,{" "}
              <strong className="text-white font-semibold">Content Relevance</strong>, and{" "}
              <strong className="text-white font-semibold">Authority Building</strong>.
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
      </SectionWrapper>

      {/* Pricing Table Section */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
            SEO <span className="italic text-outline-15">Packages</span>
          </h2>
          <p className="text-lg text-white/60 mt-6 max-w-3xl mx-auto">
            From local visibility to national reach. Choose a package that fits your goals,
            or contact us for a custom strategy tailored to your business.
          </p>
        </div>

        {/* Table Header - Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-0 mb-0">
          <div />
          {TIERS.map((plan) => (
            <div key={plan.tier} className="text-center pb-6">
              <span
                className="inline-block text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full mb-4 border"
                style={{ color: plan.color, borderColor: plan.color }}
              >
                {plan.label}
              </span>
              <div className="text-3xl font-bold text-white mb-1">{plan.title}</div>
              <p className="text-white/40 text-sm">{plan.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Table Rows - Desktop */}
        <div className="hidden md:block border-t border-white/10">
          {pricingFeatures.map((feature, idx) => (
            <div key={idx} className="grid grid-cols-4 gap-0 border-b border-white/10">
              <div className="flex items-center py-5 px-4 text-sm text-white/80 font-medium">
                {feature.label}
              </div>
              {TIERS.map(({ tier }) => {
                const value = feature[tier];
                return (
                  <div key={tier} className="flex items-center justify-center py-5 px-4 text-sm text-center border-l border-white/10">
                    {value === true ? (
                      <CheckIcon className="text-[#e7fe56]" />
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
          {TIERS.map((plan) => (
            <div key={plan.tier} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-center mb-6">
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full mb-3 border"
                  style={{ color: plan.color, borderColor: plan.color }}
                >
                  {plan.label}
                </span>
                <div className="text-2xl font-bold text-white mb-1">{plan.title}</div>
                <p className="text-white/40 text-sm">{plan.subtitle}</p>
              </div>
              <div className="border-t border-white/10">
                {pricingFeatures.map((feature, idx) => {
                  const value = feature[plan.tier];
                  if (value === false) return null;
                  return (
                    <div key={idx} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                      <span className="text-sm text-white/60">{feature.label}</span>
                      <span className="text-sm text-white/80 font-medium">
                        {value === true ? <CheckIcon className="w-4 h-4 text-[#e7fe56]" /> : value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
            Not sure which package fits your needs? Contact us for a free consultation
            and custom proposal tailored to your business goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center text-base font-semibold bg-[#d5bff0] text-black pl-8 pr-3 py-3 rounded-full hover:bg-[#d5bff0]/90 hover:scale-105 transition-all duration-300"
          >
            Get a Custom Quote
            <span className="ml-3 w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#d5bff0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <FAQ items={seoFAQ} title="SEO FAQ" />

      {/* CTA Section */}
      <CTASection
        heading={<>Ready to scale<br />your <span className="italic text-outline-15">traffic?</span></>}
        linkTo="/contact"
        linkText="Start ranking today"
        color="lime"
      />
    </>
  );
};
