"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  UserCircle,
  Buildings,
  Cake,
  Storefront,
  Check,
  Clock,
  ArrowRight,
  ShieldCheck,
  Toolbox,
  CloudArrowUp,
  WhatsappLogo,
  Lightning,
  Eye,
  MagnifyingGlass,
  Rocket,
  Robot,
  Timer,
  Funnel,
  Gauge,
  Headset,
  SealCheck,
  CaretDown,
} from "@phosphor-icons/react";
import { ProcessCard } from "@/components/ProcessCard";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { featuredProjects } from "@/sections/ProjectsSection/constants";
import { FAQ } from "@/sections/FAQ";
import { webDesignFAQ } from "@/sections/FAQ/constants";
import { ServiceHero } from "@/components/ServiceHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useDraggableScroll } from "@/hooks/useDraggableScroll";

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
//  Performance Metric Card
// ─────────────────────────────────────────────────
const PerformanceMetric = ({
  label,
  score = 100,
  icon: Icon,
}: {
  label: string;
  score?: number;
  icon: React.ElementType;
}) => (
  <div className="flex flex-col items-center gap-4 px-6 py-7 rounded-2xl border border-white/[0.08] bg-white/[0.03]">
    <div className="w-12 h-12 rounded-xl bg-[#e7fe56]/10 border border-[#e7fe56]/20 flex items-center justify-center">
      <Icon className="w-5 h-5 text-[#e7fe56]" weight="bold" />
    </div>
    <div className="text-3xl md:text-5xl font-bold text-white tabular-nums leading-none">
      {score}
      <span className="text-lg md:text-2xl text-white/30 font-semibold">/100</span>
    </div>
    <span className="text-white/55 text-xs font-semibold uppercase tracking-widest text-center leading-tight">
      {label}
    </span>
  </div>
);

// ─────────────────────────────────────────────────
//  Data: Packages
// ─────────────────────────────────────────────────
const packages: {
  title: string;
  price: string;
  roi: string;
  type: string;
  delivery: string;
  iconName: keyof typeof iconMap;
  features: FeatureItem[];
  popular?: boolean;
  subtitle?: string;
}[] = [
  {
    title: "PERSONAL PORTFOLIO WEBSITE",
    price: "R1,999",
    roi: "Land more clients and opportunities with a professional online presence that works for you 24/7.",
    type: "once-off",
    delivery: "4–6 working days",
    iconName: "Briefcase",
    features: [
      "Single-page or up to 3 sections",
      "Modern scrolling design with animations",
      "Project / work gallery",
      "CV / Resume download",
      {
        text: "Contact form & social links",
        tooltip:
          "Visitors can reach you directly from any device. Reduces friction so you never miss an opportunity.",
      },
      {
        text: "Mobile-responsive design",
        tooltip:
          "62% of SA web traffic is mobile. A phone-perfect site means zero missed leads.",
      },
      "Basic on-page SEO",
      "Custom domain setup",
      {
        text: "Google Maps Integration",
        tooltip:
          "Appear in Google Maps searches so local clients can find you instantly — for free.",
      },
    ],
  },
  {
    title: "ESSENTIAL BUSINESS WEBSITE",
    price: "R2,499",
    roi: "Stop losing leads to competitors. Generate enquiries around the clock while you focus on your business.",
    type: "once-off",
    delivery: "5–7 working days",
    iconName: "Globe",
    features: [
      "3 pages (Home, Services, Contact)",
      "Clean, professional design",
      {
        text: "Mobile-responsive layout",
        tooltip:
          "62% of SA web traffic is mobile. A phone-perfect site means zero missed leads.",
      },
      "Contact form with email notifications",
      {
        text: "Direct-to-WhatsApp Lead Funnel",
        tooltip:
          "Routes website visitors directly to your phone so you can close deals instantly — no email delays, no missed leads.",
      },
      "Social media integration",
      {
        text: "Local SEO optimisation",
        tooltip:
          "Optimises your site to rank on Google searches in your city. More visibility = more free, qualified traffic.",
      },
      "Custom domain setup",
      {
        text: "Google Maps Integration",
        tooltip:
          "Appear in Google Maps searches so locals can find you in seconds.",
      },
      {
        text: "Advanced Tracking & Analytics (GA4 & Meta Pixel)",
        tooltip:
          "Know exactly who visits, where they come from, and what they click — so you can slash ad costs and double your leads.",
      },
    ],
  },
  {
    title: "PROFESSIONAL BUSINESS WEBSITE",
    price: "R4,999",
    roi: "The complete lead-generation machine. Rank higher, capture more leads, and convert visitors into paying clients — automatically.",
    type: "once-off",
    delivery: "7–12 working days",
    popular: true,
    iconName: "Layers",
    features: [
      "Up to 6 pages",
      "Professionally structured content",
      "Image gallery or portfolio",
      "Client testimonials section",
      {
        text: "Google Maps Integration",
        tooltip:
          "Appear in Google Maps searches so locals can find you in seconds.",
      },
      "Advanced contact forms",
      {
        text: "Direct-to-WhatsApp Lead Funnel",
        tooltip:
          "Routes website visitors directly to your phone so you can close deals instantly — no email delays, no missed leads.",
      },
      {
        text: "Local SEO optimisation",
        tooltip:
          "Optimises your site to rank on Google searches in your city. More visibility = more free, qualified traffic.",
      },
      "Custom domain & professional email setup",
      {
        text: "Advanced Tracking & Analytics (GA4 & Meta Pixel)",
        tooltip:
          "Know exactly who visits, where they come from, and what they click — so you can slash ad costs and double your leads.",
      },
    ],
  },
  {
    title: "EVENT WEBSITE",
    subtitle: "(Birthdays, Weddings, etc.)",
    price: "R2,999",
    roi: "Drive maximum RSVPs and attendance with a stunning event site your guests will love.",
    type: "once-off",
    delivery: "5–8 working days",
    iconName: "Calendar",
    features: [
      "Event details and schedule",
      "RSVP form with guest list management",
      "Photo and video gallery",
      "Countdown timer",
      {
        text: "Google Maps Integration",
        tooltip:
          "Guests tap once to get directions — zero confusion, maximum attendance.",
      },
      "Gift registry or payment links",
      "Optional password protection",
      {
        text: "Mobile-friendly design",
        tooltip:
          "Most guests RSVP from their phones. We ensure the experience is seamless from any device.",
      },
    ],
  },
  {
    title: "E-COMMERCE WEBSITE",
    price: "R7,499",
    roi: "Turn your website into a 24/7 revenue engine. Sell to customers across South Africa while you sleep.",
    type: "once-off",
    delivery: "10–15 working days",
    iconName: "ShoppingCart",
    features: [
      "Up to 20 products",
      "Shopping cart and checkout",
      {
        text: "Secure payment gateway integration",
        tooltip:
          "Customers pay via card, EFT, or instant payment — reducing cart abandonment and boosting completed sales.",
      },
      "Product categories & inventory setup",
      "Order management system",
      {
        text: "Mobile-optimised storefront",
        tooltip:
          "Over 60% of online shopping in SA happens on mobile. A flawless mobile experience directly increases your sales.",
      },
      {
        text: "Product SEO",
        tooltip:
          "Your products appear in Google Shopping searches — free, qualified traffic that's already ready to buy.",
      },
      "Custom domain",
      {
        text: "Google Maps Integration",
        tooltip:
          "Drive foot traffic to your physical store while capturing online sales simultaneously.",
      },
    ],
  },
];

