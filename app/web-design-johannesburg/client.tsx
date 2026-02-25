"use client";

import Link from "next/link";
import { Check, ArrowRight } from "@phosphor-icons/react";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessCardGrid } from "@/components/ProcessCardGrid";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TestimonialsHeader } from "@/sections/TestimonialsSection/TestimonialsHeader";
import { TestimonialsGrid } from "@/sections/TestimonialsSection/components/TestimonialsGrid";
import { FAQ } from "@/sections/FAQ";
import { webDesignFAQ } from "@/sections/FAQ/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LatestProjectsHeader } from "@/sections/ProjectsSection/components/LatestProjectsHeader";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { featuredProjects } from "@/sections/ProjectsSection/constants";

const JHB_PACKAGES = [
  {
    title: "Personal Portfolio",
    price: "From R1,999",
    description:
      "Perfect for Jozi freelancers and creatives needing a sleek, single-page digital presence.",
    features: ["Single Page", "Mobile Responsive", "Contact Form", "Basic SEO"],
  },
  {
    title: "Business Website",
    price: "R2,499 - R4,999",
    description:
      "Multi-page, SEO-optimized platforms with click-to-call and WhatsApp integration to capture foot traffic.",
    features: [
      "3-6 Pages",
      "WhatsApp Integration",
      "Google Maps Setup",
      "SEO Optimized",
    ],
    popular: true,
  },
  {
    title: "E-Commerce",
    price: "From R7,499",
    description:
      "Secure, scalable online stores with integrated payment gateways, ready to sell to the entire South African market.",
    features: [
      "Online Store",
      "Payment Gateway",
      "Product Management",
      "Shopping Cart",
    ],
  },
];

