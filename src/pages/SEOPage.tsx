import { Link } from "react-router-dom";
import { useState } from "react";
import { ProcessCard } from "../components/ProcessCard";
import { ScrollableCardRow } from "../components/ScrollableCardRow";
import { FAQ } from "@/sections/FAQ";
import { seoFAQ } from "@/sections/FAQ/constants";

export const SEOPage = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center min-h-screen pt-40 pb-16 px-6 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" onError={() => setVideoError(true)}>
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          ) : (
            <img src="/newhero.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-[900px] w-full text-center">
          <p className="text-white/50 text-sm md:text-base uppercase tracking-widest mb-4">
            Data-Driven SEO Strategy
          </p>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-white mb-8">
            Get found by
            <br />
            customers who{" "}
            <span className="italic text-outline-2">
              matter.
            </span>
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
              stroke="#C3FF00"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[750px] mx-auto">
            We use data-driven strategies to increase your visibility, drive
            organic traffic, and convert clicks into clients.
          </p>
        </div>
      </section>

      {/* SEO Strategy Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            <div className="md:w-1/2">
              <p className="text-[#C3FF00] text-sm uppercase tracking-widest mb-4">
                SEO Strategy
              </p>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
                On-Page &{" "}
                <span className="italic text-outline-15">
                  Off-Page
                </span>
                <br />
                Optimisation
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                The goal of on-page and off-page optimisation is to generate a
                theme consistent with your targeted keywords. The search engine
                is a robot, not a human... and therefore, you must follow our
                proven process to educate the robot so that it brings your
                website up when your potential customers are searching for
                specific business-related keywords.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[80px] md:text-[100px] font-bold leading-none text-[#C3FF00]">
                    100%
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Results Driven Approach
                </h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  Before beginning search engine optimisation (SEO), it is
                  important to understand the process involved in an effective
                  SEO campaign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we go to work - Process Steps */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16 mb-12">
            <div className="md:w-5/12 shrink-0">
              <p className="text-[#C3FF00] text-sm uppercase tracking-widest mb-4">
                How we go to work
              </p>
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
                Our{" "}
                <span className="italic text-outline-15">
                  process
                </span>
              </h2>
            </div>
          </div>
          <ScrollableCardRow desktopGridCols="md:grid-cols-4">
            <ProcessCard
              step={1}
              variant="purple"
              title="Analyse your website"
              description="We first analyse your website, followed by a step-by-step plan to have the website communicate keywords more effectively to search engines."
            />
            <ProcessCard
              step={2}
              variant="yellow"
              title={
                <>
                  <span className="text-xs font-normal uppercase tracking-widest block mb-2 text-black/50">
                    Priority
                  </span>
                  Research
                </>
              }
              description="Keyword density tells you how often a search term appears in a text in relation to the total number of words it contains."
            />
            <ProcessCard
              step={3}
              variant="cyan"
              title="Onsite Optimisation"
              description="Optimisation refers to all measures that can be taken directly within the website in order to improve its position in search rankings."
            />
            <ProcessCard
              step={4}
              variant="glass"
              title="Reporting & Analysis"
              description="Our SEO review consists of several factors like content, linking structure, social media efforts, and trust on the internet."
            />
          </ScrollableCardRow>
        </div>
      </section>

      {/* Link Building */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
                Link{" "}
                <span className="italic text-outline-15">
                  Building
                </span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                In the field of SEO, link building describes actions aimed at
                increasing the number and quality of inbound links to a webpage
                with the goal of increasing the search engine rankings of that
                page or website.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-[#C3FF00] text-4xl font-bold mb-2">
                    50+
                  </div>
                  <p className="text-white/60 text-sm">Quality Backlinks</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-[#e9d5ff] text-4xl font-bold mb-2">
                    90%
                  </div>
                  <p className="text-white/60 text-sm">Domain Authority Growth</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-[#67e8f9] text-4xl font-bold mb-2">
                    3x
                  </div>
                  <p className="text-white/60 text-sm">Organic Traffic Boost</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-white text-4xl font-bold mb-2">
                    24/7
                  </div>
                  <p className="text-white/60 text-sm">Monitoring & Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C3FF00] text-sm uppercase tracking-widest mb-4">
              Choose your SEO Pack
            </p>
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white">
              Transparent{" "}
              <span className="italic text-outline-15">
                pricing
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Local Kickstart */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col">
              <p className="text-white/50 text-sm uppercase tracking-wider mb-2">
                25h min.
              </p>
              <h3 className="text-2xl font-bold text-white mb-2">
                Local Kickstart
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-white">R3,499</span>
                <span className="text-white/50 text-sm">/ once-off</span>
              </div>
              <p className="text-white/60 text-sm mb-8">
                Essential setup for local businesses to get found on Google Maps
                and local search.
              </p>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-4">
                Best for: Small local shops, plumbers, salons
              </p>
              <ul className="flex flex-col gap-3 mb-8 list-none pl-0">
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  Google Business Profile Optimization
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  Technical Site Audit & Fixes
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  Local Keyword Research
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  Meta Title & Description Setup
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  Google Analytics & Console Setup
                </li>
              </ul>
              <Link
                to="/contact"
                className="mt-auto inline-flex items-center justify-center text-sm font-semibold bg-white/10 text-white pl-6 pr-2 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                Get started
                <span className="ml-3 w-8 h-8 bg-[#C3FF00] rounded-full flex items-center justify-center">
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

            {/* Growth Engine - Most Popular */}
            <div className="relative bg-white/5 backdrop-blur-sm border-2 border-[#C3FF00] rounded-2xl p-8 flex flex-col">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C3FF00] text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                Most Popular
              </span>
              <p className="text-white/50 text-sm uppercase tracking-wider mb-2">
                60h min.
              </p>
              <h3 className="text-2xl font-bold text-white mb-2">
                Growth Engine
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-[#C3FF00]">
                  R4,500
                </span>
                <span className="text-white/50 text-sm">/ per month</span>
              </div>
              <p className="text-white/60 text-sm mb-8">
                A monthly campaign designed to increase rankings and organic
                traffic consistently.
              </p>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-4">
                Best for: Growing businesses, service providers
              </p>
              <ul className="flex flex-col gap-3 mb-8 list-none pl-0">
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  Everything in Kickstart
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  2x High-Quality Blog Posts/mo
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  On-Page Content Optimization
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  Monthly Backlink Strategy
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  Keyword Tracking Dashboard
                </li>
              </ul>
              <Link
                to="/contact"
                className="mt-auto inline-flex items-center justify-center text-sm font-semibold bg-[#C3FF00] text-black pl-6 pr-2 py-3 rounded-full hover:bg-[#c4ef00] transition-colors"
              >
                Get started
                <span className="ml-3 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
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

            {/* Market Leader */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col">
              <p className="text-white/50 text-sm uppercase tracking-wider mb-2">
                100h min.
              </p>
              <h3 className="text-2xl font-bold text-white mb-2">
                Market Leader
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-white">R8,500</span>
                <span className="text-white/50 text-sm">/ per month</span>
              </div>
              <p className="text-white/60 text-sm mb-8">
                Aggressive SEO strategy to dominate high-competition keywords
                and industry leaders.
              </p>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-4">
                Best for: E-commerce, National brands
              </p>
              <ul className="flex flex-col gap-3 mb-8 list-none pl-0">
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  4x High-Quality Blog Posts/mo
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  Advanced Content Strategy
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  High-Authority Link Building
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  Dedicated SEO Manager
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    className="w-5 h-5 text-[#C3FF00] shrink-0 mt-0.5"
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
                  Quarterly Strategy Review
                </li>
              </ul>
              <Link
                to="/contact"
                className="mt-auto inline-flex items-center justify-center text-sm font-semibold bg-white/10 text-white pl-6 pr-2 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                Get started
                <span className="ml-3 w-8 h-8 bg-[#C3FF00] rounded-full flex items-center justify-center">
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
      </section>
    <FAQ items={seoFAQ} title="SEO — FAQ" />
      {/* CTA Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16">
        
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
              <div className="md:w-7/12">
                <p className="text-[#C3FF00] text-sm uppercase tracking-widest mb-4">
                  Available for new projects
                </p>
                <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
                  Let's scale your
                  <br />
                  <span className="italic text-outline-15">
                    business.
                  </span>
                </h2>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  Contact us for a FREE quote! Our expert team is ready to help
                  you reach the first page of search results.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm md:text-base font-semibold text-black bg-[#C3FF00] pl-6 pr-2 py-3 rounded-full hover:bg-[#c4ef00] transition-colors"
                >
                  Get a free audit
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
              <div className="md:w-5/12">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-full bg-[#C3FF00] flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-black"
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
                    </div>
                    <span className="text-white/80 text-sm">
                      Free Website SEO Audit
                    </span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-full bg-[#e9d5ff] flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-black"
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
                    </div>
                    <span className="text-white/80 text-sm">
                      Keyword Research Strategy
                    </span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-full bg-[#67e8f9] flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-black"
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
                    </div>
                    <span className="text-white/80 text-sm">
                      Performance Monitoring
                    </span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-full bg-[#C3FF00] flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-black"
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
                    </div>
                    <span className="text-white/80 text-sm">
                      Monthly SEO Reporting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
