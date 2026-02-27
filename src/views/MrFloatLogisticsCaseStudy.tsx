"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Globe,
  WhatsappLogo,
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
    title: "Transport Company Web Design That Builds Trust",
    description:
      "We built a fast, professional landing page that instantly communicates credibility. Instead of scattered social media posts, Mr. Float now has a centralised digital presence that showcases every service from taxi rides to package deliveries in one polished, conversion-focused layout.",
  },
  {
    number: "02",
    icon: WhatsappLogo,
    title: "Custom WhatsApp Booking Integration",
    description:
      "We designed a streamlined service selection flow that funnels every enquiry, whether it's a car hire, airport shuttle, or long-distance trip, directly into a pre-formatted WhatsApp message. Customers tap, select their service, and start chatting. Zero friction, zero missed leads.",
  },
  {
    number: "03",
    icon: DeviceMobile,
    title: "Mobile-Optimised for On-the-Go Bookings",
    description:
      "Over 90% of Mr. Float's customers browse on mobile. We built a lightning-fast, thumb-friendly interface that loads in under 0.9 seconds on 3G networks. Critical in Zimbabwe where data costs are high and connection speeds vary.",
  },
  {
    number: "04",
    icon: MagnifyingGlass,
    title: "Local SEO for Transport Companies in Zimbabwe",
    description:
      "On-page SEO targeting 'transport service Zimbabwe', 'car hire Harare', and 'airport shuttle Bulawayo' ensures Mr. Float appears when business owners and travellers search for reliable logistics. Schema.org markup drives local search visibility across multiple cities.",
  },
];

const results = [
  {
    metric: "< 0.9s",
    label: "Mobile Load Time",
    description:
      "Sub-second performance on mobile networks, keeping users engaged even on 3G",
  },
  {
    metric: "3x",
    label: "Daily WhatsApp Enquiries",
    description:
      "Triple the daily inbound leads funnelled directly into WhatsApp conversations",
  },
  {
    metric: "6 to 1",
    label: "Services, One Platform",
    description:
      "Six distinct transport services unified under one clear, navigable digital presence",
  },
  {
    metric: "Top 5",
    label: "Local Search Visibility",
    description:
      "Improved Google rankings for key transport and logistics terms in Zimbabwe",
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
  "WhatsApp Business API",
  "Schema.org Markup",
  "Responsive Images",
  "Mobile-First Architecture",
];

export const MrFloatLogisticsCaseStudy = () => {
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
              Logistics &amp; Transport
            </span>
          </div>
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight text-white mb-6">
            Mr. Float
            <br />
            <span className="italic text-outline-2">Logistics</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[680px] mx-auto mb-10">
            How we built a high-converting landing page with custom WhatsApp
            booking integration, unifying six transport services into one
            lead-generating digital platform for a Zimbabwe-based transport
            company.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#e7fe56]/60" />
              Zimbabwe
            </span>
            <span className="w-px h-4 bg-white/15" />
            <span className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#e7fe56]/60" />
              Transport &amp; Logistics
            </span>
            <span className="w-px h-4 bg-white/15" />
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#e7fe56]/60" />
              Landing Page &amp; WhatsApp Integration
            </span>
          </div>
        </div>
      </section>

      {/* Preview Image */}
      <SectionWrapper className="z-10 !pt-0 !pb-0 md:!pb-0">
        <div className="rounded-2xl overflow-hidden border border-white/10 animate-[fadeInUp_0.8s_ease-out_0.4s_both] shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
          <Image
            src="/preview/mrfloatlogistics.com_(laptop) (6).webp"
            alt="Transport company web design — Mr. Float Logistics website with custom WhatsApp booking integration by LM Studios"
            width={1200}
            height={630}
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

              {/* Pull quote */}
              <blockquote className="border-l-2 border-[#e7fe56]/50 pl-5 mb-8">
                <p className="text-white/90 text-lg font-medium leading-snug">
                  &ldquo;Scattered communication killed conversions. Potential
                  customers had to hunt through social media posts just to find a
                  phone number.&rdquo;
                </p>
              </blockquote>

              <div className="space-y-5">
                <p className="text-white/60 leading-relaxed">
                  Mr. Float Logistics operates across Zimbabwe offering a complex
                  array of services: taxi rides, long-distance travel, car hire,
                  airport shuttles, and package deliveries. Despite being a
                  trusted name locally, they had no centralised digital presence
                  to match their reputation.
                </p>
                <p className="text-white/60 leading-relaxed">
                  There was no clear way to see all services, compare options, or
                  make a booking. This was leading to dozens of lost leads every
                  day.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Without a professional website, Mr. Float was invisible to the
                  growing number of Zimbabweans searching online for{" "}
                  <span className="text-white/80">
                    &quot;transport service Zimbabwe&quot;
                  </span>{" "}
                  or{" "}
                  <span className="text-white/80">&quot;car hire Harare&quot;</span>{" "}
                  and losing business to competitors who looked more established.
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

              {/* Pull quote */}
              <blockquote className="border-l-2 border-[#e7fe56]/50 pl-5 mb-8">
                <p className="text-white/90 text-lg font-medium leading-snug">
                  &ldquo;One page, six services, one tap to book. Every service
                  opens a pre-formatted WhatsApp message automatically.&rdquo;
                </p>
              </blockquote>

              <div className="space-y-5">
                <p className="text-white/60 leading-relaxed">
                  As experienced logistics website developers, we built a fast,
                  mobile-optimised landing page designed to do one thing
                  exceptionally well: funnel six diverse transport services
                  directly into a streamlined WhatsApp booking system.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Every service from airport shuttles to package deliveries is
                  clearly presented with its own call-to-action that opens a
                  pre-formatted WhatsApp message. The customer never has to type
                  an explanation. The system handles context automatically.
                </p>
                <p className="text-white/60 leading-relaxed">
                  We optimised every asset for sub-second loads on 3G networks,
                  knowing that most users access the site on budget smartphones
                  with limited data. The result: a professional digital presence
                  that converts, even on the slowest connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Label */}
      <SectionLabel number="02" text="Deliverables" />

      {/* What We Delivered */}
      <section
        ref={highlightsRef}
        className="relative z-10 py-16 px-6"
      >
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
              A high-converting landing page with custom WhatsApp booking
              integration, purpose-built for a multifaceted transport business
              in Zimbabwe.
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
              Measurable results proving that practical, high-converting small
              business websites in Zimbabwe drive real revenue.
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
              Need a website for your{" "}
              <span className="italic text-outline-2">transport business</span>?
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-[560px]">
              Whether you run a logistics company in Zimbabwe, a shuttle service
              in South Africa, or any transport business that needs to capture
              leads online, we build small business websites that turn visitors
              into WhatsApp bookings.
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
