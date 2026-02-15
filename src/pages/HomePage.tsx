import { Hero } from "@/sections/Hero";
import React from "react";
import { LatestProjectsHeader } from "@/sections/ProjectsSection/components/LatestProjectsHeader";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { featuredProjects } from "@/sections/ProjectsSection/constants";
import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ServicesSection } from "@/sections/ServicesSection";
import { ScrollableCardRow } from "@/components/ScrollableCardRow";
import { TestimonialsHeader } from "@/sections/TestimonialsSection/TestimonialsHeader";
import { TestimonialsGrid } from "@/sections/TestimonialsSection/components/TestimonialsGrid";
import { FAQ } from "@/sections/FAQ";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const HomePage = () => {
  const { ref: projectsRef, isVisible: projectsVisible } =
    useScrollAnimation(0.1);
  const { ref: goodHandsRef, isVisible: goodHandsVisible } =
    useScrollAnimation(0.15);

  return (
    <>
      {/* ...existing code... */}
      <Hero />
      <LatestProjectsHeader />
      <section
        ref={projectsRef}
        className="relative pt-6 pb-8 px-6 md:pt-10 md:pb-16"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-wrap -mx-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                isVisible={projectsVisible}
              />
            ))}
          </div>
        </div>
      </section>
      <ServicesMarquee
        variant="pt-16 md:pt-28"
        primaryText="Our services"
        secondaryText="What we do"
      />
      <ServicesMarquee
        variant="pb-16 md:pb-28"
        primaryText="Our services"
        secondaryText="What we do"
        reverse
      />
      <ServicesSection />

      {/* Your website is in good hands */}
      <section ref={goodHandsRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
            <div className="md:w-5/12 shrink-0">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
                Your project is
                <br />
                <span className="italic text-outline-15">in good hands</span>
              </h2>
            </div>
            <div className="md:w-7/12">
              <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">
                <div
                  className={`opacity-0 ${
                    goodHandsVisible
                      ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                      : ""
                  }`}
                >
                  <div className="bg-[#d5bff0] text-black p-7 rounded-2xl h-full">
                    <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-xs font-semibold mb-5">
                      1
                    </div>
                    <h3 className="text-2xl font-bold leading-tight mb-3">
                      Experienced
                      <br />
                      developers
                    </h3>
                    <p className="text-sm leading-relaxed text-black/80">
                      We have skilled developers ready to build secure, scalable
                      systems tailored to your business needs.
                    </p>
                  </div>
                </div>
                <div
                  className={`opacity-0 ${
                    goodHandsVisible
                      ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                      : ""
                  }`}
                >
                  <div className="bg-[#e7fe56] text-black p-7 rounded-2xl relative h-full">
                    <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-xs font-semibold mb-5">
                      2
                    </div>
                    <h3 className="text-2xl font-bold leading-tight mb-3">
                      Custom
                      <br />
                      solutions
                    </h3>
                    <p className="text-sm leading-relaxed text-black/80">
                      We build tailored web applications—from booking systems to
                      admin dashboards—designed for your operations.
                    </p>
                  </div>
                </div>
                <div
                  className={`opacity-0 ${
                    goodHandsVisible
                      ? "animate-[fadeInUp_0.8s_ease-out_0.6s_both]"
                      : ""
                  }`}
                >
                  <div className="bg-[#72f5e3] text-black p-7 rounded-2xl h-full">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold mb-5">
                      3
                    </div>
                    <h3 className="text-2xl font-bold leading-tight mb-3">
                      Full-stack
                      <br />
                      expertise
                    </h3>
                    <p className="text-sm leading-relaxed text-black/80">
                      Our team builds complete systems with secure backends,
                      intuitive interfaces, and scalable architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsHeader />
      <TestimonialsGrid />

      <FAQ />
    </>
  );
};
