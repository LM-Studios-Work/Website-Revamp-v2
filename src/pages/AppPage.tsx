import { Link } from "react-router-dom";
import { ProcessCard } from "../components/ProcessCard";
import { ScrollableCardRow } from "../components/ScrollableCardRow";
import { FAQ } from "@/sections/FAQ";
import { appDevelopmentFAQ } from "@/sections/FAQ/constants";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const solutionExamples = [
  {
    title: "Booking & Scheduling Systems",
    description: "Resource management, appointment scheduling, calendar integration, notifications, and user dashboards.",
    features: ["Role-based access", "Real-time availability", "Automated reminders", "Reporting dashboard"],
    color: "#72f5e3",
  },
  {
    title: "Inventory & Asset Management",
    description: "Track assets, manage stock levels, generate reports, and streamline procurement workflows.",
    features: ["Barcode scanning", "Stock alerts", "Audit trails", "Multi-location support"],
    color: "#e7fe56",
  },
  {
    title: "Admin Dashboards & Portals",
    description: "Centralized control panels for managing users, content, operations, and business metrics.",
    features: ["Custom analytics", "User management", "Data visualization", "Activity monitoring"],
    color: "#d5bff0",
  },
  {
    title: "Workflow Automation",
    description: "Digitize manual processes, automate approvals, and integrate with existing systems.",
    features: ["Custom workflows", "Email notifications", "Document generation", "API integrations"],
    color: "#72f5e3",
  },
  {
    title: "Internal Business Tools",
    description: "Custom CRMs, project management systems, HR platforms, and operational tools built for your team.",
    features: ["Tailored interfaces", "Database design", "Third-party integration", "Secure authentication"],
    color: "#e7fe56",
  },
  {
    title: "Client-Facing Platforms",
    description: "Member portals, customer dashboards, service platforms, and collaborative workspaces.",
    features: ["User profiles", "Document sharing", "Communication tools", "Payment processing"],
    color: "#d5bff0",
  },
];

