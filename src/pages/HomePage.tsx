import { Hero } from "@/sections/Hero";
import { LatestProjectsHeader } from "@/sections/ProjectsSection/components/LatestProjectsHeader";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { featuredProjects } from "@/sections/ProjectsSection/constants";
import { ServicesMarquee } from "@/sections/ServicesSection/components/ServicesMarquee";
import { ServicesSection } from "@/sections/ServicesSection";
import { FAQ } from "@/sections/FAQ";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COLORS } from "@/constants/colors";

const GOOD_HANDS_CARDS = [
  {
    num: 1,
    bg: `bg-[${COLORS.purple}]`,
    bgClass: "bg-[#d5bff0]",
    title: ["Reliable", "& Local"],
    desc: "Based in Midrand, we work 100% online to keep our services fast and affordable. You get professional South African expertise without the agency overhead.",
  },
  {
    num: 2,
    bg: `bg-[${COLORS.lime}]`,
    bgClass: "bg-[#e7fe56]",
    title: ["Scalable", "Solutions"],
    desc: "From simple static sites to automated booking systems, we build tailored tools that fit your current needs and can grow with your business.",
  },
  {
    num: 3,
    bg: `bg-[${COLORS.cyan}]`,
    bgClass: "bg-[#72f5e3]",
    title: ["Built to", "be Found"],
    desc: "We don't just design; we optimize. Every project is built for speed and SEO to ensure your business ranks on Google and reaches your customers.",
  },
];

export const HomePage = () => {
  const { ref: projectsRef, isVisible: projectsVisible } =
    useScrollAnimation(0.1);
  const { ref: goodHandsRef, isVisible: goodHandsVisible } =
    useScrollAnimation(0.15);

  return (
    <>
      <Hero />

      <section id="projects" aria-labelledby="projects-heading">
        <LatestProjectsHeader />
        <div
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
        </div>
      </section>

      <div aria-hidden="true">
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
      </div>

      <section id="services" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">Our Services</h2>
        <ServicesSection />
      </section>

      {/* Your project is in good hands */}
      <section
        id="why-us"
        aria-labelledby="good-hands-heading"
        ref={goodHandsRef}
        className="relative py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
            <div className="md:w-5/12 shrink-0">
              <h2
                id="good-hands-heading"
                className="text-4xl md:text-[56px] font-bold leading-tight text-white"
              >
                Your project is
                <br />
                <span className="italic text-outline-15">in good hands</span>
              </h2>
            </div>
            <div className="md:w-7/12">
              <div
                className={`flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6
                  transition-all ease-out duration-300 md:duration-500
                  ${
                    goodHandsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
              >
                {GOOD_HANDS_CARDS.map((card, idx) => (
                  <div
                    key={card.num}
                    className="md:transition-all md:duration-500"
                    style={{
                      transitionDelay: idx > 0 ? `${idx * 0.12}s` : "0s",
                    }}
                  >
                    <div
                      className={`${card.bgClass} text-black p-7 rounded-2xl h-full`}
                    >
                      <div
                        className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-xs font-semibold mb-5"
                        aria-hidden="true"
                      >
                        {card.num}
                      </div>
                      <h3 className="text-2xl font-bold leading-tight mb-3">
                        {card.title[0]}
                        <br />
                        {card.title[1]}
                      </h3>
                      <p className="text-sm leading-relaxed text-black/80">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" aria-label="Frequently asked questions">
        <FAQ />
      </section>
    </>
  );
};
