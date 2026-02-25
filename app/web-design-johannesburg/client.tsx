"use client";
import Link from "next/link";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";
import { WavyUnderline } from "@/components/WavyUnderline";
import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ProcessCard } from "@/components/ProcessCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TestimonialsHeader } from "@/sections/TestimonialsSection/TestimonialsHeader";
import { TestimonialsGrid } from "@/sections/TestimonialsSection/components/TestimonialsGrid";
import { FAQ } from "@/sections/FAQ";

const PROCESS_CARDS = [
  {
    step: 1,
    variant: "purple" as const,
    title: "Zero Hidden Costs",
    description:
      "No expensive monthly retainers. You pay a once-off fee for your build, and your first year of hosting is entirely on us.",
  },
  {
    step: 2,
    variant: "yellow" as const,
    title: "Built for Speed & SEO",
    description:
      "We don't rely on clunky page builders. Our sites are custom-coded to deliver sub-second load times, giving you a massive advantage in Google’s local Johannesburg search results.",
  },
  {
    step: 3,
    variant: "cyan" as const,
    title: "The 6-Month Warranty",
    description:
      "We stand by our code. Every website we launch comes with a 6-month post-launch warranty covering bug fixes and browser compatibility at no extra charge.",
  },
];

export default function WebDesignJohannesburgClient() {
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.15);

  return (
    <>
      {/* Hero Section */}
      <section
        aria-labelledby="about-heading"
        className="relative flex flex-col justify-center min-h-screen pt-40 pb-20 px-6 overflow-hidden"
      >
        <HeroVideoOverlay />

        <div className="relative z-30 max-w-[1200px] w-full mx-auto">
          <div className="max-w-[800px] anim-fade-in">
            <h1
              id="about-heading"
              className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-white mb-8 text-left"
            >
              Custom Web Design in{" "}
              <span className="relative inline-block">
                Johannesburg
                <WavyUnderline
                  color="limeAlt"
                  className="absolute -bottom-2 left-0 w-full"
                />
              </span>
            </h1>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70 leading-relaxed anim-fade-in anim-stagger-1"
              role="region"
              aria-label="About LM Studios"
            >
              <p className="text-base md:text-lg">
                Johannesburg is the fast-paced economic hub of South Africa. To
                compete here, your business needs a website that loads instantly,
                ranks on Google, and converts visitors into paying clients.
              </p>
              <p className="text-base md:text-lg">
                At LM Studios, we build hand-coded, custom websites for Johannesburg
                businesses. Operating just up the highway in Midrand, we serve the
                entire Jozi metropolitan area. We skip the generic templates, the
                hidden fees, and the expensive monthly retainers that typical city
                agencies charge. Instead, we deliver transparent, once-off pricing
                and web solutions engineered for maximum local visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Marquee */}
      <ServicesMarquee
        variant="py-16 md:py-28"
        primaryText="Why Choose Us"
        secondaryText="Why Choose Us"
      />

      {/* Why Choose LM STudios */}
      <section
        ref={valuesRef}
        aria-label="Our core values"
        className="relative py-16 px-6"
      >
        <div className="max-w-[1400px] mx-auto">
          <h2 className="sr-only">
            Why Johannesburg Businesses Choose LM Studios
          </h2>
          <div
            className={`flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6
              transition-all ease-out duration-300 md:duration-500
              ${
                valuesVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
          >
            {PROCESS_CARDS.map((card, idx) => (
              <div
                key={card.title}
                className="md:transition-all md:duration-500"
                style={{
                  transitionDelay: `${(idx + 1) * 0.1}s`,
                }}
              >
                <ProcessCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <div className="mb-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Web Design Packages Tailored for the Gauteng Market
        </h2>
        <p className="text-lg text-white/70 mb-10">
          Whether you are a startup in Braamfontein needing a modern portfolio
          or an established logistics company requiring a full booking system,
          we have a transparent solution for you:
        </p>
        <div className="space-y-8">
          <div className="border-l-2 border-[#e7fe56] pl-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Personal Portfolios (From R1,999)
            </h3>
            <p className="text-white/70 text-lg">
              Perfect for Jozi freelancers and creatives needing a sleek,
              single-page digital presence.
            </p>
          </div>
          <div className="border-l-2 border-[#e7fe56] pl-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Essential & Professional Business Sites (R2,499 - R4,999)
            </h3>
            <p className="text-white/70 text-lg">
              Multi-page, SEO-optimized platforms with click-to-call, WhatsApp
              integration, and local Google Maps setup to capture foot
              traffic.
            </p>
          </div>
          <div className="border-l-2 border-[#e7fe56] pl-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Custom E-Commerce (From R7,499)
            </h3>
            <p className="text-white/70 text-lg">
              Secure, scalable online stores with integrated payment gateways,
              ready to sell to the entire South African market.
            </p>
          </div>
        </div>
      </div>

      {/* Track Record */}
      <div className="mb-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Our Track Record: Real Results in Highly Competitive Sectors
        </h2>
        <p className="text-lg text-white/70 leading-relaxed">
          We don&apos;t just build sites; we build business tools. Our custom
          solutions have successfully replaced outdated systems for clients
          across the country. From creating 100% automated Next.js booking
          platforms for grooming businesses to integrating high-converting
          WhatsApp funnels for transport companies, we know how to turn your
          website into your best salesperson.
        </p>
      </div>

      <section id="testimonials" aria-labelledby="testimonials-heading">
        <TestimonialsHeader />
        <TestimonialsGrid />
      </section>

      <section id="faq" aria-label="Frequently asked questions">
        <FAQ />
      </section>

      {/* CTA */}
      <div className="mt-12 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to dominate the local market with a site that actually
          performs?
        </h2>
        <p className="text-lg text-white/70 mb-10">
          Get in touch with our Midrand studio today, and let&apos;s map out
          your new digital presence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-base font-semibold bg-[#e7fe56] text-black pl-8 pr-3 py-3 rounded-full hover:bg-[#e7fe56]/90 hover:scale-105 transition-all duration-300"
          >
            Request Your Custom Quote
            <span className="ml-3 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-black -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center text-base font-semibold text-white border border-white/20 pl-8 pr-3 py-3 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            View Our Recent Projects
            <span className="ml-3 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
