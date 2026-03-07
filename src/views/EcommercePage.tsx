"use client";

import React from "react";
import {
  Storefront,
  Check,
  WhatsappLogo,
  ArrowRight,
  Clock,
  ShieldCheck,
  Package,
  GraduationCap,
  ChartLineUp,
  UsersThree,
  X,
  CreditCard,
  Rocket,
  Globe,
  Envelope,
  LockKey,
  TrendUp,
} from "@phosphor-icons/react";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessCardGrid } from "@/components/ProcessCardGrid";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/sections/FAQ";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COLORS } from "@/constants/colors";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { featuredProjects } from "@/sections/ProjectsSection/constants";
import { TestimonialsHeader } from "@/sections/TestimonialsSection/TestimonialsHeader";
import { TestimonialsGrid } from "@/sections/TestimonialsSection/components/TestimonialsGrid";

const WA_BASE = "https://wa.me/27814272624?text=";

// ─────────────────────────────────────────────────
//  Shared: Tooltip bubble on [?] marker
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

// Dark card feature row
const FeatureRow = ({
  feature,
  accent = "#72f5e3",
}: {
  feature: string | { text: string; tooltip: string };
  accent?: string;
}) => {
  const isObj = typeof feature === "object";
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-white/[0.05] last:border-b-0">
      <div
        className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
        style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}
      >
        <Check className="w-3 h-3" weight="bold" style={{ color: accent }} />
      </div>
      <span className="text-sm text-white/65 leading-relaxed">
        {isObj ? feature.text : feature}
        {isObj && <FeatureTooltip text={feature.tooltip} />}
      </span>
    </div>
  );
};

// Lime card feature row (dark text on lime bg)
const LimeFeatureRow = ({
  feature,
}: {
  feature: string | { text: string; tooltip: string };
}) => {
  const isObj = typeof feature === "object";
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-black/[0.07] last:border-b-0">
      <div className="shrink-0 w-5 h-5 rounded-full bg-black/10 flex items-center justify-center mt-0.5">
        <Check className="w-3 h-3 text-black" weight="bold" />
      </div>
      <span className="text-sm text-black/70 leading-relaxed">
        {isObj ? feature.text : feature}
      </span>
    </div>
  );
};

