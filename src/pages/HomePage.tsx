import { Hero } from "@/sections/Hero";
import { SocialSidebar } from "@/components/SocialSidebar";
import { LatestProjectsHeader } from "@/sections/ProjectsSection/components/LatestProjectsHeader";
import { ProjectsGrid } from "@/sections/ProjectsSection/components/ProjectsGrid";
import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ServicesSection } from "@/sections/ServicesSection";
import { TestimonialsHeader } from "@/sections/TestimonialsSection/TestimonialsHeader";
import { TestimonialsGrid } from "@/sections/TestimonialsSection/components/TestimonialsGrid";
import { ClientLogos } from "@/sections/ClientLogos";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <SocialSidebar />
      <LatestProjectsHeader />
      <ProjectsGrid />
      <ServicesMarquee
        variant="pt-16 md:pt-28"
        primaryText="Our services"
        secondaryText="What we do"
      />
      <ServicesMarquee
        variant="pb-16 md:pb-28"
        primaryText="Our services"
        secondaryText="What we do"
      />
      <ServicesSection />
      <TestimonialsHeader />
      <TestimonialsGrid />

      {/* Your website is in good hands */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
            <div className="md:w-5/12 shrink-0">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
                Your website is
                <br />
                <span className="italic text-transparent [-webkit-text-stroke:1.5px_white]">
                  in good hands
                </span>
              </h2>
            </div>
            <div className="md:w-7/12">
              <div className="flex gap-4 overflow-x-auto pb-4 md:overflow-visible">
                <div className="bg-[#e9d5ff] text-black min-w-[260px] md:min-w-0 md:flex-1 p-7 rounded-2xl shrink-0">
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
                <div className="bg-[#d4ff00] text-black min-w-[260px] md:min-w-0 md:flex-1 p-7 rounded-2xl shrink-0 relative">
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
                  <div className="absolute hidden md:flex flex-col items-center -top-12 right-4 z-10">
                    <p className="text-sm text-white font-light italic -rotate-12 leading-tight text-center mb-1">
                      We do SEO
                      <br />
                      as well
                    </p>
                    <svg className="w-3 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 12 24" strokeWidth={1.5}>
                      <path d="M6 0v18M2 14l4 6 4-6" />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#67e8f9] text-black min-w-[260px] md:min-w-0 md:flex-1 p-7 rounded-2xl shrink-0">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />
    </>
  );
};
