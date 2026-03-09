"use client";

import React from "react";
import {
  Check,
  ArrowRight,
  Clock,
  WhatsappLogo,
  MapPin,
  Gift,
  ChatCircle,
  Image,
  Lightning,
  DeviceMobile,
  Globe,
  ShieldCheck,
  CloudArrowUp,
  Toolbox,
} from "@phosphor-icons/react";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessCard } from "@/components/ProcessCard";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/sections/FAQ";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useDraggableScroll } from "@/hooks/useDraggableScroll";

const WA_BASE =
  "https://wa.me/27814272624?text=Hi%2C%20I'm%20interested%20in%20a%20custom%20wedding%20website";

type FeatureItem = string | { text: string; tooltip: string };

const FeatureListItem = ({ feature }: { feature: FeatureItem }) => {
  const text = typeof feature === "object" ? feature.text : feature;
  return (
    <div className="flex items-center gap-4 py-3 border-b-2 border-white/[0.09] last:border-b-0">
      <div className="shrink-0 w-8 h-8 rounded-full bg-[#72f5e3] flex items-center justify-center shadow-[0_0_10px_rgba(114,245,227,0.3)]">
        <Check className="w-4 h-4 text-black" weight="bold" />
      </div>
      <span className="text-sm text-white/75 leading-relaxed">{text}</span>
    </div>
  );
};

const packages = [
  {
    title: "Digital Invitation",
    subtitle: "Beautiful, shareable wedding website",
    price: "R3,999",
    roi: "Premium online presence without the cost of printed cards.",
    type: "once-off",
    delivery: "5–7 working days",
    waText: "a%20Digital%20Invitation%20package",
    features: [
      "Custom-designed wedding website",
      "Couples' story and event details page",
      "Venue information with integrated Google Maps",
      "Dress code and itinerary sections",
      "Countdown timer to the big day",
      "Mobile-optimised (loads instantly on phones)",
      "Custom domain (e.g., www.boikanyo-and-lesego.co.za)",
      "Free SSL Certificate",
    ] as FeatureItem[],
  },
  {
    title: "Full Guest Management",
    subtitle: "Digital invitation + RSVP + gifting system",
    price: "R6,999",
    roi: "Stop chasing RSVPs and awkward gift conversations.",
    type: "once-off",
    delivery: "7–10 working days",
    waText: "a%20Full%20Guest%20Management%20wedding%20package",
    popular: true,
    features: [
      "Everything in Digital Invitation, plus:",
      "Automated RSVP system with meal preference tracking",
      "Strict RSVP deadline enforcement",
      "Clean exportable guest list for caterers",
      "Seamless Gift Registry & Cash Fund integration (Yoco / PayFast)",
      "Instant website updates (venue changes, time shifts)",
      "Post-wedding photo gallery upload for guests",
    ] as FeatureItem[],
  },
];

const processSteps = [
  {
    step: 1,
    variant: "lime" as const,
    title: "Vision Call",
    description:
      "We learn about your wedding theme, colour palette, venue, and everything that makes your day unique — so the website feels personal, not generic.",
  },
  {
    step: 2,
    variant: "purple" as const,
    title: "Design & Theme",
    description:
      "A high-fidelity mockup designed specifically to match your wedding aesthetic. You approve every element before a single line of code is written.",
  },
  {
    step: 3,
    variant: "cyan" as const,
    title: "Build & Integrate",
    description:
      "Custom Next.js build with RSVP system, Google Maps, countdown timer, and payment gateways for your gift registry — all connected and tested.",
  },
  {
    step: 4,
    variant: "glass" as const,
    title: "Content & Setup",
    description:
      "We populate the site with your photos, copy, venue details, and itinerary. Your RSVP form is configured with your specific questions and deadline.",
  },
  {
    step: 5,
    variant: "lime" as const,
    title: "Launch & Handover",
    description:
      "Your site goes live on your custom domain. We walk you through how to check RSVPs, update details, and export your guest list anytime.",
  },
];

