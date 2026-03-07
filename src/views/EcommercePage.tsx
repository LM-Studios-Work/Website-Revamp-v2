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
//  Internal Component: Feature Tooltip
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

  const sharedFeatures = [
    { text: "Free .co.za Domain Registration", tooltip: "We register your .co.za domain for free. Renewals are R200/year thereafter — no hidden domain markups." },
    "Premium Web Hosting",
    { text: "Free SSL Certificate", tooltip: "HTTPS secured. Your customers' data and payments are protected from day one, and Google rewards SSL sites with higher rankings." },
    { text: "Business Email Accounts", tooltip: "Professional email addresses like info@yourbrand.co.za included with your package." },
    { text: "Store Management Training", tooltip: "Personal Zoom walkthrough or a library of video tutorials so you can run your store independently from day one." },
  ];

  const packages = [
    {
      name: "The Essential Store",
      price: "R8,999",
      color: COLORS.lime,
      description: "The foundational setup for emerging brands.",
      features: [
        "50 products uploaded for you (Add UNLIMITED products yourself)",
        "Custom, mobile-first storefront",
        "Standard Flat-Rate Shipping",
        { text: "Secure Payment Integration", tooltip: "PayFast, Yoco, or Ozow — your choice." },
        "Inventory Management Dashboard",
        ...sharedFeatures,
      ],
      delivery: "7–10 working days",
    },
    {
      name: "The Growth Store",
      price: "R14,999",
      color: COLORS.purple,
      description: "Advanced features and cart recovery for serious retailers.",
      popular: true,
      features: [
        "100 products uploaded for you (Add UNLIMITED products yourself)",
        "Product Filtering & Search",
        { text: "WhatsApp Cart Recovery", tooltip: "Automatically follow up with abandoned checkouts via WhatsApp to recover lost sales." },
        "Google Shopping SEO",
        { text: "Advanced Analytics Dashboard", tooltip: "Track revenue, best-sellers, conversion rates, and customer behaviour in real-time." },
        ...sharedFeatures,
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
        ...sharedFeatures,
      ],
      delivery: "Project based",
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
      {/* 1. Hero */}
      <ServiceHero
        title="E-commerce engineered for performance, not just appearance."
        underlineColor="lime"
        description="We build high-performance online stores that load instantly, rank on Google, and are built to grow with your South African business. Move beyond slow, bloated templates and run a store designed to convert. Every package includes free hosting, a free .co.za domain, SSL, business email, and personal training."
      />

      {/* 2. The Reality Section */}
      <section ref={realityRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            <div className={`md:w-1/2 opacity-0 ${realityVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6 font-obviously">
                The <span className="italic text-outline-15">Reality</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Most agencies quote a 30-day turnaround to build a store. What they don't tell you is that they're just bolting a shopping cart onto a blogging platform — and charging you monthly platform fees forever.
              </p>
              <div className="space-y-4">
                {[
                  { text: "Dozens of plugins = severe technical bloat", color: COLORS.purple },
                  { text: "Slow load times = higher bounce rates", color: COLORS.purple },
                  { text: "Clunky checkout = abandoned carts", color: COLORS.purple },
                  { text: "Monthly platform fees = permanent overhead", color: COLORS.purple },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/60">
                    <Check className="w-5 h-5 shrink-0" style={{ color: item.color }} weight="bold" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className={`md:w-1/2 opacity-0 ${realityVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
              <div className="rounded-[32px] overflow-hidden border border-white/10 aspect-video md:aspect-square bg-white/5 flex items-center justify-center">
                <Storefront className="w-32 h-32 text-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Advantages */}
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
              Complete ownership. No hidden product limits. No monthly agency cuts from your sales. Every package includes hosting, domain, SSL, business email, and personal training.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 ${packagesVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
            {packages.map((pkg, idx) => (
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
                      border: pkg.popular ? "none" : "1px solid rgba(255,255,255,0.1)",
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

      {/* 5. Trusted Payment Gateways Banner */}
      <section ref={gatewayRef} className="relative py-12 md:py-16 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className={`opacity-0 ${gatewayVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
            <p className="text-center text-white/40 text-xs font-bold uppercase tracking-widest mb-8">
              Trusted Payment Gateways — Integrated Into Every Store
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {[
                {
                  name: "PayFast",
                  color: "#00b0f0",
                  bg: "rgba(0,176,240,0.08)",
                  border: "rgba(0,176,240,0.25)",
                  description: "Credit Cards, Instant EFT, Apple Pay",
                },
                {
                  name: "Yoco",
                  color: "#0cae74",
                  bg: "rgba(12,174,116,0.08)",
                  border: "rgba(12,174,116,0.25)",
                  description: "Card Payments, Online & In-store",
                },
                {
                  name: "Ozow",
                  color: "#7c3aed",
                  bg: "rgba(124,58,237,0.08)",
                  border: "rgba(124,58,237,0.25)",
                  description: "Instant EFT, Pay-by-Link",
                },
              ].map((gw) => (
                <div
                  key={gw.name}
                  className="flex flex-col items-center justify-center gap-2 px-8 py-6 rounded-2xl min-w-[180px] flex-1 max-w-[260px]"
                  style={{
                    background: gw.bg,
                    border: `1px solid ${gw.border}`,
                  }}
                >
                  <div
                    className="text-2xl font-black tracking-tight"
                    style={{ color: gw.color }}
                  >
                    {gw.name}
                  </div>
                  <CreditCard className="w-6 h-6 opacity-50" style={{ color: gw.color }} />
                  <p className="text-white/40 text-[11px] text-center leading-tight">{gw.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-white/30 text-xs mt-6 max-w-lg mx-auto">
              All gateways are South African-friendly, PCI-DSS compliant, and support major cards, Instant EFT, Apple Pay, and Google Pay.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Backend Dashboard Showcase */}
      <section ref={dashboardRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            {/* Left: Copy */}
            <div className={`md:w-5/12 shrink-0 opacity-0 ${dashboardVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
              <p className="text-[#72f5e3] text-sm font-semibold uppercase tracking-widest mb-4">
                Easy-to-Use Dashboard
              </p>
              <h2 className="text-4xl md:text-[50px] font-bold leading-tight text-white mb-6 font-obviously">
                Run your store without <span className="italic text-outline-15">a developer</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Your store comes with a clean, intuitive management dashboard. Add products, fulfil orders, track revenue, and manage customers — all from one place, on any device.
              </p>
              <div className="space-y-4">
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
                      <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Mock Dashboard UI */}
            <div className={`md:w-7/12 opacity-0 ${dashboardVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] overflow-hidden">
                {/* Dashboard Top Bar */}
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

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-px border-b border-white/[0.07]">
                  {[
                    { label: "Revenue Today", value: "R4,320", up: true },
                    { label: "Orders", value: "18", up: true },
                    { label: "Products", value: "Unlimited", up: false },
                  ].map((stat) => (
                    <div key={stat.label} className="px-4 py-4 bg-white/[0.02]">
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">{stat.label}</p>
                      <p className="text-white font-bold text-lg leading-none">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Product List Preview */}
                <div className="p-5">
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mb-3">Recent Products</p>
                  <div className="space-y-2">
                    {[
                      { name: "Classic Cotton Tee — White", price: "R299", stock: "In Stock" },
                      { name: "Premium Hoodie — Black", price: "R599", stock: "In Stock" },
                      { name: "Snapback Cap — Logo", price: "R199", stock: "Low Stock" },
                    ].map((product) => (
                      <div
                        key={product.name}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                            <Package className="w-3.5 h-3.5 text-white/40" />
                          </div>
                          <span className="text-white/70 text-xs">{product.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-white/50 text-xs">{product.price}</span>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              product.stock === "In Stock"
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

                  {/* Bottom Note */}
                  <div className="mt-4 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#72f5e3]/5 border border-[#72f5e3]/15">
                    <GraduationCap className="w-4 h-4 text-[#72f5e3] shrink-0" />
                    <p className="text-white/50 text-xs leading-relaxed">
                      <span className="text-white/80 font-semibold">Store Training Included</span> — Zoom walkthrough or video tutorials so you can manage this yourself from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Portfolio Section */}
      <section ref={projectsRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className={`flex flex-wrap items-center justify-between mb-12 opacity-0 ${projectsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
            <div>
              <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3">Our Portfolio</p>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white font-obviously">
                Stores we&apos;ve <span className="italic text-outline-15">built</span>
              </h2>
            </div>
            <div className="mt-6 md:mt-0">
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

      {/* 8. Testimonials */}
      <section id="testimonials" aria-labelledby="ecom-testimonials-heading">
        <TestimonialsHeader />
        <TestimonialsGrid />
      </section>

      {/* 9. Custom Next.js vs WordPress Comparison Table */}
      <section ref={comparisonRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className={`mb-12 opacity-0 ${comparisonVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3">Why Custom?</p>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4 font-obviously">
              Custom Next.js <span className="italic text-outline-15">vs.</span> WordPress Templates
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              Not all stores are created equal. Here&apos;s what you&apos;re actually getting — and what you&apos;re giving up — when you choose a cheap template over a custom build.
            </p>
          </div>

          <div className={`overflow-x-auto opacity-0 ${comparisonVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-5 text-white/40 text-xs font-bold uppercase tracking-widest w-1/3">Feature</th>
                  <th className="py-4 px-5 text-center w-1/3">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e7fe56]/10 border border-[#e7fe56]/30 text-[#e7fe56] text-xs font-bold uppercase tracking-widest">
                      <Rocket className="w-3.5 h-3.5" />
                      LMWebDesign (Custom Next.js)
                    </span>
                  </th>
                  <th className="py-4 px-5 text-center w-1/3">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-bold uppercase tracking-widest">
                      Cheap WordPress Templates
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-white/[0.07] ${idx % 2 === 0 ? "bg-white/[0.015]" : ""}`}
                  >
                    <td className="py-4 px-5 text-white/70 text-sm font-medium">{row.feature}</td>
                    <td className="py-4 px-5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#72f5e3]/15 border border-[#72f5e3]/30 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#72f5e3]" weight="bold" />
                        </div>
                        <span className="text-white/80 text-xs leading-tight text-left">{row.custom}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                          <X className="w-2.5 h-2.5 text-red-400" weight="bold" />
                        </div>
                        <span className="text-white/40 text-xs leading-tight text-left">{row.wordpress}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <FAQ
        items={ecommerceFAQ}
        title="Common Questions"
        description="Everything you need to know about our e-commerce packages, what's included, and how we work."
      />

      {/* 11. CTA */}
      <CTASection
        heading={<>Ready to build a store that<br /><span className="italic text-outline-15">actually scales?</span></>}
        linkTo="/contact"
        linkText="Get a Custom Quote"
        color="lime"
      />
    </>
  );
}
