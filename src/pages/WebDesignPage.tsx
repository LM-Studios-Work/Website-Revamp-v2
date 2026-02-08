import {
  Briefcase,
  Globe,
  Layers,
  Calendar,
  ShoppingCart,
  Check,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PhotographySection } from "../sections/PhotographySection";
import { ProcessCard } from "../components/ProcessCard";
import { ScrollableCardRow } from "../components/ScrollableCardRow";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { featuredProjects } from "@/sections/ProjectsSection/constants";
import { FAQ } from "@/sections/FAQ";
import { webDesignFAQ } from "@/sections/FAQ/constants";

const packages = [
  {
    title: "PERSONAL PORTFOLIO WEBSITE",
    price: "R1,999",
    type: "once-off",
    delivery: "4–6 working days",
    iconName: "Briefcase" as const,
    features: [
      "Single-page or up to 3 sections",
      "Modern scrolling design with animations",
      "Project / work gallery",
      "CV / Resume download",
      "Contact form and social links",
      "Mobile-responsive design",
      "Basic SEO",
      "Custom domain setup",
    ],
  },
  {
    title: "ESSENTIAL BUSINESS WEBSITE",
    price: "R2,999",
    type: "once-off",
    delivery: "5–7 working days",
    iconName: "Globe" as const,
    features: [
      "3 pages (Home, Services, Contact)",
      "Clean, professional design",
      "Mobile-responsive layout",
      "Contact form with email notifications",
      "Click-to-call and WhatsApp buttons",
      "Social media integration",
      "Basic SEO",
      "Custom domain setup",
    ],
  },
  {
    title: "PROFESSIONAL BUSINESS WEBSITE",
    price: "R5,499",
    type: "once-off",
    delivery: "7–12 working days",
    popular: true,
    iconName: "Layers" as const,
    features: [
      "Up to 6 pages",
      "Professionally structured content",
      "Image gallery or portfolio",
      "Client testimonials",
      "Google Maps integration",
      "Advanced contact forms",
      "Local SEO optimization",
      "Custom domain",
      "Professional email setup",
    ],
  },
  {
    title: "EVENT WEBSITE",
    subtitle: "(Birthdays, Weddings, etc.)",
    price: "R3,999",
    type: "once-off",
    delivery: "5–8 working days",
    iconName: "Calendar" as const,
    features: [
      "Event details and schedule",
      "RSVP form with guest list management",
      "Photo and video gallery",
      "Countdown timer",
      "Location map",
      "Gift registry or payment links",
      "Optional password protection",
      "Mobile-friendly design",
    ],
  },
  {
    title: "E-COMMERCE WEBSITE",
    price: "R7,999",
    type: "once-off",
    delivery: "10–15 working days",
    iconName: "ShoppingCart" as const,
    features: [
      "Up to 20 products",
      "Shopping cart and checkout",
      "Secure payment gateway integration",
      "Product categories",
      "Order management",
      "Inventory setup",
      "Mobile-optimized store",
      "Basic product SEO",
      "Custom domain",
    ],
  },
];

const iconMap = {
  Briefcase,
  Globe,
  Layers,
  Calendar,
  ShoppingCart,
};

