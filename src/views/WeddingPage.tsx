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
  Smartphone,
  Globe,
} from "@phosphor-icons/react";
import { ServiceHero } from "@/components/ServiceHero";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/sections/FAQ";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WA_BASE = "https://wa.me/27814272624?text=Hi%2C%20I'm%20interested%20in%20a%20custom%20wedding%20website";

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
  const { ref: problemsRef, isVisible: problemsVisible } =
    useScrollAnimation(0.1);
  const { ref: solutionRef, isVisible: solutionVisible } =
    useScrollAnimation(0.1);
  const { ref: packagesRef, isVisible: packagesVisible } =
    useScrollAnimation(0.1);
  const { ref: includesRef, isVisible: includesVisible } =
    useScrollAnimation(0.1);

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
                  title: "The \"Where is the venue?\" Texts",
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
              We design beautiful, custom-coded wedding websites that act as your digital invitation and guest management system — far beyond a basic PDF invite.
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
                  desc: "Whether you have a single service or a multi-part celebration, we lay out the timeline beautifully. With integrated Google Maps, guests just tap \"Get Directions\" and drive straight to the venue.",
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
      <section ref={includesRef} className="relative py-16 md:py-20 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`opacity-0 ${
              includesVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#72f5e3] text-sm font-semibold uppercase tracking-widest mb-3 text-center">
              Every Package Includes
            </p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-center mb-12">
              Built to perform on{" "}
              <span className="italic text-outline-15">every device</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  Icon: Image,
                  title: "Bespoke Design",
                  desc: "Tailored to your wedding theme and colours. No generic templates — every site is built from scratch to match your aesthetic.",
                },
                {
                  Icon: Smartphone,
                  title: "Mobile-First Performance",
                  desc: "99% of your guests will view this on their phones. Our Next.js builds ensure the site loads instantly, every time.",
                },
                {
                  Icon: Globe,
                  title: "Custom Domain",
                  desc: "A memorable domain like www.boikanyo-and-lesego.co.za to keep it premium and personal.",
                },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex flex-col gap-4"
                >
                  <Icon className="w-8 h-8 text-[#72f5e3]" />
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
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
              Once-off pricing. No subscriptions, no hidden fees. Just a beautiful website for the most important day of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
            {packages.map((pkg, pkgIdx) => (
              <div
                key={pkg.title}
                className={`relative flex flex-col h-full rounded-2xl opacity-0 ${
                  packagesVisible
                    ? `animate-[fadeInUp_0.8s_ease-out_${["0.2s", "0.35s"][pkgIdx]}_both]`
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
                      <span className="text-xs text-white/50 font-semibold">from</span>
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
            Everything you need to know about our custom wedding websites and digital invitation packages.
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
