"use client";
import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/sections/FAQ";
import { appDevelopmentFAQ } from "@/sections/FAQ/constants";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcessCardGrid } from "@/components/ProcessCardGrid";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COLORS } from "@/constants/colors";
import { 
  CalendarCheck, 
  Package, 
  ChartLineUp, 
  ArrowsClockwise, 
  UsersThree, 
  IdentificationCard,
  Check,
  CheckCircle,
  ArrowRight
} from "@phosphor-icons/react";

const solutionExamples = [
  {
    title: "Booking & Scheduling Systems",
    description: "Resource management, appointment scheduling, calendar integration, notifications, and user dashboards.",
    features: ["Role-based access", "Real-time availability", "Automated reminders", "Reporting dashboard"],
    color: COLORS.cyan,
    icon: CalendarCheck,
  },
  {
    title: "Inventory & Asset Management",
    description: "Track assets, manage stock levels, generate reports, and streamline procurement workflows.",
    features: ["Barcode scanning", "Stock alerts", "Audit trails", "Multi-location support"],
    color: COLORS.lime,
    icon: Package,
  },
  {
    title: "Admin Dashboards & Portals",
    description: "Centralized control panels for managing users, content, operations, and business metrics.",
    features: ["Custom analytics", "User management", "Data visualization", "Activity monitoring"],
    color: COLORS.purple,
    icon: ChartLineUp,
  },
  {
    title: "Workflow Automation",
    description: "Digitize manual processes, automate approvals, and integrate with existing systems.",
    features: ["Custom workflows", "Email notifications", "Document generation", "API integrations"],
    color: COLORS.cyan,
    icon: ArrowsClockwise,
  },
  {
    title: "Internal Business Tools",
    description: "Custom CRMs, project management systems, HR platforms, and operational tools built for your team.",
    features: ["Tailored interfaces", "Database design", "Third-party integration", "Secure authentication"],
    color: COLORS.lime,
    icon: UsersThree,
  },
  {
    title: "Client-Facing Platforms",
    description: "Member portals, customer dashboards, service platforms, and collaborative workspaces.",
    features: ["User profiles", "Document sharing", "Communication tools", "Payment processing"],
    color: COLORS.purple,
    icon: IdentificationCard,
  },
];



