import { Link } from "react-router-dom";
import { ProcessCard } from "../components/ProcessCard";
import { ScrollableCardRow } from "../components/ScrollableCardRow";
import { FAQ } from "@/sections/FAQ";
import { appDevelopmentFAQ } from "@/sections/FAQ/constants";

const pricingFeatures = [
  {
    label: "Platforms",
    starter: "Single (iOS or Android)",
    business: "iOS & Android (React Native)",
    enterprise: "Native iOS & Android",
  },
  {
    label: "Screens",
    starter: "Up to 5",
    business: "Up to 15",
    enterprise: "Unlimited",
  },
  {
    label: "Authentication",
    starter: "Basic",
    business: "Social + Email",
    enterprise: "Enterprise SSO / OAuth2",
  },
  {
    label: "Push Notifications",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    label: "Payment Integration",
    starter: false,
    business: true,
    enterprise: true,
  },
  {
    label: "Admin Panel",
    starter: false,
    business: true,
    enterprise: "Custom Dashboard",
  },
  {
    label: "API Integrations",
    starter: false,
    business: "Standard",
    enterprise: "Custom + Third-Party",
  },
  {
    label: "Backend Development",
    starter: false,
    business: false,
    enterprise: true,
  },
  {
    label: "Dedicated Project Manager",
    starter: false,
    business: false,
    enterprise: true,
  },
  {
    label: "Post-Launch Support",
    starter: "1 month",
    business: "3 months",
    enterprise: "12 months",
  },
  {
    label: "App Store Submission",
    starter: true,
    business: true,
    enterprise: true,
  },
];

