"use client";

import { usePathname } from "next/navigation";
import {
  UserCircle,
  Buildings,
  GraduationCap,
  Cake,
  Storefront,
  Check,
  Clock,
  ArrowRight,
  ShieldCheck,
  Toolbox,
  CloudArrowUp,
} from "@phosphor-icons/react";
import { ProcessCard } from "@/components/ProcessCard";
import { useEffect } from "react";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { featuredProjects } from "@/sections/ProjectsSection/constants";
import { FAQ } from "@/sections/FAQ";
import { webDesignFAQ } from "@/sections/FAQ/constants";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessCardGrid } from "@/components/ProcessCardGrid";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COLORS } from "@/constants/colors";

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
    price: "R2,499",
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
    price: "R4,999",
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
    price: "R2,999",
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
    price: "R7,499",
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
  Briefcase: UserCircle, 
  Globe: Buildings, 
  Layers: GraduationCap, 
  Calendar: Cake, 
  ShoppingCart: Storefront 
};

const ACCENT = COLORS.limeButton;

const supportTiers = [
  {
    task: "Standard Update",
    description: "Minor text edits, image swaps, or contact detail updates",
    fee: "R250",
    unit: "per request",
  },
  {
    task: "New Section",
    description:
      "Adding a new UI block (e.g., gallery or FAQ) to an existing page",
    fee: "R450 – R650",
    unit: "",
  },
  {
    task: "New Page",
    description:
      "Building and deploying a brand new page within the existing design",
    fee: "R850 – R1,250",
    unit: "",
  },
  {
    task: "Technical Consulting",
    description: "Investigating external API issues or technical SEO audits",
    fee: "R550",
    unit: "/ hour",
  },
];

