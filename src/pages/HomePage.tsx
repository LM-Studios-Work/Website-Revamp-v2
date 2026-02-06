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
        variant="pt-[60px] md:pt-[120px]"
        primaryText="Our services"
        secondaryText="What we do"
      />
      <ServicesMarquee
        variant="pb-[60px] md:pb-[120px]"
        primaryText="Our services"
        secondaryText="What we do"
      />
      <ServicesSection />
      <TestimonialsHeader />
      <TestimonialsGrid />

      {/* Your website is in good hands */}
      <section className="relative box-border caret-transparent py-10 md:py-20">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
          <div className="items-start box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] mb-12 md:w-5/12">
              <h2 className="text-[44.4px] font-semibold box-border caret-transparent leading-[53.28px] mb-6 font-obviously md:text-[64px] md:leading-[76.8px]">
                Your website is
                <br />
                <span className="[text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff] text-transparent">
                  in good hands
                </span>
              </h2>
            </div>
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] md:w-7/12">
              <div className="box-border caret-transparent flex gap-6 overflow-x-auto pb-4">
                <div className="backdrop-blur-[3px] bg-[#e9d5ff] text-black box-border caret-transparent min-w-[280px] p-8 rounded-[20px] flex-shrink-0 md:min-w-[280px] md:flex-1">
                  <div className="box-border caret-transparent text-sm font-medium mb-4 opacity-60">
                    1
                  </div>
                  <h3 className="text-[28px] font-semibold box-border caret-transparent leading-[33.6px] mb-4 font-obviously">
                    Experienced
                    <br />
                    designers
                  </h3>
                  <p className="box-border caret-transparent text-base leading-relaxed">
                    We have high-end designers ready to conceive stunning
                    designs matching your brand style.
                  </p>
                </div>
                <div className="backdrop-blur-[3px] bg-[#d4ff00] text-black box-border caret-transparent min-w-[280px] p-8 rounded-[20px] flex-shrink-0 md:min-w-[280px] md:flex-1 relative">
                  <div className="box-border caret-transparent text-sm font-medium mb-4 opacity-60">
                    2
                  </div>
                  <h3 className="text-[28px] font-semibold box-border caret-transparent leading-[33.6px] mb-4 font-obviously">
                    eCommerce
                    <br />
                    experts
                  </h3>
                  <p className="box-border caret-transparent text-base leading-relaxed">
                    Our functional consultants can help you setting-up all your
                    products in your eCommerce.
                  </p>
                  <div className="absolute items-center box-border caret-transparent hidden flex-col z-[5] right-4 top-4 md:flex">
                    <p className="text-base font-normal box-border caret-transparent leading-tight text-center mb-1 font-caveat md:rotate-[-12deg]">
                      We do SEO
                      <br />
                      as well
                    </p>
                    <img
                      src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/img_arrow_curved.svg"
                      alt="Arrow icon"
                      className="box-border caret-transparent w-[13px]"
                    />
                  </div>
                </div>
                <div className="backdrop-blur-[3px] bg-[#6ee7b7] text-black box-border caret-transparent min-w-[280px] p-8 rounded-[20px] flex-shrink-0 md:min-w-[280px] md:flex-1">
                  <div className="box-border caret-transparent text-sm font-medium mb-4 opacity-60">
                    3
                  </div>
                  <h3 className="text-[28px] font-semibold box-border caret-transparent leading-[33.6px] mb-4 font-obviously">
                    Front-end
                    <br />
                    developers
                  </h3>
                  <p className="box-border caret-transparent text-base leading-relaxed">
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