export const AppPage = () => {
  const { ref: goodHandsRef, isVisible: goodHandsVisible } = useScrollAnimation(0.15);
  const { ref: ctaCardsRef, isVisible: ctaCardsVisible } = useScrollAnimation(0.15);
  const { ref: solutionsRef, isVisible: solutionsVisible } = useScrollAnimation(0.15);

  return (
    <>
      <ServiceHero
        title={<>Business Systems<br />&amp; Web Platforms</>}
        underlineColor="cyan"
        description="We build secure, scalable web applications tailored to your organization. From booking systems and inventory management to role-based dashboards and workflow automation, we deliver custom solutions that digitize operations and drive efficiency."
        badge={
          <>
            <span className="text-white/50 text-sm uppercase tracking-widest">
              CUSTOM WEB APPLICATIONS
            </span>
            <span className="text-xs font-thin inline-block text-center whitespace-nowrap align-middle border-white/30 px-4 py-1.5 rounded-full border border-solid text-white/50">
              Tailored Solutions
            </span>
          </>
        }
      />

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
                We build reliable, lightning-fast platforms that automate your daily admin,
                so you can focus on growing your business. Our senior developers create 
                secure systems that streamline workflows and scale with your needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { num: "01", title: "Expert Engineers", desc: "Our senior developers average 8+ years experience building scalable web platforms and business systems.", color: COLORS.cyan, delay: "0.4s" },
                  { num: "02", title: "Strategic Thinking", desc: "We analyze your workflows and design systems that truly fit your operational needs and future growth.", color: COLORS.lime, delay: "0.6s" },
                ].map((card) => (
                  <div key={card.num} className={`opacity-0 ${goodHandsVisible ? `animate-[fadeInUp_0.8s_ease-out_${card.delay}_both]` : ""}`}>
                    <div className="p-8 rounded-[32px] text-black" style={{ backgroundColor: card.color }}>
                      <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center mb-6 font-bold text-xs">
                        {card.num}
                      </div>
                      <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                      <p className="text-black/60 text-sm">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`md:w-1/2 opacity-0 ${goodHandsVisible ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]" : ""}`}>
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                  alt="App development workspace"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Booking Systems SEO Section */}
      <section className="relative py-16 px-6 bg-white/5">
        <div className="max-w-[1400px] w-full mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Custom <span className="italic text-[#72f5e3]">Booking & Scheduling</span> Systems
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-3xl">
            Stop losing hours to manual scheduling and missed appointments. We build custom online booking platforms tailored to your exact workflow, complete with secure South African payment integrations (like PayFast and Yoco) and automated SMS reminders.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/60">
            <li className="flex items-center gap-3"><Check className="w-5 h-5" style={{ color: COLORS.cyan }} weight="bold" /> Automated Email & SMS Notifications</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5" style={{ color: COLORS.cyan }} weight="bold" /> Secure Upfront Deposit Processing</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5" style={{ color: COLORS.cyan }} weight="bold" /> Real-time Calendar Syncing</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5" style={{ color: COLORS.cyan }} weight="bold" /> Staff & Resource Management Dashboards</li>
          </ul>
        </div>
      </section>

      {/* Our Process Section */}
      <ProcessCardGrid
        heading={
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
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
        }
        cards={[
          { step: 1, variant: "cyan", title: "Discovery", description: "We analyze your workflows, user roles, and operational requirements to define the system architecture and key features." },
          { step: 2, variant: "purple", title: "Design & Build", description: "We design intuitive interfaces and develop secure, role-based systems using modern frameworks and best practices." },
          { step: 3, variant: "lime", title: "Test & Deploy", description: "Comprehensive security testing, user acceptance testing, and cloud deployment with documentation and training." },
        ]}
      />

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
                Our team specializes in building custom web platforms that are
                secure, scalable, and perfectly aligned with your operational
                needs. From booking systems to inventory tracking, admin
                dashboards to workflow automation, we build solutions that grow
                with your organization.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionExamples.map((solution, idx) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center"
                    style={{ backgroundColor: `${solution.color}20`, border: `2px solid ${solution.color}` }}
                  >
                    <IconComponent className="w-7 h-7" style={{ color: solution.color }} weight="duotone" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-sm text-white/50">
                        <Check className="w-4 h-4" style={{ color: solution.color }} weight="bold" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              These are just examples. We build custom solutions based on your specific needs.
              Contact us to discuss your project and receive a tailored proposal.
            </p>
            <Link href="/contact"
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
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { badge: "SECURITY", title: "Bank-Level Security", desc: "We protect your business and customer data with enterprise-grade encryption and secure logins, giving you total peace of mind.", hoverColor: COLORS.cyan },
            { badge: "PERFORMANCE", title: "Edge-First Architecture", desc: "Optimized for global performance with edge functions and distributed database clusters.", hoverColor: COLORS.lime },
          ].map((card) => (
            <div
              key={card.badge}
              className="p-10 md:p-12 rounded-[32px] bg-white/[0.02] border border-white/5 flex flex-col justify-between group cursor-pointer hover:bg-white/[0.04] transition-colors"
            >
              <div>
                <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-widest mb-6 inline-block">
                  {card.badge}
                </span>
                <h3
                  className="text-3xl md:text-4xl font-bold mb-4 transition-colors"
                  style={{ '--hover-color': card.hoverColor } as React.CSSProperties}
                >
                  <span className="group-hover:text-[var(--hover-color)] transition-colors">
                    {card.title}
                  </span>
                </h3>
                <p className="text-white/40 mb-8">{card.desc}</p>
              </div>
              <div
                className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center transition-all group-hover:bg-[var(--hover-bg)]"
                style={{ '--hover-bg': card.hoverColor } as React.CSSProperties}
              >
                <ArrowRight className="w-6 h-6 text-white group-hover:text-black transition-colors" weight="bold" />
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <FAQ items={appDevelopmentFAQ} title="Custom Web Applications FAQ" />

      {/* CTA Section */}
      <CTASection
        heading={<>{"Let's build your"}<br />custom <span className="italic text-outline-15">solution.</span></>}
        linkTo="/contact"
        linkText="Discuss your project"
        color="lime"
      />
    </>
  );
};
