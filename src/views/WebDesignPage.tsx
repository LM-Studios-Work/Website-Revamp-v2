"use client";

import { usePathname } from "next/navigation";
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
  TrendUp,
  ChartBar,
  Rocket,
  Robot,
  Timer,
  Funnel,
  Gauge,
  Headset,
  SealCheck,
} from "@phosphor-icons/react";
import { ProcessCard } from "@/components/ProcessCard";
import { useEffect } from "react";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { featuredProjects } from "@/sections/ProjectsSection/constants";
import { FAQ } from "@/sections/FAQ";
import { webDesignFAQ } from "@/sections/FAQ/constants";
import { ServiceHero } from "@/components/ServiceHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// ─────────────────────────────────────────────────
//  Types
// ─────────────────────────────────────────────────
type FeatureItem = string | { text: string; tooltip: string };

// ─────────────────────────────────────────────────
//  Tooltip component
// ─────────────────────────────────────────────────
const FeatureTooltip = ({ text }: { text: string }) => (
  <span className="relative inline-flex items-center group/tooltip ml-1.5 align-middle">
    <span
      className="w-[15px] h-[15px] rounded-full border border-white/30 text-white/50 text-[9px] font-bold inline-flex items-center justify-center cursor-help hover:border-[#b4eb2c]/70 hover:text-[#b4eb2c] transition-colors select-none"
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

// ─────────────────────────────────────────────────
//  Feature list item renderer
// ─────────────────────────────────────────────────
const FeatureListItem = ({ feature }: { feature: FeatureItem }) => {
  const isObj = typeof feature === "object";
  return (
    <div className="flex items-start gap-3">
      <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#b4eb2c]/70 transition-colors duration-300 group-hover:text-[#b4eb2c]" />
      <span className="text-sm text-white/80 leading-relaxed inline-flex flex-wrap items-center gap-x-0.5">
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
//  Lighthouse Dial component (Google PageSpeed style)
// ─────────────────────────────────────────────────
const LighthouseDial = ({
  label,
  score = 100,
  icon: Icon,
}: {
  label: string;
  score?: number;
  icon: React.ElementType;
}) => {
  const r = 44;
  const circumference = 2 * Math.PI * r; // ~276.46
  const trackArc = circumference * 0.75; // 270° arc
  const gap = circumference * 0.25;
  const fillArc = (score / 100) * trackArc;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <svg
          viewBox="0 0 120 120"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
          aria-label={`${label}: ${score} out of 100`}
        >
          {/* Background track */}
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke="#1e1e1e"
            strokeWidth="10"
            strokeDasharray={`${trackArc} ${gap}`}
            strokeLinecap="round"
            transform={`rotate(-225, 60, 60)`}
          />
          {/* Score arc */}
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke="#0cce6b"
            strokeWidth="10"
            strokeDasharray={`${fillArc} ${circumference - fillArc}`}
            strokeLinecap="round"
            transform={`rotate(-225, 60, 60)`}
          />
          {/* Score text */}
          <text
            x="60"
            y="60"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="28"
            fontWeight="700"
            fill="white"
          >
            {score}
          </text>
        </svg>
        {/* Icon badge */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0cce6b] flex items-center justify-center shadow-lg shadow-[#0cce6b]/30">
          <Icon className="w-3.5 h-3.5 text-black" weight="bold" />
        </div>
      </div>
      <span className="text-white/70 text-xs md:text-sm font-medium tracking-wide text-center leading-tight">
        {label}
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
          "Appear in Google Maps searches so locals can find you in seconds. The fastest way to attract walk-in customers.",
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
    roi: "The complete lead-generation machine. Rank higher on Google, capture more leads, and convert visitors into paying clients — automatically.",
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
          "Appear in Google Maps searches so locals can find you in seconds. The fastest way to attract walk-in customers.",
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
    roi: "Drive maximum RSVPs and attendance with a stunning event site your guests will love and actually use.",
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
      "We map every page and plan the conversion flow — how visitors move from landing to lead to sale.",
  },
  {
    step: 3,
    variant: "cyan" as const,
    title: "Wireframes & Design",
    description:
      "Wireframes establish the layout, then every pixel is designed in a high-fidelity UI mockup. You approve before a single line of code is written.",
  },
  {
    step: 4,
    variant: "glass" as const,
    title: "Development & Automation",
    description:
      "We hand-code your site in Next.js — no bloated page builders. WhatsApp funnels, analytics, Maps, and tracking pixels are all integrated and tested.",
  },
  {
    step: 5,
    variant: "lime" as const,
    title: "Launch & Handover",
    description:
      "We submit to Google Search Console, configure your domain, and go live. You get a recorded walkthrough handover. Done in as little as 4 working days.",
  },
];

// ─────────────────────────────────────────────────
//  Data: Premium Add-ons
// ─────────────────────────────────────────────────
const addOns = [
  {
    Icon: Rocket,
    title: "Professional Copywriting",
    price: "+R1,500 / page",
    description:
      "Don't waste days writing your own website text. Our copywriters craft persuasive, SEO-optimised copy that converts browsers into buyers — written specifically for your industry and audience.",
    color: "#e7fe56",
  },
  {
    Icon: Robot,
    title: "Automated WhatsApp Booking System",
    price: "+R3,500",
    description:
      "Replace your receptionist with an automated system that captures bookings, sends confirmations, and reminds clients — all via WhatsApp. Works 24/7 so you never lose a booking again.",
    color: "#d5bff0",
  },
  {
    Icon: Timer,
    title: "48-Hour Rush Delivery",
    price: "+R2,500",
    description:
      "Need it live urgently? We prioritise your project above everything else and deliver a fully launched website within 48 hours. Perfect for last-minute campaigns and tight business deadlines.",
    color: "#72f5e3",
  },
];

// ─────────────────────────────────────────────────
//  Data: Care & Growth Plan tiers
// ─────────────────────────────────────────────────
const carePlanTiers = [
  {
    name: "Basic Care",
    price: "R350",
    period: "/month",
    tagline: "Stay live, stay secure.",
    color: "#e7fe56",
    features: [
      "Premium managed hosting",
      "SSL certificate management",
      "Core Web Vitals monitoring",
      "Security & uptime monitoring",
      "Priority email support",
    ],
  },
  {
    name: "Growth Care",
    price: "R550",
    period: "/month",
    tagline: "Keep growing after launch.",
    color: "#d5bff0",
    popular: true,
    features: [
      "Everything in Basic Care",
      "2 hours of content updates / month",
      "Monthly performance report",
      "Google Analytics review",
      "1 new section per quarter",
    ],
  },
  {
    name: "Premium Care",
    price: "R750",
    period: "/month",
    tagline: "Maximum performance, zero effort.",
    color: "#72f5e3",
    features: [
      "Everything in Growth Care",
      "Unlimited minor content updates",
      "Advanced analytics & conversion review",
      "Heat mapping setup",
      "Priority same-day support",
    ],
  },
];

// ─────────────────────────────────────────────────
//  WhatsApp helper
// ─────────────────────────────────────────────────
const WA_BASE =
  "https://wa.me/27814272624?text=Hi%2C%20I'm%20interested%20in%20";

// ─────────────────────────────────────────────────
//  Page component
// ─────────────────────────────────────────────────
export const WebDesignPage = () => {
  const { ref: advantagesRef, isVisible: advantagesVisible } =
    useScrollAnimation(0.15);
  const { ref: lighthouseRef, isVisible: lighthouseVisible } =
    useScrollAnimation(0.1);
  const { ref: processRef, isVisible: processVisible } =
    useScrollAnimation(0.1);
  const { ref: packagesRef, isVisible: packagesVisible } =
    useScrollAnimation(0.1);
  const { ref: addOnsRef, isVisible: addOnsVisible } =
    useScrollAnimation(0.15);
  const { ref: warrantyRef, isVisible: warrantyVisible } =
    useScrollAnimation(0.15);
  const { ref: carePlanRef, isVisible: carePlanVisible } =
    useScrollAnimation(0.1);
  const { ref: projectsRef, isVisible: projectsVisible } =
    useScrollAnimation(0.15);

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
      if (!scrollToId()) {
        setTimeout(scrollToId, 80);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  return (
    <>
      {/* ─── HERO ─── */}
      <ServiceHero
        title="Web Design"
        underlineColor="lime"
        description="Your competitors' faster websites are stealing your leads right now. We build lightning-fast, automated lead-generation systems — not just pretty websites — that rank on Google, capture enquiries on autopilot, and convert visitors into paying clients. Packages from R1,999 with free first-year hosting. Based in Midrand, serving all of South Africa."
      />

      {/* ─── YOUR UNFAIR ADVANTAGES ─── */}
      <section ref={advantagesRef} className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 md:mb-16 opacity-0 ${
              advantagesVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#b4eb2c] text-sm font-semibold uppercase tracking-widest mb-3">
              Why LMWebDesign
            </p>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              Your website is in
              <br />
              <span className="italic text-outline-2">good hands</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[600px]">
              We don&apos;t just make things look pretty. Every decision we make
              is engineered to make your business more money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — No Bloat */}
            <div
              className={`rounded-3xl p-8 bg-[#e7fe56] text-black flex flex-col opacity-0 ${
                advantagesVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
                <Lightning className="w-5 h-5" weight="fill" />
              </div>
              <h3 className="text-2xl font-semibold font-obviously mb-3">
                100% Custom. Zero Bloat.
              </h3>
              <p className="text-black/80 text-sm leading-relaxed flex-1">
                Every website is hand-coded in Next.js from scratch — no
                WordPress, no drag-and-drop builders, no 500 KB plugin
                overhead. The result: sub-second load times that Google rewards
                with higher rankings and lower ad costs.
              </p>
              <div className="mt-6 pt-4 border-t border-black/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-black/50 mb-1">
                  The business impact
                </p>
                <p className="text-sm font-medium">
                  A 1-second delay costs you 7% of your sales. Our sites
                  eliminate that loss entirely.
                </p>
              </div>
            </div>

            {/* Card 2 — Direct Communication */}
            <div
              className={`rounded-3xl p-8 bg-[#d5bff0] text-black flex flex-col opacity-0 ${
                advantagesVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
                <Headset className="w-5 h-5" weight="fill" />
              </div>
              <h3 className="text-2xl font-semibold font-obviously mb-3">
                Direct Communication. Always.
              </h3>
              <p className="text-black/80 text-sm leading-relaxed flex-1">
                You deal directly with your developer — no annoying account
                managers, no middlemen playing telephone, no week-long response
                times. WhatsApp us and get a real answer the same day.
              </p>
              <div className="mt-6 pt-4 border-t border-black/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-black/50 mb-1">
                  The business impact
                </p>
                <p className="text-sm font-medium">
                  Faster decisions mean faster builds. Your site goes live while
                  competitors are still in revision round 4 with their agency.
                </p>
              </div>
            </div>

            {/* Card 3 — Built for Conversions */}
            <div
              className={`rounded-3xl p-8 bg-[#72f5e3] text-black flex flex-col opacity-0 ${
                advantagesVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.6s_both]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
                <Funnel className="w-5 h-5" weight="fill" />
              </div>
              <h3 className="text-2xl font-semibold font-obviously mb-3">
                Built to Convert. Not Just Impress.
              </h3>
              <p className="text-black/80 text-sm leading-relaxed flex-1">
                Every layout, button placement, and call-to-action is
                engineered to push users toward checkout or a WhatsApp message.
                We don&apos;t design for awards — we design for leads.
              </p>
              <div className="mt-6 pt-4 border-t border-black/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-black/50 mb-1">
                  The business impact
                </p>
                <p className="text-sm font-medium">
                  Higher conversion rates mean more customers from the same
                  traffic — without spending more on ads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GOOGLE LIGHTHOUSE PERFORMANCE PROOF ─── */}
      <section
        ref={lighthouseRef}
        className="relative z-10 py-16 md:py-28 px-6 overflow-hidden"
      >
        {/* Subtle green glow at the top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0cce6b]/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-[#0cce6b]/25 to-transparent" />

        <div className="max-w-[1400px] w-full mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 md:mb-16 opacity-0 ${
              lighthouseVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0cce6b]/30 bg-[#0cce6b]/10 text-[#0cce6b] text-xs font-semibold uppercase tracking-widest mb-6">
              <SealCheck className="w-4 h-4" weight="fill" />
              Google PageSpeed Insights · Perfect 100 / 100
            </div>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
              We Don&apos;t Just Promise Fast.
              <br />
              <span className="italic text-outline-2">We Prove It.</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[700px] mx-auto">
              Every website we build scores a perfect{" "}
              <strong className="text-white">100 / 100</strong> on
              Google&apos;s own performance measurement tool. This
              isn&apos;t a developer flex — it&apos;s the difference between
              ranking on page 1 or page 10, and between expensive ads and
              cheap ones.
            </p>
          </div>

          {/* The 4 Dials */}
          <div
            className={`flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 mb-14 md:mb-20 opacity-0 ${
              lighthouseVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                : ""
            }`}
          >
            <LighthouseDial label="Performance" score={100} icon={Gauge} />
            <LighthouseDial label="Accessibility" score={100} icon={Eye} />
            <LighthouseDial
              label="Best Practices"
              score={100}
              icon={SealCheck}
            />
            <LighthouseDial
              label="SEO"
              score={100}
              icon={MagnifyingGlass}
            />
          </div>

          {/* 3 Impact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: TrendUp,
                headline: "Rank Higher. Spend Less on Ads.",
                body: "Google rewards fast, perfectly coded sites with higher organic rankings and lower cost-per-click on paid campaigns. Our clients get the same Google Ads placement as competitors spending 3× more — because our Quality Score is simply better.",
                delay: "0.5s",
              },
              {
                Icon: MagnifyingGlass,
                headline: "Guaranteed to Get Found on Google.",
                body: "Every site we launch includes Google Search Console setup and full sitemap submission. We don't just build your site — we actively tell Google it exists, submit every page for indexing, and monitor your search visibility so you always show up.",
                delay: "0.7s",
              },
              {
                Icon: ChartBar,
                headline: "Watch Your Traffic Grow in Real-Time.",
                body: "Every Essential and Professional package includes Google Analytics 4 and Meta Pixel setup. You get a live dashboard showing exactly where visitors come from, which pages convert best, and the real ROI of your website investment.",
                delay: "0.9s",
              },
            ].map(({ Icon, headline, body, delay }) => (
              <div
                key={headline}
                className={`rounded-2xl p-7 bg-white/5 border border-white/10 hover:border-[#0cce6b]/20 transition-colors opacity-0 ${
                  lighthouseVisible
                    ? `animate-[fadeInUp_0.8s_ease-out_${delay}_both]`
                    : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#0cce6b]/10 border border-[#0cce6b]/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#0cce6b]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {headline}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5-STEP PROCESS ─── */}
      <section
        ref={processRef}
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 md:mb-16 opacity-0 ${
              processVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px]">
              Our{" "}
              <span className="italic text-outline-15">process</span>
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-[600px]">
              From first conversation to Google-indexed, lead-generating
              website. Here&apos;s exactly how we get you there — in as little
              as 4 working days.
            </p>
          </div>

          {/* Top row: steps 1–3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {processSteps.slice(0, 3).map((card, idx) => (
              <div
                key={card.step}
                className={`opacity-0 ${
                  processVisible
                    ? `animate-[fadeInUp_0.8s_ease-out_${
                        ["0.2s", "0.4s", "0.6s"][idx]
                      }_both]`
                    : ""
                }`}
              >
                <ProcessCard
                  step={card.step}
                  variant={card.variant}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>

          {/* Bottom row: steps 4–5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.slice(3).map((card, idx) => (
              <div
                key={card.step}
                className={`opacity-0 ${
                  processVisible
                    ? `animate-[fadeInUp_0.8s_ease-out_${
                        ["0.7s", "0.9s"][idx]
                      }_both]`
                    : ""
                }`}
              >
                <ProcessCard
                  step={card.step}
                  variant={card.variant}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING PACKAGES ─── */}
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
              Once-off pricing. No monthly retainers. No hidden fees. Free
              first-year hosting included with every package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, pkgIdx) => {
              const IconComponent = iconMap[pkg.iconName];
              return (
                <div
                  key={pkg.title}
                  className={`relative flex flex-col h-full rounded-3xl p-8 border-2 ${
                    pkg.popular
                      ? "border-[#b4eb2c] bg-white/10"
                      : "border-[#b4eb2c]/60 bg-white/5"
                  } backdrop-blur-sm transition-all duration-300 group hover:border-[#b4eb2c] hover:bg-white/10 hover:shadow-lg hover:shadow-[#b4eb2c]/10 opacity-0 ${
                    packagesVisible
                      ? `animate-[fadeInUp_0.8s_ease-out_${
                          ["0.2s", "0.3s", "0.4s", "0.5s", "0.6s"][pkgIdx]
                        }_both]`
                      : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#b4eb2c] text-black text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-[#b4eb2c]/10 text-[#b4eb2c] border border-[#b4eb2c]/30 transition-all duration-300 group-hover:bg-[#b4eb2c] group-hover:text-black group-hover:border-[#b4eb2c]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#b4eb2c]">
                        {pkg.price}
                      </div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">
                        {pkg.type}
                      </div>
                    </div>
                  </div>

                  {/* ROI tagline */}
                  <p className="text-xs text-[#b4eb2c]/80 leading-relaxed mb-5 italic border-l-2 border-[#b4eb2c]/30 pl-3">
                    {pkg.roi}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold font-obviously leading-tight uppercase tracking-wide">
                      {pkg.title}
                    </h3>
                    {pkg.subtitle && (
                      <p className="text-xs text-white/40 mt-1">
                        {pkg.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="flex-1 space-y-3.5 mb-10">
                    {pkg.features.map((feature, fIdx) => (
                      <FeatureListItem key={fIdx} feature={feature} />
                    ))}
                  </div>

                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 py-3 border-t border-[#b4eb2c]/20">
                      <Clock className="w-4 h-4 text-[#b4eb2c]/60 shrink-0" />
                      <span className="text-xs text-white/60 font-medium tracking-wide">
                        DELIVERY:{" "}
                        <span className="text-white/90">{pkg.delivery}</span>
                      </span>
                    </div>

                    {/* Primary CTA */}
                    <a
                      href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                      className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-[#b4eb2c] text-black hover:bg-[#b4eb2c]/90 border-2 border-[#b4eb2c] hover:shadow-lg hover:shadow-[#b4eb2c]/30"
                    >
                      Request a Quote
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    {/* Secondary CTA */}
                    <a
                      href={`${WA_BASE}the%20${encodeURIComponent(pkg.title.toLowerCase())}%20package`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-transparent text-white/60 border border-white/20 hover:border-[#25D366]/50 hover:text-[#25D366] hover:bg-[#25D366]/5"
                    >
                      <WhatsappLogo className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PREMIUM GROWTH ADD-ONS ─── */}
      <section
        ref={addOnsRef}
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 md:mb-16 opacity-0 ${
              addOnsVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#b4eb2c] text-sm font-semibold uppercase tracking-widest mb-3">
              Supercharge Your Results
            </p>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              Premium Growth
              <br />
              <span className="italic text-outline-2">Add-ons</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[600px]">
              Stack any of these onto your package at checkout to accelerate
              your results from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map(({ Icon, title, price, description, color }, idx) => (
              <div
                key={title}
                className={`rounded-3xl p-8 flex flex-col border border-white/10 bg-white/5 hover:border-white/20 transition-colors opacity-0 ${
                  addOnsVisible
                    ? `animate-[fadeInUp_0.8s_ease-out_${
                        ["0.2s", "0.4s", "0.6s"][idx]
                      }_both]`
                    : ""
                }`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: `${color}20`,
                    border: `1px solid ${color}40`,
                  }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color }}
                    weight="fill"
                  />
                </div>
                <div className="flex items-start justify-between mb-4 gap-4">
                  <h3 className="text-xl font-semibold font-obviously leading-tight flex-1">
                    {title}
                  </h3>
                  <span
                    className="text-base font-bold whitespace-nowrap shrink-0"
                    style={{ color }}
                  >
                    {price}
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed flex-1">
                  {description}
                </p>
                <a
                  href={`${WA_BASE}the%20${encodeURIComponent(
                    title.toLowerCase()
                  )}%20add-on`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 text-sm text-white/40 hover:text-[#25D366] transition-colors"
                >
                  <WhatsappLogo className="w-4 h-4" />
                  Ask about this add-on
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section
        ref={warrantyRef}
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 md:mb-16 opacity-0 ${
              warrantyVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              What&apos;s{" "}
              <span className="italic text-outline-2">included</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[650px]">
              Every project ships with built-in peace of mind — no hidden
              costs, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Warranty */}
            <div
              className={`rounded-3xl p-8 bg-[#e7fe56] text-black flex flex-col opacity-0 ${
                warrantyVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold font-obviously mb-3">
                6-Month Warranty
              </h3>
              <p className="text-black/80 text-sm leading-relaxed mb-6 flex-1">
                Every build includes a 6-month post-launch warranty covering
                bug fixes, browser compatibility across Chrome, Safari and
                Edge, and minor content adjustments at no extra charge.
              </p>
              <div className="border-t border-black/10 pt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">Code bug fixes &amp; broken links</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">Browser compatibility patches</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">Minor text &amp; image swaps</span>
                </div>
              </div>
            </div>

            {/* Hosting */}
            <div
              className={`rounded-3xl p-8 bg-[#d5bff0] text-black flex flex-col opacity-0 ${
                warrantyVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
                <CloudArrowUp className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold font-obviously mb-3">
                Hosting &amp; Domain
              </h3>
              <p className="text-black/80 text-sm leading-relaxed mb-6 flex-1">
                Your first year of hosting is on us. After that, we keep things
                simple and affordable so your site stays live without the
                headache.
              </p>
              <div className="border-t border-black/10 pt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">First year hosting — free</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">.com renewal — R400 / year</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">.co.za renewal — R150 / year</span>
                </div>
              </div>
            </div>

            {/* Technical Health */}
            <div
              className={`rounded-3xl p-8 bg-[#72f5e3] text-black flex flex-col opacity-0 ${
                warrantyVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.6s_both]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
                <Toolbox className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold font-obviously mb-3">
                Technical Health
              </h3>
              <p className="text-black/80 text-sm leading-relaxed mb-6 flex-1">
                We take responsibility for keeping your site fast, secure, and
                up to date — so you can focus on running your business.
              </p>
              <div className="border-t border-black/10 pt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">Security &amp; dependency patches</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">Hosting &amp; SSL management</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">Core Web Vitals monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WEBSITE CARE & GROWTH PLANS ─── */}
      <section
        ref={carePlanRef}
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 opacity-0 ${
              carePlanVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <div>
              <p className="text-[#b4eb2c] text-sm font-semibold uppercase tracking-widest mb-3">
                After the 6-Month Warranty
              </p>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                Website Care &amp;
                <br />
                <span className="italic text-outline-2">Growth Plans</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed max-w-[560px]">
                Keep your site fast, secure, and continuously improving after
                your warranty ends. Simple monthly retainer — cancel anytime.
              </p>
            </div>
            <a
              href="/services/web-design/care-plan"
              className="shrink-0 text-sm font-normal bg-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#e7fe56] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#e7fe56] hover:text-black transition-colors whitespace-nowrap self-start md:self-auto"
            >
              View full plan details
              <span className="relative text-sm font-normal bg-[#e7fe56] text-black h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:text-base md:font-semibold md:h-[50px] md:w-[50px] md:p-[18.4px]">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {carePlanTiers.map(
              ({ name, price, period, tagline, color, features, popular }, idx) => (
                <div
                  key={name}
                  className={`relative rounded-3xl p-8 flex flex-col border-2 transition-colors opacity-0 ${
                    carePlanVisible
                      ? `animate-[fadeInUp_0.8s_ease-out_${
                          ["0.3s", "0.5s", "0.7s"][idx]
                        }_both]`
                      : ""
                  }`}
                  style={{
                    borderColor: popular ? color : `${color}40`,
                    backgroundColor: popular
                      ? `${color}10`
                      : "rgba(255,255,255,0.03)",
                  }}
                >
                  {popular && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-black text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap"
                      style={{ backgroundColor: color }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold font-obviously mb-1">
                      {name}
                    </h3>
                    <p className="text-white/50 text-sm italic">{tagline}</p>
                  </div>
                  <div className="mb-8">
                    <span
                      className="text-3xl font-bold"
                      style={{ color }}
                    >
                      {price}
                    </span>
                    <span className="text-white/50 text-sm">{period}</span>
                  </div>
                  <div className="flex-1 space-y-3 mb-8">
                    {features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <Check
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color }}
                        />
                        <span className="text-sm text-white/75">{f}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={`${WA_BASE}the%20${encodeURIComponent(
                      name.toLowerCase()
                    )}%20plan`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-300 border-2 text-black hover:opacity-90"
                    style={{ backgroundColor: color, borderColor: color }}
                  >
                    <WhatsappLogo className="w-4 h-4" />
                    Get Started
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ─── OUR PROJECTS ─── */}
      <section
        ref={projectsRef}
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`flex flex-wrap items-center justify-between mb-12 opacity-0 ${
              projectsVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <div>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
                Our projects
              </h2>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                href="/projects"
                className="text-sm font-normal bg-transparent box-border caret-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#e7fe56] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#e7fe56] hover:text-black transition-colors"
              >
                See all projects
                <span className="relative text-sm font-normal bg-[#e7fe56] text-black box-border caret-transparent h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:text-base md:font-semibold md:h-[50px] md:w-[50px] md:p-[18.4px]">
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

      {/* ─── SEO & APP DEVELOPMENT CROSS-SELL ─── */}
      <SectionWrapper className="z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* SEO */}
          <div>
            <div className="box-border caret-transparent mb-6">
              <h2 className="text-[44.4px] font-semibold box-border caret-transparent leading-[53.28px] mb-4 font-obviously md:text-[64px] md:leading-[76.8px]">
                SEO
                <span className="text-[12.8px] font-thin box-border caret-transparent inline-block leading-[12.8px] text-center text-nowrap align-middle border-white/30 ml-4 px-4 py-2 rounded-[800px] border-2 border-solid md:text-[16px] md:leading-[16px]">
                  Tailored Strategy
                </span>
              </h2>
              <h3 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-6 font-obviously md:text-[40px] md:leading-[48px]">
                Boost your visibility with our expertise
              </h3>
            </div>
            <p className="box-border caret-transparent mb-8">
              Being online is irrelevant if you can&apos;t be found. Our team
              provides{" "}
              <strong className="font-semibold">
                tailored SEO strategies
              </strong>{" "}
              designed to improve your search rankings and drive qualified
              traffic. From local visibility to national reach, we build
              data-driven campaigns that put your business in front of customers
              exactly when they&apos;re ready to buy.
            </p>
            <a
              href="/services/seo"
              className="text-sm font-normal bg-[#654064] box-border caret-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#654064] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#654064]/80 hover:border-[#654064]/80 transition-colors"
            >
              More about SEO
              <span className="relative text-sm font-normal bg-white/10 box-border caret-transparent h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:text-base md:font-semibold md:h-[50px] md:w-[50px] md:p-[18.4px]">
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

          {/* App Development */}
          <div>
            <div className="box-border caret-transparent mb-6">
              <h2 className="text-[44.4px] font-semibold box-border caret-transparent leading-[53.28px] mb-4 font-obviously md:text-[64px] md:leading-[76.8px]">
                App Development
                <span className="text-[12.8px] font-thin box-border caret-transparent inline-block leading-[12.8px] text-center text-nowrap align-middle border-white/30 ml-4 px-4 py-2 rounded-[800px] border-2 border-solid md:text-[16px] md:leading-[16px]">
                  From R15k
                </span>
              </h2>
              <h3 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-6 font-obviously md:text-[40px] md:leading-[48px]">
                Custom apps built for your business
              </h3>
            </div>
            <p className="box-border caret-transparent mb-8">
              Transform your ideas into powerful mobile and web applications.
              Our expert developers create{" "}
              <strong className="font-semibold">
                custom solutions tailored to your business needs
              </strong>
              , from simple starter apps to complex enterprise systems. With
              modern frameworks and best practices, we deliver secure, scalable
              applications that drive business growth.
            </p>
            <a
              href="/services/app-development"
              className="text-sm font-normal bg-[#654064] box-border caret-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#654064] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#654064]/80 hover:border-[#654064]/80 transition-colors"
            >
              More about App Development
              <span className="relative text-sm font-normal bg-white/10 box-border caret-transparent h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:text-base md:font-semibold md:h-[50px] md:w-[50px] md:p-[18.4px]">
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
      </SectionWrapper>

      {/* ─── FAQ ─── */}
      <FAQ items={webDesignFAQ} title="Web Design FAQ" />
    </>
  );
};
