"use client";

import { useState } from "react";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Lightning,
  CreditCard,
  Storefront,
  Chat,
  WhatsappLogo,
  CaretDown,
} from "@phosphor-icons/react";
import { ServiceHero } from "@/components/ServiceHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FAQ } from "@/sections/FAQ";

const WA_BASE = "https://wa.me/27814272624?text=";

// ─────────────────────────────────────────────────
//  Types
// ─────────────────────────────────────────────────
type FeatureItem = string | { text: string; tooltip: string };

// ─────────────────────────────────────────────────
//  Inline [?] tooltip
// ─────────────────────────────────────────────────
const FeatureTooltip = ({ text }: { text: string }) => (
  <span className="relative inline-flex items-center group/tooltip ml-1.5 align-middle">
    <span
      className="w-[15px] h-[15px] rounded-full border border-white/30 text-white/50 text-[9px] font-bold inline-flex items-center justify-center cursor-help hover:border-[#e7fe56]/70 hover:text-[#e7fe56] transition-colors select-none"
      aria-label="More information"
    >
      ?
    </span>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white/10 border border-white/20 rounded text-white/70 text-[11px] whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity z-50">
      {text}
    </div>
  </span>
);

// ─────────────────────────────────────────────────
//  Feature Item Renderer
// ─────────────────────────────────────────────────
const renderFeature = (item: FeatureItem) => {
  if (typeof item === "string") {
    return (
      <div key={item} className="flex items-start gap-3">
        <Check className="w-5 h-5 text-[#e7fe56] flex-shrink-0 mt-0.5" weight="bold" />
        <span className="text-white/80 text-sm leading-relaxed">{item}</span>
      </div>
    );
  }
  return (
    <div key={item.text} className="flex items-start gap-3">
      <Check className="w-5 h-5 text-[#e7fe56] flex-shrink-0 mt-0.5" weight="bold" />
      <span className="text-white/80 text-sm leading-relaxed">
        {item.text}
        <FeatureTooltip text={item.tooltip} />
      </span>
    </div>
  );
};

