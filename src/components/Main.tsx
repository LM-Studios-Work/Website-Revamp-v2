import { Hero } from "@/sections/Hero";
import { SocialSidebar } from "@/components/SocialSidebar";
import { LatestProjectsHeader } from "@/sections/ProjectsSection/components/LatestProjectsHeader";
import { ProjectsGrid } from "@/sections/ProjectsSection/components/ProjectsGrid";
import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ServicesSection } from "@/sections/ServicesSection";
import { TestimonialsHeader } from "@/sections/TestimonialsSection/TestimonialsHeader";
import { TestimonialsGrid } from "@/sections/TestimonialsSection/components/TestimonialsGrid";
import { ClientLogos } from "@/sections/ClientLogos";
import { Footer } from "@/sections/Footer";
export const Main = () => {
  return (
    <main className="box-border caret-transparent grow shrink-0">
      <div className="box-border caret-transparent">
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
        <ClientLogos />
        <section className="relative box-border caret-transparent py-5 md:py-10">
          <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px] before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-lg before:not-italic before:normal-nums before:font-light before:tracking-[normal] before:leading-[32.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-lg after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[32.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
            <div className="items-stretch box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
              <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px]"></div>
            </div>
          </div>
        </section>
        <section className="relative box-border caret-transparent py-5 md:py-10"></section>
        <section className="relative box-border caret-transparent py-10 md:py-20">
          <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px] before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-lg before:not-italic before:normal-nums before:font-light before:tracking-[normal] before:leading-[32.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-lg after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[32.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
            <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]"></div>
          </div>
        </section>
      </div>
      <div className="box-border caret-transparent hidden h-0"></div>
    </main>
  );
};