export function EcommercePage() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.1);
  const { ref: realityRef, isVisible: realityVisible } = useScrollAnimation(0.15);
  const { ref: packagesRef, isVisible: packagesVisible } = useScrollAnimation(0.1);
  const { ref: includedRef, isVisible: includedVisible } = useScrollAnimation(0.15);
  const { ref: gatewayRef, isVisible: gatewayVisible } = useScrollAnimation(0.15);
  const { ref: dashboardRef, isVisible: dashboardVisible } = useScrollAnimation(0.15);
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation(0.15);
  const { ref: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation(0.1);

  const ecommerceFAQ = [
    {
      question: "How long does it take to build my store?",
      answer:
        "Essential Store: 7–10 working days. Growth Store: 12–15 working days. Custom engines are scoped per project. We communicate progress via WhatsApp throughout the build so you always know where things stand.",
    },
    {
      question: "Can I manage products myself after launch?",
      answer:
        "Absolutely. Every store includes a user-friendly product management dashboard where you can add, edit, and remove products at any time — no technical knowledge required. All tiers support unlimited products, so your store can grow as big as your business.",
    },
    {
      question: "What payment gateways do you support?",
      answer:
        "We integrate PayFast, Yoco, and Ozow by default — all South African-friendly, PCI-compliant, and supporting credit cards, Instant EFT, Apple Pay, and Google Pay. Your customers can pay the way they prefer, with zero friction at checkout.",
    },
    {
      question: "Is hosting and a domain included?",
      answer:
        "Yes. Every package includes Premium Web Hosting, a Free .co.za Domain Registration, and a Free SSL Certificate — all set up for you. Your store will be live on a fast, secure, and professional domain from day one.",
    },
    {
      question: "How will I learn to run my store?",
      answer:
        "We include Store Management Training with every package. You'll receive a personal Zoom walkthrough or a set of video tutorials that teach you how to manage products, view orders, process refunds, and update your store content — so you're fully independent after launch.",
    },
    {
      question: "What if I need help after the warranty ends?",
      answer:
        "After your 6-month warranty, optional Care Plans start at R199/month. These cover security updates, backups, and technical support — keeping your store fast and secure without you lifting a finger.",
    },
    {
      question: "Why not just use Shopify or WooCommerce?",
      answer:
        "Shopify charges R300–R2,000+ per month in platform fees and takes a cut of every sale. WooCommerce relies on dozens of plugins that slow your site and create security holes. Our custom Next.js stores are yours outright — no monthly platform tax, no forced plugin ecosystem, and no compromises on speed or security.",
    },
    {
      question: "Do you build in South Africa?",
      answer:
        "Yes. We are a South African web studio based in Midrand, Gauteng. All our payment integrations, domain registrations, and business email setups are South Africa-first, meaning everything is configured for the local market from day one.",
    },
  ];

  const advantageCards = [
    {
      step: 1,
      variant: "lime" as const,
      title: "Sub-second Load Times",
      description:
        "Google penalises slow stores. Our custom Next.js builds eliminate heavy plugin bloat, ensuring your store ranks higher and converts more visitors into customers.",
    },
    {
      step: 2,
      variant: "purple" as const,
      title: "SA Payment Integration",
      description:
        "Frictionless checkout with trusted local gateways: PayFast, Yoco, and Ozow. Support for Cards, Instant EFT, Apple Pay, and Google Pay — your customers pay the way they want.",
    },
    {
      step: 3,
      variant: "cyan" as const,
      title: "Easy Store Management",
      description:
        "A clean, intuitive backend dashboard lets you manage products, track orders, and update your store in minutes — no developer needed. We also train you personally before handover.",
    },
  ];

  const comparisonRows = [
    { feature: "Page Load Speed", custom: "Sub-second (100/100 PageSpeed)", wordpress: "3–7 seconds average" },
    { feature: "Monthly Platform Cost", custom: "R0 — you own it outright", wordpress: "R500–R2,000+/month (Shopify, WooCommerce plugins)" },
    { feature: "Security", custom: "Enterprise-grade, zero plugin surface", wordpress: "Plugin vulnerabilities updated weekly" },
    { feature: "SEO Performance", custom: "Structured for ranking from day one", wordpress: "Requires paid SEO plugins" },
    { feature: "SA Payment Gateways", custom: "PayFast, Yoco, Ozow — native", wordpress: "Complex third-party setups" },
    { feature: "Customisation", custom: "Fully bespoke — your brand, your rules", wordpress: "Limited by theme constraints" },
    { feature: "Sales Commission", custom: "0% — keep every rand", wordpress: "Up to 2% per transaction (Shopify)" },
    { feature: "Store Training Included", custom: "Yes — Zoom or video tutorials", wordpress: "No — you figure it out" },
    { feature: "SSL & Domain Included", custom: "Yes — free with every package", wordpress: "Paid add-ons" },
    { feature: "Business Email Included", custom: "Yes — professional emails included", wordpress: "Paid add-on" },
  ];

  return (
    <>
      {/* ─── 1. Hero ────────────────────────────────────────────────── */}
      <ServiceHero
        title="E-commerce engineered for performance, not just appearance."
        underlineColor="lime"
        description="We build high-performance online stores that load instantly, rank on Google, and are built to grow with your South African business. Every package includes free hosting, a free .co.za domain, SSL, business email, and personal training."
      />

      {/* ─── 2. Trust Stats Strip ───────────────────────────────────── */}
      <section ref={statsRef} className="border-y border-white/[0.06] py-10 md:py-12 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 opacity-0 ${
              statsVisible ? "animate-[fadeInUp_0.6s_ease-out_0.1s_both]" : ""
            }`}
          >
            {[
              { value: "R0", label: "Monthly platform fees — ever", color: COLORS.lime },
              { value: "< 0.5s", label: "Target page load on every build", color: COLORS.cyan },
              { value: "6 mo", label: "Warranty included, no asterisk", color: COLORS.purple },
              { value: "100%", label: "SA-built and SA-configured", color: COLORS.lime },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`${idx < 3 ? "md:border-r md:border-white/[0.06]" : ""} md:px-10 first:md:pl-0 last:md:pr-0`}
              >
                <p
                  className="text-4xl md:text-5xl font-bold tracking-tight mb-1.5 font-obviously"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-white/40 text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. Reality Section ─────────────────────────────────────── */}
      <section ref={realityRef} className="relative py-20 md:py-32 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">

            {/* Left: Problem copy */}
            <div
              className={`md:w-1/2 opacity-0 ${
                realityVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
              }`}
            >
              <p className="text-white/35 text-[11px] font-bold uppercase tracking-widest mb-5">
                The Problem With "Easy" Store Builders
              </p>
              <h2 className="text-4xl md:text-[52px] font-bold leading-[1.05] text-white mb-7 font-obviously">
                You don&apos;t own it.{" "}
                <span className="italic text-outline-15">You&apos;re renting it.</span>
              </h2>
              <p className="text-base text-white/55 leading-relaxed mb-8 max-w-[480px]">
                Shopify, WooCommerce, Wix — they all charge a monthly platform fee, forever. Miss a payment and your store goes dark. We build a custom store you own outright. No subscriptions. No middlemen. No compromise.
              </p>
              <div className="space-y-3.5">
                {[
                  "Platform fees compound year over year with no end in sight",
                  "Plugin bloat slows load times and tanks your Google ranking",
                  "Clunky checkout causes cart abandonment — every rand left behind",
                  "You're locked into their ecosystem, not your own brand",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/50 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Shopify cost accumulation visual */}
            <div
              className={`md:w-1/2 opacity-0 ${
                realityVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""
              }`}
            >
              <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-7 md:p-9">
                <div className="flex items-center gap-2 mb-7">
                  <TrendUp className="w-4 h-4 text-red-400/70" />
                  <p className="text-white/35 text-[11px] font-bold uppercase tracking-widest">
                    What Shopify costs you over time (Basic, ~R1,550/mo)
                  </p>
                </div>

                <div className="space-y-0 mb-7">
                  {[
                    { label: "After Year 1", amount: "R18,600", width: "33%", note: "And you still don't own the store" },
                    { label: "After Year 2", amount: "R37,200", width: "66%", note: "Fees stack. Your margin shrinks." },
                    { label: "After Year 3", amount: "R55,800", width: "100%", note: "A new car. On a platform you don't own." },
                  ].map((row) => (
                    <div key={row.label} className="py-4 border-b border-white/[0.06] last:border-b-0">
                      <div className="flex items-baseline justify-between mb-2.5">
                        <span className="text-white/40 text-xs font-medium">{row.label}</span>
                        <span className="text-xl font-bold text-red-400">{row.amount}</span>
                      </div>
                      <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-400/35 rounded-full"
                          style={{ width: row.width }}
                        />
                      </div>
                      <p className="text-white/25 text-[11px] mt-1.5 italic">{row.note}</p>
                    </div>
                  ))}
                </div>

                {/* Our offer contrast row */}
                <div className="rounded-xl border border-[#e7fe56]/25 bg-[#e7fe56]/[0.04] p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[#e7fe56] text-[10px] font-bold uppercase tracking-widest mb-1">
                      Our Custom Store
                    </p>
                    <p className="text-white/45 text-xs leading-relaxed">
                      Once-off. You own it outright, forever.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-3xl font-bold text-[#e7fe56] font-obviously">R8,999</span>
                    <p className="text-[#e7fe56]/40 text-[11px]">Starting from</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. Architecture / Advantages ──────────────────────────── */}
      <ProcessCardGrid
        heading={
          <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white font-obviously">
            Architecture that <span className="italic text-outline-15">matters</span>
          </h2>
        }
        description="Every technical decision we make is engineered to impact your bottom line and operational efficiency."
        cards={advantageCards}
      />

      {/* ─── 5. Packages ────────────────────────────────────────────── */}
      <section ref={packagesRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">

          {/* Header */}
          <div
            className={`mb-14 opacity-0 ${
              packagesVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <p className="text-[#e7fe56] text-[11px] font-bold uppercase tracking-widest mb-4">
              Transparent Pricing
            </p>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4 font-obviously">
              Pick your <span className="italic text-outline-15">engine.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              No monthly retainers. No cuts from your sales. No hidden limits.
              What you see is what you pay — once.
            </p>
          </div>

          {/* Cards grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-5 opacity-0 ${
              packagesVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""
            }`}
          >
            {/* ── Essential ── */}
            <div className="relative flex flex-col rounded-[28px] border border-white/[0.09] bg-white/[0.02] overflow-hidden">
              {/* Top accent line */}
              <div className="h-[3px] bg-gradient-to-r from-white/20 to-white/5" />

              <div className="p-7 md:p-8 pb-0 flex-1">
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-6">
                  Essential Store
                </p>
                <div className="mb-5">
                  <p className="text-[44px] font-bold text-white leading-none font-obviously">
                    R8,999
                  </p>
                  <p className="text-white/30 text-xs mt-1.5">Once-off · 7–10 working days</p>
                </div>
                <p className="text-white/45 text-sm mb-7 leading-relaxed border-b border-white/[0.06] pb-7">
                  The complete foundation for emerging brands entering online retail.
                </p>

                <div className="space-y-0">
                  {[
                    "50 products uploaded for you (add unlimited yourself)",
                    "Custom, mobile-first storefront",
                    "Standard flat-rate shipping",
                    { text: "Secure payment integration", tooltip: "PayFast, Yoco, or Ozow — your choice." },
                    "Inventory management dashboard",
                  ].map((f, i) => (
                    <FeatureRow key={i} feature={f} accent="rgba(255,255,255,0.6)" />
                  ))}
                </div>
              </div>

              <div className="p-7 md:p-8 pt-6">
                <div className="flex items-center gap-2 mb-5 text-white/25">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Ready in 7–10 working days
                  </span>
                </div>
                <a
                  href={`${WA_BASE}Hi%2C%20I%27d%20like%20to%20get%20started%20with%20the%20Essential%20Store`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl border border-white/15 flex items-center justify-center gap-2.5 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-white/[0.05] transition-colors"
                >
                  <WhatsappLogo className="w-4 h-4 text-green-400" weight="fill" />
                  Get started on WhatsApp
                </a>
              </div>
            </div>

            {/* ── Growth (Popular) — lime fill ── */}
            <div className="relative flex flex-col rounded-[28px] bg-[#e7fe56] overflow-hidden md:-mt-5 md:-mb-5">
              <div className="p-7 md:p-8 pb-0 flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-black/40 text-[10px] font-bold uppercase tracking-widest">
                    Growth Store
                  </p>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black text-[#e7fe56] px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>

                <div className="mb-5">
                  <p className="text-[44px] font-bold text-black leading-none font-obviously">
                    R14,999
                  </p>
                  <p className="text-black/35 text-xs mt-1.5">Once-off · 12–15 working days</p>
                </div>
                <p className="text-black/55 text-sm mb-7 leading-relaxed border-b border-black/[0.09] pb-7">
                  Advanced tools and cart recovery for brands serious about scaling online.
                </p>

                <div className="space-y-0">
                  {[
                    "100 products uploaded for you (add unlimited yourself)",
                    "Product filtering & search",
                    { text: "WhatsApp cart recovery", tooltip: "Automatically follow up with abandoned checkouts via WhatsApp to recover lost sales." },
                    "Google Shopping SEO",
                    { text: "Advanced analytics dashboard", tooltip: "Track revenue, best-sellers, conversion rates, and customer behaviour in real-time." },
                  ].map((f, i) => (
                    <LimeFeatureRow key={i} feature={f} />
                  ))}
                </div>
              </div>

              <div className="p-7 md:p-8 pt-6">
                <div className="flex items-center gap-2 mb-5 text-black/30">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Ready in 12–15 working days
                  </span>
                </div>
                <a
                  href={`${WA_BASE}Hi%2C%20I%27d%20like%20to%20get%20started%20with%20the%20Growth%20Store`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-black flex items-center justify-center gap-2.5 text-[#e7fe56] text-[11px] font-bold uppercase tracking-widest hover:bg-black/80 transition-colors"
                >
                  <WhatsappLogo className="w-4 h-4" weight="fill" />
                  Get started on WhatsApp
                </a>
              </div>
            </div>

            {/* ── Custom Engine — cyan accent ── */}
            <div className="relative flex flex-col rounded-[28px] border border-[#72f5e3]/20 bg-[#72f5e3]/[0.03] overflow-hidden">
              {/* Top accent line */}
              <div className="h-[3px] bg-gradient-to-r from-[#72f5e3]/50 to-[#72f5e3]/10" />

              <div className="p-7 md:p-8 pb-0 flex-1">
                <p className="text-[#72f5e3]/50 text-[10px] font-bold uppercase tracking-widest mb-6">
                  Custom Engine
                </p>
                <div className="mb-5">
                  <p className="text-[44px] font-bold text-white leading-none font-obviously">
                    R25k+
                  </p>
                  <p className="text-white/30 text-xs mt-1.5">Project-based · Scoped per build</p>
                </div>
                <p className="text-white/45 text-sm mb-7 leading-relaxed border-b border-white/[0.06] pb-7">
                  Enterprise-grade infrastructure for complex, high-volume operations.
                </p>

                <div className="space-y-0">
                  {[
                    "Full headless architecture",
                    "ERP & POS system syncing",
                    "Wholesale / B2B price portals",
                    "Custom customer loyalty programs",
                    "Dedicated hosting configuration",
                  ].map((f, i) => (
                    <FeatureRow key={i} feature={f} accent="#72f5e3" />
                  ))}
                </div>
              </div>

              <div className="p-7 md:p-8 pt-6">
                <div className="flex items-center gap-2 mb-5 text-white/25">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Timeline scoped to your project
                  </span>
                </div>
                <a
                  href={`${WA_BASE}Hi%2C%20I%27m%20interested%20in%20a%20Custom%20Engine%20store`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl border border-[#72f5e3]/25 flex items-center justify-center gap-2.5 text-[#72f5e3] text-[11px] font-bold uppercase tracking-widest hover:bg-[#72f5e3]/[0.08] transition-colors"
                >
                  <WhatsappLogo className="w-4 h-4" weight="fill" />
                  Discuss your project
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 6. "Every Package Includes" Strip ─────────────────────── */}
      <section ref={includedRef} className="border-y border-white/[0.06] py-10 md:py-12 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`opacity-0 ${
              includedVisible ? "animate-[fadeInUp_0.6s_ease-out_0.1s_both]" : ""
            }`}
          >
            <p className="text-center text-white/30 text-[10px] font-bold uppercase tracking-widest mb-8">
              Every package includes — no exceptions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-14">
              {[
                { Icon: Globe, label: "Free .co.za Domain" },
                { Icon: Rocket, label: "Premium Hosting" },
                { Icon: LockKey, label: "Free SSL Certificate" },
                { Icon: Envelope, label: "Business Email" },
                { Icon: GraduationCap, label: "Store Training" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-white/50 group">
                  <Icon className="w-4 h-4 text-[#e7fe56]/60 group-hover:text-[#e7fe56] transition-colors" />
                  <span className="text-sm font-medium group-hover:text-white/70 transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. Payment Gateways ────────────────────────────────────── */}
      <section ref={gatewayRef} className="relative py-16 md:py-20 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`opacity-0 ${
              gatewayVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <p className="text-center text-white/30 text-[10px] font-bold uppercase tracking-widest mb-10">
              Trusted SA payment gateways — integrated into every store
            </p>

            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-3xl mx-auto">
              {[
                {
                  name: "PayFast",
                  color: "#00b0f0",
                  border: "rgba(0,176,240,0.2)",
                  bg: "rgba(0,176,240,0.05)",
                  methods: ["Credit & Debit Cards", "Instant EFT", "Apple Pay", "Google Pay"],
                },
                {
                  name: "Yoco",
                  color: "#0cae74",
                  border: "rgba(12,174,116,0.2)",
                  bg: "rgba(12,174,116,0.05)",
                  methods: ["Card Payments", "Online & In-store", "Tap to Pay"],
                },
                {
                  name: "Ozow",
                  color: "#7c3aed",
                  border: "rgba(124,58,237,0.2)",
                  bg: "rgba(124,58,237,0.05)",
                  methods: ["Instant EFT", "Pay-by-Link", "Scan to Pay"],
                },
              ].map((gw) => (
                <div
                  key={gw.name}
                  className="flex-1 rounded-2xl px-6 py-6"
                  style={{ background: gw.bg, border: `1px solid ${gw.border}` }}
                >
                  <p
                    className="text-xl font-black tracking-tight mb-3"
                    style={{ color: gw.color }}
                  >
                    {gw.name}
                  </p>
                  <div className="space-y-1.5">
                    {gw.methods.map((m) => (
                      <div key={m} className="flex items-center gap-2">
                        <div
                          className="w-1 h-1 rounded-full"
                          style={{ background: gw.color, opacity: 0.6 }}
                        />
                        <span className="text-white/45 text-xs">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-white/25 text-xs mt-7 max-w-md mx-auto leading-relaxed">
              All gateways are PCI-DSS compliant and configured for the South African market from day one.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 8. Dashboard Showcase ──────────────────────────────────── */}
      <section ref={dashboardRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">

            {/* Left: Copy */}
            <div
              className={`md:w-5/12 shrink-0 opacity-0 ${
                dashboardVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
              }`}
            >
              <p className="text-[#72f5e3] text-[11px] font-semibold uppercase tracking-widest mb-4">
                Easy-to-Use Dashboard
              </p>
              <h2 className="text-4xl md:text-[50px] font-bold leading-tight text-white mb-6 font-obviously">
                Run your store without{" "}
                <span className="italic text-outline-15">a developer</span>
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-9">
                Your store comes with a clean management dashboard. Add products, fulfil orders, track revenue, and manage customers — all from one place, on any device.
              </p>
              <div className="space-y-5">
                {[
                  { Icon: Package, label: "Product Management", desc: "Add, edit, or remove products in seconds. Bulk uploads supported." },
                  { Icon: ChartLineUp, label: "Sales Analytics", desc: "Real-time revenue, top products, and conversion data at a glance." },
                  { Icon: UsersThree, label: "Order & Customer Management", desc: "View, process, and fulfil orders. Track customers and order history." },
                  { Icon: ShieldCheck, label: "Secure & Backed Up", desc: "Daily backups and SSL protection built-in. Your data is always safe." },
                ].map(({ Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#72f5e3]/10 border border-[#72f5e3]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-[#72f5e3]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-0.5">{label}</p>
                      <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Mock Dashboard UI */}
            <div
              className={`md:w-7/12 opacity-0 ${
                dashboardVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""
              }`}
            >
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.07] bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <Storefront className="w-4 h-4 text-[#72f5e3]" />
                    <span className="text-white text-xs font-semibold">My Store Dashboard</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#e7fe56]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#72f5e3]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#c4b5fd]/80" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-px border-b border-white/[0.07]">
                  {[
                    { label: "Revenue Today", value: "R4,320", trend: "+12%" },
                    { label: "Orders", value: "18", trend: "+3" },
                    { label: "Products", value: "Unlimited", trend: null },
                  ].map((stat) => (
                    <div key={stat.label} className="px-4 py-4 bg-white/[0.02]">
                      <p className="text-white/35 text-[10px] uppercase tracking-wider mb-1">{stat.label}</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-white font-bold text-lg leading-none">{stat.value}</p>
                        {stat.trend && (
                          <span className="text-[#72f5e3] text-[10px] font-semibold">{stat.trend}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Product list */}
                <div className="p-5">
                  <p className="text-white/35 text-[10px] uppercase tracking-wider mb-3">
                    Recent Products
                  </p>
                  <div className="space-y-2">
                    {[
                      { name: "Classic Cotton Tee — White", price: "R299", stock: "In Stock", stockOk: true },
                      { name: "Premium Hoodie — Black", price: "R599", stock: "In Stock", stockOk: true },
                      { name: "Snapback Cap — Logo", price: "R199", stock: "Low Stock", stockOk: false },
                    ].map((product) => (
                      <div
                        key={product.name}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-white/[0.08] flex items-center justify-center">
                            <Package className="w-3.5 h-3.5 text-white/35" />
                          </div>
                          <span className="text-white/65 text-xs">{product.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-white/45 text-xs">{product.price}</span>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              product.stockOk
                                ? "bg-[#72f5e3]/10 text-[#72f5e3]"
                                : "bg-[#e7fe56]/10 text-[#e7fe56]"
                            }`}
                          >
                            {product.stock}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Training note */}
                  <div className="mt-4 flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#72f5e3]/[0.05] border border-[#72f5e3]/15">
                    <GraduationCap className="w-4 h-4 text-[#72f5e3] shrink-0" />
                    <p className="text-white/45 text-xs leading-relaxed">
                      <span className="text-white/75 font-semibold">Store Training Included</span>{" "}
                      — Zoom walkthrough or video tutorials. You&apos;re never left to figure it out alone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. Portfolio ───────────────────────────────────────────── */}
      <section ref={projectsRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`flex flex-wrap items-end justify-between mb-12 gap-6 opacity-0 ${
              projectsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <div>
              <p className="text-[#e7fe56] text-[11px] font-semibold uppercase tracking-widest mb-3">
                Our Portfolio
              </p>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white font-obviously">
                Stores we&apos;ve <span className="italic text-outline-15">built</span>
              </h2>
            </div>
            <a
              href="/projects"
              className="text-sm font-normal bg-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#e7fe56] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#e7fe56] hover:text-black transition-colors"
            >
              See all projects
              <span className="relative text-sm font-normal bg-[#e7fe56] text-black h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:h-[50px] md:w-[50px] md:p-[18.4px]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          <div className="flex flex-wrap -mx-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                isVisible={projectsVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. Testimonials ───────────────────────────────────────── */}
      <section id="testimonials" aria-labelledby="ecom-testimonials-heading">
        <TestimonialsHeader />
        <TestimonialsGrid />
      </section>

      {/* ─── 11. Comparison Table ───────────────────────────────────── */}
      <section ref={comparisonRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 opacity-0 ${
              comparisonVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <p className="text-[#e7fe56] text-[11px] font-semibold uppercase tracking-widest mb-3">
              Why Custom?
            </p>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4 font-obviously">
              Custom Next.js <span className="italic text-outline-15">vs.</span> WordPress
            </h2>
            <p className="text-white/55 text-lg max-w-2xl">
              Not all stores are created equal. Here&apos;s what you&apos;re actually getting — and what you&apos;re giving up — when you choose a cheap template over a custom build.
            </p>
          </div>

          <div
            className={`overflow-x-auto opacity-0 ${
              comparisonVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""
            }`}
          >
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-5 text-white/35 text-xs font-bold uppercase tracking-widest w-1/3">
                    Feature
                  </th>
                  <th className="py-4 px-5 text-center w-1/3">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e7fe56]/10 border border-[#e7fe56]/25 text-[#e7fe56] text-xs font-bold uppercase tracking-widest">
                      <Rocket className="w-3.5 h-3.5" />
                      LMWebDesign Custom
                    </span>
                  </th>
                  <th className="py-4 px-5 text-center w-1/3">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/35 text-xs font-bold uppercase tracking-widest">
                      WordPress / Shopify
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-white/[0.06] ${idx % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                  >
                    <td className="py-4 px-5 text-white/65 text-sm font-medium">{row.feature}</td>
                    <td className="py-4 px-5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#72f5e3]/15 border border-[#72f5e3]/30 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#72f5e3]" weight="bold" />
                        </div>
                        <span className="text-white/75 text-xs leading-tight text-left">
                          {row.custom}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                          <X className="w-2.5 h-2.5 text-red-400" weight="bold" />
                        </div>
                        <span className="text-white/35 text-xs leading-tight text-left">
                          {row.wordpress}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 12. FAQ ────────────────────────────────────────────────── */}
      <FAQ
        items={ecommerceFAQ}
        title="Common Questions"
        description="Everything you need to know about our e-commerce packages, what's included, and how we work."
      />

      {/* ─── 13. CTA ────────────────────────────────────────────────── */}
      <CTASection
        heading={
          <>
            Ready to build a store that
            <br />
            <span className="italic text-outline-15">actually scales?</span>
          </>
        }
        linkTo="/contact"
        linkText="Get a Custom Quote"
        color="lime"
      />
    </>
  );
}