export const WebDesignPage = () => {
  const { ref: bespokeRef, isVisible: bespokeVisible } =
    useScrollAnimation(0.15);
  const { ref: standardRef, isVisible: standardVisible } =
    useScrollAnimation(0.15);
  const { ref: packagesRef, isVisible: packagesVisible } =
    useScrollAnimation(0.15);
  const { ref: goodHandsRef, isVisible: goodHandsVisible } =
    useScrollAnimation(0.15);
  const { ref: projectsRef, isVisible: projectsVisible } =
    useScrollAnimation(0.15);
  const { ref: warrantyRef, isVisible: warrantyVisible } =
    useScrollAnimation(0.15);
  const { ref: supportRef, isVisible: supportVisible } =
    useScrollAnimation(0.15);

  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.replace("#", "");
      const scrollToId = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };
      if (!scrollToId()) {
        setTimeout(scrollToId, 80);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  return (
    <>
      <ServiceHero
        title="Web Design"
        underlineColor="lime"
        description="South Africa's trusted web design agency. From portfolio sites starting at R1,999 to full business websites, e-commerce stores, and event pages. LM Studios delivers mobile-responsive, SEO-optimized websites with transparent once-off pricing, free first-year hosting, and a 6-month post-launch warranty. Based in Midrand, serving Johannesburg, Pretoria, and businesses across Gauteng."
      />

      {/* Behind the scenes section */}
      <section
        ref={bespokeRef}
        className="relative z-10 box-border caret-transparent py-10 md:py-20"
      >
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1400px]">
          <div className="items-stretch box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            <div
              className={`box-border caret-transparent shrink-0 max-w-full w-full px-[15px] py-2 md:w-6/12 md:py-4 opacity-0 ${
                bespokeVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                  : ""
              }`}
            >
              <div className="absolute items-center box-border caret-transparent hidden flex-col transform-none z-[5] left-0 top-0 md:flex md:translate-y-[-80.0%]">
                <p className="text-[23.05px] font-normal box-border caret-transparent inline leading-[27.66px] min-h-0 min-w-0 text-center transform-none mb-2 font-caveat md:text-[28px] md:block md:leading-[33.6px] md:min-h-[auto] md:min-w-[auto] md:rotate-[-19.99998485209311deg]">
                  Behind
                  <br />
                  the scenes
                </p>
                <img
                  src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/img_arrow_curved.svg"
                  alt="Arrow icon"
                  width={13}
                  height={17}
                  className="box-border caret-transparent inline min-h-0 min-w-0 w-[13px] ml-6 md:block md:min-h-[auto] md:min-w-[auto]"
                />
              </div>
              <div className="relative box-border caret-transparent h-full min-h-[400px] w-full overflow-hidden rounded-[20px]">
                <img
                  src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/img_team_office_1.webp"
                  alt="LM Studios Web Design team in the office"
                  width={800}
                  height={533}
                  className="absolute box-border caret-transparent h-full max-w-full object-cover translate-x-[-50.0%] translate-y-[-50.0%] w-full left-2/4 top-2/4"
                />
              </div>
            </div>
            <div
              className={`box-border caret-transparent shrink-0 max-w-full w-full px-[15px] py-10 md:w-6/12 md:pl-8 md:py-20 opacity-0 ${
                bespokeVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                  : ""
              }`}
            >
              <h2 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-10 font-obviously md:text-[50px] md:leading-[60px]">
                Custom Web Design
                <br />
                Built for South African Businesses
              </h2>
              <p className="box-border caret-transparent mb-8">
                Need a high-converting website that stands out in Johannesburg's
                competitive market? We skip generic templates entirely. Every
                page is designed from scratch through a structured process:
                sitemap planning, wireframing, UI mockups, and hand-coded
                integration. The result is a fast, secure, fully responsive
                website engineered to rank on Google and turn visitors into
                paying clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Pack Section */}
      <section ref={standardRef} className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div
              className={`md:w-1/2 opacity-0 ${
                standardVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                  : ""
              }`}
            >
              <div className="mb-6">
                <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                  Affordable Web Design
                  <br />
                  <span className="italic text-outline-2">
                    Packages in South Africa
                  </span>
                </h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                Professional websites starting from R1,999
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Looking for affordable web design in South Africa without
                sacrificing quality? Our packages range from a R1,999 portfolio
                site to a R4,999 professional business website. All packages
                deliver mobile-responsive, Google-optimized pages in as few as 4
                working days. No hidden fees, no monthly retainers. Just
                transparent once-off pricing with free first-year hosting
                included.
              </p>
            </div>
            <div
              className={`hidden md:block md:w-1/2 opacity-0 ${
                standardVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                  : ""
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/img_team_office_1.webp"
                  alt="Team working on web design projects"
                  width={800}
                  height={533}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section ref={packagesRef} className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-16 opacity-0 ${
              packagesVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
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
                  className="relative flex flex-col h-full rounded-3xl p-8 border-2 border-[#b4eb2c]/60 bg-white/5 backdrop-blur-sm transition-all duration-300 group hover:border-[#b4eb2c] hover:bg-white/10 hover:shadow-lg hover:shadow-[#b4eb2c]/10"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-3 rounded-2xl bg-[#b4eb2c]/10 text-[#b4eb2c] border border-[#b4eb2c]/30 transition-all duration-300 group-hover:bg-[#b4eb2c] group-hover:text-black group-hover:border-[#b4eb2c]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#b4eb2c]">
                        {pkg.price}
                      </div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">
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
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#b4eb2c]/70 transition-colors duration-300 group-hover:text-[#b4eb2c]" />
                        <span className="text-sm text-white/80 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto space-y-6">
                    <div className="flex items-center gap-3 py-4 border-t border-[#b4eb2c]/20">
                      <Clock className="w-4 h-4 text-[#b4eb2c]/60" />
                      <span className="text-xs text-white/60 font-medium tracking-wide">
                        DELIVERY:{" "}
                        <span className="text-white/90">{pkg.delivery}</span>
                      </span>
                    </div>

                    <button className="w-full py-4 rounded-xl font-semibold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-[#b4eb2c] text-black hover:bg-[#b4eb2c]/90 border-2 border-[#b4eb2c] hover:shadow-lg hover:shadow-[#b4eb2c]/30">
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
      <ProcessCardGrid
        heading={
          <>
            Our <span className="italic text-outline-15">process</span>
          </>
        }
        description="From concept to launch, we craft user-friendly, visually striking websites tailored to your brand."
        cards={[
          {
            step: 1,
            variant: "lime",
            title: "Kick off meeting",
            description:
              "Let's start your project by aligning on your website objectives with your dedicated designer.",
          },
          {
            step: 2,
            variant: "purple",
            title: "Sitemap",
            description:
              "We create a structured blueprint that maps your website's pages and their relationships.",
          },
          {
            step: 3,
            variant: "cyan",
            title: "Wireframes",
            description:
              "Wireframes outline layout and functionality, providing a clear, ready page structure.",
          },
        ]}
      />

      {/* What's Included — Warranty & Hosting */}
      <section ref={warrantyRef} className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 md:mb-16 opacity-0 ${
              warrantyVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              What's <span className="italic text-outline-2">included</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[650px]">
              Every project ships with built-in peace of mind — no hidden costs,
              no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Warranty Card */}
            <div
              className={`rounded-3xl p-8 bg-[#e7fe56] text-black flex flex-col opacity-0 ${
                warrantyVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold font-obviously mb-3">
                6-Month Warranty
              </h3>
              <p className="text-black/80 text-sm leading-relaxed mb-6 flex-1">
                Every build includes a 6-month post-launch warranty covering bug
                fixes, browser compatibility across Chrome, Safari and Edge, and
                minor content adjustments at no extra charge.
              </p>
              <div className="border-t border-black/10 pt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">
                    Code bug fixes &amp; broken links
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">Browser compatibility patches</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">Minor text &amp; image swaps</span>
                </div>
              </div>
            </div>

            {/* Hosting Card */}
            <div
              className={`rounded-3xl p-8 bg-[#d5bff0] text-black flex flex-col opacity-0 ${
                warrantyVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
                <CloudArrowUp className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold font-obviously mb-3">
                Hosting &amp; Domain
              </h3>
              <p className="text-black/80 text-sm leading-relaxed mb-6 flex-1">
                Your first year of hosting is on us. After that, we keep things
                simple and affordable so your site stays live without the
                headache.
              </p>
              <div className="border-t border-black/10 pt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">First year hosting — free</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">.com renewal — R400 / year</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">.co.za renewal — R150 / year</span>
                </div>
              </div>
            </div>

            {/* Maintenance Card */}
            <div
              className={`rounded-3xl p-8 bg-[#72f5e3] text-black flex flex-col opacity-0 ${
                warrantyVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.6s_both]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
                <Toolbox className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold font-obviously mb-3">
                Technical Health
              </h3>
              <p className="text-black/80 text-sm leading-relaxed mb-6 flex-1">
                We take responsibility for keeping your site fast, secure, and
                up to date — so you can focus on running your business.
              </p>
              <div className="border-t border-black/10 pt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">
                    Security &amp; dependency patches
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">Hosting &amp; SSL management</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">Core Web Vitals monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Support — Post-Warranty */}
      <section ref={supportRef} className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div
              className={`opacity-0 ${
                supportVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                  : ""
              }`}
            >
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                Ongoing <span className="italic text-outline-2">support</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed max-w-[550px]">
                After your warranty period, you only pay for what you use. No
                retainers, no lock-in contracts.
              </p>
            </div>
          </div>

          {/* Support Tiers Table */}
          <div
            className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden opacity-0 ${
              supportVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""
            }`}
          >
            {/* Desktop header */}
            <div className="hidden md:grid md:grid-cols-[1fr_2fr_auto] gap-6 px-8 py-5 border-b border-white/10 text-xs uppercase tracking-widest text-white/40 font-semibold">
              <span>Service</span>
              <span>Description</span>
              <span className="text-right">Fee</span>
            </div>
            {supportTiers.map((tier, idx) => (
              <div
                key={tier.task}
                className={`grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-3 md:gap-6 px-8 py-6 ${
                  idx < supportTiers.length - 1 ? "border-b border-white/5" : ""
                } transition-colors hover:bg-white/[0.03]`}
              >
                <span className="text-white font-semibold text-base">
                  {tier.task}
                </span>
                <span className="text-white/60 text-sm leading-relaxed">
                  {tier.description}
                </span>
                <span className="text-[#b4eb2c] font-semibold text-base md:text-right whitespace-nowrap">
                  {tier.fee}
                  {tier.unit && (
                    <span className="text-white/40 text-xs ml-1">
                      {tier.unit}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Process note */}
          <p
            className={`mt-8 text-sm text-white/40 leading-relaxed max-w-[700px] opacity-0 ${
              supportVisible ? "animate-[fadeInUp_0.8s_ease-out_0.6s_both]" : ""
            }`}
          >
            All requests follow a formal workflow: submit via email → receive a
            quote → we build and test on a staging branch → deploy to production
            → invoice within 7 days.
          </p>
        </div>
      </section>

      {/* Our Projects Section */}
      <section ref={projectsRef} className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`flex flex-wrap items-center justify-between mb-12 opacity-0 ${
              projectsVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
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

      {/* SEO & Marketing Section */}
      <SectionWrapper className="z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* SEO */}
          <div>
            <div className="box-border caret-transparent mb-6">
              <h2 className="text-[44.4px] font-semibold box-border caret-transparent leading-[53.28px] mb-4 font-obviously md:text-[64px] md:leading-[76.8px]">
                SEO
                <span className="text-[12.8px] font-thin box-border caret-transparent inline-block leading-[12.8px] text-center text-nowrap align-middle border-white/30 ml-4 px-4 py-2 rounded-[800px] border-2 border-solid md:text-[16px] md:leading-[16px]">
                  Tailored Strategy
                </span>
              </h2>
              <h3 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-6 font-obviously md:text-[40px] md:leading-[48px]">
                Boost your visibility with our expertise
              </h3>
            </div>
            <p className="box-border caret-transparent mb-8">
              Being online is irrelevant if you can't be found. Our team of
              experts provides{" "}
              <strong className="font-semibold">tailored SEO strategies</strong>{" "}
              designed to improve your search rankings and drive qualified
              traffic. From local visibility to national reach, we build
              data-driven campaigns that put your business in front of customers
              exactly when they're ready to buy.
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

          {/* App Development */}
          <div>
            <div className="box-border caret-transparent mb-6">
              <h2 className="text-[44.4px] font-semibold box-border caret-transparent leading-[53.28px] mb-4 font-obviously md:text-[64px] md:leading-[76.8px]">
                App Development
                <span className="text-[12.8px] font-thin box-border caret-transparent inline-block leading-[12.8px] text-center text-nowrap align-middle border-white/30 ml-4 px-4 py-2 rounded-[800px] border-2 border-solid md:text-[16px] md:leading-[16px]">
                  From R15k
                </span>
              </h2>
              <h3 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-6 font-obviously md:text-[40px] md:leading-[48px]">
                Custom apps built for your business
              </h3>
            </div>
            <p className="box-border caret-transparent mb-8">
              Transform your ideas into powerful mobile and web applications.
              Our expert developers create{" "}
              <strong className="font-semibold">
                custom solutions tailored to your business needs
              </strong>
              , from simple starter apps to complex enterprise systems. With
              modern frameworks and best practices, we deliver secure, scalable
              applications that drive business growth.
            </p>
            <a
              href="/services/app-development"
              className="text-sm font-normal bg-[#654064] box-border caret-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#654064] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#654064]/80 hover:border-[#654064]/80 transition-colors"
            >
              More about App Development
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
      </SectionWrapper>

      {/* Your website is in good hands */}
      <section ref={goodHandsRef} className="relative z-10 py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="relative mb-12 md:mb-20">
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-3">
              Your website is
              <br />
              in <span className="italic text-outline-2">good hands</span>
            </h2>
          </div>
          <div className="overflow-x-auto scrollbar-hide -mx-6 md:mx-0 md:overflow-visible">
            <div className="flex gap-4 px-6 md:grid md:grid-cols-3 md:gap-6 md:px-0">
              {[
                {
                  step: 1,
                  variant: "lime" as const,
                  title: "Experienced designers",
                  description:
                    "We have high-end designers ready to conceive stunning designs matching your brand style.",
                },
                {
                  step: 2,
                  variant: "purple" as const,
                  title: "eCommerce experts",
                  description:
                    "Our functional consultants can help you setting-up all your products in your eCommerce.",
                  hasNote: true,
                },
                {
                  step: 3,
                  variant: "cyan" as const,
                  title: "Front-end developers",
                  description:
                    "Our front-end developers implement tailor-made features to take your website to the next level.",
                },
              ].map((card, idx) => (
                <div
                  key={card.step}
                  className={`min-w-[280px] w-[calc(100vw-120px)] flex-shrink-0 md:min-w-0 md:w-auto opacity-0 ${
                    goodHandsVisible
                      ? `animate-[fadeInUp_0.8s_ease-out_${
                          ["0.2s", "0.4s", "0.6s"][idx]
                        }_both]`
                      : ""
                  }`}
                >
                  <ProcessCard
                    step={card.step}
                    variant={card.variant}
                    title={card.title}
                    description={card.description}
                    note={
                      card.hasNote ? (
                        <div className="absolute -top-20 right-4 hidden md:block w-[140px]">
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
                      ) : undefined
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={webDesignFAQ} title="Web Design FAQ" />
    </>
  );
};
