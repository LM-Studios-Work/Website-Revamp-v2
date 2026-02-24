"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Airplane,
  Globe,
  WhatsappLogo,
  Camera,
  MagnifyingGlass,
  ArrowRight,
  MapPin,
  Clock,
} from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionWrapper } from "@/components/SectionWrapper";

const projectHighlights = [
  {
    number: "01",
    icon: Globe,
    title: "Travel Agency Web Design That Sells Experiences",
    description:
      "We built a visually immersive website that transports visitors before they even book. High-resolution travel galleries, bold destination imagery, and compelling trip descriptions work together to convert casual browsers into paying group tour participants.",
  },
  {
    number: "02",
    icon: WhatsappLogo,
    title: "Streamlined WhatsApp Booking Funnel",
    description:
      "Each upcoming trip features a dedicated booking CTA that opens a pre-formatted WhatsApp message with the trip name, date, and traveller details. No forms, no friction. Just one tap from 'I want to go' to a confirmed conversation with the travel team.",
  },
  {
    number: "03",
    icon: Camera,
    title: "Sub-Second Gallery Performance",
    description:
      "Travel is sold through visuals. We optimised every gallery image for sub-second rendering using next-gen formats, lazy loading, and responsive sizing, ensuring Limpopo's stunning landscapes load instantly, even on rural mobile networks.",
  },
  {
    number: "04",
    icon: MagnifyingGlass,
    title: "Local SEO for Travel Agencies in Limpopo",
    description:
      "On-page SEO targeting 'travel agency Thohoyandou', 'Limpopo group tours', and 'tour operator Venda' paired with Schema.org TouristTrip markup ensures Ndilayavhupo appears when local travellers search for their next adventure.",
  },
];

const results = [
  {
    metric: "60%+",
    label: "Trip Fill Rate Increase",
    description:
      "Group tours filling faster with direct WhatsApp bookings replacing scattered social media DMs",
  },
  {
    metric: "< 0.7s",
    label: "Gallery Load Time",
    description:
      "Sub-second image rendering for travel galleries, even on mobile data connections",
  },
  {
    metric: "5x",
    label: "Organic Local Traffic",
    description:
      "Five-fold increase in organic search visitors from Limpopo and surrounding provinces",
  },
  {
    metric: "100%",
    label: "Automated Lead Capture",
    description:
      "Every trip enquiry captured and funnelled into WhatsApp. Zero leads lost to DM chaos",
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
  "Schema.org TouristTrip Markup",
  "Image Optimisation Pipeline",
  "Responsive Images",
];

export const NdilayavhupoTravelsCaseStudy = () => {
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
              Travel &amp; Tourism
            </span>
          </div>
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight text-white mb-6">
            Ndilayavhupo
            <br />
            <span className="italic text-outline-2">Travels</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[680px] mx-auto mb-10">
            How we built a visually immersive, high-performance platform with a
            streamlined WhatsApp booking funnel, turning a Thohoyandou-based
            travel agency&apos;s scattered social media posts into a
            lead-generating machine that fills group tours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#e7fe56]/60" />
              Thohoyandou, Limpopo
            </span>
            <span className="w-px h-4 bg-white/15" />
            <span className="flex items-center gap-2">
              <Airplane className="w-4 h-4 text-[#e7fe56]/60" />
              Travel Agency
            </span>
            <span className="w-px h-4 bg-white/15" />
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#e7fe56]/60" />
              Tourism Website &amp; Booking Platform
            </span>
          </div>
        </div>
      </section>

      {/* Preview Image */}
      <SectionWrapper className="z-10 !pt-0 !pb-0 md:!pb-0">
        <div className="rounded-2xl overflow-hidden border border-white/10 animate-[fadeInUp_0.8s_ease-out_0.4s_both] shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
          <Image
            src="/preview/www.ndilayavhupo.co.za_(laptop) (2).webp"
            alt="Travel agency web design — Ndilayavhupo Travels custom tourism booking platform by LM Studios"
            width={1200}
            height={630}
            className="w-full h-auto"
          />
        </div>
      </SectionWrapper>

      {/* Section Label */}
      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-4">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            01 / Challenge
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>

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
                  &ldquo;Social media chaos was leaking leads. Potential
                  travellers couldn&apos;t find past trips, compare options, or
                  book with confidence.&rdquo;
                </p>
              </blockquote>

              <div className="space-y-5">
                <p className="text-white/60 leading-relaxed">
                  Ndilayavhupo Travels is a Thohoyandou-based travel agency
                  specialising in shared group tours and Limpopo travel packages.
                  They curate authentic experiences across South Africa&apos;s
                  hidden gems, but their digital presence was holding them back.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Trip announcements, booking requests, and customer enquiries
                  were all handled through disjointed Facebook and WhatsApp
                  status posts, leading to half-filled tours and revenue left on
                  the table.
                </p>
                <p className="text-white/60 leading-relaxed">
                  When someone searched{" "}
                  <span className="text-white/80">
                    &quot;travel agency Thohoyandou&quot;
                  </span>{" "}
                  or{" "}
                  <span className="text-white/80">
                    &quot;Limpopo group tours&quot;
                  </span>
                  , Ndilayavhupo didn&apos;t appear. Without a website, they had
                  no way to build brand authority beyond their existing social
                  circle.
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
                  &ldquo;A visual-first experience. Stunning destination
                  galleries with a one-tap WhatsApp booking button that
                  auto-fills trip details.&rdquo;
                </p>
              </blockquote>

              <div className="space-y-5">
                <p className="text-white/60 leading-relaxed">
                  As experienced tour operator website developers, we built a
                  visually immersive, high-performance custom tourism booking
                  platform that turns scrolling into booking and transforms
                  social media followers into confirmed travellers.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Upcoming tours are displayed with clear dates, pricing,
                  itineraries, and a one-tap WhatsApp booking button that
                  auto-fills the trip details, turning inspiration into action.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Beyond current trips, we built an interest-capture system for
                  upcoming itineraries. Visitors can register interest in future
                  destinations, giving Ndilayavhupo a warm lead list to fill
                  every tour before it&apos;s even announced on social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Label */}
      <div className="max-w-[1400px] mx-auto px-6 pt-4 pb-4">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            02 / Deliverables
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>

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
              A custom tourism booking platform with WhatsApp booking funnels
              and automated lead capture, built to fill group tours and establish
              local search authority.
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
      <div className="max-w-[1400px] mx-auto px-6 pt-4 pb-4">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            03 / Results
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>

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
              Quantifiable results proving that custom tourism booking platforms
              build profitable, lead-generating digital assets for the tourism
              sector.
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
      <div className="max-w-[1400px] mx-auto px-6 pt-4 pb-4">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            04 / Technology
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>

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
              <span className="italic text-outline-2">travel business</span>?
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-[560px]">
              Whether you&apos;re a tour operator in Limpopo, a travel agency in
              Cape Town, or any tourism business that needs to fill trips and
              capture leads, we build custom tourism booking platforms that turn
              browsers into booked travellers.
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
