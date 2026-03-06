"use client";

import {
  Check,
  WhatsappLogo,
  ShieldCheck,
  Gauge,
  ArrowRight,
  ChartBar,
  CloudArrowUp,
  Headset,
  SealCheck,
} from "@phosphor-icons/react";
import { ServiceHero } from "@/components/ServiceHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WA_BASE =
  "https://wa.me/27814272624?text=Hi%2C%20I'm%20interested%20in%20";

const tiers = [
  {
    name: "Basic Care",
    price: "R199",
    period: "/month",
    tagline: "Website backups and updates.",
    color: "#e7fe56",
    features: [
      "Website backups",
      "Security updates",
      "Minor content updates",
      "Technical support",
    ],
  },
  {
    name: "Business Care",
    price: "R399",
    period: "/month",
    tagline: "Everything you need to grow.",
    color: "#d5bff0",
    popular: true,
    features: [
      "Everything in Basic Care",
      "Monthly performance check",
      "SEO monitoring",
      "Up to 2 content updates",
    ],
  },
];

const whyCarePlan = [
  {
    Icon: ShieldCheck,
    title: "Security Never Sleeps",
    body: "Hackers don't take weekends off. We monitor and patch your site around the clock so a security vulnerability never becomes a business emergency.",
    color: "#e7fe56",
  },
  {
    Icon: Gauge,
    title: "Performance Stays Perfect",
    body: "Google's algorithm changes constantly. We keep your Core Web Vitals scores in the green so your rankings and ad costs never suffer from a slow page.",
    color: "#d5bff0",
  },
  {
    Icon: ChartBar,
    title: "Data That Drives Decisions",
    body: "Monthly reports translate raw Google Analytics data into plain-English insights. Know what's working, what to cut, and where your next leads are hiding.",
    color: "#72f5e3",
  },
  {
    Icon: CloudArrowUp,
    title: "Hosting That Never Fails",
    body: "We host on enterprise-grade infrastructure with 99.9% uptime SLA. A site that goes down loses customers and ranking — ours don't.",
    color: "#e7fe56",
  },
  {
    Icon: Headset,
    title: "A Team On Standby",
    body: "Need a phone number changed or a new product added? Submit via WhatsApp and it's done — no quotes, no invoices, no friction.",
    color: "#d5bff0",
  },
  {
    Icon: SealCheck,
    title: "Google Always Finds You",
    body: "We resubmit updated sitemaps to Google Search Console every time content changes so every new page and update gets indexed fast.",
    color: "#72f5e3",
  },
];

export default function CarePlanPage() {
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation(0.1);
  const { ref: tiersRef, isVisible: tiersVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.15);

  return (
    <>
      <ServiceHero
        title="Maintenance Plans"
        underlineColor="lime"
        description="Keep your website running smoothly with our flexible maintenance plans. Choose the level of support that's right for your business. All plans include hosting. Cancel anytime. No lock-in contracts."
      />

      {/* ─── WHY YOU NEED A CARE PLAN ─── */}
      <section
        ref={whyRef}
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 md:mb-16 opacity-0 ${
              whyVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <p className="text-[#b4eb2c] text-sm font-semibold uppercase tracking-widest mb-3">
              Why Bother?
            </p>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              A Website Is Not a{" "}
              <span className="italic text-outline-2">Set-and-Forget</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[680px]">
              Most business owners think once the site is live, the job is done.
              But Google&apos;s algorithm, browser updates, and security threats
              evolve every month. Without maintenance, a great website quietly
              becomes a liability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCarePlan.map(({ Icon, title, body, color }, idx) => (
              <div
                key={title}
                className={`rounded-2xl p-7 bg-white/5 border border-white/10 hover:border-white/20 transition-colors opacity-0 ${
                  whyVisible
                    ? `animate-[fadeInUp_0.8s_ease-out_${
                        ["0.2s", "0.3s", "0.4s", "0.5s", "0.6s", "0.7s"][idx]
                      }_both]`
                    : ""
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: `${color}20`,
                    border: `1px solid ${color}40`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PLAN TIERS ─── */}
      <section
        ref={tiersRef}
        className="relative z-10 py-16 md:py-28 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-12 md:mb-16 opacity-0 ${
              tiersVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
              Choose Your{" "}
              <span className="italic text-outline-2">Plan</span>
            </h2>
            <p className="text-lg text-white/70 max-w-[560px]">
              All plans include hosting and SSL. Upgrade or cancel anytime.
              Month-to-month, no contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {tiers.map(
              ({ name, price, period, tagline, color, features, popular }, idx) => (
                <div
                  key={name}
                  className={`relative rounded-3xl p-8 flex flex-col border-2 transition-colors opacity-0 ${
                    tiersVisible
                      ? `animate-[fadeInUp_0.8s_ease-out_${
                          ["0.3s", "0.5s", "0.7s"][idx]
                        }_both]`
                      : ""
                  }`}
                  style={{
                    borderColor: popular ? color : `${color}40`,
                    backgroundColor: popular
                      ? `${color}10`
                      : "rgba(255,255,255,0.03)",
                  }}
                >
                  {popular && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-black text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap"
                      style={{ backgroundColor: color }}
                    >
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold font-obviously mb-1">
                      {name}
                    </h3>
                    <p className="text-white/50 text-sm italic">{tagline}</p>
                  </div>

                  <div className="mb-8">
                    <span className="text-3xl font-bold" style={{ color }}>
                      {price}
                    </span>
                    <span className="text-white/50 text-sm">{period}</span>
                  </div>

                  <div className="flex-1 space-y-3 mb-8">
                    {features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <Check
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color }}
                        />
                        <span className="text-sm text-white/75">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Primary CTA */}
                  <a
                    href={`${WA_BASE}the%20${encodeURIComponent(
                      name.toLowerCase()
                    )}%20plan`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-300 border-2 bg-[#e7fe56] border-[#e7fe56] text-black hover:bg-[#e7fe56]/90 mb-3"
                  >
                    <WhatsappLogo className="w-4 h-4" />
                    Get Started on WhatsApp
                  </a>

                  {/* Secondary CTA */}
                  <a
                    href={`/contact?plan=${encodeURIComponent(name)}`}
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-300 bg-transparent border border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )
            )}
          </div>

          {/* Notes */}
          <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl">
            <p className="text-sm text-white/60 leading-relaxed">
              <span className="font-semibold text-white">Note:</span> The maintenance plans are optional. Your website is fully functional without them.
            </p>
          </div>
        
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section
        ref={ctaRef}
        className="relative z-10 py-16 md:py-24 px-6"
      >
        <div className="max-w-[900px] w-full mx-auto text-center">
          <div
            className={`opacity-0 ${
              ctaVisible ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]" : ""
            }`}
          >
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
              Still running your website
              <br />
              <span className="italic text-outline-2">with zero support?</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-[600px] mx-auto">
              Most business owners only notice their website is broken when a
              customer calls to complain. Don&apos;t wait for that call. Get covered
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/27814272624?text=Hi%2C%20I%20want%20to%20sign%20up%20for%20a%20care%20plan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b4eb2c] text-black font-semibold text-sm uppercase tracking-widest rounded-xl hover:bg-[#b4eb2c]/90 transition-colors"
              >
                <WhatsappLogo className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold text-sm uppercase tracking-widest rounded-xl hover:border-white/40 transition-colors"
              >
                Send an Email Instead
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
