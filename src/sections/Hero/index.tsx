import { Link } from "react-router-dom";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";

export const Hero = () => {
  return (
    <section className="relative flex flex-col justify-end min-h-screen pt-40 pb-16 md:pb-28 overflow-hidden">
      <HeroVideoOverlay />
      <div className="relative z-10 px-6 max-w-[1400px] w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Left: main heading */}
          <div className="md:max-w-[65%]">
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.05] text-white">
              We design websites
              <br />
              that{" "}
              <span className="italic text-outline-15">
                drive results
              </span>
            </h1>
          </div>

          {/* Right: subtitle + CTA */}
          <div className="md:max-w-sm flex flex-col gap-6 pb-2">
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              LM Studios crafts stunning, high-performance websites and apps tailored to your brand.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center self-start text-sm md:text-base font-semibold text-white bg-white/10 backdrop-blur-sm pl-6 pr-2 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Start your project
              <span className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-[#e7fe56] rounded-full flex items-center justify-center">
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
  );
};
