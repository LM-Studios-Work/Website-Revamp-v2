"use client";

import Link from "next/link";
import { Camera, Image, Clock, MapPin } from "lucide-react";
import { ServiceHero } from "@/components/ServiceHero";
import { PhotographySection } from "@/sections/PhotographySection";
import { ProcessCardGrid } from "@/components/ProcessCardGrid";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/sections/FAQ";
import { photographyFAQ } from "@/sections/FAQ/constants";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  {
    icon: Camera,
    title: "Professional Equipment",
    description:
      "We shoot with high-end cameras and lenses to ensure sharp, vibrant images that make your brand look its best.",
  },
  {
    icon: Image,
    title: "Expert Editing",
    description:
      "Every image is professionally retouched and colour-graded so the final set feels cohesive and polished.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Edited photos are delivered digitally within a few business days — ready for your website, social media, or print.",
  },
  {
    icon: MapPin,
    title: "On-Site Shoots",
    description:
      "We come to you. Travel is included for shoots in Johannesburg and Gqeberha (Port Elizabeth), with no hidden fees.",
  },
];

export const PhotographyPage = () => {
  const { ref: highlightsRef, isVisible: highlightsVisible } =
    useScrollAnimation(0.15);

  return (
    <>
      <ServiceHero
        title={
          <>
            Brand
            <br />
            Photography
          </>
        }
        underlineColor="cyan"
        description="High-quality on-site photography that captures your brand with clarity and style. We handle the shoot, the editing, and the delivery — so you get stunning images without the hassle. Available in Johannesburg and Gqeberha."
        badge={
          <>
            <span className="text-white/50 text-sm uppercase tracking-widest">
              PHOTOGRAPHY
            </span>
            <span className="text-xs font-thin inline-block text-center whitespace-nowrap align-middle border-white/30 px-4 py-1.5 rounded-full border border-solid text-white/50">
              10h min.
            </span>
          </>
        }
      />

      {/* Photography Gallery Section */}
      <PhotographySection />

      {/* Why choose us */}
      <section
        ref={highlightsRef}
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 opacity-0 ${
              highlightsVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              What you{" "}
              <span className="italic text-outline-2">get</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[600px]">
              Everything you need for a complete brand photography experience —
              included in a single, transparent package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`rounded-3xl p-8 bg-white/5 border border-white/10 opacity-0 ${
                    highlightsVisible
                      ? `animate-[fadeInUp_0.8s_ease-out_${
                          ["0.2s", "0.3s", "0.4s", "0.5s"][idx]
                        }_both]`
                      : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#72f5e3]/10 border border-[#72f5e3]/30 flex items-center justify-center text-[#72f5e3] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold font-obviously mb-3">
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

      {/* Our Process */}
      <ProcessCardGrid
        heading={
          <>
            Our <span className="italic text-outline-15">process</span>
          </>
        }
        description="A simple, stress-free workflow from booking to delivery."
        cards={[
          {
            step: 1,
            variant: "cyan",
            title: "Book & Brief",
            description:
              "Reach out to schedule your shoot. We'll discuss your brand, goals, and preferred style so we arrive fully prepared.",
          },
          {
            step: 2,
            variant: "purple",
            title: "On-Site Shoot",
            description:
              "We come to your location and capture 1–2 hours of professional photography, directing scenes to highlight your brand.",
          },
          {
            step: 3,
            variant: "lime",
            title: "Edit & Deliver",
            description:
              "Your photos are professionally edited and delivered as high-definition files within a few business days.",
          },
        ]}
      />

      {/* Locations */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
              Where we{" "}
              <span className="italic text-outline-2">shoot</span>
            </h2>
          </div>
          <div className="md:w-1/2 flex flex-col gap-6">
            <p className="text-lg text-white/70 leading-relaxed">
              We currently serve clients in{" "}
              <strong className="text-white font-semibold">Johannesburg</strong>{" "}
              and{" "}
              <strong className="text-white font-semibold">
                Gqeberha (Port Elizabeth)
              </strong>
              . Travel is included — no surprise charges, just a flat package
              that covers everything from arrival to final delivery.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Whether you need headshots, product photography, or full brand
              shoots, we adapt to your environment to get the most out of your
              location.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center self-start text-base font-semibold bg-[#72f5e3] text-black pl-8 pr-3 py-3 rounded-full hover:bg-[#72f5e3]/90 hover:scale-105 transition-all duration-300"
            >
              Book a shoot
              <span className="ml-3 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#72f5e3]"
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
      </SectionWrapper>

      {/* FAQ */}
      <FAQ items={photographyFAQ} title="Photography FAQ" />

      {/* CTA */}
      <CTASection
        heading={
          <>
            Ready to capture
            <br />
            your <span className="italic text-outline-15">brand?</span>
          </>
        }
        linkTo="/contact"
        linkText="Book a photoshoot"
        color="cyan"
      />
    </>
  );
};
