import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { useState } from "react";

export const AboutPage = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen pt-40 pb-20 px-6 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" onError={() => setVideoError(true)}>
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          ) : (
            <img src="/newhero.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>
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
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto text-white/80 leading-relaxed">
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

      {/* Values Cards */}
      <section className="relative py-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Creativity Card */}
            <div className="bg-[#e9d5ff] text-black p-8 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-sm font-semibold mb-6">
                1
              </div>
              <h3 className="text-3xl font-bold mb-4">Creativity</h3>
              <p className="text-base leading-relaxed text-black/90">
                We believe in crafting unique, visually striking designs that capture your brand's essence. Our
                team thrives on fresh ideas, innovative solutions, and out-of-the-box thinking to bring your vision
                to life.
              </p>
            </div>

            {/* Simplicity Card */}
            <div className="bg-[#d4ff00] text-black p-8 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-sm font-semibold mb-6">
                2
              </div>
              <h3 className="text-3xl font-bold mb-4">Simplicity</h3>
              <p className="text-base leading-relaxed text-black/90">
                Great design isn't just about aesthetics, it's about clarity and ease of use. We focus on
                clean, user-friendly experiences that make navigation seamless and content impactful.
              </p>
            </div>

            {/* Reliability Card */}
            <div className="bg-[#67e8f9] text-black p-8 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-sm font-semibold mb-6">
                3
              </div>
              <h3 className="text-3xl font-bold mb-4">Reliability</h3>
              <p className="text-base leading-relaxed text-black/90">
                We're committed to delivering high-quality work on time, every time. From concept to launch, you
                can count on us for clear communication, transparency, and a smooth collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
