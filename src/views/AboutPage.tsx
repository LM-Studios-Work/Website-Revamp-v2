"use client";
import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ProcessCard } from "@/components/ProcessCard";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";
import { WavyUnderline } from "@/components/WavyUnderline";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VALUES_CARDS = [
  {
    step: 1,
    variant: "purple" as const,
    title: "Distinct Identity",
    description:
      "We don't do cookie-cutter templates. Whether it's a professional showcase or a custom app, we craft unique designs that capture your brand's essence and ensure you stand out in a crowded digital market.",
  },
  {
    step: 2,
    variant: "yellow" as const,
    title: "Performance-Driven",
    description:
      "Great design is about clarity and speed. We focus on clean, high-performance experiences that make navigation seamless for your users and optimization easy for search engines. If it doesn't help you get found, it doesn't belong on the page.",
  },
  {
    step: 3,
    variant: "cyan" as const,
    title: "Proven Partnership",
    description:
      "We treat your project as our own. From initial strategy to final launch, you can count on clear timelines, absolute transparency, and a system that is built to scale as your business grows. No disappearing acts—just results.",
  },
];

export const AboutPage = () => {
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.15);

  return (
    <>
      {/* Hero Section */}
      <section
        aria-labelledby="about-heading"
        className="relative flex flex-col items-center justify-center min-h-screen pt-40 pb-20 px-6 overflow-hidden"
      >
        <HeroVideoOverlay />
        <div className="relative z-30 text-center max-w-[900px] mx-auto mb-16 anim-fade-in">
          <h1
            id="about-heading"
            className="text-[clamp(3rem,8vw,5rem)] font-bold leading-tight text-white mb-6"
          >
            <span className="relative inline-block">
              About us
              <WavyUnderline
                color="limeAlt"
                className="absolute -bottom-2 left-0 w-full"
              />
            </span>
          </h1>
        </div>

        {/* Two Column Text */}
        <div
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto text-white/80 leading-relaxed anim-fade-in anim-stagger-1"
          role="region"
          aria-label="About LM Studios"
        >
          <p className="text-base md:text-lg">
            Founded in 2025, LM Studios has evolved from web design into
            building custom web applications and business systems for
            organizations and institutions. Our team is composed of seasoned
            professionals with expertise spanning software development, system
            architecture, and operational design, bringing a wealth of technical
            knowledge to every project. Before any development begins, you'll be
          </p>
          <p className="text-base md:text-lg">
            paired with a dedicated project lead who will act as your main point
            of contact. They will work closely with you throughout the process,
            ensuring every technical decision and feature aligns with your
            operational needs. With our systematic approach and attention to
            detail, we transform your workflows into secure, scalable web-based
            systems crafted with precision and care.
          </p>
        </div>
      </section>

      {/* Values Marquee */}
      <ServicesMarquee
        variant="pt-16 md:pt-28"
        primaryText="Our values"
        secondaryText="Our values"
      />
      <ServicesMarquee
        variant="pb-16 md:pb-28"
        primaryText="Our values"
        secondaryText="Our values"
        reverse
      />

      {/* Values Cards */}
      <section
        ref={valuesRef}
        aria-label="Our core values"
        className="relative py-16 px-6"
      >
        <div className="max-w-[1400px] mx-auto">
          <h2 className="sr-only">Our Core Values</h2>
          <div
            className={`flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6
              transition-all ease-out duration-300 md:duration-500
              ${
                valuesVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
          >
            {VALUES_CARDS.map((card, idx) => (
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
    </>
  );
};
