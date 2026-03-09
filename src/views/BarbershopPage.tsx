"use client";

import React from "react";
import {
  Check,
  ArrowRight,
  Clock,
  ShieldCheck,
  LockKey,
  Toolbox,
  WhatsappLogo,
  Calendar,
  CreditCard,
  ShoppingCart,
  Lightning,
  CloudArrowUp,
  UsersThree,
} from "@phosphor-icons/react";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessCard } from "@/components/ProcessCard";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/sections/FAQ";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useDraggableScroll } from "@/hooks/useDraggableScroll";

const WA_BASE = "https://wa.me/27814272624?text=Hi%2C%20I'm%20interested%20in%20";

type FeatureItem = string | { text: string; tooltip: string };

// ─── Tooltip ───────────────────────────────────────
const FeatureTooltip = ({ text }: { text: string }) => (
  <span className="relative inline-flex items-center group/tooltip ml-1.5 align-middle">
    <span className="w-[15px] h-[15px] rounded-full border border-white/30 text-white/50 text-[9px] font-bold inline-flex items-center justify-center cursor-help hover:border-[#e7fe56]/70 hover:text-[#e7fe56] transition-colors select-none">
      ?
    </span>
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-[#111111] border border-white/10 text-white/85 text-xs leading-relaxed px-3 py-2.5 rounded-xl pointer-events-none opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 z-50 shadow-2xl whitespace-normal">
      {text}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#111111]" />
    </span>
  </span>
);

const FeatureListItem = ({ feature }: { feature: FeatureItem }) => {
  const isObj = typeof feature === "object";
  return (
    <div className="flex items-center gap-4 py-3 border-b-2 border-white/[0.09] last:border-b-0">
      <div className="shrink-0 w-8 h-8 rounded-full bg-[#72f5e3] flex items-center justify-center shadow-[0_0_10px_rgba(114,245,227,0.3)]">
        <Check className="w-4 h-4 text-black" weight="bold" />
      </div>
      <span className="text-sm text-white/75 leading-relaxed inline-flex flex-wrap items-center gap-x-0.5">
        {isObj ? (feature as { text: string; tooltip: string }).text : (feature as string)}
        {isObj && <FeatureTooltip text={(feature as { text: string; tooltip: string }).tooltip} />}
      </span>
    </div>
  );
};

// ─── Data ───────────────────────────────────────
const packages: {
  title: string;
  subtitle?: string;
  price: string;
  roi: string;
  type: string;
  delivery: string;
  waText: string;
  popular?: boolean;
  features: FeatureItem[];
}[] = [
  {
    title: "PROFESSIONAL BOOKING SYSTEM",
    subtitle: "Complete online presence + automated scheduling",
    price: "R9,999",
    roi: "Eliminate no-shows and manual scheduling from day one.",
    type: "once-off",
    delivery: "10–14 working days",
    waText: "the%20Professional%20Booking%20System%20package",
    features: [
      "Custom, mobile-optimised website design",
      "Integrated Online Booking System (staff & service selection)",
      "Automated client scheduling calendar",
      { text: "Secure Payment Integration (Yoco, PayFast, Ozow)", tooltip: "Clients pay upfront online. No-shows drop to near zero when money is already committed." },
      "1 Year Premium Web Hosting included",
      "Free .co.za Domain Registration",
      "Free SSL Certificate",
      "Business Email Accounts",
      "System Handover and Management Training",
    ],
  },
  {
    title: "BARBERSHOP & RETAIL STORE",
    subtitle: "Bookings + E-Commerce for grooming products",
    price: "R14,999",
    roi: "Revenue that isn't limited to cutting hours.",
    type: "once-off",
    delivery: "14–18 working days",
    waText: "the%20Barbershop%20and%20Retail%20Store%20package",
    popular: true,
    features: [
      "Everything in the Professional Booking System, plus:",
      "Integrated E-Commerce Store",
      "Up to 50 retail products uploaded for you",
      "Add unlimited products yourself at any time",
      { text: "Inventory management tracking", tooltip: "Know when stock is running low before it's ever a problem for a client." },
      "System Handover and Management Training",
    ],
  },
];

const processSteps = [
  { step: 1, variant: "lime" as const, title: "Discovery Call", description: "We learn about your shop, your services, your staff, and how you currently handle bookings — so the system fits your exact workflow." },
  { step: 2, variant: "purple" as const, title: "Design & UX", description: "We design the website and booking flow to match your brand. You approve every screen before a single line of code is written." },
  { step: 3, variant: "cyan" as const, title: "Build & Integrate", description: "Custom Next.js development. Payment gateways, booking calendar, and product store are all built and connected." },
  { step: 4, variant: "glass" as const, title: "Setup & Test", description: "Your services, pricing, staff, and hours are all configured. We run end-to-end booking and payment tests before anything goes live." },
  { step: 5, variant: "lime" as const, title: "Launch & Training", description: "Go live with a personal handover session. You and your team walk away knowing exactly how to manage the system independently." },
];

const faqItems = [
  { question: "Will I lose my walk-in customers?", answer: "No. You maintain full control over your calendar. You can allocate specific chairs or hours strictly for walk-ins while keeping the rest reserved for guaranteed, prepaid online bookings." },
  { question: "How do the payment integrations work?", answer: "We connect the site to your existing Yoco, PayFast, or Ozow merchant account. When a client pays for a booking or product, the money goes directly to your account — we never touch your funds." },
  { question: "Is the system easy for my staff to use?", answer: "Yes. The dashboard is designed to be straightforward. During handover training we show you and your staff how to check the daily schedule, adjust working hours, and manage availability from any device." },
  { question: "What if I need to change my service prices later?", answer: "You have full access to a simple dashboard where you can update haircut prices, add new services, or change products at any time — no developer required." },
];

// ─── Page ───────────────────────────────────────
export const BarbershopPage = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.1);
  const { ref: problemsRef, isVisible: problemsVisible } = useScrollAnimation(0.15);
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollAnimation(0.1);
  const { ref: packagesRef, isVisible: packagesVisible } = useScrollAnimation(0.1);
  const { ref: warrantyRef, isVisible: warrantyVisible } = useScrollAnimation(0.15);
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation(0.1);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.1);
  const { ref: dragRef, events: dragEvents, isDragging } = useDraggableScroll();

  return (
    <>
      {/* ════════════════════════════════════════════
            1. HERO
        ════════════════════════════════════════════ */}
      <ServiceHero
        title={
          <>
            Custom Websites &amp; Booking Systems for{" "}
            <span className="italic text-outline-15">Barbershops</span>
          </>
        }
        underlineColor="cyan"
        description="Professional digital storefronts built to manage your schedule, process payments, and eliminate the frustration of long waiting times for your clients. Once-off pricing — you own it outright."
        badge={
          <span className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#72f5e3] text-[#72f5e3]">
            Barbershop Solutions
          </span>
        }
      />

      {/* ════════════════════════════════════════════
            2. STATS STRIP
        ════════════════════════════════════════════ */}
      <section ref={statsRef} className="border-y border-white/[0.06] py-10 md:py-12 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 opacity-0 ${statsVisible ? "animate-[fadeInUp_0.6s_ease-out_0.1s_both]" : ""}`}>
            {[
              { value: "R0", label: "Monthly platform fees — ever", color: "#e7fe56" },
              { value: "0%", label: "Commission taken from your bookings", color: "#72f5e3" },
              { value: "6 mo", label: "Warranty included on every project", color: "#d5bff0" },
              { value: "100%", label: "You own the platform outright", color: "#e7fe56" },
            ].map((stat, idx) => (
              <div key={idx} className={`${idx < 3 ? "md:border-r md:border-white/[0.06]" : ""} md:px-10 first:md:pl-0 last:md:pr-0`}>
                <p className="text-4xl md:text-5xl font-bold tracking-tight mb-1.5 font-obviously" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-white/40 text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
            3. THE PROBLEM
        ════════════════════════════════════════════ */}
      <section ref={problemsRef} className="relative py-20 md:py-32 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">
            {/* Left: copy */}
            <div className={`md:w-1/2 opacity-0 ${problemsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
              <p className="text-[#72f5e3] text-sm font-semibold uppercase tracking-widest mb-5">
                The Reality of Running a Barbershop
              </p>
              <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-white mb-7">
                Your time is being wasted.{" "}
                <span className="italic text-outline-15">And it&apos;s costing you.</span>
              </h2>
              <p className="text-base text-white/55 leading-relaxed mb-8 max-w-[480px]">
                Phone calls during cuts. WhatsApp bookings that ghost you. Clients walking in to see a full
                waiting area and leaving. Every one of those is lost revenue that a proper system would have captured.
              </p>
              <div className="space-y-3.5">
                {[
                  "Clients walk out when they see a long queue — revenue gone",
                  "No-shows from WhatsApp bookings with no upfront commitment",
                  "Constant interruptions managing your schedule manually",
                  "Paying monthly fees to third-party booking apps you don't own",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/50 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: visual comparison card */}
            <div className={`md:w-1/2 opacity-0 ${problemsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
              <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-7 md:p-9">
                <p className="text-white/35 text-[11px] font-bold uppercase tracking-widest mb-6">
                  What a no-show actually costs you
                </p>
                <div className="space-y-0 mb-7">
                  {[
                    { label: "1 no-show per day", amount: "R300", width: "25%", note: "One missed haircut, gone forever." },
                    { label: "1 no-show per day × 1 month", amount: "R6,000", width: "55%", note: "That's a significant monthly revenue leak." },
                    { label: "1 no-show per day × 1 year", amount: "R72,000", width: "100%", note: "A full year of revenue evaporated." },
                  ].map((row) => (
                    <div key={row.label} className="py-4 border-b border-white/[0.06] last:border-b-0">
                      <div className="flex items-baseline justify-between mb-2.5">
                        <span className="text-white/40 text-xs font-medium">{row.label}</span>
                        <span className="text-xl font-bold text-red-400">{row.amount}</span>
                      </div>
                      <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                        <div className="h-full bg-red-400/35 rounded-full" style={{ width: row.width }} />
                      </div>
                      <p className="text-white/25 text-[11px] mt-1.5 italic">{row.note}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-[#72f5e3]/25 bg-[#72f5e3]/[0.04] p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[#72f5e3] text-[10px] font-bold uppercase tracking-widest mb-1">Our Booking System</p>
                    <p className="text-white/45 text-xs leading-relaxed">Upfront payment required. No payment, no booking.</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-3xl font-bold text-[#72f5e3] font-obviously">R9,999</span>
                    <p className="text-[#72f5e3]/40 text-[11px]">once-off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
            4. SOLUTION / FEATURES
        ════════════════════════════════════════════ */}
      <section ref={solutionRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className={`mb-12 opacity-0 ${solutionVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3">The Solution</p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px]">
              A system that{" "}
              <span className="italic text-outline-15">works while you cut</span>
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-[620px]">
              Your website handles bookings, payments, and scheduling automatically — 24 hours a day, on any device, without you lifting a finger.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 ${solutionVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
            {[
              {
                Icon: Calendar,
                color: "#72f5e3",
                title: "Seamless Online Bookings",
                desc: "Clients select their service, choose their preferred barber, and lock in a specific time. They arrive exactly when you're ready — no queue, no confusion.",
              },
              {
                Icon: CreditCard,
                color: "#e7fe56",
                title: "Upfront Payments & Deposits",
                desc: "Require a deposit or full payment at the time of booking. When people pay upfront, no-shows drop to near zero — instantly.",
              },
              {
                Icon: ShoppingCart,
                color: "#d5bff0",
                title: "E-Commerce Store",
                desc: "Sell branded beard oils, styling products, and accessories online. Your revenue isn't limited to cutting hours anymore.",
              },
              {
                Icon: UsersThree,
                color: "#72f5e3",
                title: "Staff Calendar Management",
                desc: "Each barber gets their own schedule. Block out lunch, leave, or walk-in slots. Full control from any device.",
              },
              {
                Icon: Lightning,
                color: "#e7fe56",
                title: "Sub-second Load Times",
                desc: "Built in Next.js, not WordPress. Your clients book on their phones — our sites load instantly for a frictionless experience.",
              },
              {
                Icon: LockKey,
                color: "#d5bff0",
                title: "No Commission, Ever",
                desc: "You own the website outright. No monthly fees to a booking platform. No percentage cuts from your sales. Zero.",
              },
            ].map(({ Icon, color, title, desc }) => (
              <div
                key={title}
                className="rounded-[24px] p-7 flex flex-col gap-4"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${color}18`, border: `1px solid ${color}35` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} weight="fill" />
                </div>
                <h3 className="text-base font-semibold font-obviously leading-tight">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
            5. PACKAGES
        ════════════════════════════════════════════ */}
      <section ref={packagesRef} id="packages" className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className={`mb-12 md:mb-16 opacity-0 ${packagesVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3">Transparent Pricing</p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] flex items-center gap-3">
              Barbershop Packages
              <span className="h-px flex-1 bg-white/10 ml-4 hidden md:block" />
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-[650px]">
              Once-off pricing. No monthly retainers, no commission cuts, no hidden fees. Your first year of hosting is included.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
            {packages.map((pkg, pkgIdx) => (
              <div
                key={pkg.title}
                className={`relative flex flex-col h-full rounded-2xl opacity-0 ${packagesVisible ? `animate-[fadeInUp_0.8s_ease-out_${["0.2s", "0.35s"][pkgIdx]}_both]` : ""}`}
                style={
                  pkg.popular
                    ? { background: "rgba(255,255,255,0.04)", backdropFilter: "blur(4px)", boxShadow: "0 0 0 2px rgba(196,181,253,0.9), 0 0 40px rgba(196,181,253,0.25)" }
                    : { background: "rgba(255,255,255,0.02)", backdropFilter: "blur(4px)", boxShadow: "0 0 0 1px rgba(255,255,255,0.15)" }
                }
              >
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-[#e7fe56] text-black text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap shadow-lg shadow-[#e7fe56]/20">
                    Most Popular
                  </div>
                )}
                <div className="px-7 pt-8 pb-5 border-b-2 border-white/[0.1]">
                  <h3 className="text-xl font-bold text-center text-white leading-tight uppercase tracking-wide font-obviously">{pkg.title}</h3>
                  {pkg.subtitle && <p className="text-xs text-white/40 mt-1 text-center">{pkg.subtitle}</p>}
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-white/50 font-semibold">from</span>
                      <span className="text-2xl font-semibold text-white">{pkg.price}</span>
                    </div>
                    <span className="text-xs text-white/50 uppercase tracking-wider border border-white/15 px-2 py-0.5 rounded-full">{pkg.type}</span>
                  </div>
                  <p className="mt-3 text-xs text-white/45 leading-relaxed text-center italic">{pkg.roi}</p>
                </div>
                <div className="flex-1 px-7 py-2">
                  {pkg.features.map((feature, fIdx) => <FeatureListItem key={fIdx} feature={feature} />)}
                </div>
                <div className="px-7 pb-7 pt-4 border-t-2 border-white/[0.1] mt-2 space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#e7fe56]/60 shrink-0" />
                    <span className="text-xs text-white/50 font-medium tracking-wide">
                      DELIVERY: <span className="text-white/80">{pkg.delivery}</span>
                    </span>
                  </div>
                  <a
                    href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-[#e7fe56] text-black hover:bg-[#e7fe56]/90 border-2 border-[#e7fe56] hover:shadow-lg hover:shadow-[#e7fe56]/30"
                  >
                    Request a Quote <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={`${WA_BASE}${pkg.waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-transparent text-white/50 border border-white/15 hover:border-[#25D366]/50 hover:text-[#25D366] hover:bg-[#25D366]/5"
                  >
                    <WhatsappLogo className="w-4 h-4" /> Chat on WhatsApp
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
          <div className={`mb-10 opacity-0 ${warrantyVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-white mb-3">
              What&apos;s <span className="italic text-outline-2">included</span>
            </h2>
            <p className="text-lg text-white/70 max-w-[600px]">Every project ships with built-in peace of mind — no hidden costs, no surprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`rounded-[24px] md:rounded-[32px] p-6 md:p-8 bg-[#e7fe56] text-black flex flex-col opacity-0 ${warrantyVisible ? "animate-[fadeInUp_0.8s_ease-out_0.3s_both]" : ""}`}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/10 flex items-center justify-center mb-5 md:mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold font-obviously mb-3">6-Month Warranty</h3>
              <p className="text-black/80 text-sm md:text-base leading-relaxed font-medium flex-1">
                Bug fixes, browser compatibility, and minor content adjustments — all covered for 6 months post-launch at no extra charge.
              </p>
              <div className="mt-5 pt-4 border-t border-black/10 space-y-1.5">
                {["Code bug fixes & broken links", "Browser compatibility patches", "Minor text & image swaps"].map((f) => (
                  <div key={f} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 shrink-0" /><span className="text-sm">{f}</span></div>
                ))}
              </div>
            </div>
            <div className={`rounded-[24px] md:rounded-[32px] p-6 md:p-8 bg-[#d5bff0] text-black flex flex-col opacity-0 ${warrantyVisible ? "animate-[fadeInUp_0.8s_ease-out_0.5s_both]" : ""}`}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/10 flex items-center justify-center mb-5 md:mb-6">
                <CloudArrowUp className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold font-obviously mb-3">Hosting &amp; Domain</h3>
              <p className="text-black/80 text-sm md:text-base leading-relaxed font-medium flex-1">
                Your first year of hosting is on us. After that, we keep things simple and affordable.
              </p>
              <div className="mt-5 pt-4 border-t border-black/10 space-y-1.5">
                {["First year hosting — free", ".co.za domain — included", "Free SSL certificate"].map((f) => (
                  <div key={f} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 shrink-0" /><span className="text-sm">{f}</span></div>
                ))}
              </div>
            </div>
            <div className={`rounded-[24px] md:rounded-[32px] p-6 md:p-8 bg-[#72f5e3] text-black flex flex-col opacity-0 ${warrantyVisible ? "animate-[fadeInUp_0.8s_ease-out_0.7s_both]" : ""}`}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/10 flex items-center justify-center mb-5 md:mb-6">
                <Toolbox className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold font-obviously mb-3">Technical Health</h3>
              <p className="text-black/80 text-sm md:text-base leading-relaxed font-medium flex-1">
                We keep your site fast, secure, and up to date so you can focus on your shop — not maintaining servers.
              </p>
              <div className="mt-5 pt-4 border-t border-black/10 space-y-1.5">
                {["Security & dependency patches", "Hosting & SSL management", "Core Web Vitals monitoring"].map((f) => (
                  <div key={f} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 shrink-0" /><span className="text-sm">{f}</span></div>
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
          <div className={`mb-10 opacity-0 ${processVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px]">
              Our <span className="italic text-outline-15">process</span>
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-[600px]">From first conversation to live booking system — a clear, structured build every time.</p>
          </div>
          <div className="-mx-6 md:-mx-12" style={{ WebkitMaskImage: "linear-gradient(to right, black 80%, transparent 100%)", maskImage: "linear-gradient(to right, black 80%, transparent 100%)" }}>
            <div ref={dragRef} {...dragEvents} className={`overflow-x-auto scrollbar-hide snap-x snap-mandatory md:snap-none scroll-px-6 md:scroll-px-12 px-6 md:px-12 pb-8 ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}`}>
              <div className="flex gap-4 md:gap-8 w-max justify-start pr-12 md:pr-32 pointer-events-none">
                {processSteps.map((card, idx) => (
                  <div key={card.step} className={`snap-start snap-always md:snap-align-none w-[280px] md:w-[400px] shrink-0 transition-all duration-700 pointer-events-auto ${processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                    <ProcessCard {...card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
            8. SEE OUR WORK
        ════════════════════════════════════════════ */}
      <section ref={galleryRef} className="relative py-16 md:py-20 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className={`opacity-0 ${galleryVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
            <div className="rounded-[32px] border border-white/[0.08] bg-white/[0.02] px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-[#72f5e3] text-sm font-semibold uppercase tracking-widest mb-3">See Our Work</p>
                <h2 className="text-[31.4375px] md:text-[40px] font-semibold font-obviously leading-[37.725px] md:leading-[50px] text-white mb-3">
                  Check out our latest{" "}
                  <span className="italic text-outline-15">barbershop project</span>
                </h2>
                <p className="text-white/50 text-base max-w-md">See exactly what we built for Xclusive Barber — a full booking and e-commerce system live in production.</p>
              </div>
              <a
                href="/projects/xclusive-barber"
                className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#72f5e3] text-black font-bold text-sm uppercase tracking-widest hover:bg-[#72f5e3]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#72f5e3]/25"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
            9. FAQ
        ════════════════════════════════════════════ */}
      <FAQ
        title="FAQ"
        items={faqItems}
        description={<><span className="text-white font-semibold">Got questions?</span> Everything you need to know about our barbershop booking and website solutions.</>}
      />

      {/* ════════════════════════════════════════════
            10. CTA
        ════════════════════════════════════════════ */}
      <CTASection heading="Ready to modernize your barbershop?" linkTo="/contact" linkText="Get in Touch" color="#72f5e3" />
    </>
  );
};
