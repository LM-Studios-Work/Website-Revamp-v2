"use client";

import Link from "next/link";
import {
  Check,
  ShieldCheck,
  CloudArrowUp,
  Toolbox,
} from "@phosphor-icons/react";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessCardGrid } from "@/components/ProcessCardGrid";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TestimonialsHeader } from "@/sections/TestimonialsSection/TestimonialsHeader";
import { TestimonialsGrid } from "@/sections/TestimonialsSection/components/TestimonialsGrid";
import { FAQ } from "@/sections/FAQ";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LatestProjectsHeader } from "@/sections/ProjectsSection/components/LatestProjectsHeader";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { featuredProjects } from "@/sections/ProjectsSection/constants";

const MIDRAND_PACKAGES = [
  {
    title: "Personal Portfolio",
    price: "From R1,999",
    description:
      "Ideal for freelancers, consultants, and creatives in Midrand needing a professional digital CV or portfolio.",
    features: [
      "Single Page Layout",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO Setup",
    ],
  },
  {
    title: "Business Website",
    price: "R2,499 - R4,999",
    description:
      "A complete multi-page solution for local businesses. Perfect for service providers in Waterfall, Kyalami, and Halfway House.",
    features: [
      "3-6 Custom Pages",
      "WhatsApp Integration",
      "Google Maps Setup",
      "Local SEO Optimized",
    ],
    popular: true,
  },
  {
    title: "E-Commerce Store",
    price: "From R7,499",
    description:
      "Sell products online with a secure, scalable store. Includes payment gateway integration (PayFast/Yoco) and inventory management.",
    features: [
      "Full Online Store",
      "Payment Gateway",
      "Product Management",
      "Shopping Cart",
    ],
  },
];

const MIDRAND_FAQ_ITEMS = [
  {
    question: "How long does a website take to build?",
    answer:
      "For a standard professional business website, our turnaround time is typically 5 to 7 working days. Larger e-commerce projects usually take 10 to 15 working days. We prioritize speed without compromising on quality.",
  },
  {
    question: "Do you offer hosting services?",
    answer:
      "Yes. Every website package includes 12 months of free hosting. After the first year, we offer affordable renewal rates to keep your site secure and online.",
  },
  {
    question: "What is the difference between a 5-page and 10-page site?",
    answer:
      "A 5-page site typically covers the essentials: Home, About, Services, Gallery, and Contact. A 10-page site allows for more specific service pages, location-specific landing pages, or detailed case studies, which significantly improves your SEO reach and ability to rank for different keywords.",
  },
  {
    question: "Do you work with businesses outside Midrand?",
    answer:
      "Absolutely. While we are based in Midrand and specialize in the local market, we serve clients across Gauteng and South Africa. We use Zoom, WhatsApp, and email to manage projects seamlessly regardless of location.",
  },
  {
    question: "Is my website going to be mobile-friendly?",
    answer:
      "Yes. We adopt a mobile-first design approach. Your website will look and function perfectly on smartphones, tablets, and desktops, which is crucial for both user experience and Google rankings.",
  },
  {
    question: "Are there any hidden monthly fees?",
    answer:
      "No. Our design packages are once-off fees. You own your website. The only recurring cost after the first free year is your annual hosting and domain renewal, which is standard for any website.",
  },
];