export const WebDesignPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    // try immediate scroll, fallback to a short timeout if element isn't yet in DOM
    const scrollToId = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    if (!scrollToId()) {
      const t = setTimeout(scrollToId, 80);
      return () => clearTimeout(t);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col justify-center items-center min-h-screen pt-40 pb-16 px-6 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-[900px] w-full text-center">
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-white mb-8">
            Web Design
          </h1>
          <svg
            className="mx-auto mb-12 w-[200px] h-[18px]"
            viewBox="0 0 400 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 9C0 9 10 2 25 2C40 2 45 16 60 16C75 16 80 2 95 2C110 2 115 16 130 16C145 16 150 2 165 2C180 2 185 16 200 16C215 16 220 2 235 2C250 2 255 16 270 16C285 16 290 2 305 2C320 2 325 16 340 16C355 16 360 2 375 2C390 2 400 9 400 9"
              stroke="#e7fe56"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            We design and develop user-friendly websites using modern
            frameworks, offering both standard features or custom solutions to
            meet your needs. Whether you opt for a simple setup with built-in
            functionalities or a fully tailored design with unique features, our
            approach ensures an efficient solution that aligns perfectly with
            your business requirements.
          </p>
        </div>
      </section>

      {/* Behind the scenes section */}
      <section className="relative z-10 box-border caret-transparent py-10 md:py-20">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1400px]">
          <div className="items-stretch box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] py-2 md:w-6/12 md:py-4">
              <div className="absolute items-center box-border caret-transparent hidden flex-col transform-none z-[5] left-0 top-0 md:flex md:translate-y-[-80.0%]">
                <p className="text-[23.05px] font-normal box-border caret-transparent inline leading-[27.66px] min-h-0 min-w-0 text-center transform-none mb-2 font-caveat md:text-[28px] md:block md:leading-[33.6px] md:min-h-[auto] md:min-w-[auto] md:rotate-[-19.99998485209311deg]">
                  Behind
                  <br />
                  the scenes
                </p>
                <img
                  src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/img_arrow_curved.svg"
                  alt="Arrow icon"
                  className="box-border caret-transparent inline min-h-0 min-w-0 w-[13px] ml-6 md:block md:min-h-[auto] md:min-w-[auto]"
                />
              </div>
              <div className="relative box-border caret-transparent h-full min-h-[400px] w-full overflow-hidden rounded-[20px]">
                <img
                  src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/img_team_office_1.webp"
                  alt="LM Studios Web Design team in the office"
                  className="absolute box-border caret-transparent h-full max-w-full object-cover translate-x-[-50.0%] translate-y-[-50.0%] w-full left-2/4 top-2/4"
                />
              </div>
            </div>
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] py-10 md:w-6/12 md:pl-8 md:py-20">
              <h2 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-10 font-obviously md:text-[50px] md:leading-[60px]">
                Custom Pack
                <span className="text-[12.8px] font-thin box-border caret-transparent inline-block leading-[12.8px] text-center text-nowrap align-middle border-purple-300 mx-4 px-4 py-[9.6px] rounded-[800px] border-2 border-solid md:text-[19.2px] md:leading-[19.2px]">
                  100h min.
                </span>
                <br />
                Tailored web design development
              </h2>
              <p className="box-border caret-transparent mb-8">
                Our <strong className="font-semibold">Custom Pack</strong> is
                perfect for businesses seeking a fully tailored website with a
                unique design and specialized functionalities. This package
                includes a comprehensive process:{" "}
                <strong className="font-semibold">
                  sitemap creation, wireframing, mockups
                </strong>
                , and integration using{" "}
                <strong className="font-semibold">
                  XML, SCSS, and JavaScript
                </strong>
                , ensuring a website that meets your exact specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Pack Section */}
      <section className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-1/2">
              <div className="mb-6">
                <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                  <span className="italic text-outline-2">
                    Standard Pack
                  </span>
                  <span className="inline-block ml-4 text-base md:text-lg font-normal border-2 border-[#72f5e3] text-[#72f5e3] px-4 py-2 rounded-full">
                    25h min.
                  </span>
                </h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                No-fuss web design for your business
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Our Standard Pack is designed for{" "}
                <strong className="font-semibold text-white">
                  small projects that prioritize simplicity and efficiency
                </strong>
                . Built exclusively with LM Studios' Website Builder, standard
                options, and Bootstrap variables, it's perfect for clients who
                need a clean, functional website{" "}
                <strong className="font-semibold text-white">
                  without customizations
                </strong>
                .
              </p>
            </div>
            <div className="hidden md:block md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/img_team_office_1.webp"
                  alt="Team working on web design projects"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="mb-16">
            <h2 className="text-[31.4375px] md:text-[50px] font-semibold font-obviously leading-[37.725px] md:leading-[60px] flex items-center gap-3">
              Service Packages
              <span className="h-px flex-1 bg-white/10 ml-4"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => {
              const IconComponent = iconMap[pkg.iconName];
              return (
                <div
                  key={pkg.title}
                  className="relative flex flex-col h-full rounded-3xl p-8 border border-white/5 bg-[#121212] transition-all duration-300 group hover:border-[#e7fe56]/30 hover:bg-[#151515] hover:ring-1 hover:ring-[#e7fe56]/20"
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#654064] text-white text-[10px] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-[#654064]/20">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-8">
                    <div className="p-3 rounded-2xl bg-white/5 text-white transition-colors duration-300 group-hover:bg-[#e7fe56] group-hover:text-black">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#e7fe56]">
                        {pkg.price}
                      </div>
                      <div className="text-xs text-white/40 uppercase tracking-wider">
                        {pkg.type}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold font-obviously leading-tight uppercase tracking-wide">
                      {pkg.title}
                    </h3>
                    {pkg.subtitle && (
                      <p className="text-xs text-white/40 mt-1">
                        {pkg.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="flex-1 space-y-4 mb-10">
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-white/40 transition-colors duration-300 group-hover:text-[#e7fe56]" />
                        <span className="text-sm text-white/70 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto space-y-6">
                    <div className="flex items-center gap-3 py-4 border-t border-white/5">
                      <Clock className="w-4 h-4 text-white/30" />
                      <span className="text-xs text-white/40 font-medium tracking-wide">
                        DELIVERY:{" "}
                        <span className="text-white/80">{pkg.delivery}</span>
                      </span>
                    </div>

                    <button className="w-full py-4 rounded-xl font-semibold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-[#e7fe56] text-black hover:bg-[#e7fe56]/80 group-hover:bg-[#e7fe56] group-hover:text-black group-hover:hover:bg-[#e7fe56]/80">
                      Select Package
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              Our{" "}
              <span className="italic text-outline-15">
                process
              </span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[600px]">
              From concept to launch, we craft user-friendly, visually
              striking websites tailored to your brand.
            </p>
          </div>
          <ScrollableCardRow desktopGridCols="md:grid-cols-3">
            <ProcessCard
              step={1}
              variant="purple"
              title="Kick off meeting"
              description="Let's start your project by aligning on your website objectives with your dedicated designer."
            />
            <ProcessCard
              step={2}
              variant="yellow"
              title="Sitemap"
              description="We create a structured blueprint that maps your website's pages and their relationships."
            />
            <ProcessCard
              step={3}
              variant="cyan"
              title="Wireframes"
              description="Wireframes outline layout and functionality, providing a clear, ready page structure."
              customBadge={
                <span className="text-xs font-normal inline-block text-center whitespace-nowrap align-middle border border-black/30 ml-2 px-2.5 py-1 rounded-full">
                  Custom Pack only
                </span>
              }
            />
          </ScrollableCardRow>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-wrap items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
                Our projects
              </h2>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                href="/projects"
                className="text-sm font-normal bg-transparent box-border caret-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#e7fe56] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#e7fe56] hover:text-black transition-colors"
              >
                See all projects
                <span className="relative text-sm font-normal bg-[#e7fe56] text-black box-border caret-transparent h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:text-base md:font-semibold md:h-[50px] md:w-[50px] md:p-[18.4px]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          {/* Project Cards */}
          <div className="flex flex-wrap -mx-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <PhotographySection />

      {/* SEO & Marketing Section */}
      <section className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* SEO */}
            <div>
              <div className="box-border caret-transparent mb-6">
                <h2 className="text-[44.4px] font-semibold box-border caret-transparent leading-[53.28px] mb-4 font-obviously md:text-[64px] md:leading-[76.8px]">
                  SEO
                  <span className="text-[12.8px] font-thin box-border caret-transparent inline-block leading-[12.8px] text-center text-nowrap align-middle border-white/30 ml-4 px-4 py-2 rounded-[800px] border-2 border-solid md:text-[16px] md:leading-[16px]">
                    25h min.
                  </span>
                </h2>
                <h3 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-6 font-obviously md:text-[40px] md:leading-[48px]">
                  Boost your visibility with our expertise
                </h3>
              </div>
              <p className="box-border caret-transparent mb-8">
                LM Studios' web platform is growing in popularity, and many customers
                seek to improve their SEO, whether starting fresh or migrating
                to our platform. Our team of experts provides{" "}
                <strong className="font-semibold">
                  a tailored 25-hour SEO service
                </strong>{" "}
                to help optimize your site and develop a strong strategy for
                better search engine rankings and maximum visibility.
              </p>
              <a
                href="/services/seo"
                className="text-sm font-normal bg-[#654064] box-border caret-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#654064] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#654064]/80 hover:border-[#654064]/80 transition-colors"
              >
                More about SEO
                <span className="relative text-sm font-normal bg-white/10 box-border caret-transparent h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:text-base md:font-semibold md:h-[50px] md:w-[50px] md:p-[18.4px]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Marketing */}
            <div>
              <div className="box-border caret-transparent mb-6">
                <h2 className="text-[44.4px] font-semibold box-border caret-transparent leading-[53.28px] mb-4 font-obviously md:text-[64px] md:leading-[76.8px]">
                  Marketing
                  <span className="text-[12.8px] font-thin box-border caret-transparent inline-block leading-[12.8px] text-center text-nowrap align-middle border-white/30 ml-4 px-4 py-2 rounded-[800px] border-2 border-solid md:text-[16px] md:leading-[16px]">
                    25h min.
                  </span>
                </h2>
                <h3 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-6 font-obviously md:text-[40px] md:leading-[48px]">
                  Drive traffic and engagement
                </h3>
              </div>
              <p className="box-border caret-transparent mb-8">
                By optimizing your website's structure, content, and overall
                digital strategy, you can attract the right audience, enhance
                engagement, and{" "}
                <strong className="font-semibold">
                  stay ahead of the competition
                </strong>
                . With a data-driven approach, in-depth analysis, and tailored
                recommendations, we help you create a powerful online presence
                that delivers measurable results.
              </p>
              <a
                href="/services/marketing"
                className="text-sm font-normal bg-[#8b5cf6] box-border caret-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#8b5cf6] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-colors"
              >
                More about marketing
                <span className="relative text-sm font-normal bg-white/10 box-border caret-transparent h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:text-base md:font-semibold md:h-[50px] md:w-[50px] md:p-[18.4px]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Your website is in good hands */}
      <section className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="relative mb-12 md:mb-20">
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-3">
              Your website is
              <br />
              in {" "}
              <span className="italic text-outline-2">
                good hands
              </span>
            </h2>
          </div>
          <ScrollableCardRow desktopGridCols="md:grid-cols-3">
            <ProcessCard
              step={1}
              variant="purple"
              title="Experienced designers"
              description="We have high-end designers ready to conceive stunning designs matching your brand style."
            />
            <ProcessCard
              step={2}
              variant="yellow"
              title="eCommerce experts"
              description="Our functional consultants can help you setting-up all your products in your eCommerce."
              note={
                <div className="absolute -top-20 right-4 hidden md:block w-[140px]">
                  <p className="text-lg text-white font-caveat -rotate-12 leading-tight text-center mb-1">
                    We do SEO
                    <br />
                    as well
                  </p>
                  <svg
                    className="w-10 h-14 text-[#d5bff0] mx-auto rotate-12"
                    viewBox="0 0 54 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.7371 8.87569C25.4674 5.92211 31.7925 3.32185 36.9406 5.86596C42.0238 8.37798 42.1648 15.6881 39.5109 19.9576C35.9863 25.626 26.6853 27.535 20.3061 28.2575C16.8906 28.6443 12.394 28.8797 9.87327 30.7169C6.80598 32.9525 5.80211 36.7262 6.70014 40.2858C7.94273 45.2127 15.4671 47.9715 19.897 44.9782C24.085 42.148 23.3664 36.0079 20.1755 33.2796C17.4764 30.9715 13.5658 31.7601 11.2359 34.3323C6.67151 39.3712 9.09884 49.3496 11.974 54.0084"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 54L15 48.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 54L7.5 50.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              }
            />
            <ProcessCard
              step={3}
              variant="cyan"
              title="Front-end developers"
              description="Our front-end developers implement tailor-made features to take your website to the next level."
            />
          </ScrollableCardRow>
        </div>
      </section>

      {/* CTA Section */}
      <FAQ items={webDesignFAQ} title="Web Design — FAQ" />
      <section className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="relative box-border caret-transparent flex flex-col break-words overflow-hidden rounded-[20px]">
            <div className="backdrop-blur-[3px] bg-white/10 box-border caret-transparent grow break-words p-10 rounded-[20px]">
              <div className="items-center box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] break-words">
                <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-[15px] text-center md:w-6/12 md:px-6 md:text-left">
                  <h2 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-6 font-obviously md:text-[50px] md:leading-[60px]">
                    Ready to start your project?
                  </h2>
                  <p className="box-border caret-transparent mb-8">
                    Get in touch with our team to discuss your web design needs.
                  </p>
                </div>
                <div className="box-border caret-transparent flex shrink-0 justify-center max-w-full w-full px-[15px] md:justify-end md:w-6/12">
                  <a
                    href="/contact"
                    className="text-sm font-normal bg-zinc-600 box-border caret-transparent block leading-[21px] text-center align-middle border-zinc-600 pl-4 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 md:pl-6 hover:bg-neutral-600 hover:border-zinc-700"
                  >
                    Contact us
                    <img
                      src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/icon-4.svg"
                      alt="Icon"
                      className="relative text-sm font-normal bg-white/10 box-border caret-transparent h-[30px] leading-[21px] -rotate-45 w-[30px] ml-2.5 p-[9.6px] rounded-[50%] top-0 md:text-base md:font-semibold md:h-[50px] md:leading-6 md:w-[50px] md:p-[18.4px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
