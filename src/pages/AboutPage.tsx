import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ProcessCard } from "../components/ProcessCard";
import { ScrollableCardRow } from "../components/ScrollableCardRow";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";

export const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen pt-40 pb-20 px-6 overflow-hidden">
        <HeroVideoOverlay />
        <div className="relative z-10 text-center max-w-[900px] mx-auto mb-16">
          <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold leading-tight text-white mb-6">
            <span className="relative inline-block">
              About us
              <svg
                className="absolute -bottom-2 left-0 w-full h-[18px]"
                viewBox="0 0 400 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 9C0 9 10 2 25 2C40 2 45 16 60 16C75 16 80 2 95 2C110 2 115 16 130 16C145 16 150 2 165 2C180 2 185 16 200 16C215 16 220 2 235 2C250 2 255 16 270 16C285 16 290 2 305 2C320 2 325 16 340 16C355 16 360 2 375 2C390 2 400 9 400 9"
                  stroke="#d4ff00"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>
        </div>

        {/* Two Column Text */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto text-white/80 leading-relaxed">
          <p className="text-base md:text-lg">
            Founded in 2021, our Web Design Service has become the cornerstone of
            LM Studios' web agency, delivering exceptional digital solutions tailored to our
            clients' needs. Our team is composed of seasoned professionals with
            expertise spanning digital agencies, SaaS providers, and freelance design,
            bringing a wealth of knowledge and creativity to every project. Before any
          </p>
          <p className="text-base md:text-lg">
            design work begins, you'll be paired with a dedicated designer who will act
            as your main point of contact. They will work closely with you throughout
            the process, ensuring every design choice aligns with your vision. With our
            personalized approach and attention to detail, we transform your ideas into
            a stunning, professional website crafted with precision and care.
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

      {/* Values Cards (vertical stack on mobile, grid on desktop) */}
      <section className="relative py-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">
            <ProcessCard
              step={1}
              variant="purple"
              title="Creativity"
              description="We believe in crafting unique, visually striking designs that capture your brand's essence. Our team thrives on fresh ideas, innovative solutions, and out-of-the-box thinking to bring your vision to life."
            />

            <ProcessCard
              step={2}
              variant="yellow"
              title="Simplicity"
              description="Great design isn't just about aesthetics, it's about clarity and ease of use. We focus on clean, user-friendly experiences that make navigation seamless and content impactful."
            />

            <ProcessCard
              step={3}
              variant="cyan"
              title="Reliability"
              description="We're committed to delivering high-quality work on time, every time. From concept to launch, you can count on us for clear communication, transparency, and a smooth collaboration."
            />
          </div>
        </div>
      </section>
    </>
  );
};
