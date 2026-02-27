"use client";

import Link from "next/link";
import {
  Scissors,
  Globe,
  CalendarCheck,
  DeviceMobile,
  MagnifyingGlass,
  ArrowRight,
  MapPin,
  Clock,
} from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionLabel } from "@/components/SectionLabel";

const projectHighlights = [
  {
    number: "01",
    icon: Globe,
    title: "Custom Web Design Built for Durban Barbers",
    description:
      "We designed a fully bespoke website that captures the premium identity of Xclusive Barber. Bold typography, a dark-themed aesthetic, and high-quality imagery work together to build instant trust with new visitors searching for a barber in Davenport or Durban.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Salon Online Booking System Setup",
    description:
      "We replaced the chaos of mid-haircut phone calls with a 100% automated Next.js booking platform. Clients now book appointments 24/7, receive automated confirmations, and the team never has to put down their clippers to answer the phone again.",
  },
  {
    number: "03",
    icon: DeviceMobile,
    title: "Mobile-First, Sub-Second Load Times",
    description:
      "Over 80% of Xclusive Barber's clients search on their phones. We built a fully responsive, performance-optimised site that loads in under 0.8 seconds on mobile, so customers in Davenport and Chatsworth can find and book in seconds.",
  },
  {
    number: "04",
    icon: MagnifyingGlass,
    title: "Local SEO for Barber Shops in Durban",
    description:
      "We implemented on-page SEO and Schema.org structured data targeting high-intent phrases like 'barber in Davenport', 'custom web design Durban', and 'haircut Chatsworth'. The result: improved Google Map Pack visibility and more organic walk-ins from local search.",
  },
];

const results = [
  {
    metric: "< 0.8s",
    label: "Mobile Load Time",
    description:
      "Sub-second page loads on 3G and 4G networks, keeping bounce rates near zero",
  },
  {
    metric: "100%",
    label: "Automated Scheduling",
    description:
      "Zero phone interruptions during haircuts. Every booking handled automatically",
  },
  {
    metric: "Top 3",
    label: "Local Map Pack",
    description:
      "Ranking in Google's local pack for 'barber Davenport' and 'barber near me Durban'",
  },
  {
    metric: "40%+",
    label: "More Monthly Bookings",
    description:
      "Measurable increase in appointment volume within the first 60 days of launch",
  },
];

const STAGGER_4 = [
  "animate-[fadeInUp_0.8s_ease-out_0.2s_both]",
  "animate-[fadeInUp_0.8s_ease-out_0.4s_both]",
  "animate-[fadeInUp_0.8s_ease-out_0.6s_both]",
  "animate-[fadeInUp_0.8s_ease-out_0.8s_both]",
] as const;

const techStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Vercel",
  "Custom Booking API",
  "Google Maps Integration",
  "Schema.org Markup",
  "Responsive Images",
];

