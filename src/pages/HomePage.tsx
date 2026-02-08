import { Hero } from "@/sections/Hero";
import { LatestProjectsHeader } from "@/sections/ProjectsSection/components/LatestProjectsHeader";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { featuredProjects } from "@/sections/ProjectsSection/constants";
import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ServicesSection } from "@/sections/ServicesSection";
import { ScrollableCardRow } from "@/components/ScrollableCardRow";
import { TestimonialsHeader } from "@/sections/TestimonialsSection/TestimonialsHeader";
import { TestimonialsGrid } from "@/sections/TestimonialsSection/components/TestimonialsGrid";
import { FAQ } from "@/sections/FAQ";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <LatestProjectsHeader />
      <section className="relative pt-6 pb-8 px-6 md:pt-10 md:pb-16">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-wrap -mx-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
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
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
            <div className="md:w-5/12 shrink-0">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
                Your website is
                <br />
                <span className="italic text-outline-15">
                  in good hands
                </span>
              </h2>
            </div>
            <div className="md:w-7/12">
              <ScrollableCardRow desktopGridCols="md:grid-cols-3">
                <div className="bg-[#e9d5ff] text-black p-7 rounded-2xl h-full">
                  <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-xs font-semibold mb-5">
                    1
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-3">
                    Experienced
                    <br />
                    designers
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80">
                    We have high-end designers ready to conceive stunning
                    designs matching your brand style.
                  </p>
                </div>
                <div className="bg-[#d4ff00] text-black p-7 rounded-2xl relative h-full">
                  <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-xs font-semibold mb-5">
                    2
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-3">
                    eCommerce
                    <br />
                    experts
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80">
                    Our functional consultants can help you setting-up all your
                    products in your eCommerce.
                  </p>
                  <div className="absolute hidden md:flex flex-col items-center -top-14 right-6 z-10">
                    <p className="text-xl text-white font-caveat -rotate-12 leading-tight text-center mb-0.5">
                      We do SEO
                      <br />
                      as well
                    </p>
                    <svg className="w-4 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 16 32" strokeWidth={1.2}>
                      <path d="M8 2C6 8 10 14 8 20C7 23 9 26 8 30" strokeLinecap="round" />
                      <path d="M5 25C7 28 8 30 8 30C8 30 9 28 11 25" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#67e8f9] text-black p-7 rounded-2xl h-full">
                  <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-xs font-semibold mb-5">
                    3
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-3">
                    Front-end
                    <br />
                    developers
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80">
                    Our front-end developers implement tailor-made features to
                    take your website to the next level.
                  </p>
                </div>
              </ScrollableCardRow>
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
