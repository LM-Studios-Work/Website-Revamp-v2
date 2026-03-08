"use client";

import React from "react";
import {
  Check,
  ArrowRight,
  Clock,
  ShieldCheck,
  Package,
  LockKey,
  Toolbox,
  WhatsappLogo,
  Calendar,
  CreditCard,
  ShoppingCart,
  Lightning,
} from "@phosphor-icons/react";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessCardGrid } from "@/components/ProcessCardGrid";
import { ProcessCard } from "@/components/ProcessCard";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/sections/FAQ";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WA_BASE = "https://wa.me/27814272624?text=Hi%2C%20I'm%20interested%20in%20";

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

const packages = [
  {
    title: "The Professional Booking System",
    price: "R9,999",
    roi: "A complete online presence and automated scheduling tool.",
    type: "once-off",
    delivery: "10–14 working days",
    waText: "the%20Professional%20Booking%20System%20package",
    features: [
      "Custom, mobile-optimized website design",
      "Integrated Online Booking System (Staff & Service selection)",
      "Automated client scheduling calendar",
      "Secure Payment Gateway Integration (Yoco, PayFast, Ozow)",
      "1 Year Premium Web Hosting included",
      "Free .co.za Domain Registration",
      "Free SSL Certificate",
      "Business Email Accounts",
      "System Handover and Management Training",
    ],
  },
  {
    title: "The Barbershop & Retail Store",
    price: "R14,999",
    roi: "For shops looking to handle bookings and sell grooming products.",
    type: "once-off",
    delivery: "14–18 working days",
    waText: "the%20Barbershop%20and%20Retail%20Store%20package",
    popular: true,
    features: [
      "Everything in the Professional Booking System, plus:",
      "Integrated E-Commerce Store",
      "Up to 50 retail products uploaded for you",
      "Add unlimited products yourself later",
      "Inventory management tracking",
      "System Handover and Management Training",
    ],
  },
];