export const XclusiveBarberCaseStudy = () => {
  const { ref: overviewRef, isVisible: overviewVisible } =
    useScrollAnimation(0.15);
  const { ref: highlightsRef, isVisible: highlightsVisible } =
    useScrollAnimation(0.1);
  const { ref: resultsRef, isVisible: resultsVisible } =
    useScrollAnimation(0.15);
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation(0.15);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.15);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center pt-40 pb-20 px-6 overflow-hidden">
        <div className="relative z-30 max-w-[900px] w-full text-center animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50 border border-white/20 px-4 py-1.5 rounded-full">
              Case Study
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e7fe56]/80 border border-[#e7fe56]/30 px-4 py-1.5 rounded-full">
              Barber &amp; Grooming
            </span>
          </div>
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight text-white mb-6">
            Xclusive Barber
            <br />
            <span className="italic text-outline-2">Davenport</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[680px] mx-auto mb-10">
            How we replaced disruptive mid-haircut phone calls with a seamless,
            automated Next.js booking platform, helping a Durban barbershop get
            found on Google and fill every chair.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#e7fe56]/60" />
              Davenport, Durban
            </span>
            <span className="w-px h-4 bg-white/15" />
            <span className="flex items-center gap-2">
              <Scissors className="w-4 h-4 text-[#e7fe56]/60" />
              Barber Shop
            </span>
            <span className="w-px h-4 bg-white/15" />
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#e7fe56]/60" />
              Custom Web Design &amp; Booking System
            </span>
          </div>
        </div>
      </section>

      {/* Preview Image */}
      <SectionWrapper className="z-10 !pt-0 !pb-0 md:!pb-0">
        <div className="rounded-2xl overflow-hidden border border-white/10 animate-[fadeInUp_0.8s_ease-out_0.4s_both] shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
          <img
            src="/preview/v0-barbershop-durban.vercel.app_(laptop).webp"
            alt="Custom web design Durban — Xclusive Barber website with salon online booking system by LM Studios"
            className="w-full h-auto"
          />
        </div>
      </SectionWrapper>

      {/* Section Label */}
      <SectionLabel number="01" text="Challenge" className="pt-20 pb-4" />

      {/* Problem + Solution */}
      <section ref={overviewRef} className="relative z-10 pb-20 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
            {/* Problem */}
            <div
              className={`opacity-0 ${
                overviewVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                  : ""
              }`}
            >
              <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-white mb-8">
                The <span className="italic text-outline-2">problem</span>
              </h2>

              <blockquote className="border-l-2 border-[#e7fe56]/50 pl-5 mb-8">
                <p className="text-white/90 text-lg font-medium leading-snug">
                  &ldquo;Phone calls were killing productivity. Barbers were
                  forced to stop mid-haircut to take bookings, costing them 3 to
                  4 appointments a day.&rdquo;
                </p>
              </blockquote>

              <div className="space-y-5">
                <p className="text-white/60 leading-relaxed">
                  Xclusive Barber is a popular grooming destination in
                  Davenport, Durban, known for precision fades, beard sculpting,
                  and a loyal local following. But their growth was being
                  strangled by two operational headaches.
                </p>
                <p className="text-white/60 leading-relaxed">
                  When potential clients searched for{" "}
                  <span className="text-white/80">
                    &quot;barber in Davenport&quot;
                  </span>{" "}
                  or{" "}
                  <span className="text-white/80">
                    &quot;haircut near me Chatsworth&quot;
                  </span>
                  , Xclusive Barber didn&apos;t exist online. Every unanswered
                  Google search was a booking handed to a competitor.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Every booking came through phone calls, often mid-haircut.
                  Barbers were forced to stop, wipe their hands, and take calls,
                  disrupting the client in the chair and creating a bottleneck
                  that cost real revenue daily.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div
              className={`opacity-0 ${
                overviewVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                  : ""
              }`}
            >
              <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-white mb-8">
                The <span className="italic text-outline-2">solution</span>
              </h2>

              <blockquote className="border-l-2 border-[#e7fe56]/50 pl-5 mb-8">
                <p className="text-white/90 text-lg font-medium leading-snug">
                  &ldquo;A booking platform that runs itself. Clients browse,
                  pick a barber, choose a time, and confirm without a single
                  phone call.&rdquo;
                </p>
              </blockquote>

              <div className="space-y-5">
                <p className="text-white/60 leading-relaxed">
                  We built a complete digital solution as specialist small
                  business website developers: a custom-designed website paired
                  with a salon online booking system that eliminated every phone
                  interruption.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Our custom Next.js booking system lets clients browse services,
                  pick a barber, choose a time slot, and confirm, all without a
                  single phone call. Automated reminders cut no-shows, and the
                  team stays focused on the craft.
                </p>
                <p className="text-white/60 leading-relaxed">
                  On-page SEO targeting{" "}
                  <span className="text-white/80">
                    &quot;barber in Davenport&quot;
                  </span>{" "}
                  and{" "}
                  <span className="text-white/80">
                    &quot;best barber Durban&quot;
                  </span>{" "}
                  combined with Schema.org structured data ensures Xclusive
                  Barber now appears in the Google Map Pack where local customers
                  actually look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Label */}
      <SectionLabel number="02" text="Deliverables" />

      {/* What We Delivered */}
      <section ref={highlightsRef} className="relative z-10 py-16 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-14 opacity-0 ${
              highlightsVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-white mb-4">
              What we{" "}
              <span className="italic text-outline-2">delivered</span>
            </h2>
            <p className="text-base text-white/50 max-w-[540px]">
              A high-performance website and automated booking system that
              replaced phone chaos with a revenue machine for this Durban barber
              shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {projectHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-8 md:p-10 bg-[#0a0a0a] transition-colors duration-300 hover:bg-white/[0.03] opacity-0 ${
                    highlightsVisible ? STAGGER_4[idx] : ""
                  }`}
                >
                  <div className="flex items-start gap-5 mb-5">
                    <span className="text-[11px] font-bold tracking-widest text-[#e7fe56]/50 mt-1 shrink-0">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#e7fe56]/10 border border-[#e7fe56]/15 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#e7fe56]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Label */}
      <SectionLabel number="03" text="Results" />

      {/* Key Outcomes */}
      <section ref={resultsRef} className="relative z-10 py-16 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-14 opacity-0 ${
              resultsVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-white mb-4">
              Key{" "}
              <span className="italic text-outline-2">outcomes</span>
            </h2>
            <p className="text-base text-white/50 max-w-[540px]">
              Hard numbers that prove our custom web design work saves business
              owners time and makes them money.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((item, idx) => (
              <div
                key={item.label}
                className={`rounded-xl p-7 border border-white/10 bg-white/[0.03] flex flex-col gap-3 opacity-0 ${
                  resultsVisible ? STAGGER_4[idx] : ""
                }`}
              >
                <div className="text-[2.8rem] md:text-[3.2rem] font-bold text-[#e7fe56] leading-none tracking-tight">
                  {item.metric}
                </div>
                <div className="text-sm font-semibold text-white">
                  {item.label}
                </div>
                <div className="w-8 h-px bg-white/20" />
                <p className="text-xs text-white/45 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Label */}
      <SectionLabel number="04" text="Technology" />

      {/* Tech Stack */}
      <section ref={techRef} className="relative z-10 py-16 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-10 opacity-0 ${
              techVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-white mb-4">
              Tech <span className="italic text-outline-2">stack</span>
            </h2>
          </div>
          <div
            className={`flex flex-wrap gap-2.5 opacity-0 ${
              techVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                : ""
            }`}
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-white/60 hover:border-[#e7fe56]/30 hover:text-[#e7fe56]/80 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="relative z-10 py-20 md:py-32 px-6">
        <div className="max-w-[800px] w-full mx-auto">
          <div
            className={`opacity-0 ${
              ctaVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6 block">
              Ready to start?
            </span>
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-6">
              Need a website that{" "}
              <span className="italic text-outline-2">books clients</span> for
              you?
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-[560px]">
              Whether you&apos;re a barber in Durban, a salon in Johannesburg,
              or any small business in South Africa that&apos;s tired of
              answering the phone, we build websites that get you found, booked,
              and paid.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center text-base font-semibold bg-[#e7fe56] text-black pl-8 pr-3 py-3 rounded-full hover:bg-[#e7fe56]/90 hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <span className="ml-3 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center text-base font-semibold text-white/60 hover:text-white border border-white/15 hover:border-white/30 pl-8 pr-3 py-3 rounded-full transition-all duration-300"
              >
                View All Projects
                <span className="ml-3 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