export default function WebDesignJohannesburgClient() {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.1);
  const { ref: whyChooseRef, isVisible: whyChooseVisible } =
    useScrollAnimation(0.1);
  const { ref: packagesRef, isVisible: packagesVisible } =
    useScrollAnimation(0.1);
  const { ref: trackRecordRef, isVisible: trackRecordVisible } =
    useScrollAnimation(0.1);

  return (
    <>
      <ServiceHero
        title={
          <>
            Web Design
            <br />
            Johannesburg
          </>
        }
        underlineColor="lime"
        description="Custom websites built for the City of Gold. We build hand-coded, high-performance websites that rank on Google and convert visitors into paying clients. Based in Midrand, serving the entire Johannesburg metropolitan area."
        badge={
          <>
            <span className="text-white/50 text-sm uppercase tracking-widest">
              JOHANNESBURG
            </span>
            <span className="text-xs font-thin inline-block text-center whitespace-nowrap align-middle border-white/30 px-4 py-1.5 rounded-full border border-solid text-white/50">
              Local Experts
            </span>
          </>
        }
      />

      {/* Intro Section */}
      <SectionWrapper>
        <div
          ref={introRef}
          className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 opacity-0 ${
            introVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
          }`}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-6">
              Stand out in{" "}
              <span className="italic text-[#e7fe56]">
                Africa&apos;s economic hub
              </span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Johannesburg is the fast-paced economic heartbeat of South Africa.
              To compete here, your business needs more than just a template.
              You need a website that loads instantly, ranks on Google, and
              converts visitors into paying clients.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              At LM Studios, we skip the generic templates and hidden fees.
              Operating just up the highway in Midrand, we deliver transparent,
              once-off pricing and web solutions engineered for maximum local
              visibility.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <div className="text-center">
                  <span className="text-[#e7fe56] font-bold text-2xl block mb-2">
                    LM Studios
                  </span>
                  <span className="text-white/40 text-sm uppercase tracking-widest">
                    Johannesburg &bull; Midrand
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Johannesburg Businesses Choose Us */}
      <SectionWrapper>
        <div
          ref={whyChooseRef}
          className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 opacity-0 ${
            whyChooseVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
          }`}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-6">
              Why Johannesburg Businesses{" "}
              <span className="italic text-[#e7fe56]">
                Choose LM Web Studios
              </span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Johannesburg is where South Africa&apos;s most ambitious businesses
              compete. From Sandton&apos;s financial giants to the creative
              hustle of Braamfontein and the logistics hubs of Jet Park,
              competition is fierce. To stand out here, you need more than just a
              generic template.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              You need a high-performance website that captures the energy of
              your business and converts local traffic into paying clients. At LM
              Web Studios, we understand the local market. We don&apos;t just
              build websites; we build digital assets designed to grow your
              revenue.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              We skip the clunky page builders and hidden fees. Instead, we
              deliver hand-coded, SEO-optimized sites that load instantly and
              rank higher on Google, ensuring your business gets found by
              customers in your area.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <div className="text-center">
                  <span className="text-[#e7fe56] font-bold text-2xl block mb-2">
                    LM Web Studios
                  </span>
                  <span className="text-white/40 text-sm uppercase tracking-widest">
                    Johannesburg &bull; Sandton &bull; Braamfontein
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <ProcessCardGrid
        heading={
          <>
            Why <span className="italic text-outline-15">Choose Us</span>
          </>
        }
        description="We don't just build websites; we build business assets designed to grow with you."
        cards={[
          {
            step: 1,
            variant: "purple",
            title: "Zero Hidden Costs",
            description:
              "No expensive monthly retainers. You pay a once-off fee for your build, and your first year of hosting is entirely on us.",
          },
          {
            step: 2,
            variant: "yellow",
            title: "Built for Speed & SEO",
            description:
              "We don't rely on clunky page builders. Our sites are custom-coded to deliver sub-second load times, giving you a massive advantage in Google’s local search results.",
          },
          {
            step: 3,
            variant: "cyan",
            title: "The 6-Month Warranty",
            description:
              "We stand by our code. Every website we launch comes with a 6-month post-launch warranty covering bug fixes and browser compatibility at no extra charge.",
          },
        ]}
      />

      {/* Packages Section */}
      <SectionWrapper>
        <div ref={packagesRef}>
          <div
            className={`text-center mb-16 opacity-0 ${
              packagesVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-4">
              Tailored <span className="italic text-outline-15">Packages</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Whether you are a startup in Braamfontein or an established
              logistics company in Jet Park, we have a solution for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JHB_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl border ${
                  pkg.popular
                    ? "border-[#e7fe56] bg-white/[0.03]"
                    : "border-white/10 bg-white/[0.02]"
                } flex flex-col hover:bg-white/[0.05] transition-all duration-300 ${
                  packagesVisible
                    ? `animate-[fadeInUp_0.8s_ease-out_${
                        0.4 + idx * 0.1
                      }s_both]`
                    : "opacity-0"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e7fe56] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">
                  {pkg.title}
                </h3>
                <div className="text-2xl font-semibold text-[#e7fe56] mb-4">
                  {pkg.price}
                </div>
                <p className="text-white/60 text-sm mb-6 flex-grow">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-center gap-3 text-sm text-white/80"
                    >
                      <Check className="w-4 h-4 text-[#e7fe56]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all ${
                    pkg.popular
                      ? "bg-[#e7fe56] text-black hover:bg-[#e7fe56]/90"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Track Record */}
      <SectionWrapper className="bg-white/[0.02]">
        <div
          ref={trackRecordRef}
          className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 opacity-0 ${
            trackRecordVisible
              ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
              : ""
          }`}
        >
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                <div className="text-3xl font-bold text-[#e7fe56] mb-1">
                  100%
                </div>
                <div className="text-sm text-white/60">
                  Automated Booking Systems
                </div>
              </div>
              <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                <div className="text-3xl font-bold text-[#e7fe56] mb-1">
                  Sub-1s
                </div>
                <div className="text-sm text-white/60">Load Times</div>
              </div>
              <div className="bg-black/40 p-6 rounded-2xl border border-white/5 col-span-2">
                <div className="text-3xl font-bold text-[#e7fe56] mb-1">
                  Top 3
                </div>
                <div className="text-sm text-white/60">
                  Local Map Pack Rankings
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-6">
              Real Results in{" "}
              <span className="italic text-outline-15">
                Competitive Sectors
              </span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              We don&apos;t just build sites; we build business tools. Our
              custom solutions have successfully replaced outdated systems for
              clients across the country.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              From creating 100% automated Next.js booking platforms for
              grooming businesses to integrating high-converting WhatsApp
              funnels for transport companies, we know how to turn your website
              into your best salesperson.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center text-[#e7fe56] hover:text-white transition-colors font-semibold"
            >
              View our Case Studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Latest Projects */}
      <section aria-labelledby="projects-heading">
        <LatestProjectsHeader />
        <div className="relative z-10 pb-16 md:pb-28 px-6">
          <div className="max-w-[1400px] w-full mx-auto">
            <div className="flex flex-wrap -mx-3 pt-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  index={index}
                  isVisible={true}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" aria-labelledby="testimonials-heading">
        <TestimonialsHeader />
        <TestimonialsGrid />
      </section>

      <section id="faq" aria-label="Frequently asked questions">
        <FAQ items={webDesignFAQ} />
      </section>
    </>
  );
}
