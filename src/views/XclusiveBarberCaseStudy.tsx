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

const projectHighlights = [
  {
    icon: Globe,
    title: "Custom Website Design",
    description:
      "A fully bespoke website designed to reflect the premium grooming experience at Xclusive Barber. Clean layouts, bold typography, and a dark-themed aesthetic that matches the shop's identity.",
  },
  {
    icon: CalendarCheck,
    title: "Online Booking System",
    description:
      "Built a custom booking system that lets clients book appointments 24/7. Automated confirmations and reminders reduce no-shows and free up the team to focus on haircuts.",
  },
  {
    icon: DeviceMobile,
    title: "Mobile-First Design",
    description:
      "Over 80% of local searches happen on mobile. The site is fully responsive and optimised for fast load times on any device, ensuring clients in Davenport can book on the go.",
  },
  {
    icon: MagnifyingGlass,
    title: "Local SEO Optimisation",
    description:
      "On-page SEO targeting key phrases like 'barber in Davenport', 'barber near me Durban', and 'haircut Chatsworth'. Structured data markup ensures the business appears in Google's local pack.",
  },
];

const results = [
  {
    metric: "Mobile-First",
    label: "Responsive Design",
    description: "Optimised for the 80%+ of clients searching on their phones",
  },
  {
    metric: "24/7",
    label: "Online Booking",
    description: "Clients can book appointments any time, day or night",
  },
  {
    metric: "Local SEO",
    label: "Davenport & Durban",
    description: "Targeted visibility for barber searches in the local area",
  },
  {
    metric: "Fast",
    label: "Page Load Speed",
    description: "Sub-second load times for a seamless browsing experience",
  },
];

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
  const { ref: overviewRef, isVisible: overviewVisible } = useScrollAnimation(0.15);
  const { ref: highlightsRef, isVisible: highlightsVisible } = useScrollAnimation(0.1);
  const { ref: resultsRef, isVisible: resultsVisible } = useScrollAnimation(0.15);
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation(0.15);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.15);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center pt-40 pb-16 px-6 overflow-hidden">
        <div className="relative z-30 max-w-[900px] w-full text-center animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          <div className="flex items-center justify-center gap-3 mb-6">
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
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[700px] mx-auto mb-8">
            How we designed a premium barber website with an integrated booking
            system for a Davenport, Durban barbershop, helping them get found
            online and fill their chairs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              Davenport, Durban
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5">
              <Scissors className="w-4 h-4" />
              Barber Shop
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Website &amp; Booking System
            </span>
          </div>
        </div>
      </section>

      {/* Preview Image */}
      <SectionWrapper className="z-10 !pt-0 !pb-0 md:!pb-0">
        <div className="rounded-2xl overflow-hidden border border-white/10 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          <img
            src="/preview/v0-barbershop-durban.vercel.app_(laptop).webp"
            alt="Xclusive Barber Davenport website design by LM Studios, barber website with online booking"
            className="w-full h-auto"
          />
        </div>
      </SectionWrapper>

      {/* Overview */}
      <section ref={overviewRef} className="relative z-10 py-16 md:py-16 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div
              className={`opacity-0 ${
                overviewVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
              }`}
            >
              <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-6">
                The <span className="italic text-outline-2">challenge</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Xclusive Barber is a popular grooming destination in Davenport,
                Durban, known for precision cuts, beard trims, and a welcoming
                atmosphere. Despite their strong local reputation, they had no
                online presence. Clients relied entirely on walk-ins and word of
                mouth.
              </p>
              <p className="text-white/70 leading-relaxed">
                In a competitive area where potential clients search for
                &quot;barber in Davenport&quot;, &quot;best barber Durban&quot;,
                or &quot;haircut near me Chatsworth&quot;, being invisible on
                Google meant losing bookings to competitors with even basic
                websites.
              </p>
            </div>
            <div
              className={`opacity-0 ${
                overviewVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""
              }`}
            >
              <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-6">
                The <span className="italic text-outline-2">solution</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We built a complete digital solution: a custom-designed website
                that captures the premium feel of Xclusive Barber, paired with a
                fully integrated online booking system. Clients in the greater
                Durban area can now find the shop on Google, view services and
                pricing, and book their next haircut in seconds.
              </p>
              <p className="text-white/70 leading-relaxed">
                Every element was designed to convert. From the mobile-first
                layout to clear call-to-action buttons that guide visitors
                straight to the booking page. On-page SEO ensures the site
                ranks for local search terms across Davenport, Chatsworth,
                and greater Durban.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Delivered */}
      <section ref={highlightsRef} className="relative z-10 py-16 md:py-16 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 md:mb-16 opacity-0 ${
              highlightsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-4">
              What we{" "}
              <span className="italic text-outline-2">delivered</span>
            </h2>
            <p className="text-lg text-white/60 max-w-[600px]">
              A full website and booking system designed to put Xclusive Barber
              on the map.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {projectHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[#e7fe56]/30 hover:bg-white/[0.07] opacity-0 ${
                    highlightsVisible
                      ? `animate-[fadeInUp_0.8s_ease-out_${0.2 + idx * 0.15}s_both]`
                      : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e7fe56]/10 border border-[#e7fe56]/20 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#e7fe56]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section ref={resultsRef} className="relative z-10 py-16 md:py-16 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 md:mb-16 opacity-0 ${
              resultsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-4">
              Key{" "}
              <span className="italic text-outline-2">outcomes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((item, idx) => (
              <div
                key={item.label}
                className={`rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm text-center opacity-0 ${
                  resultsVisible
                    ? `animate-[fadeInUp_0.8s_ease-out_${0.2 + idx * 0.1}s_both]`
                    : ""
                }`}
              >
                <div className="text-2xl md:text-3xl font-bold text-[#e7fe56] mb-1">
                  {item.metric}
                </div>
                <div className="text-sm font-semibold text-white mb-2">
                  {item.label}
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section ref={techRef} className="relative z-10 py-16 md:py-16 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-10 opacity-0 ${
              techVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-4">
              Tech{" "}
              <span className="italic text-outline-2">stack</span>
            </h2>
          </div>
          <div
            className={`flex flex-wrap gap-3 opacity-0 ${
              techVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""
            }`}
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/70 hover:border-[#e7fe56]/30 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="relative z-10 py-16 md:py-24 px-6">
        <div className="max-w-[800px] w-full mx-auto text-center">
          <div
            className={`opacity-0 ${
              ctaVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-6">
              Need a website for your{" "}
              <span className="italic text-outline-2">business</span>?
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-[600px] mx-auto">
              Whether you&apos;re a barber in Durban, a salon in Johannesburg,
              or any small business in South Africa, we build websites that
              get you found and booked.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                className="inline-flex items-center text-base font-semibold text-white/70 hover:text-white border border-white/20 hover:border-white/40 pl-8 pr-3 py-3 rounded-full transition-all duration-300"
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