const iconMap = {
  Briefcase: UserCircle,
  Globe: Buildings,
  Layers: Storefront,
  Calendar: Cake,
  ShoppingCart: Storefront,
};

// ─────────────────────────────────────────────────
//  Data: Optional Add-ons (inside accordion)
// ─────────────────────────────────────────────────
const addOns = [
  {
    Icon: Rocket,
    title: "Professional Copywriting",
    price: "+R1,500 / page",
    description:
      "Our copywriters craft persuasive, SEO-optimised copy that converts browsers into buyers - written specifically for your industry.",
    color: "#e7fe56",
  },
  {
    Icon: Robot,
    title: "Automated WhatsApp Booking System",
    price: "+R3,500",
    description:
      "An automated system that captures bookings, sends confirmations, and reminds clients via WhatsApp - works 24/7.",
    color: "#c4b5fd",
  },
  {
    Icon: Timer,
    title: "48-Hour Rush Delivery",
    price: "+R2,500",
    description:
      "We prioritise your project above everything else and deliver a fully launched website within 48 hours.",
    color: "#72f5e3",
  },
];

// ─────────────────────────────────────────────────
//  Data: 5-Step Process
// ─────────────────────────────────────────────────
const processSteps = [
  {
    step: 1,
    variant: "lime" as const,
    title: "Kick-off Meeting",
    description:
      "We align on your objectives, target audience, and competitive landscape. Your dedicated designer gets to know your business inside out.",
  },
  {
    step: 2,
    variant: "purple" as const,
    title: "Sitemap & Strategy",
    description:
      "We map every page and plan the conversion flow - how visitors move from landing to lead to sale.",
  },
  {
    step: 3,
    variant: "cyan" as const,
    title: "Wireframes & Design",
    description:
      "Every pixel is designed in a high-fidelity UI mockup. You approve before a single line of code is written.",
  },
  {
    step: 4,
    variant: "glass" as const,
    title: "Development & Automation",
    description:
      "Custom Next.js build. Analytics, Maps, and tracking systems fully integrated.",
  },
  {
    step: 5,
    variant: "lime" as const,
    title: "Launch & Handover",
    description:
      "We submit to Google Search Console, configure your domain, and go live. Recorded handover included. Done in as little as 4 working days.",
  },
];