export const AppPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center min-h-screen pt-40 pb-16 px-6 overflow-hidden">
        <div className="relative z-10 max-w-[900px] w-full text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-white/50 text-sm uppercase tracking-widest">
              APP DEVELOPMENT
            </span>
            <span className="text-xs font-thin inline-block text-center whitespace-nowrap align-middle border-white/30 px-4 py-1.5 rounded-full border border-solid text-white/50">
              4 weeks min.
            </span>
          </div>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-white mb-8">
            Mobile &amp; Web
            <br />
            Applications
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
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[750px] mx-auto">
            From concept to launch, we build high-performance mobile and web
            applications that engage users and drive business growth. Whether
            you need a simple startup app or a complex enterprise platform, we
            bring your vision to life.
          </p>
        </div>
      </section>

      {/* Ready to transform section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
                Your app is in{" "}
                <span className="italic text-outline-15">good hands</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Your app is the direct connection between your business and your
                users. We understand the importance of a well-built application
                that complements your website and represents your brand. Our
                senior developers have years of experience in React Native,
                Swift, Kotlin, and Node.js.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-8 rounded-[32px] bg-[#d5bff0] text-black">
                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center mb-6 font-bold text-xs">
                    01
                  </div>
                  <h4 className="text-xl font-bold mb-2">Expert Engineers</h4>
                  <p className="text-black/60 text-sm">
                    Our senior developers average 8+ years experience in React
                    Native and Node.js.
                  </p>
                </div>
                <div className="p-8 rounded-[32px] bg-[#e7fe56] text-black">
                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center mb-6 font-bold text-xs">
                    02
                  </div>
                  <h4 className="text-xl font-bold mb-2">Product Minds</h4>
                  <p className="text-black/60 text-sm">
                    {"We don't just code; we help you refine your product features for maximum market impact."}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
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
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16 mb-12">
            <div className="md:w-5/12 shrink-0">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                Our{" "}
                <span className="italic text-outline-15">process</span>
              </h2>
              <p className="text-base text-white/60 leading-relaxed">
                A proven development workflow that delivers quality apps on time
                and within budget.
              </p>
            </div>
          </div>
          <ScrollableCardRow desktopGridCols="md:grid-cols-3">
            <ProcessCard
              step={1}
              variant="purple"
              title="Discovery"
              description="We analyse your requirements, target audience, and define the app's core features and user flows."
            />
            <ProcessCard
              step={2}
              variant="yellow"
              title="Design & Build"
              description="We create wireframes, high-fidelity designs, and develop your app using modern frameworks with clean, performant code."
            />
            <ProcessCard
              step={3}
              variant="cyan"
              title="Test & Launch"
              description="Rigorous QA testing across devices, followed by app store submission and launch support with ongoing maintenance."
            />
          </ScrollableCardRow>
        </div>
      </section>

      {/* Custom Apps That Drive Growth */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
                Custom Apps That
                <br />
                Drive{" "}
                <span className="italic text-outline-15">Growth</span>
              </h2>
            </div>
            <div className="md:w-1/2 flex flex-col gap-6">
              <p className="text-lg text-white/70 leading-relaxed">
                Our team of talented developers specializes in creating custom
                applications that are{" "}
                <strong className="text-white font-semibold">
                  performant, scalable, and perfectly aligned
                </strong>{" "}
                with your business goals. Whether you are starting from scratch
                or looking to upgrade your current app, we are here to bring
                your vision to life.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Let us help you create an app that not only looks amazing but
                also delivers measurable results for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
              What you will get
            </h2>
          </div>

          {/* Table Header - Desktop */}
          <div className="hidden md:grid grid-cols-4 gap-0 mb-0">
            <div />
            <div className="text-center pb-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#e7fe56] border border-[#e7fe56] px-4 py-1 rounded-full mb-4">
                starter
              </span>
              <div className="text-5xl font-bold text-white mb-1">R15k</div>
              <p className="text-white/40 text-sm">4-6 weeks</p>
            </div>
            <div className="text-center pb-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#72f5e3] border border-[#72f5e3] px-4 py-1 rounded-full mb-4">
                business
              </span>
              <div className="text-5xl font-bold text-white mb-1">R35k</div>
              <p className="text-white/40 text-sm">8-12 weeks</p>
            </div>
            <div className="text-center pb-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d5bff0] border border-[#d5bff0] px-4 py-1 rounded-full mb-4">
                enterprise
              </span>
              <div className="text-5xl font-bold text-white mb-1">Custom</div>
              <p className="text-white/40 text-sm">12+ weeks</p>
            </div>
          </div>

          {/* Table Rows - Desktop */}
          <div className="hidden md:block border-t border-white/10">
            {pricingFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="grid grid-cols-4 gap-0 border-b border-white/10"
              >
                <div className="flex items-center py-5 px-4 text-sm text-white/80 font-medium">
                  {feature.label}
                </div>
                {(["starter", "business", "enterprise"] as const).map(
                  (tier) => {
                    const value = feature[tier];
                    return (
                      <div
                        key={tier}
                        className="flex items-center justify-center py-5 px-4 text-sm text-center border-l border-white/10"
                      >
                        {value === true ? (
                          <svg
                            className="w-5 h-5 text-[#e7fe56]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : value === false ? (
                          <span className="text-white/20">-</span>
                        ) : (
                          <span className="text-white/70">{value}</span>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="flex flex-col gap-8 md:hidden">
            {(
              [
                {
                  tier: "starter" as const,
                  label: "Starter",
                  price: "R15k",
                  subtitle: "4-6 weeks",
                  color: "#e7fe56",
                },
                {
                  tier: "business" as const,
                  label: "Business",
                  price: "R35k",
                  subtitle: "8-12 weeks",
                  color: "#72f5e3",
                },
                {
                  tier: "enterprise" as const,
                  label: "Enterprise",
                  price: "Custom",
                  subtitle: "12+ weeks",
                  color: "#d5bff0",
                },
              ] as const
            ).map((plan) => (
              <div
                key={plan.tier}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="text-center mb-6">
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full mb-3 border"
                    style={{ color: plan.color, borderColor: plan.color }}
                  >
                    {plan.label}
                  </span>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                  </div>
                  <p className="text-white/40 text-sm">{plan.subtitle}</p>
                </div>
                <div className="border-t border-white/10">
                  {pricingFeatures.map((feature, idx) => {
                    const value = feature[plan.tier];
                    if (value === false) return null;
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                      >
                        <span className="text-sm text-white/60">
                          {feature.label}
                        </span>
                        <span className="text-sm text-white/80 font-medium">
                          {value === true ? (
                            <svg
                              className="w-4 h-4 text-[#e7fe56]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : (
                            value
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
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
      <FAQ items={appDevelopmentFAQ} title="App Development — FAQ" />

      {/* CTA Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div>
                <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                  {"Let's build your"}
                  <br />
                  next{" "}
                  <span className="italic text-outline-15">app.</span>
                </h2>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm md:text-base font-semibold text-black bg-[#e7fe56] pl-6 pr-2 py-3 rounded-full hover:bg-[#e7fe56]/80 transition-colors"
                >
                  Get a free consultation
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
