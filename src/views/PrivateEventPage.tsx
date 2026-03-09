"use client";

import React from "react";
import {
  Check,
  ArrowRight,
  Clock,
  WhatsappLogo,
  Users,
  CurrencyDollar,
  Timer,
  ListChecks,
  Lightning,
  DeviceMobile,
  Sparkle,
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
  "https://wa.me/27814272624?text=Hi%2C%20I'm%20interested%20in%20a%20private%20event%20website";

type FeatureItem = string | { text: string; tooltip: string };

const FeatureListItem = ({ feature }: { feature: FeatureItem }) => {
  const text = typeof feature === "object" ? feature.text : feature;
  return (
    <div className="flex items-center gap-4 py-3 border-b-2 border-white/[0.09] last:border-b-0">
      <div className="shrink-0 w-8 h-8 rounded-full bg-[#e7fe56] flex items-center justify-center shadow-[0_0_10px_rgba(231,254,86,0.3)]">
        <Check className="w-4 h-4 text-black" weight="bold" />
      </div>
      <span className="text-sm text-white/75 leading-relaxed">{text}</span>
    </div>
  );
};

const packages = [
  {
    title: "Event Landing Page",
    subtitle: "High-impact page to build hype and collect RSVPs",
    price: "R2,999",
    roi: "Eliminate WhatsApp group chaos before it starts.",
    type: "once-off",
    delivery: "3–5 working days",
    waText: "an%20Event%20Landing%20Page%20package",
    features: [
      "Custom-designed event landing page",
      "Event details, dress code, and itinerary",
      "Venue section with integrated Google Maps",
      "Live countdown timer to the event",
      "Secure private RSVP form with dietary requirements",
      "Mobile-optimised (loads instantly on phones)",
      "Custom event link or domain",
    ] as FeatureItem[],
  },
  {
    title: "Premium Event Management",
    subtitle: "RSVPs + ticketing + fund collection + full theming",
    price: "R5,999",
    roi: "Hard numbers, collected contributions, and zero chasing.",
    type: "once-off",
    delivery: "5–7 working days",
    waText: "a%20Premium%20Event%20Management%20package",
    popular: true,
    features: [
      "Everything in Event Landing Page, plus:",
      "Built-in ticketing & cover charge collection",
      "Collective gift fund / contribution portal (PayFast, Yoco, Ozow)",
      "Video background hero for maximum impact",
      "Mood board visual sections for theme and dress code",
      "Parking instructions and multi-venue mapping",
      "Guest list dashboard export for your caterers",
    ] as FeatureItem[],
  },
];

const processSteps = [
  {
    step: 1,
    variant: "lime" as const,
    title: "Event Brief",
    description:
      "We learn about your event — the theme, vibe, guest count, and everything you want attendees to feel when they land on the page.",
  },
  {
    step: 2,
    variant: "purple" as const,
    title: "Design & Theming",
    description:
      "A high-fidelity design mockup matching your event's aesthetic. You approve every element before development begins.",
  },
  {
    step: 3,
    variant: "cyan" as const,
    title: "Build & Integrate",
    description:
      "Custom Next.js development with RSVP forms, ticketing, payment gateways, countdown timers, and Google Maps — fully connected.",
  },
  {
    step: 4,
    variant: "glass" as const,
    title: "Setup & Testing",
    description:
      "All event details, RSVP questions, and payment flows are configured and tested end-to-end before anything goes live.",
  },
  {
    step: 5,
    variant: "lime" as const,
    title: "Launch & Go Live",
    description:
      "Your event page goes live on your custom link. Share it with guests and watch RSVPs roll in — everything tracked in your private dashboard.",
  },
];

const faqItems = [
  {
    question: "What kind of events is this suited for?",
    answer:
      "Milestone birthdays (21st, 30th, 50th), baby showers, bridal showers, exclusive dinner parties, VIP gatherings, and any private event where you want a premium, controlled guest experience.",
  },
  {
    question: "How does the ticketing and fund collection work?",
    answer:
      "We integrate PayFast, Yoco, or Ozow directly into your event page. Guests can purchase tickets or contribute to a collective gift fund via card payment or Instant EFT. All funds go directly to your merchant account.",
  },
  {
    question: "Can I keep the guest list private?",
    answer:
      "Yes. The RSVP system is fully private. Only guests with your link can access the page, and only you can see the submitted guest list in your private dashboard.",
  },
  {
    question: "What happens to the website after the event?",
    answer:
      "The site can be taken down after the event, or we can update it to serve as a post-event gallery page. The choice is entirely yours.",
  },
];

export const PrivateEventPage = () => {
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
            Digital Invitations for Milestone Birthdays &{" "}
            <span className="italic text-outline-15">Private VIP Events</span>
          </>
        }
        underlineColor="lime"
        description="Elevate your next major event. Replace messy WhatsApp groups with a sleek, custom event landing page that handles RSVPs, ticketing, and event details automatically."
        badge={
          <span className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#e7fe56] text-[#e7fe56]">
            Private Event Solutions
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
                label: "Commission on ticket or fund collection",
                color: "#72f5e3",
              },
              {
                value: "3 days",
                label: "Minimum turnaround from deposit to live",
                color: "#d5bff0",
              },
              {
                value: "100%",
                label: "Private RSVP list — guests only, no leaks",
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
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3 text-center">
              The Reality of Organising a Major Event
            </p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-center mb-12">
              Managing the guest list usually turns into a{" "}
              <span className="italic text-outline-15">full-time job</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  Icon: Users,
                  title: "The WhatsApp Group Nightmare",
                  desc: "Creating a group chat leads to endless spam, muted notifications, and important details getting buried under a hundred messages.",
                },
                {
                  Icon: ListChecks,
                  title: "Unclear Numbers",
                  desc: 'When you\'re paying for catering, a venue, or a bar tab per head, "I think I\'m coming" isn\'t good enough. You need hard numbers, but people are notoriously bad at committing.',
                },
                {
                  Icon: CurrencyDollar,
                  title: "Collecting Contributions",
                  desc: "If friends are pitching in for a large gift, or the event requires a cover charge, chasing people for EFTs is exhausting and awkward.",
                },
                {
                  Icon: Sparkle,
                  title: "Communicating the Vibe",
                  desc: "Is there a strict dress code? Is it a surprise party? Is it B.O.B? Getting everyone on the same page is incredibly difficult without a central point of information.",
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
              A Premium Event Landing Page
            </h2>
            <p className="text-white/55 text-base leading-relaxed text-center max-w-2xl mx-auto mb-14">
              We build high-impact, temporary event websites designed to build
              hype and automate your event management.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  number: "01",
                  title: "Secure & Private RSVPs",
                  desc: "Keep your guest list tightly controlled. Guests visit your custom link, fill in their details (including dietary requirements), and the data is sent directly to your private dashboard.",
                },
                {
                  number: "02",
                  title: "Built-in Ticketing & Fund Collection",
                  desc: "If your event requires a ticket purchase, or you're running a collective fund for a milestone gift, we integrate PayFast, Yoco, or Ozow. Guests can pay instantly via Card or Instant EFT.",
                },
                {
                  number: "03",
                  title: "Set the Tone & Build Hype",
                  desc: "We use high-quality imagery, video backgrounds, and custom typography to match your event's theme. We can even include a live countdown timer to build anticipation.",
                },
                {
                  number: "04",
                  title: 'The "Need to Know" Section',
                  desc: "Eliminate repetitive questions. Clear, stylish sections outlining the itinerary, dress code with visual mood boards, parking instructions, and integrated Google Maps for the venue.",
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
              Every event website ships with built-in peace of mind — no hidden
              costs, no surprises.
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
                Bug fixes, content edits, and browser compatibility — all
                covered for 6 months post-launch at no extra charge. Last-minute
                event changes included.
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

            {/* Hosting & Domain Card */}
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
                Custom Link &amp; Hosting
              </h3>
              <p className="text-black/80 text-sm md:text-base leading-relaxed font-medium flex-1">
                Your event gets its own branded link or domain with fast hosting
                and an SSL certificate — included in every package at no
                additional cost.
              </p>
              <div className="mt-5 pt-4 border-t border-black/10 space-y-1.5">
                {[
                  "Custom event domain or link",
                  "Hosting for the event duration",
                  "Free SSL Certificate",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Dashboard Card */}
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
                Private Guest Dashboard
              </h3>
              <p className="text-black/80 text-sm md:text-base leading-relaxed font-medium flex-1">
                Track RSVPs in real-time, export your guest list for caterers,
                and monitor ticket or fund contributions — all from your private
                dashboard.
              </p>
              <div className="mt-5 pt-4 border-t border-black/10 space-y-1.5">
                {[
                  "Real-time RSVP tracking",
                  "Exportable guest list (CSV)",
                  "Payment & contribution overview",
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
              From first conversation to your live event page — as fast as 3
              working days.
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
              Event Packages
              <span className="h-px flex-1 bg-white/10 ml-4 hidden md:block" />
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-[650px]">
              Once-off pricing. No subscriptions. Just a premium digital
              experience for one unforgettable event.
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
            Everything you need to know about our private event and milestone
            birthday website packages.
          </>
        }
      />

      {/* ── CTA ── */}
      <CTASection
        heading="Ready to plan your event?"
        linkTo="/contact"
        linkText="Get a Quote"
        color="#e7fe56"
      />
    </>
  );
};
