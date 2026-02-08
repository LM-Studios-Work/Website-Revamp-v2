import { Link } from "react-router-dom";
import { useState } from "react";
import { ScrollableCardRow } from "../components/ScrollableCardRow";
import { FAQ } from "@/sections/FAQ";
import { appDevelopmentFAQ } from "@/sections/FAQ/constants";

export const AppPage = () => {
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
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-white mb-8">
            Mobile &amp; Web Applications
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
              stroke="#d4ff00"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            From concept to launch, we build high-performance mobile and web
            applications that engage users and drive business growth.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white text-center mb-16">
            App Development
          </h2>
          <div className="overflow-hidden">
            <div className="flex whitespace-nowrap gap-6 animate-marquee">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-6">
                  <div className="shrink-0 w-[46%] md:w-1/4 backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#d4ff00] mb-3">
                      <svg className="w-10 h-10 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">React Native</h3>
                    <p className="text-sm text-white/50">Cross-platform mobile</p>
                  </div>

                  <div className="shrink-0 w-[46%] md:w-1/4 backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#e9d5ff] mb-3">
                      <svg className="w-10 h-10 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Swift / Kotlin</h3>
                    <p className="text-sm text-white/50">Native development</p>
                  </div>

                  <div className="shrink-0 w-[46%] md:w-1/4 backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#67e8f9] mb-3">
                      <svg className="w-10 h-10 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Next.js</h3>
                    <p className="text-sm text-white/50">Web applications</p>
                  </div>

                  <div className="shrink-0 w-[46%] md:w-1/4 backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#d4ff00] mb-3">
                      <svg className="w-10 h-10 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Node.js</h3>
                    <p className="text-sm text-white/50">Backend services</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Starter App Pack */}
      <section className="relative py-10 md:py-20">
        <div className="max-w-[1400px] w-full mx-auto px-4">
          <div className="flex flex-col md:flex-row items-stretch gap-0">
            <div className="w-full md:w-6/12 px-4 py-10 md:pr-8 md:py-20">
              <h2 className="text-[44px] md:text-[64px] font-semibold leading-tight mb-10">
                Starter App
                <span className="text-xs md:text-base font-thin inline-block text-center whitespace-nowrap align-middle border-2 border-purple-300 ml-4 px-4 py-2 rounded-full">
                  4-6 weeks
                </span>
                <br />
                <span className="text-3xl md:text-[40px]">
                  Essential mobile presence for your business
                </span>
              </h2>
              <p className="mb-8 text-white/80 leading-relaxed">
                A simple mobile app with essential features for startups and
                small businesses. Our <strong className="font-semibold text-white">Starter App</strong> package
                delivers a clean, functional app on a{" "}
                <strong className="font-semibold text-white">single platform (iOS or Android)</strong> with
                up to 5 core screens, basic authentication, push notifications,
                and app store submission.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl md:text-5xl font-bold text-[#d4ff00]">R15,000</span>
                <span className="text-white/50">/ once-off</span>
              </div>
              <Link
                to="/contact"
                className="text-sm md:text-base font-semibold bg-[#8b5cf6] inline-flex items-center text-center border-2 border-[#8b5cf6] pl-6 pr-2 py-2 rounded-full hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-colors"
              >
                Get started
                <span className="relative bg-white/10 h-[30px] w-[30px] md:h-[50px] md:w-[50px] -rotate-45 ml-2.5 p-2 md:p-4 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="w-full md:w-6/12 px-4 py-2 md:py-4">
              <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                  alt="Mobile app on smartphone"
                  className="absolute h-full max-w-full object-cover w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business App Pack */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                  alt="Business app development"
                  className="absolute h-full w-full object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="mb-6">
                <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                  <span className="italic text-outline-2">
                    Business App
                  </span>
                  <span className="inline-block ml-4 text-base md:text-lg font-normal border-2 border-[#67e8f9] text-[#67e8f9] px-4 py-2 rounded-full">
                    8-12 weeks
                  </span>
                </h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                Cross-platform app for growing businesses
              </h3>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Our{" "}
                <strong className="font-semibold text-white">most popular package</strong>{" "}
                delivers a cross-platform app built with React Native for{" "}
                <strong className="font-semibold text-white">iOS &amp; Android</strong>,
                featuring up to 15 screens, user profiles, dashboards, payment
                integration, an admin panel, and API integrations.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl md:text-5xl font-bold text-[#d4ff00]">R35,000</span>
                <span className="text-white/50">/ once-off</span>
              </div>
              <span className="inline-block bg-[#d4ff00] text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                Most Popular
              </span>
              <div>
                <Link
                  to="/contact"
                  className="text-sm md:text-base font-semibold bg-[#8b5cf6] inline-flex items-center text-center border-2 border-[#8b5cf6] pl-6 pr-2 py-2 rounded-full hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-colors"
                >
                  Get started
                  <span className="relative bg-white/10 h-[30px] w-[30px] md:h-[50px] md:w-[50px] -rotate-45 ml-2.5 p-2 md:p-4 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solution */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-10 md:p-16">
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                  Enterprise{" "}
                  <span className="italic text-outline-2">
                    Solution
                  </span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6">
                  Fully custom development for complex requirements
                </h3>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  Native iOS &amp; Android apps with unlimited screens and features,{" "}
                  <strong className="font-semibold text-white">
                    custom backend development
                  </strong>
                  , third-party integrations, a dedicated project manager, and 12
                  months of support &amp; maintenance.
                </p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl md:text-5xl font-bold text-[#d4ff00]">Custom</span>
                  <span className="text-white/50">/ once-off</span>
                </div>
                <Link
                  to="/contact"
                  className="text-sm md:text-base font-semibold text-white bg-white/10 backdrop-blur-sm inline-flex items-center pl-6 pr-2 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Request a quote
                  <span className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-[#d4ff00] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-black -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="md:w-1/2">
                <h4 className="text-sm uppercase tracking-wider text-white/40 mb-6">
                  Everything included
                </h4>
                <ul className="flex flex-col gap-4">
                  {[
                    "Native iOS & Android",
                    "Unlimited screens & features",
                    "Custom backend development",
                    "Third-party integrations",
                    "Dedicated project manager",
                    "12 months support & maintenance",
                    "Delivery: 12+ weeks",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <span className="w-5 h-5 rounded-full bg-[#d4ff00]/20 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-[#d4ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
            <div className="md:w-5/12 shrink-0">
                <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                Our{" "}
                <span className="italic text-outline-15">
                  process
                </span>
                </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                A proven development workflow that delivers quality apps on time
                and within budget.
              </p>
            </div>
            <div className="md:w-7/12">
              <ScrollableCardRow desktopGridCols="md:grid-cols-2">
                <div className="bg-[#e9d5ff] text-black p-8 rounded-2xl h-full">
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-sm font-semibold mb-5">
                    1
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    Discovery
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80">
                    We analyse your requirements, target audience, and define the
                    app's core features and user flows.
                  </p>
                </div>
                <div className="bg-[#d4ff00] text-black p-8 rounded-2xl h-full">
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-sm font-semibold mb-5">
                    2
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    UI/UX Design
                    <span className="text-xs font-normal inline-block text-center whitespace-nowrap align-middle border border-black/30 ml-2 px-2.5 py-1 rounded-full">
                      Critical
                    </span>
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80">
                    We create wireframes and high-fidelity designs that
                    prioritise user experience and brand consistency.
                  </p>
                </div>
                <div className="bg-[#67e8f9] text-black p-8 rounded-2xl h-full">
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-sm font-semibold mb-5">
                    3
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    Development
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80">
                    Our developers build your app using modern frameworks,
                    ensuring clean code and optimal performance.
                  </p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 text-white p-8 rounded-2xl h-full">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold mb-5">
                    4
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    Testing &amp; Launch
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    Rigorous QA testing across devices, followed by app store
                    submission and launch support.
                  </p>
                </div>
              </ScrollableCardRow>
            </div>
          </div>
        </div>
      </section>

      {/* Your app is in good hands */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="relative mb-12 md:mb-20">
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-3">
              Your app is in
              <br />
              <span className="italic text-outline-2">
                good hands
              </span>
            </h2>
          </div>
          <ScrollableCardRow desktopGridCols="md:grid-cols-3">
            <div className="bg-[#e9d5ff] text-black p-8 rounded-2xl h-full">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-base font-semibold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-4">
                Experienced developers
              </h3>
              <p className="text-base leading-relaxed text-black/80">
                We have senior developers skilled in React Native, Swift, and
                Kotlin ready to build your app.
              </p>
            </div>
            <div className="bg-[#d4ff00] text-black p-8 rounded-2xl h-full">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-base font-semibold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-4">
                Full-stack capability
              </h3>
              <p className="text-base leading-relaxed text-black/80">
                From frontend interfaces to backend APIs, we handle the entire
                stack to deliver a seamless product.
              </p>
            </div>
            <div className="bg-[#67e8f9] text-black p-8 rounded-2xl h-full">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-base font-semibold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-4">
                Ongoing support
              </h3>
              <p className="text-base leading-relaxed text-black/80">
                Every package includes months of post-launch support to keep
                your app running smoothly.
              </p>
            </div>
          </ScrollableCardRow>
        </div>
      </section>

      {/* CTA Section */}
      <FAQ items={appDevelopmentFAQ} title="App Development — FAQ" />
      <section className="relative py-10 md:py-20">
        <div className="max-w-[1400px] w-full mx-auto px-4">
          <div className="relative flex flex-col break-words overflow-hidden rounded-2xl">
            <div className="backdrop-blur-sm bg-white/10 grow break-words p-10 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left md:max-w-[60%]">
                  <h2 className="text-3xl md:text-[50px] font-bold leading-tight mb-6">
                    {"Let's build your next app."}
                  </h2>
                  <p className="text-white/80 mb-0">
                    Ready to bring your app idea to life? Contact us for a free
                    consultation and project estimate.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <Link
                    to="/contact"
                    className="text-sm md:text-base font-semibold bg-zinc-600 inline-flex items-center text-center border-2 border-zinc-600 pl-4 md:pl-6 pr-2 py-2 rounded-full hover:bg-neutral-600 hover:border-zinc-700 transition-colors"
                  >
                    Contact us
                    <span className="relative bg-white/10 h-[30px] w-[30px] md:h-[50px] md:w-[50px] -rotate-45 ml-2.5 p-2 md:p-4 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