const faqItems = [
  {
    question: "Can we keep the website active after the wedding?",
    answer:
      "Absolutely. Many couples keep the site live as a digital memory — especially with the post-wedding photo gallery. We can keep your site active for as long as you'd like.",
  },
  {
    question: "How does the RSVP system work exactly?",
    answer:
      "Each guest receives your website link. They visit the page, fill in their name, confirm attendance, select meal preferences, and submit. The responses are compiled in a clean dashboard that you can export as a spreadsheet for your caterers.",
  },
  {
    question: "Can we integrate our Yuppiechef or Mr Price Home registry?",
    answer:
      "Yes. We can embed direct links to any South African retail registry. We can also set up a Yoco or PayFast cash fund where guests can contribute a monetary gift directly on the site.",
  },
  {
    question: "What if the venue or time changes last minute?",
    answer:
      "That's one of the biggest advantages of a digital website over printed cards. We can update any detail — venue address, time, itinerary changes — and every guest who visits the link sees the correct information immediately.",
  },
];

export const WeddingPage = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.1);
  const { ref: problemsRef, isVisible: problemsVisible } =
    useScrollAnimation(0.1);
  const { ref: solutionRef, isVisible: solutionVisible } =
    useScrollAnimation(0.1);
  const { ref: warrantyRef, isVisible: warrantyVisible } =
    useScrollAnimation(0.15);
  const { ref: processRef, isVisible: processVisible } =
    useScrollAnimation(0.1);
  const { ref: packagesRef, isVisible: packagesVisible } =
    useScrollAnimation(0.1);
  const { ref: dragRef, events: dragEvents, isDragging } = useDraggableScroll();

  return (
    <>
      {/* ── HERO ── */}
      <ServiceHero
        title={
          <>
            Custom Wedding Websites &{" "}
            <span className="italic text-outline-15">Digital Invitations</span>
          </>
        }
        underlineColor="cyan"
        description="Stop chasing RSVPs and answering the same venue questions. Give your guests a seamless digital experience while you focus on enjoying your big day."
        badge={
          <span className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#72f5e3] text-[#72f5e3]">
            Wedding Solutions
          </span>
        }
      />

      {/* ── STATS STRIP ── */}
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
                label: "Monthly fees — ever, for any package",
                color: "#e7fe56",
              },
              {
                value: "0%",
                label: "Commission on gift fund contributions",
                color: "#72f5e3",
              },
              {
                value: "6 mo",
                label: "Warranty included on every project",
                color: "#d5bff0",
              },
              {
                value: "< 48h",
                label: "Turnaround on last-minute content changes",
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

      {/* ── PROBLEMS ── */}
      <section ref={problemsRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`opacity-0 ${
              problemsVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#72f5e3] text-sm font-semibold uppercase tracking-widest mb-3 text-center">
              The Reality of Wedding Planning
            </p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-center mb-12">
              The biggest headache usually comes from managing{" "}
              <span className="italic text-outline-15">your guests</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  Icon: ChatCircle,
                  title: "RSVP Chaos",
                  desc: "You're relying on WhatsApp messages or phone calls. People forget to reply, or worse, they try to add uninvited plus-ones which ruins your catering budget.",
                },
                {
                  Icon: MapPin,
                  title: 'The "Where is the venue?" Texts',
                  desc: "On the morning of your wedding, your phone is blowing up with guests asking for the address, the time, or the dress code.",
                },
                {
                  Icon: Image,
                  title: "Expensive, Inflexible Paper",
                  desc: "Printed invitations cost a fortune, easily get lost, and if a venue or time changes at the last minute, you cannot update a piece of cardboard.",
                },
                {
                  Icon: Gift,
                  title: "The Gift Registry Awkwardness",
                  desc: "Sharing bank details or registry links via text can feel impersonal and disorganized.",
                },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 text-[#e7fe56] shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">{title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section ref={solutionRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`opacity-0 ${
              solutionVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3 text-center">
              The Solution
            </p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-center mb-4">
              A Centralised Digital Hub for Your Guests
            </h2>
            <p className="text-white/55 text-base leading-relaxed text-center max-w-2xl mx-auto mb-14">
              We design beautiful, custom-coded wedding websites that act as your
              digital invitation and guest management system — far beyond a basic
              PDF invite.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  Icon: Check,
                  number: "01",
                  title: "Automated, Strict RSVP Tracking",
                  desc: "Send your guests a unique link. They visit your website, select meal preferences, and confirm attendance. Set strict deadlines — the system compiles a clean list for your caterers automatically. No chasing required.",
                },
                {
                  Icon: MapPin,
                  number: "02",
                  title: "Interactive Itineraries & Maps",
                  desc: 'Whether you have a single service or a multi-part celebration, we lay out the timeline beautifully. With integrated Google Maps, guests just tap "Get Directions" and drive straight to the venue.',
                },
                {
                  Icon: Gift,
                  number: "03",
                  title: "Seamless Gifting & Registries",
                  desc: "Embed links to your retail registries or set up a secure digital Cash Fund using local payment gateways like Yoco or PayFast. Make it easy for guests to contribute to your new life.",
                },
                {
                  Icon: Lightning,
                  number: "04",
                  title: "Instant Updates",
                  desc: "If it rains and the reception moves indoors, or the timeline shifts, we update your live website instantly. Your guests always have the right information in their pockets.",
                },
              ].map(({ number, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex gap-6"
                >
                  <span className="text-4xl font-bold text-white/10 font-obviously shrink-0 leading-none">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
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
              Every wedding website ships with built-in peace of mind — no
              hidden costs, no surprises.
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
                Bug fixes, content updates, and browser compatibility — all
                covered for 6 months post-launch at no extra charge. Perfect for
                last-minute wedding day changes.
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
            </div>

            {/* Domain & Hosting Card */}
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
                Custom Domain &amp; Hosting
              </h3>
              <p className="text-black/80 text-sm md:text-base leading-relaxed font-medium flex-1">
                Your personalised domain (e.g.{" "}
                <em>www.boikanyo-and-lesego.co.za</em>) and one year of hosting
                are included — no extra cost, no setup hassle.
              </p>
              <div className="mt-5 pt-4 border-t border-black/10 space-y-1.5">
                {[
                  "Custom .co.za domain — included",
                  "First year hosting — free",
                  "Free SSL Certificate",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bespoke Design Card */}
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
                Bespoke Design
              </h3>
              <p className="text-black/80 text-sm md:text-base leading-relaxed font-medium flex-1">
                No generic templates. Every site is built from scratch to match
                your wedding aesthetic, colours, and theme — designed to load
                instantly on every phone.
              </p>
              <div className="mt-5 pt-4 border-t border-black/10 space-y-1.5">
                {[
                  "Tailored to your theme & colours",
                  "Mobile-first, sub-second load times",
                  "Instant updates — any time",
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

      {/* ── OUR PROCESS ── */}
      <section ref={processRef} className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-10 opacity-0 ${
              processVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px]">
              Our <span className="italic text-outline-15">process</span>
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-[600px]">
              From first conversation to your live wedding website — a clear,
              structured build every time.
            </p>
          </div>

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

      {/* ── PACKAGES ── */}
      <section ref={packagesRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 md:mb-16 opacity-0 ${
              packagesVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] flex items-center gap-3">
              Wedding Packages
              <span className="h-px flex-1 bg-white/10 ml-4 hidden md:block" />
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-[650px]">
              Once-off pricing. No subscriptions, no hidden fees. Just a
              beautiful website for the most important day of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
            {packages.map((pkg, pkgIdx) => (
              <div
                key={pkg.title}
                className={`relative flex flex-col h-full rounded-2xl opacity-0 ${
                  packagesVisible
                    ? `animate-[fadeInUp_0.8s_ease-out_${
                        ["0.2s", "0.35s"][pkgIdx]
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
                  <p className="mt-3 text-xs text-white/45 leading-relaxed text-center italic">
                    {pkg.roi}
                  </p>
                </div>

                <div className="flex-1 px-7 py-2">
                  {pkg.features.map((feature, fIdx) => (
                    <FeatureListItem key={fIdx} feature={feature} />
                  ))}
                </div>

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
                    href={WA_BASE}
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

      {/* ── FAQ ── */}
      <FAQ
        title="FAQ"
        items={faqItems}
        description={
          <>
            <span className="text-white font-semibold">Got questions?</span>{" "}
            Everything you need to know about our custom wedding websites and
            digital invitation packages.
          </>
        }
      />

      {/* ── CTA ── */}
      <CTASection
        heading="Ready to create your wedding website?"
        linkTo="/contact"
        linkText="Request a Quote"
        color="#72f5e3"
      />
    </>
  );
};