const WA_BASE =
  "https://wa.me/27814272624?text=Hi%2C%20I'm%20interested%20in%20";

// ─────────────────────────────────────────────────
//  Page component
// ─────────────────────────────────────────────────
export const WebDesignPage = () => {
  const [addOnsOpen, setAddOnsOpen] = useState(false);
  const { ref: dragRef, events: dragEvents, isDragging } = useDraggableScroll();

  const { ref: lighthouseRef, isVisible: lighthouseVisible } =
    useScrollAnimation(0.1);
  const { ref: packagesRef, isVisible: packagesVisible } =
    useScrollAnimation(0.1);
  const { ref: projectsRef, isVisible: projectsVisible } =
    useScrollAnimation(0.15);
  const { ref: advantagesRef, isVisible: advantagesVisible } =
    useScrollAnimation(0.1);
  const { ref: processRef, isVisible: processVisible } =
    useScrollAnimation(0.1);
  const { ref: warrantyRef, isVisible: warrantyVisible } =
    useScrollAnimation(0.15);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.15);

  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.replace("#", "");
      const scrollToId = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };
      if (!scrollToId()) setTimeout(scrollToId, 80);
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  return (
    <>
      {/* ══════════════════════════��═════════════════
            1. HERO
        ════════════════════════════════════════════ */}
      <ServiceHero
        title="Web Design"
        underlineColor="lime"
        description="Faster websites often capture leads that should be yours. We build high-performance, automated lead-generation systems that go beyond aesthetics. Our sites are engineered to rank on Google, capture enquiries automatically, and convert visitors into active clients. Packages start from R1,999 and include free hosting for the first year. Based in Midrand, we serve businesses across South Africa."
      />

      {/* ════════════════════════════════════════════
            2. PERFORMANCE (PageSpeed scores)
        ════════════════════════════════════════════ */}
      <section
        ref={lighthouseRef}
        className="relative z-10 py-16 md:py-24 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          {/* Heading row */}
          <div
            className={`mb-10 md:mb-14 opacity-0 ${
              lighthouseVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3">
              Google PageSpeed Insights
            </p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] flex items-center gap-3">
              Perfect scores.{" "}
              <span className="italic text-outline-15">Every time.</span>
              <span className="h-px flex-1 bg-white/10 ml-4 hidden md:block" />
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-[620px]">
              Every site we build scores 100/100 on Google&apos;s official
              performance tool — meaning lower ad costs, higher rankings, and
              faster load times than competitors.
            </p>
          </div>

          {/* Metric cards */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 ${
              lighthouseVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                : ""
            }`}
          >
            <PerformanceMetric label="Performance" score={100} icon={Gauge} />
            <PerformanceMetric label="Accessibility" score={100} icon={Eye} />
            <PerformanceMetric
              label="Best Practices"
              score={100}
              icon={SealCheck}
            />
            <PerformanceMetric
              label="SEO"
              score={100}
              icon={MagnifyingGlass}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
            3. SERVICE PACKAGES
        ════════════════════════════════════════════ */}
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
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] flex items-center gap-3">
              Service Packages
              <span className="h-px flex-1 bg-white/10 ml-4" />
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-[650px]">
              Enjoy transparent, once-off pricing with no monthly retainers and
              no hidden fees. Your first year of hosting is included with every
              package.
            </p>
          </div>

          {/* Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, pkgIdx) => {
              const IconComponent = iconMap[pkg.iconName];
              return (
                <div
                  key={pkg.title}
                  className={`relative flex flex-col h-full rounded-2xl opacity-0 ${
                    packagesVisible
                      ? `animate-[fadeInUp_0.8s_ease-out_${
                          ["0.2s", "0.3s", "0.4s", "0.5s", "0.6s"][pkgIdx]
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
                    {pkg.subtitle && (
                      <p className="text-xs text-white/40 mt-1 text-center">
                        {pkg.subtitle}
                      </p>
                    )}
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <span className="text-2xl font-semibold text-white">
                        {pkg.price}
                      </span>
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
                      href={`${WA_BASE}the%20${encodeURIComponent(
                        pkg.title.toLowerCase()
                      )}%20package`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-transparent text-white/50 border border-white/15 hover:border-[#25D366]/50 hover:text-[#25D366] hover:bg-[#25D366]/5"
                    >
                      <WhatsappLogo className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Optional Add-ons Accordion ── */}
          <div className="mt-10">
            <button
              onClick={() => setAddOnsOpen((v) => !v)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-colors text-left"
              aria-expanded={addOnsOpen}
            >
              <div>
                <span className="text-white font-semibold text-base">
                  Optional Add-ons
                </span>
                <span className="text-white/50 text-sm ml-3">
                  Supercharge your results from day one
                </span>
              </div>
              <CaretDown
                className={`w-5 h-5 text-white/50 shrink-0 transition-transform duration-300 ${
                  addOnsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Accordion body */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                addOnsOpen
                  ? "max-h-[600px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {addOns.map(({ Icon, title, price, description, color }) => (
                  <div
                    key={title}
                    className="rounded-3xl p-7 flex flex-col border border-white/10 bg-white/5 hover:border-white/20 transition-colors"
                  >
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                      style={{
                        backgroundColor: `${color}20`,
                        border: `1px solid ${color}40`,
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color }}
                        weight="fill"
                      />
                    </div>
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <h3 className="text-base font-semibold font-obviously leading-tight flex-1">
                        {title}
                      </h3>
                      <span
                        className="text-sm font-bold whitespace-nowrap shrink-0"
                        style={{ color }}
                      >
                        {price}
                      </span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed flex-1">
                      {description}
                    </p>
                    <a
                      href={`${WA_BASE}the%20${encodeURIComponent(
                        title.toLowerCase()
                      )}%20add-on`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 flex items-center gap-2 text-sm text-white/40 hover:text-[#25D366] transition-colors"
                    >
                      <WhatsappLogo className="w-4 h-4" />
                      Ask about this add-on
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. PORTFOLIO / CASE STUDIES
      ════════════════════════════════════════════ */}
      <section ref={projectsRef} className="relative z-10 py-16 md:py-28 px-6">
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
          5. WHY LMWEBDESIGN (horizontal scroll on mobile)
      ════════════════════════════════════════════ */}
      {/* ════════════════════════════════════════════
          6. OUR PROCESS & WHAT'S INCLUDED (combined)
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
              From first conversation to Google-indexed website - in as little
              as 4 working days.
            </p>
          </div>

          {/* Process steps — single horizontal scroll on all devices */}
          <div
            className="-mx-6 md:-mx-12"
            style={{
              WebkitMaskImage: "linear-gradient(to right, black 80%, transparent 100%)",
              maskImage: "linear-gradient(to right, black 80%, transparent 100%)",
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

          {/* ── What's Included ── */}
          <div ref={warrantyRef} className="mt-16 md:mt-20">
            <div
              className={`mb-10 opacity-0 ${
                warrantyVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                  : ""
              }`}
            >
              <h2 className="text-4xl md:text-[50px] font-bold font-obviously leading-tight text-white mb-3">
                What&apos;s{" "}
                <span className="italic text-outline-2">included</span>
              </h2>
              <p className="text-lg text-white/70 max-w-[600px]">
                Every project ships with built-in peace of mind — no hidden
                costs, no surprises.
              </p>
            </div>

            <div>
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
                    minor content adjustments - all covered for 6 months
                    post-launch at no extra charge.
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
                  {/* Care plan note */}
                  <p className="mt-4 text-xs text-black/60">
                    After your 6-month warranty, optional Care Plans start at
                    R350/mo.{" "}
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
                    Your first year of hosting is on us. After that, we keep
                    things simple and affordable.
                  </p>
                  <div className="mt-5 pt-4 border-t border-black/10 space-y-1.5">
                    {[
                      "First year hosting — free",
                      ".com renewal — R400 / year",
                      ".co.za renewal — R150 / year",
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
                    We keep your site fast, secure, and up to date so you can
                    focus on running your business.
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
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          7. FINAL CTA
      ════════════════════════════════════════════ */}
      <section ref={ctaRef} className="relative z-10 py-16 md:py-24 px-6">
        <div
          className={`max-w-[900px] mx-auto text-center opacity-0 ${
            ctaVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
          }`}
        >
          <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
            Ready to stop losing leads
            <br />
            <span className="italic text-outline-2">to a slower website?</span>
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-[580px] mx-auto">
            Get a free quote in 24 hours. Or just send a voice note on WhatsApp
            - we&apos;re real people, not a call centre.
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
              href="https://wa.me/27814272624?text=Hi%2C%20I%27m%20interested%20in%20a%20website"
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

      {/* ════════════════════════════════════════════
          8. FAQ
      ════════════════════════════════════════════ */}
      <FAQ items={webDesignFAQ} title="Web Design FAQ" />
    </>
  );
};