// ─────────────────────────────────────────────────
//  Collapsible FAQ
// ─────────────────────────────────────────────────
const CollapsibleFAQ = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
      >
        <span className="font-semibold text-white">{question}</span>
        <CaretDown
          className={`w-5 h-5 text-[#e7fe56] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          weight="bold"
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02]">
          <p className="text-white/70 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export function EcommercePage() {
  const { ref: problemRef, isVisible: problemVisible } = useScrollAnimation(0.15);
  const { ref: advantagesRef, isVisible: advantagesVisible } = useScrollAnimation(0.15);
  const { ref: packagesRef, isVisible: packagesVisible } = useScrollAnimation(0.15);
  const { ref: warrantyRef, isVisible: warrantyVisible } = useScrollAnimation(0.15);

  const ecommerceFAQ = [
    {
      question: "How long does it take to build my store?",
      answer:
        "Essential Store: 7-10 working days. Automated Store: 12-15 working days. Custom engines are scoped per project. We communicate progress via WhatsApp throughout the build.",
    },
    {
      question: "Can I manage products myself after launch?",
      answer:
        "Yes. All our stores include a full product management dashboard. You can add, update, and remove products independently. All tiers have unlimited product capacity.",
    },
    {
      question: "What payment gateways do you support?",
      answer:
        "We integrate PayFast, Yoco, Peach Payments, and Ozow by default. All are South African-friendly, PCI-compliant, and support credit cards, Instant EFT, Apple Pay, and Google Pay.",
    },
    {
      question: "What if I need help after the warranty ends?",
      answer:
        "After your 6-month warranty, optional Care Plans start at R199/month. These cover security updates, backups, and technical support. Or hire us hourly for specific fixes.",
    },
    {
      question: "Can you integrate my existing ERP system?",
      answer:
        "Yes. Custom E-Commerce Engine tier includes ERP & POS integration. Your online inventory syncs in real-time with your physical store's stock.",
    },
  ];

  return (
    <>
      {/* ════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════ */}
      <ServiceHero
        title="E-commerce engineered for performance, not just appearance."
        underlineColor="lime"
        description="We build high-performance online stores that load instantly, rank on Google, and automate your South African logistics. Move beyond slow, bloated templates and run a store designed to convert."
      />

      {/* ════════════════════════════════════════════
          SECTION 1: THE PROBLEM
      ════════════════════════════════════════════ */}
      <section
        ref={problemRef}
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 opacity-0 ${
              problemVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3">
              The Reality
            </p>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              Why most online stores fail to scale
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[700px]">
              If you've spoken to other agencies, they likely quoted you a
              30-to-40-day turnaround to build a "WooCommerce" store. Here's
              what they don't tell you: WooCommerce is a blogging platform with
              a bolted-on shopping cart.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 opacity-0 ${
              problemVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                : ""
            }`}
          >
            {/* Problem */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                The Industry Standard Problem
              </h3>
              <div className="space-y-4">
                {[
                  "Dozens of plugins = severe technical bloat",
                  "Slow load times = higher bounce rates",
                  "Clunky checkout = abandoned carts",
                  "Every update risks breaking your store",
                  "Hidden costs & monthly agency fees",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#72f5e3] mt-2 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                The LMWebDesign Alternative
              </h3>
              <div className="space-y-4">
                {[
                  "Purpose-built from the ground up in Next.js",
                  "Sub-second load times = better rankings",
                  "Zero plugin overhead = maximum performance",
                  "Own your store forever, no recurring cuts",
                  "Full control & transparency",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#e7fe56] flex-shrink-0 mt-0.5" weight="bold" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2: CORE ADVANTAGES
      ════════════════════════════════════════════ */}
      <section
        ref={advantagesRef}
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-16 opacity-0 ${
              advantagesVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3">
              Architecture That Matters
            </p>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
              Every decision directly impacts
              <br />
              <span className="italic text-outline-2">your bottom line</span>
            </h2>
          </div>

          {/* Advantages Grid */}
          <div className="space-y-12 md:space-y-16">
            {[
              {
                icon: Lightning,
                title: "Sub-second Load Times & Superior Google Rankings",
                description:
                  "Google's algorithm penalizes slow websites. Because our custom builds eliminate the heavy plugin bloat of traditional agencies, your store consistently ranks higher organically. Your products are discovered more, your Google Ads cost less per click, and customers never abandon carts waiting for pages to load.",
                color: "#e7fe56",
              },
              {
                icon: CreditCard,
                title: "Frictionless South African Payments",
                description:
                  "A confused customer never buys. We integrate seamless, trusted local payment gateways directly into your checkout flow. Your customers pay via Credit Card, Instant EFT, Apple Pay, or Google Pay using secure providers like PayFast, Yoco, Peach Payments, and Ozow.",
                color: "#d5bff0",
              },
              {
                icon: Storefront,
                title: "Automated Local Logistics",
                description:
                  "Shipping in South Africa doesn't have to be a logistical headache. We integrate your store directly with The Courier Guy and Bob Go. When a customer buys a product, shipping rates calculate accurately at checkout and courier waybills generate automatically. No more manual data entry.",
                color: "#72f5e3",
              },
              {
                icon: Chat,
                title: "WhatsApp Cart Recovery",
                description:
                  "Email open rates are dropping. When a customer leaves an item in their cart without paying, our systems follow up directly via an automated WhatsApp message, bringing them back to complete the purchase where they're most responsive.",
                color: "#e7fe56",
              },
            ].map(({ icon: Icon, title, description, color }, idx) => (
              <div
                key={title}
                className={`opacity-0 ${
                  advantagesVisible
                    ? `animate-[fadeInUp_0.8s_ease-out_${
                        0.2 + idx * 0.15
                      }s_both]`
                    : ""
                }`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex-shrink-0 flex items-center justify-center border border-white/10 bg-white/[0.03]">
                    <Icon className="w-8 h-8 md:w-10 md:h-10" style={{ color }} weight="bold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {title}
                    </h3>
                    <p className="text-base md:text-lg text-white/70 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3: PACKAGES
      ════════════════════════════════════════════ */}
      <section
        ref={packagesRef}
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 opacity-0 ${
              packagesVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3">
              Transparent Pricing
            </p>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              Professional E-Commerce Packages
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[700px]">
              Complete ownership. No hidden product limits. No monthly agency
              cuts from your sales.
            </p>
          </div>

          {/* Packages Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 ${
              packagesVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                : ""
            }`}
          >
            {[
              {
                name: "The Essential Store",
                price: "R8,999",
                color: "#e7fe56",
                bgClass: "bg-[#e7fe56]/5 border-[#e7fe56]/20",
                description: "The foundational e-commerce setup for emerging brands.",
                features: [
                  {
                    text: "Up to 50 initial products uploaded",
                    tooltip: "You are never restricted on how many products you can add yourself in the future.",
                  },
                  "Custom, mobile-first storefront design",
                  "Standard Flat-Rate Shipping setup",
                  {
                    text: "Secure Payment Integration (PayFast / Yoco)",
                    tooltip: "Allows customers to pay securely via Card or Instant EFT directly on your site.",
                  },
                  "Inventory & Order Management Dashboard",
                  "Basic On-Page Product SEO",
                ],
                delivery: "7–10 working days",
              },
              {
                name: "The Automated Store",
                price: "R14,999",
                color: "#d5bff0",
                bgClass: "bg-[#d5bff0]/5 border-[#d5bff0]/20",
                description: "For serious retailers who need to reduce administrative overhead and scale sales.",
                popular: true,
                features: [
                  {
                    text: "Up to 100 initial products uploaded",
                    tooltip: "Unlimited capacity.",
                  },
                  "Custom, high-conversion Next.js storefront",
                  {
                    text: "Automated Courier Integration",
                    tooltip: "Connects to The Courier Guy or Bob Go to provide live shipping rates at checkout and automatically generate waybills.",
                  },
                  "Advanced Product Filtering & Search",
                  {
                    text: "WhatsApp Cart Recovery Setup",
                    tooltip: "Automatically messages customers who abandon their cart, recovering lost revenue.",
                  },
                  "Advanced Tracking (Google Analytics 4 & Meta Pixel)",
                  "Product SEO for Google Shopping Visibility",
                ],
                delivery: "12–15 working days",
              },
              {
                name: "Custom E-Commerce Engine",
                price: "R25,000+",
                color: "#72f5e3",
                bgClass: "bg-[#72f5e3]/5 border-[#72f5e3]/20",
                description: "Enterprise-grade infrastructure for large catalogs and complex business rules.",
                features: [
                  "Full Headless E-Commerce Architecture",
                  {
                    text: "ERP & Point-of-Sale (POS) System syncing",
                    tooltip: "Connects your physical store's inventory directly to your online store in real-time.",
                  },
                  "Custom Wholesale / B2B Pricing portals",
                  "Advanced Customer Accounts & Loyalty Programs",
                  "Dedicated Server & Database Architecture",
                ],
                delivery: "Scoped per project",
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-3xl border p-8 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:border-opacity-100 ${pkg.bgClass} ${
                  pkg.popular ? "md:scale-105 md:z-10" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#e7fe56] text-black">
                    Most Popular
                  </div>
                )}

                <div className="mb-6 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-white/60 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-white/50">(once-off)</span>
                  </div>
                </div>

                <div className="flex-1 mb-6">
                  <div className="space-y-3">
                    {pkg.features.map((feature) => renderFeature(feature))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mb-6">
                  <p className="text-xs text-white/50 font-semibold uppercase tracking-widest mb-1">
                    Delivery
                  </p>
                  <p className="text-sm text-white/70">{pkg.delivery}</p>
                </div>

                <a
                  href={`${WA_BASE}I%20want%20the%20${encodeURIComponent(
                    pkg.name.toLowerCase()
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-300 border-2 flex items-center justify-center gap-2 text-black bg-[#e7fe56] border-[#e7fe56] hover:bg-[#e7fe56]/90"
                >
                  <WhatsappLogo className="w-4 h-4" />
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4: WARRANTY
      ════════════════════════════════════════════ */}
      <section
        ref={warrantyRef}
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`opacity-0 ${
              warrantyVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3">
                  Built to Last
                </p>
                <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
                  We take accountability for our code
                </h2>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Unlike agencies that hand over a broken site and start
                  charging hourly for fixes, every LMWebDesign e-commerce build
                  includes a 6-Month Technical Warranty.
                </p>
                <p className="text-base text-white/60 leading-relaxed">
                  If a bug appears, a payment gateway disconnects, or a browser
                  update affects your layout, we patch it at no extra cost.
                  Once your warranty concludes, optional care plans handle
                  server security, monitoring, and backups.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, label: "6-Month Bug Fixes & Security Patches" },
                  { icon: Lightning, label: "Payment Gateway Monitoring" },
                  { icon: Check, label: "Browser Compatibility Updates" },
                  { icon: Chat, label: "WhatsApp Technical Support" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
                  >
                    <Icon className="w-6 h-6 text-[#e7fe56] flex-shrink-0" weight="bold" />
                    <span className="text-white/80">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FAQ SECTION
      ════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[900px] w-full mx-auto">
          <div className="mb-12">
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {ecommerceFAQ.map((item, idx) => (
              <div
                key={item.question}
                className="opacity-0"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${0.2 + idx * 0.1}s both`,
                }}
              >
                <CollapsibleFAQ
                  question={item.question}
                  answer={item.answer}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FINAL CTA SECTION
      ════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1000px] w-full mx-auto text-center">
          <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
            Ready to upgrade your digital retail operations?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-[700px] mx-auto">
            Let's discuss your product lines, your logistical needs, and how we
            can engineer a store that operates profitably.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href={`${WA_BASE}I%20want%20to%20discuss%20my%20e-commerce%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-300 border-2 bg-[#e7fe56] border-[#e7fe56] text-black hover:bg-[#e7fe56]/90"
            >
              <WhatsappLogo className="w-5 h-5" />
              Message Our Lead Developer
            </a>
            <a
              href="#packages"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-300 border-2 border-white/20 text-white hover:border-[#e7fe56]/50"
            >
              View Store Packages
              <ArrowRight className="w-4 h-4" weight="bold" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