export const AppPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.15);
  const { ref: goodHandsRef, isVisible: goodHandsVisible } = useScrollAnimation(0.15);
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation(0.15);
  const { ref: solutionsRef, isVisible: solutionsVisible } = useScrollAnimation(0.15);
  const { ref: ctaCardsRef, isVisible: ctaCardsVisible } = useScrollAnimation(0.15);
  const { ref: finalCtaRef, isVisible: finalCtaVisible } = useScrollAnimation(0.15);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex flex-col justify-center items-center min-h-screen pt-40 pb-16 px-6 overflow-hidden">
        <HeroVideoOverlay />
        <div className="relative z-30 max-w-[900px] w-full text-center animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-white/50 text-sm uppercase tracking-widest">
              CUSTOM WEB APPLICATIONS
            </span>
            <span className="text-xs font-thin inline-block text-center whitespace-nowrap align-middle border-white/30 px-4 py-1.5 rounded-full border border-solid text-white/50">
              Tailored Solutions
            </span>
          </div>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-white mb-8">
            Business Systems
            <br />
            &amp; Web Platforms
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
              stroke="#72f5e3"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[750px] mx-auto">
            We build secure, scalable web applications tailored to your organization. 
            From booking systems and inventory management to role-based dashboards and 
            workflow automation, we deliver custom solutions that digitize operations 
            and drive efficiency.
          </p>
        </div>
      </section>

      {/* Ready to transform section */}
      <section ref={goodHandsRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            <div className={`md:w-1/2 opacity-0 ${goodHandsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
                Your system is in{" "}
                <span className="italic text-outline-15">good hands</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Your web application is the operational backbone of your organization. 
                We understand the importance of secure, reliable systems that streamline 
                workflows and scale with your business. Our senior developers specialize 
                in React, Node.js, PostgreSQL, and modern cloud infrastructure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`opacity-0 ${goodHandsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
                  <div className="p-8 rounded-[32px] bg-[#72f5e3] text-black">
                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center mb-6 font-bold text-xs">
                    01
                  </div>
                  <h4 className="text-xl font-bold mb-2">Expert Engineers</h4>
                  <p className="text-black/60 text-sm">
                    Our senior developers average 8+ years experience building 
                    scalable web platforms and business systems.
                  </p>
                </div>
              </div>
              <div className={`opacity-0 ${goodHandsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.6s_both]" : ""}`}>
                <div className="p-8 rounded-[32px] bg-[#e7fe56] text-black">
                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center mb-6 font-bold text-xs">
                    02
                  </div>
                  <h4 className="text-xl font-bold mb-2">Strategic Thinking</h4>
                  <p className="text-black/60 text-sm">
                    We analyze your workflows and design systems that truly fit your 
                    operational needs and future growth.
                  </p>
                </div>
              </div>
            </div>
            <div className={`md:w-1/2 opacity-0 ${goodHandsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
              <div className="rounded-[32px] overflow-hidden border border-white/10 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                  alt="App development workspace"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section ref={processRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className={`flex flex-col md:flex-row md:items-start gap-10 md:gap-16 mb-12 opacity-0 ${processVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
            <div className="md:w-5/12 shrink-0">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                Our <span className="italic text-outline-15">process</span>
              </h2>
              <p className="text-base text-white/60 leading-relaxed">
                A proven development workflow that delivers secure, scalable systems 
                tailored to your business requirements.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">
            <div className={`opacity-0 ${processVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
              <ProcessCard
                step={1}
                variant="cyan"
                title="Discovery"
                description="We analyze your workflows, user roles, and operational requirements to define the system architecture and key features."
              />
            </div>
            <div className={`opacity-0 ${processVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
              <ProcessCard
                step={2}
                variant="purple"
                title="Design & Build"
                description="We design intuitive interfaces and develop secure, role-based systems using modern frameworks and best practices."
              />
            </div>
            <div className={`opacity-0 ${processVisible ? "animate-[fadeInUp_0.8s_ease-out_0.6s_both]" : ""}`}>
              <ProcessCard
                step={3}
                variant="lime"
                title="Test & Deploy"
                description="Comprehensive security testing, user acceptance testing, and cloud deployment with documentation and training."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Apps That Drive Growth */}
      <section ref={ctaCardsRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            <div className={`md:w-1/2 opacity-0 ${ctaCardsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
                Custom Systems That
                <br />
                Drive <span className="italic text-outline-15">Efficiency</span>
              </h2>
            </div>
            <div className={`md:w-1/2 flex flex-col gap-6 opacity-0 ${ctaCardsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
              <p className="text-lg text-white/70 leading-relaxed">
                Our team specializes in building custom web platforms that are{" "}
                <strong className="text-white font-semibold">
                  secure, scalable, and perfectly aligned
                </strong>{" "}
                with your operational needs. From booking systems to inventory tracking, 
                admin dashboards to workflow automation—we build solutions that grow with 
                your organization.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Every project is unique. Contact us to discuss your specific requirements 
                and receive a tailored solution designed for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions We Build Section */}
      <section ref={solutionsRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className={`text-center mb-16 opacity-0 ${solutionsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
              Solutions We <span className="italic text-outline-15">Build</span>
            </h2>
            <p className="text-lg text-white/60 mt-6 max-w-3xl mx-auto">
              Every organization has unique needs. We build custom web applications 
              tailored to your specific requirements. Here are some examples of systems we create:
            </p>
          </div>

          {/* Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionExamples.map((solution, idx) => (
              <div
                key={idx}
                className={`opacity-0 ${solutionsVisible ? `animate-[fadeInUp_0.8s_ease-out_${0.3 + idx * 0.1}s_both]` : ""}`}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
                <div 
                  className="w-12 h-12 rounded-full mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${solution.color}20`, border: `2px solid ${solution.color}` }}
                >
                  <svg className="w-6 h-6" style={{ color: solution.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  {solution.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm text-white/50">
                      <svg className="w-4 h-4 shrink-0" style={{ color: solution.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              These are just examples. We build custom solutions based on your specific needs. 
              Contact us to discuss your project and receive a tailored proposal.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-base font-semibold bg-[#72f5e3] text-black pl-8 pr-3 py-3 rounded-full hover:bg-[#72f5e3]/90 hover:scale-105 transition-all duration-300"
            >
              Get a Custom Quote
              <span className="ml-3 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#72f5e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mini CTA Cards */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-10 md:p-12 rounded-[32px] bg-white/[0.02] border border-white/5 flex flex-col justify-between group cursor-pointer hover:bg-white/[0.04] transition-colors">
            <div>
              <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-widest mb-6 inline-block">
                SECURITY
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-[#72f5e3] transition-colors">
                Enterprise Grade Security
              </h3>
              <p className="text-white/40 mb-8">
                We implement OAuth2, JWT, and SOC2 compliant architectures for
                your peace of mind.
              </p>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#72f5e3] group-hover:text-black transition-all">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
          <div className="p-10 md:p-12 rounded-[32px] bg-white/[0.02] border border-white/5 flex flex-col justify-between group cursor-pointer hover:bg-white/[0.04] transition-colors">
            <div>
              <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-widest mb-6 inline-block">
                PERFORMANCE
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-[#e7fe56] transition-colors">
                Edge-First Architecture
              </h3>
              <p className="text-white/40 mb-8">
                Optimized for global performance with edge functions and
                distributed database clusters.
              </p>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#e7fe56] group-hover:text-black transition-all">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={appDevelopmentFAQ} title="Custom Web Applications — FAQ" />

      {/* CTA Section */}
      <section ref={finalCtaRef} className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16 opacity-0 ${finalCtaVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div>
                <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                  {"Let's build your"}
                  <br />
                  custom <span className="italic text-outline-15">solution.</span>
                </h2>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm md:text-base font-semibold text-black bg-[#e7fe56] pl-6 pr-2 py-3 rounded-full hover:bg-[#e7fe56]/80 transition-colors"
                >
                  Discuss your project
                  <span className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-black/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-black -rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
