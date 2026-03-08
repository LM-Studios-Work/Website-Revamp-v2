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
  Rocket,
  Globe,
  Envelope,
  LockKey,
  TrendUp,
  CloudArrowUp,
  Toolbox,
} from "@phosphor-icons/react";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessCardGrid } from "@/components/ProcessCardGrid";
import { ProcessCard } from "@/components/ProcessCard";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/sections/FAQ";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useDraggableScroll } from "@/hooks/useDraggableScroll";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { featuredProjects } from "@/sections/ProjectsSection/constants";
import { TestimonialsHeader } from "@/sections/TestimonialsSection/TestimonialsHeader";
import { TestimonialsGrid } from "@/sections/TestimonialsSection/components/TestimonialsGrid";

const WA_BASE = "https://wa.me/27814272624?text=Hi%2C%20I'm%20interested%20in%20";

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

type FeatureItem = string | { text: string; tooltip: string };

const FeatureListItem = ({ feature }: { feature: FeatureItem }) => {
  const isObj = typeof feature === "object";
  return (
    <div className="flex items-center gap-4 py-3 border-b-2 border-white/[0.09] last:border-b-0">
      <div className="shrink-0 w-8 h-8 rounded-full bg-[#72f5e3] flex items-center justify-center shadow-[0_0_10px_rgba(114,245,227,0.3)]">
        <Check className="w-4 h-4 text-black" weight="bold" />
      </div>
      <span className="text-sm text-white/75 leading-relaxed inline-flex flex-wrap items-center gap-x-0.5">
        {isObj
          ? (feature as { text: string; tooltip: string }).text
          : (feature as string)}
        {isObj && (
          <FeatureTooltip
            text={(feature as { text: string; tooltip: string }).tooltip}
          />
        )}
      </span>
    </div>
  );
};

// ─────────────────────────────────────────────────
//  Data: Packages
// ─────────────────────────────────────────────────
const packages: {
  title: string;
  price: string;
  roi: string;
  type: string;
  delivery: string;
  features: FeatureItem[];
  popular?: boolean;
  waText: string;
}[] = [
  {
    title: "ESSENTIAL STORE",
    price: "R8,999",
    roi: "The complete foundation for emerging brands entering online retail for the first time.",
    type: "once-off",
    delivery: "7–10 working days",
    waText: "the%20Essential%20Store%20package",
    features: [
      "50 products uploaded for you (add unlimited yourself)",
      "Custom, mobile-first storefront",
      "Standard flat-rate shipping",
      {
        text: "Secure payment integration",
        tooltip:
          "PayFast, Yoco, or Ozow — your choice. All PCI-DSS compliant and configured for SA from day one.",
      },
      "Inventory management dashboard",
    ],
  },
  {
    title: "GROWTH STORE",
    price: "R14,999",
    roi: "Advanced tools and cart recovery for brands serious about scaling their online revenue.",
    type: "once-off",
    delivery: "12–15 working days",
    popular: true,
    waText: "the%20Growth%20Store%20package",
    features: [
      "100 products uploaded for you (add unlimited yourself)",
      "Product filtering & search",
      {
        text: "WhatsApp cart recovery",
        tooltip:
          "Automatically follow up with abandoned checkouts via WhatsApp to recover lost sales.",
      },
      "Google Shopping SEO",
      {
        text: "Advanced analytics dashboard",
        tooltip:
          "Track revenue, best-sellers, conversion rates, and customer behaviour in real-time.",
      },
    ],
  },
  {
    title: "CUSTOM ENGINE",
    price: "R25k+",
    roi: "Enterprise-grade infrastructure for complex, high-volume operations built to your exact spec.",
    type: "project-based",
    delivery: "Scoped per project",
    waText: "a%20Custom%20Engine%20store",
    features: [
      "Full headless architecture",
      "ERP & POS system syncing",
      "Wholesale / B2B price portals",
      "Custom customer loyalty programs",
      "Dedicated hosting configuration",
    ],
  },
];

// ─────────────────────────────────────────────────
//  Data: Process Steps
// ─────────────────────────────────────────────────
const processSteps = [
  {
    step: 1,
    variant: "lime" as const,
    title: "Discovery & Scope",
    description:
      "We map your products, target customers, and revenue goals. Your store strategy is planned before a single design is created.",
  },
  {
    step: 2,
    variant: "purple" as const,
    title: "Design & UX",
    description:
      "High-fidelity storefront mockup designed for conversion. You approve the look and feel before development begins.",
  },
  {
    step: 3,
    variant: "cyan" as const,
    title: "Development",
    description:
      "Custom Next.js build with payment gateways, analytics, and your management dashboard fully integrated.",
  },
  {
    step: 4,
    variant: "glass" as const,
    title: "Stock & Setup",
    description:
      "We upload your first product batch, configure shipping, and connect your payment gateway — ready to sell from day one.",
  },
  {
    step: 5,
    variant: "lime" as const,
    title: "Launch & Training",
    description:
      "Go live with a personal handover session. Walk away knowing exactly how to run and grow your own store.",
  },
];