export default function WebDesignMidrandClient() {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.1);
  const { ref: packagesRef, isVisible: packagesVisible } =
    useScrollAnimation(0.1);
  const { ref: includedRef, isVisible: includedVisible } =
    useScrollAnimation(0.1);

  return (
    <>
      <ServiceHero
        title={
          <>
            Website Design
            <br />
            in Midrand
          </>
        }
        underlineColor="lime"
        description="Professional web design services for businesses in Midrand, Waterfall City, and Kyalami. We build fast, mobile-responsive websites that rank on Google and convert visitors into customers. Get a custom quote today."
        badge={
          <>
            <span className="text-white/50 text-sm uppercase tracking-widest">
              MIDRAND &bull; GAUTENG
            </span>
            <span className="text-xs font-thin inline-block text-center whitespace-nowrap align-middle border-white/30 px-4 py-1.5 rounded-full border border-solid text-white/50">
              Local Experts
            </span>
          </>
        }
      />

      {/* Intro Section - Why Midrand Businesses Choose Us */}
      <SectionWrapper>
        <div
          ref={introRef}
          className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 opacity-0 ${
            introVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
          }`}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-6">
              Why Midrand Businesses{" "}
              <span className="italic text-lime">
                Choose LM Web Studios
              </span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Midrand is the fastest-growing business hub in Gauteng. From the
              corporate towers of Waterfall City to the logistics centers in
              Clayville and the equestrian estates of Kyalami, competition is
              fierce. To stand out here, you need more than just a generic
              template.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              You need a high-performance website that captures the energy of
              your business and converts local traffic into paying clients. At
              LM Web Studios, we understand the local market. We don't just
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
                  <span className="text-lime font-bold text-2xl block mb-2">
                    LM Web Studios
                  </span>
                  <span className="text-white/40 text-sm uppercase tracking-widest">
                    Midrand &bull; Waterfall &bull; Kyalami
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

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
              Our Website Design Packages for{" "}
              <span className="italic text-outline-15">Midrand Businesses</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Transparent pricing with no hidden costs. Choose the package that
              fits your growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MIDRAND_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl border ${
                  pkg.popular
                    ? "border-lime bg-white/[0.03]"
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
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">
                  {pkg.title}
                </h3>
                <div className="text-2xl font-semibold text-lime mb-4">
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
                      <Check className="w-4 h-4 text-lime" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all ${
                    pkg.popular
                      ? "bg-lime text-black hover:bg-lime/90"
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

      {/* What's Included Section */}
      <section
        ref={includedRef}
        className="relative z-10 py-16 md:py-28 px-6 bg-white/[0.02]"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 md:mb-16 opacity-0 ${
              includedVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              What's Included in{" "}
              <span className="italic text-outline-2">
                Every Website We Build
              </span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[650px]">
              We don't just deliver a file; we deliver a complete business
              asset. Every project ships with built-in peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Warranty Card */}
            <div
              className={`rounded-3xl p-8 bg-lime text-black flex flex-col opacity-0 ${
                includedVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold font-obviously mb-3">
                6-Month Warranty
              </h3>
              <p className="text-black/80 text-sm leading-relaxed mb-6 flex-1">
                We stand by our code. Every build includes a 6-month post-launch
                warranty covering bug fixes, browser compatibility updates, and
                minor adjustments at no extra charge.
              </p>
            </div>

            {/* Hosting Card */}
            <div
              className={`rounded-3xl p-8 bg-[#d5bff0] text-black flex flex-col opacity-0 ${
                includedVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
                <CloudArrowUp className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold font-obviously mb-3">
                Free Hosting (1 Year)
              </h3>
              <p className="text-black/80 text-sm leading-relaxed mb-6 flex-1">
                Your first year of hosting is on us. We ensure your site is
                hosted on fast, secure servers with 99.9% uptime. After year
                one, renewals are affordable and transparent.
              </p>
            </div>

            {/* Technical Health Card */}
            <div
              className={`rounded-3xl p-8 bg-[#72f5e3] text-black flex flex-col opacity-0 ${
                includedVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.6s_both]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
                <Toolbox className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold font-obviously mb-3">
                SEO & Mobile Ready
              </h3>
              <p className="text-black/80 text-sm leading-relaxed mb-6 flex-1">
                Every site is built mobile-first and includes foundational SEO
                optimization (meta tags, sitemaps, and schema markup) to help
                you rank in Midrand search results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessCardGrid
        heading={
          <>
            Our <span className="italic text-outline-15">Process</span>
          </>
        }
        description="A streamlined workflow designed to get your Midrand business online fast."
        cards={[
          {
            step: 1,
            variant: "purple",
            title: "Discovery",
            description:
              "We discuss your business goals, target audience in Midrand, and design preferences to create a tailored strategy.",
          },
          {
            step: 2,
            variant: "yellow",
            title: "Design & Build",
            description:
              "We design the layout and hand-code your website, ensuring it is fast, responsive, and aligned with your brand.",
          },
          {
            step: 3,
            variant: "cyan",
            title: "Launch & Support",
            description:
              "After testing, we launch your site to the world and provide 6 months of warranty support to ensure smooth operation.",
          },
        ]}
      />

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
        <FAQ
          items={MIDRAND_FAQ_ITEMS}
          title="Frequently Asked Questions About Website Design in Midrand"
        />
      </section>
    </>
  );
}