export const BarbershopPage = () => {
  const { ref: problemsRef, isVisible: problemsVisible } =
    useScrollAnimation(0.1);
  const { ref: solutionRef, isVisible: solutionVisible } =
    useScrollAnimation(0.1);
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation(0.1);
  const { ref: packagesRef, isVisible: packagesVisible } =
    useScrollAnimation(0.1);
  const { ref: galleryRef, isVisible: galleryVisible } =
    useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.15);

  return (
    <>
      {/* Hero Section */}
      <ServiceHero
        title={
          <>
            Custom Websites and Booking Systems for{" "}
            <span className="italic text-outline-15">Barbershops</span>
          </>
        }
        underlineColor="cyan"
        description="Professional digital storefronts built to manage your schedule, process payments, and eliminate the frustration of long waiting times for your clients."
        badge={
          <>
            <span className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#72f5e3] text-[#72f5e3]">
              Barbershop Solutions
            </span>
          </>
        }
      />

      {/* Problems Section */}
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
              The Reality of Managing a Barbershop
            </p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-center mb-12">
              Running a successful barbershop often comes with operational
              bottlenecks that cost you{" "}
              <span className="italic text-outline-15">money</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  Icon: Clock,
                  title: "The Queue Walk-Outs",
                  desc: "A full waiting area might look like success, but it's often a loss of revenue. When a client arrives and sees six people waiting, they often leave. Your clients value their time.",
                },
                {
                  Icon: Calendar,
                  title: "The No-Show Cost",
                  desc: "When a client books through WhatsApp and fails to show up, you lose that 45-minute revenue window. Without upfront commitment, an empty chair is a permanent loss.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Constant Interruptions",
                  desc: "Your phone is constantly ringing with clients checking availability. Managing your schedule manually takes you away from the actual work.",
                },
                {
                  Icon: CreditCard,
                  title: "Renting Your Booking System",
                  desc: "Third-party booking apps often take a monthly fee or percentage cut of bookings. You don't own the platform, and you're paying them for your own recurring clients.",
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

      {/* Solution Section */}
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
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-center mb-12">
              A Custom Booking and E-Commerce Engine Built for Your Shop
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  Icon: Calendar,
                  title: "Seamless Online Bookings",
                  desc: "Clients select their service, choose their preferred barber, and lock in a specific time. They arrive exactly when you're ready for them, and your shop runs efficiently.",
                },
                {
                  Icon: CreditCard,
                  title: "Upfront Payments & Deposits",
                  desc: "Integrate PayFast, Yoco, and Ozow directly into your site. Require deposits or full payment upfront to secure bookings. When people pay, no-shows virtually disappear.",
                },
                {
                  Icon: ShoppingCart,
                  title: "Optional E-Commerce Store",
                  desc: "Sell branded beard oils, styling powders, and hair care products online. Your revenue isn't limited to cutting hours—your clients can shop anytime.",
                },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex flex-col gap-4"
                >
                  <Icon className="w-8 h-8 text-[#72f5e3]" />
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section ref={whyRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`opacity-0 ${
              whyVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#72f5e3] text-sm font-semibold uppercase tracking-widest mb-3 text-center">
              Why Our Platform is Different
            </p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-center mb-12">
              We don't build slow, bloated{" "}
              <span className="italic text-outline-15">WordPress templates</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  Icon: Lightning,
                  title: "Speed",
                  desc: "We engineer custom web applications using Next.js. Your clients will be booking on their phones. Our sites load instantly, creating a frictionless experience.",
                },
                {
                  Icon: LockKey,
                  title: "No Commission Fees",
                  desc: "You own the website. You will never pay a percentage of bookings or sales. You only pay standard transaction fees to your payment gateway.",
                },
                {
                  Icon: Toolbox,
                  title: "Easy Management Dashboard",
                  desc: "A simple, clear backend calendar to manage your staff, block out lunch hours, and track daily revenue.",
                },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex flex-col gap-4"
                >
                  <Icon className="w-8 h-8 text-[#e7fe56]" />
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section ref={packagesRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`opacity-0 ${
              packagesVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#e7fe56] text-sm font-semibold uppercase tracking-widest mb-3 text-center">
              Barbershop Setup Packages
            </p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-center mb-12">
              Choose the perfect package for your{" "}
              <span className="italic text-outline-15">shop</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg) => (
                <div
                  key={pkg.title}
                  className={`relative rounded-2xl border transition-all duration-300 overflow-hidden group ${
                    pkg.popular
                      ? "border-[#e7fe56] bg-gradient-to-br from-[#e7fe56]/10 to-transparent shadow-[0_0_30px_rgba(231,254,86,0.15)]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#e7fe56]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}

                  <div className="relative p-8">
                    {pkg.popular && (
                      <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#e7fe56] text-black">
                        Most Popular
                      </span>
                    )}

                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {pkg.title}
                    </h3>

                    <p className="text-white/50 text-sm mb-6">{pkg.roi}</p>

                    <div className="mb-8">
                      <p className="text-4xl font-bold text-white">
                        {pkg.price}
                        <span className="text-lg text-white/50 font-normal ml-2">
                          {pkg.type === "once-off" ? "once-off" : "per month"}
                        </span>
                      </p>
                      <p className="text-white/35 text-xs mt-2 uppercase tracking-widest">
                        {pkg.delivery}
                      </p>
                    </div>

                    <div className="mb-8 space-y-0">
                      {pkg.features.map((feature, idx) => (
                        <FeatureListItem key={idx} feature={feature} />
                      ))}
                    </div>

                    <a
                      href={`${WA_BASE}${pkg.waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 w-full ${
                        pkg.popular
                          ? "bg-[#e7fe56] text-black hover:bg-white shadow-[0_0_20px_rgba(231,254,86,0.3)]"
                          : "border border-white/20 text-white/80 hover:border-white/40 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      <WhatsappLogo className="w-5 h-5" />
                      Enquire about this package
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / See Our Work Section */}
      <section ref={galleryRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`opacity-0 ${
              galleryVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <p className="text-[#72f5e3] text-sm font-semibold uppercase tracking-widest mb-3 text-center">
              See Our Work
            </p>
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] text-center mb-12">
              Check out our latest{" "}
              <span className="italic text-outline-15">barbershop project</span>
            </h2>

            <div className="max-w-4xl mx-auto text-center">
              <a
                href="/projects/xclusive-barber"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#72f5e3] text-[#72f5e3] font-semibold hover:bg-[#72f5e3]/10 transition-all duration-300"
              >
                View Xclusive Barber Case Study
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <FAQ
            items={[
              {
                q: "Will I lose my walk-in customers?",
                a: "No. You maintain full control over your calendar. You can choose to allocate specific chairs or specific hours strictly for walk-ins, while keeping the rest of your schedule reserved for guaranteed, prepaid online bookings.",
              },
              {
                q: "How do the payment integrations work?",
                a: "We connect the website to your existing Yoco, PayFast, or Ozow merchant account. When a client pays for a booking or product, the money goes directly to your account. We do not touch your funds.",
              },
              {
                q: "Is the system easy for my staff to use?",
                a: "Yes. The dashboard is designed to be straightforward. During handover training, we show you and your staff how to check the daily schedule, adjust working hours, and manage availability from any device.",
              },
              {
                q: "What if I need to change my service prices later?",
                a: "You have full access to a simple dashboard where you can easily update haircut prices, add new services, or change the grooming products you're selling.",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`opacity-0 ${
              ctaVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <CTASection
              title="Ready to modernize your barbershop?"
              description="If you're ready to eliminate no-shows, reduce queue walk-outs, and secure your daily revenue, let's talk."
              buttonText="Contact our team"
            />
          </div>
        </div>
      </section>
    </>
  );
};