export function EcommercePage() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.1);
  const { ref: realityRef, isVisible: realityVisible } =
    useScrollAnimation(0.15);
  const { ref: packagesRef, isVisible: packagesVisible } =
    useScrollAnimation(0.1);
  const { ref: processRef, isVisible: processVisible } =
    useScrollAnimation(0.1);
  const { ref: warrantyRef, isVisible: warrantyVisible } =
    useScrollAnimation(0.15);
  const { ref: projectsRef, isVisible: projectsVisible } =
    useScrollAnimation(0.15);
  const { ref: comparisonRef, isVisible: comparisonVisible } =
    useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.15);
  const { ref: dragRef, events: dragEvents, isDragging } = useDraggableScroll();

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
    {
      feature: "Page Load Speed",
      custom: "Sub-second (100/100 PageSpeed)",
      wordpress: "3–7 seconds average",
    },
    {
      feature: "Monthly Platform Cost",
      custom: "R0 — you own it outright",
      wordpress: "R500–R2,000+/month (Shopify, WooCommerce plugins)",
    },
    {
      feature: "Security",
      custom: "Enterprise-grade, zero plugin surface",
      wordpress: "Plugin vulnerabilities updated weekly",
    },
    {
      feature: "SEO Performance",
      custom: "Structured for ranking from day one",
      wordpress: "Requires paid SEO plugins",
    },
    {
      feature: "SA Payment Gateways",
      custom: "PayFast, Yoco, Ozow — native",
      wordpress: "Complex third-party setups",
    },
    {
      feature: "Customisation",
      custom: "Fully bespoke — your brand, your rules",
      wordpress: "Limited by theme constraints",
    },
    {
      feature: "Sales Commission",
      custom: "0% — keep every rand",
      wordpress: "Up to 2% per transaction (Shopify)",
    },
    {
      feature: "Store Training Included",
      custom: "Yes — Zoom or video tutorials",
      wordpress: "No — you figure it out",
    },
    {
      feature: "SSL & Domain Included",
      custom: "Yes — free with every package",
      wordpress: "Paid add-ons",
    },
    {
      feature: "Business Email Included",
      custom: "Yes — professional emails included",
      wordpress: "Paid add-on",
    },
  ];

  return (
    <>
      {/* ════════════════════════════════════════════
            1. HERO
        ════════════════════════════════════════════ */}
      <ServiceHero
        title="E-commerce engineered for performance, not just appearance."
        underlineColor="lime"
        description="We build high-performance online stores that load instantly, rank on Google, and are built to grow with your South African business. Every package includes free hosting, a free .co.za domain, SSL, business email, and personal training."
      />

      {/* ════════════════════════════════════════════
            2. TRUST STATS STRIP
        ════════════════════════════════════════════ */}
      <section
        ref={statsRef}
        className="border-y border-white/[0.06] py-10 md:py-12 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 opacity-0 ${
              statsVisible ? "animate-[fadeInUp_0.6s_ease-out_0.1s_both]" : ""
            }`}
          >
            {[
              {
                value: "R0",
                label: "Monthly platform fees — ever",
                color: "#e7fe56",
              },
              {
                value: "< 0.5s",
                label: "Target page load on every build",
                color: "#72f5e3",
              },
              {
                value: "6 mo",
                label: "Warranty included, no asterisk",
                color: "#d5bff0",
              },
              {
                value: "100%",
                label: "SA-built and SA-configured",
                color: "#e7fe56",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`${
                  idx < 3 ? "md:border-r md:border-white/[0.06]" : ""
                } md:px-10 first:md:pl-0 last:md:pr-0`}
              >
                <p
                  className="text-4xl md:text-5xl font-bold tracking-tight mb-1.5 font-obviously"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-white/40 text-sm leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
            3. REALITY SECTION
        ════════════════════════════════════════════ */}
      <section ref={realityRef} className="relative py-20 md:py-32 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">
            {/* Left: Problem copy */}
            <div
              className={`md:w-1/2 opacity-0 ${
                realityVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                  : ""
              }`}
            >
              <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-5">
                The Problem With &ldquo;Easy&rdquo; Store Builders
              </p>
              <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-white mb-7">
                You don&apos;t own it.{" "}
                <span className="italic text-outline-15">
                  You&apos;re renting it.
                </span>
              </h2>
              <p className="text-base text-white/55 leading-relaxed mb-8 max-w-[480px]">
                Shopify, WooCommerce, Wix — they all charge a monthly platform
                fee, forever. Miss a payment and your store goes dark. We build
                a custom store you own outright. No subscriptions. No
                middlemen. No compromise.
              </p>
              <div className="space-y-3.5">
                {[
                  "Platform fees compound year over year with no end in sight",
                  "Plugin bloat slows load times and tanks your Google ranking",
                  "Clunky checkout causes cart abandonment — every rand left behind",
                  "You're locked into their ecosystem, not your own brand",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-white/50 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Shopify cost accumulation visual */}
            <div
              className={`md:w-1/2 opacity-0 ${
                realityVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                  : ""
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
                    {
                      label: "After Year 1",
                      amount: "R18,600",
                      width: "33%",
                      note: "And you still don't own the store",
                    },
                    {
                      label: "After Year 2",
                      amount: "R37,200",
                      width: "66%",
                      note: "Fees stack. Your margin shrinks.",
                    },
                    {
                      label: "After Year 3",
                      amount: "R55,800",
                      width: "100%",
                      note: "A new car. On a platform you don't own.",
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="py-4 border-b border-white/[0.06] last:border-b-0"
                    >
                      <div className="flex items-baseline justify-between mb-2.5">
                        <span className="text-white/40 text-xs font-medium">
                          {row.label}
                        </span>
                        <span className="text-xl font-bold text-red-400">
                          {row.amount}
                        </span>
                      </div>
                      <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-400/35 rounded-full"
                          style={{ width: row.width }}
                        />
                      </div>
                      <p className="text-white/25 text-[11px] mt-1.5 italic">
                        {row.note}
                      </p>
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
                    <span className="text-3xl font-bold text-[#e7fe56] font-obviously">
                      R8,999
                    </span>
                    <p className="text-[#e7fe56]/40 text-[11px]">
                      Starting from
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
            4. ARCHITECTURE / ADVANTAGES
        ════════════════════════════════════════════ */}
      <ProcessCardGrid
        heading={
          <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-white">
            Architecture that{" "}
            <span className="italic text-outline-15">matters</span>
          </h2>
        }
        description="Every technical decision we make is engineered to impact your bottom line and operational efficiency."
        cards={advantageCards}
      />

      {/* ════════════════════════════════════════════
            5. SERVICE PACKAGES
        ════════���═══════════════════════════════════ */}
      <section
        ref={packagesRef}
        id="packages"
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 md:mb-16 opacity-0 ${
              packagesVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3">
              Transparent Pricing
            </p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] flex items-center gap-3">
              E-commerce Packages
              <span className="h-px flex-1 bg-white/10 ml-4 hidden md:block" />
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-[650px]">
              No monthly retainers. No cuts from your sales. No hidden limits.
              What you see is what you pay — once.
            </p>
          </div>

          {/* Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, pkgIdx) => (
              <div
                key={pkg.title}
                className={`relative flex flex-col h-full rounded-2xl opacity-0 ${
                  packagesVisible
                    ? `animate-[fadeInUp_0.8s_ease-out_${
                        ["0.2s", "0.3s", "0.4s"][pkgIdx]
                      }_both]`
                    : ""
                }`}
                style={
                  pkg.popular
                    ? {
                        background: "rgba(255,255,255,0.04)",
                        backdropFilter: "blur(4px)",
                        boxShadow:
                          "0 0 0 2px rgba(196,181,253,0.9), 0 0 40px rgba(196,181,253,0.25)",
                      }
                    : {
                        background: "rgba(255,255,255,0.02)",
                        backdropFilter: "blur(4px)",
                        boxShadow: "0 0 0 1px rgba(255,255,255,0.15)",
                      }
                }
              >
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-[#e7fe56] text-black text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap shadow-lg shadow-[#e7fe56]/20">
                    Most Popular
                  </div>
                )}

                {/* Card header */}
                <div className="px-7 pt-8 pb-5 border-b-2 border-white/[0.1]">
                  <h3 className="text-xl font-bold text-center text-white leading-tight uppercase tracking-wide font-obviously">
                    {pkg.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-white/50 font-semibold">
                        from
                      </span>
                      <span className="text-2xl font-semibold text-white">
                        {pkg.price}
                      </span>
                    </div>
                    <span className="text-xs text-white/50 uppercase tracking-wider border border-white/15 px-2 py-0.5 rounded-full">
                      {pkg.type}
                    </span>
                  </div>
                  {/* ROI tagline */}
                  <p className="mt-3 text-xs text-white/45 leading-relaxed text-center italic">
                    {pkg.roi}
                  </p>
                </div>

                {/* Feature rows */}
                <div className="flex-1 px-7 py-2">
                  {pkg.features.map((feature, fIdx) => (
                    <FeatureListItem key={fIdx} feature={feature} />
                  ))}
                </div>

                {/* Footer */}
                <div className="px-7 pb-7 pt-4 border-t-2 border-white/[0.1] mt-2 space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#e7fe56]/60 shrink-0" />
                    <span className="text-xs text-white/50 font-medium tracking-wide">
                      DELIVERY:{" "}
                      <span className="text-white/80">{pkg.delivery}</span>
                    </span>
                  </div>

                  <a
                    href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-[#e7fe56] text-black hover:bg-[#e7fe56]/90 border-2 border-[#e7fe56] hover:shadow-lg hover:shadow-[#e7fe56]/30"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`${WA_BASE}${pkg.waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-transparent text-white/50 border border-white/15 hover:border-[#25D366]/50 hover:text-[#25D366] hover:bg-[#25D366]/5"
                  >
                    <WhatsappLogo className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
            6. WHAT'S INCLUDED
        ════════════════════════════════════════════ */}
      <section ref={warrantyRef} className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-10 opacity-0 ${
              warrantyVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-white mb-3">
              What&apos;s{" "}
              <span className="italic text-outline-2">included</span>
            </h2>
            <p className="text-lg text-white/70 max-w-[600px]">
              Every store ships with built-in peace of mind — no hidden costs,
              no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Warranty Card */}
            <div
              className={`rounded-[24px] md:rounded-[32px] p-6 md:p-8 bg-[#e7fe56] text-black flex flex-col opacity-0 ${
                warrantyVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.3s_both]"
                  : ""
              }`}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/10 flex items-center justify-center mb-5 md:mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold font-obviously mb-3">
                6-Month Warranty
              </h3>
              <p className="text-black/80 text-sm md:text-base leading-relaxed font-medium flex-1">
                Bug fixes, browser compatibility (Chrome, Safari, Edge), and
                minor content adjustments — all covered for 6 months post-launch
                at no extra charge.
              </p>
              <div className="mt-5 pt-4 border-t border-black/10 space-y-1.5">
                {[
                  "Code bug fixes & broken links",
                  "Browser compatibility patches",
                  "Minor text & image swaps",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-black/60">
                After your 6-month warranty, optional Care Plans start at
                R199/mo.{" "}
                <a
                  href="/services/web-design/care-plan"
                  className="underline font-semibold hover:text-black/90"
                >
                  Learn More →
                </a>
              </p>
            </div>

            {/* Hosting Card */}
            <div
              className={`rounded-[24px] md:rounded-[32px] p-6 md:p-8 bg-[#d5bff0] text-black flex flex-col opacity-0 ${
                warrantyVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.5s_both]"
                  : ""
              }`}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/10 flex items-center justify-center mb-5 md:mb-6">
                <CloudArrowUp className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold font-obviously mb-3">
                Hosting &amp; Domain
              </h3>
              <p className="text-black/80 text-sm md:text-base leading-relaxed font-medium flex-1">
                Your first year of hosting is on us. After that, we keep things
                simple and affordable — no hidden infrastructure costs.
              </p>
              <div className="mt-5 pt-4 border-t border-black/10 space-y-1.5">
                {[
                  "First year hosting — free",
                  ".co.za domain — included",
                  "Free SSL certificate",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Health Card */}
            <div
              className={`rounded-[24px] md:rounded-[32px] p-6 md:p-8 bg-[#72f5e3] text-black flex flex-col opacity-0 ${
                warrantyVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.7s_both]"
                  : ""
              }`}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/10 flex items-center justify-center mb-5 md:mb-6">
                <Toolbox className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold font-obviously mb-3">
                Technical Health
              </h3>
              <p className="text-black/80 text-sm md:text-base leading-relaxed font-medium flex-1">
                We keep your store fast, secure, and up to date so you can focus
                on selling — not maintaining servers.
              </p>
              <div className="mt-5 pt-4 border-t border-black/10 space-y-1.5">
                {[
                  "Security & dependency patches",
                  "Hosting & SSL management",
                  "Core Web Vitals monitoring",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
            7. OUR PROCESS
        ════════════════════════════════════════════ */}
      <section ref={processRef} className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          {/* Process heading */}
          <div
            className={`mb-10 opacity-0 ${
              processVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px]">
              Our <span className="italic text-outline-15">process</span>
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-[600px]">
              From first conversation to live online store — a clear, structured
              build every time.
            </p>
          </div>

          {/* Process steps — horizontal scroll */}
          <div
            className="-mx-6 md:-mx-12"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, black 80%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, black 80%, transparent 100%)",
            }}
          >
            <div
              ref={dragRef}
              {...dragEvents}
              className={`overflow-x-auto scrollbar-hide snap-x snap-mandatory md:snap-none scroll-px-6 md:scroll-px-12 px-6 md:px-12 pb-8 ${
                isDragging ? "cursor-grabbing select-none" : "cursor-grab"
              }`}
            >
              <div className="flex gap-4 md:gap-8 w-max justify-start pr-12 md:pr-32 pointer-events-none">
                {processSteps.map((card, idx) => (
                  <div
                    key={card.step}
                    className={`snap-start snap-always md:snap-align-none w-[280px] md:w-[400px] shrink-0 transition-all duration-700 pointer-events-auto ${
                      processVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <ProcessCard {...card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
            8. PORTFOLIO
        ════════════════════════════════════════════ */}

      <section ref={projectsRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`flex flex-wrap items-center justify-between mb-12 opacity-0 ${
              projectsVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
              Our projects
            </h2>
            <div className="mt-6 md:mt-0">
              <a
                href="/projects"
                className="text-sm font-normal bg-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#e7fe56] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#e7fe56] hover:text-black transition-colors"
              >
                See all projects
                <span className="relative text-sm font-normal bg-[#e7fe56] text-black h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:h-[50px] md:w-[50px] md:p-[18.4px]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </div>
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

      {/* ════════════════════════════════════════════
            11. TESTIMONIALS
        ════════════════════════════════════════════ */}
      <section id="testimonials" aria-labelledby="ecom-testimonials-heading">
        <TestimonialsHeader />
        <TestimonialsGrid />
      </section>

      {/* ════════════════════════════════════════════
            12. COMPARISON TABLE
        ════════════════════════════════════════════ */}
      <section ref={comparisonRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 opacity-0 ${
              comparisonVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3">
              Why Custom?
            </p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] flex items-center gap-3">
              Custom Next.js{" "}
              <span className="italic text-outline-15">vs.</span> WordPress
              <span className="h-px flex-1 bg-white/10 ml-4 hidden md:block" />
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mt-4">
              Not all stores are created equal. Here&apos;s what you&apos;re
              actually getting — and what you&apos;re giving up — when you
              choose a cheap template over a custom build.
            </p>
          </div>

          <div
            className={`overflow-x-auto opacity-0 ${
              comparisonVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                : ""
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
                    className={`border-t border-white/[0.06] ${
                      idx % 2 === 0 ? "bg-white/[0.01]" : ""
                    }`}
                  >
                    <td className="py-4 px-5 text-white/65 text-sm font-medium">
                      {row.feature}
                    </td>
                    <td className="py-4 px-5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#72f5e3]/15 border border-[#72f5e3]/30 flex items-center justify-center shrink-0">
                          <Check
                            className="w-2.5 h-2.5 text-[#72f5e3]"
                            weight="bold"
                          />
                        </div>
                        <span className="text-white/75 text-xs leading-tight text-left">
                          {row.custom}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                          <X
                            className="w-2.5 h-2.5 text-red-400"
                            weight="bold"
                          />
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

      {/* ════════════════════════════════════════════
            13. FAQ
        ════════════════════════════════════════════ */}
      <FAQ
        items={ecommerceFAQ}
        title="Common Questions"
        description="Everything you need to know about our e-commerce packages, what's included, and how we work."
      />

      {/* ════════════════════════════════════════════
            14. FINAL CTA
        ════════════════════════════════════════════ */}
      <section ref={ctaRef} className="relative z-10 py-16 md:py-24 px-6">
        <div
          className={`max-w-[900px] mx-auto text-center opacity-0 ${
            ctaVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
          }`}
        >
          <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
            Ready to build a store that
            <br />
            <span className="italic text-outline-2">actually scales?</span>
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-[580px] mx-auto">
            Get a free quote in 24 hours. Or just send a voice note on WhatsApp
            — we&apos;re real people, not a call centre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e7fe56] text-black font-semibold text-sm uppercase tracking-widest rounded-xl hover:bg-[#e7fe56]/90 transition-colors"
            >
              Request a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/27814272624?text=Hi%2C%20I%27m%20interested%20in%20an%20e-commerce%20store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold text-sm uppercase tracking-widest rounded-xl hover:border-[#25D366]/50 hover:text-[#25D366] hover:bg-[#25D366]/5 transition-colors"
            >
              <WhatsappLogo className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
