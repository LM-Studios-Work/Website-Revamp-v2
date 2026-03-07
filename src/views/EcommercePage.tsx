"use client";

import React from "react";
import { 
  Storefront, 
  Lightning, 
  Chat, 
  CreditCard,
  Check,
  WhatsappLogo,
  ArrowRight,
  Clock
} from "@phosphor-icons/react";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessCardGrid } from "@/components/ProcessCardGrid";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/sections/FAQ";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COLORS } from "@/constants/colors";

const WA_BASE = "https://wa.me/27814272624?text=";

// ─────────────────────────────────────────────────
//  Internal Component: Feature Tooltip (matches WebDesignPage)
// ─────────────────────────────────────────────────
const FeatureTooltip = ({ text }: { text: string }) => (
  <span className="relative inline-flex items-center group/tooltip ml-1.5 align-middle">
    <span
      className="w-[15px] h-[15px] rounded-full border border-white/30 text-white/50 text-[9px] font-bold inline-flex items-center justify-center cursor-help hover:border-[#e7fe56]/70 hover:text-[#e7fe56] transition-colors select-none"
      aria-label="More information"
    >
      ?
    </span>
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-[#111111] border border-white/10 text-white/85 text-xs leading-relaxed px-3 py-2.5 rounded-xl pointer-events-none opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 z-50 shadow-2xl whitespace-normal">
      {text}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#111111]" />
    </span>
  </span>
);

const FeatureListItem = ({ feature }: { feature: string | { text: string; tooltip: string } }) => {
  const isObj = typeof feature === "object";
  return (
    <div className="flex items-center gap-4 py-3 border-b border-white/[0.05] last:border-b-0">
      <div className="shrink-0 w-6 h-6 rounded-full bg-[#72f5e3]/10 border border-[#72f5e3]/30 flex items-center justify-center">
        <Check className="w-3.5 h-3.5 text-[#72f5e3]" weight="bold" />
      </div>
      <span className="text-sm text-white/70 leading-relaxed">
        {isObj ? feature.text : feature}
        {isObj && <FeatureTooltip text={feature.tooltip} />}
      </span>
    </div>
  );
};

export function EcommercePage() {
  const { ref: realityRef, isVisible: realityVisible } = useScrollAnimation(0.15);
  const { ref: packagesRef, isVisible: packagesVisible } = useScrollAnimation(0.15);

  const ecommerceFAQ = [
    {
      question: "How long does it take to build my store?",
      answer: "Essential Store: 7-10 working days. Automated Store: 12-15 working days. Custom engines are scoped per project. We communicate progress via WhatsApp throughout the build.",
    },
    {
      question: "Can I manage products myself after launch?",
      answer: "Yes. All our stores include a full product management dashboard. You can add, update, and remove products independently. All tiers have unlimited product capacity.",
    },
    {
      question: "What payment gateways do you support?",
      answer: "We integrate PayFast, Yoco, Peach Payments, and Ozow by default. All are South African-friendly, PCI-compliant, and support credit cards, Instant EFT, Apple Pay, and Google Pay.",
    },
    {
      question: "What if I need help after the warranty ends?",
      answer: "After your 6-month warranty, optional Care Plans start at R199/month. These cover security updates, backups, and technical support.",
    },
    {
      question: "Can you integrate my existing ERP system?",
      answer: "Yes. Custom E-Commerce Engine tier includes ERP & POS integration. Your online inventory syncs in real-time with your physical store's stock.",
    },
  ];

  const advantageCards = [
    {
      step: 1,
      variant: "lime" as const,
      title: "Sub-second Load Times",
      description: "Google penalizes slow stores. Our custom Next.js builds eliminate heavy plugin bloat, ensuring your store ranks higher and converts more visitors into customers.",
    },
    {
      step: 2,
      variant: "purple" as const,
      title: "SA Payment Integration",
      description: "Frictionless checkout with trusted local gateways like PayFast, Yoco, and Ozow. Support for Cards, Instant EFT, Apple Pay and Google Pay.",
    },
    {
      step: 3,
      variant: "cyan" as const,
      title: "Automated Logistics",
      description: "Direct integration with The Courier Guy and Bob Go. Live shipping rates at checkout and automatic waybill generation for a hands-off operation.",
    },
  ];

  return (
    <>
      {/* 1. Hero */}
      <ServiceHero
        title="E-commerce engineered for performance, not just appearance."
        underlineColor="lime"
        description="We build high-performance online stores that load instantly, rank on Google, and automate your South African logistics. Move beyond slow, bloated templates and run a store designed to convert."
      />

      {/* 2. The Reality Section (Using Standard Layout) */}
      <section ref={realityRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            <div className={`md:w-1/2 opacity-0 ${realityVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6 font-obviously">
                The <span className="italic text-outline-15">Reality</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Most agencies quote a 30-day turnaround to build a store. What they don't tell you is that they're just bolting a shopping cart onto a blogging platform.
              </p>
              <div className="space-y-4">
                {[
                  { text: "Dozens of plugins = severe technical bloat", color: COLORS.purple },
                  { text: "Slow load times = higher bounce rates", color: COLORS.purple },
                  { text: "Clunky checkout = abandoned carts", color: COLORS.purple },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/60">
                    <Check className="w-5 h-5" style={{ color: item.color }} weight="bold" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className={`md:w-1/2 opacity-0 ${realityVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
              <div className="rounded-[32px] overflow-hidden border border-white/10 aspect-video md:aspect-square bg-white/5 flex items-center justify-center">
                 {/* Placeholder for an Ecommerce Dashboard Image */}
                 <Storefront className="w-32 h-32 text-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Advantages (Using ProcessCardGrid for consistency) */}
      <ProcessCardGrid
        heading={
          <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white font-obviously">
            Architecture that <span className="italic text-outline-15">matters</span>
          </h2>
        }
        description="Every technical decision we make is engineered to impact your bottom line and operational efficiency."
        cards={advantageCards}
      />

      {/* 4. Packages */}
      <section ref={packagesRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className={`mb-16 opacity-0 ${packagesVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4 font-obviously">
              E-commerce <span className="italic text-outline-15">Packages</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl">
              Complete ownership. No hidden product limits. No monthly agency cuts from your sales.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 ${packagesVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
            {[
              {
                name: "The Essential Store",
                price: "R8,999",
                color: COLORS.lime,
                description: "The foundational setup for emerging brands.",
                features: [
                  "Up to 50 initial products uploaded",
                  "Custom, mobile-first storefront",
                  "Standard Flat-Rate Shipping",
                  { text: "Secure Payment Integration", tooltip: "PayFast, Yoco, or Peach Payments." },
                  "Inventory Management Dashboard",
                ],
                delivery: "7–10 working days",
              },
              {
                name: "The Automated Store",
                price: "R14,999",
                color: COLORS.purple,
                description: "Automated logistics and cart recovery for serious retailers.",
                popular: true,
                features: [
                  "Up to 100 initial products uploaded",
                  "Automated Courier Integration",
                  "Product Filtering & Search",
                  { text: "WhatsApp Cart Recovery", tooltip: "Automatically follow up with abandoned checkouts." },
                  "Google Shopping SEO",
                ],
                delivery: "12–15 working days",
              },
              {
                name: "Custom Engine",
                price: "R25,000+",
                color: COLORS.cyan,
                description: "Enterprise-grade infrastructure with ERP/POS syncing.",
                features: [
                  "Full Headless Architecture",
                  "ERP & POS System Syncing",
                  "Wholesale / B2B Price Portals",
                  "Custom Customer Loyalty Programs",
                  "Dedicated Hosting Config",
                ],
                delivery: "Project based",
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col h-full rounded-[32px] p-1 border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-500 overflow-hidden group ${pkg.popular ? "md:scale-105 md:z-10 bg-white/[0.05]" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-2xl">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8 pb-0">
                  <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4 font-obviously">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-white/40 text-xs uppercase">Once-off</span>
                  </div>
                  <p className="text-white/50 text-xs mb-8 min-h-[32px]">{pkg.description}</p>
                  
                  <div className="space-y-1 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <FeatureListItem key={fIdx} feature={feature} />
                    ))}
                  </div>
                </div>

                <div className="mt-auto p-8 pt-0">
                   <div className="flex items-center gap-2 mb-6 text-white/30">
                     <Clock className="w-4 h-4" />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Delivery: {pkg.delivery}</span>
                   </div>

                   <a
                     href={`${WA_BASE}I%20want%20the%20${encodeURIComponent(pkg.name)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-full py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-xs uppercase tracking-widest transition-all duration-300"
                     style={{ 
                       backgroundColor: pkg.popular ? pkg.color : "transparent",
                       color: pkg.popular ? "black" : "white",
                       border: pkg.popular ? "none" : "1px solid rgba(255,255,255,0.1)"
                     }}
                   >
                     Get Started
                     <ArrowRight className="w-4 h-4" />
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <FAQ 
        items={ecommerceFAQ} 
        title="Common Questions" 
        description="Everything you need to know about our e-commerce platforms and process."
      />

      {/* 6. CTA */}
      <CTASection
        heading={<>Ready to build a store that<br /><span className="italic text-outline-15">actually scales?</span></>}
        linkTo="/contact"
        linkText="Get a Custom Quote"
        color="lime"
      />
    </>
  );
}
