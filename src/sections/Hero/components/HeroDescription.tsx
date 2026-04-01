"use client";
import Link from "next/link";

export const HeroDescription = () => {
  return (
    <div className="max-w-2xl text-left">

      <p className="text-lg md:text-lg lg:text-xl text-white/70 leading-relaxed mb-4 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
        Stop losing clients to slower competitors. We build Next.js lead-generation engines that rank on Google, automate your WhatsApp enquiries, and load in under a second.
      </p>
      <p className="text-sm md:text-base text-white/40 italic mb-6 md:mb-10 animate-[fadeInUp_0.8s_ease-out_0.7s_both]">
        "The Very Best Web Design Midrand has to Offer."
      </p>

      <div className="flex flex-wrap items-center gap-3 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
        <Link href="/contact"
          className="inline-flex items-center text-sm md:text-base font-semibold bg-[#d5bff0] hover:bg-[#d5bff0]/90 text-black pl-6 pr-2 py-2 rounded-full transition-all duration-300 hover:scale-105"
        >
          Ask for a quote
          <span className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-[#d5bff0] rounded-full flex items-center justify-center transition-transform">
            <svg
              className="w-4 h-4 text-black"
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
        <Link href="/services"
          className="inline-flex items-center text-sm md:text-base font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
        >
          View our services
        </Link>
        <Link href="/about-us"
          className="inline-flex items-center text-sm md:text-base font-medium text-white/60 hover:text-white/90 underline underline-offset-4 decoration-white/20 hover:decoration-white/50 transition-all duration-300 px-2 py-2.5"
        >
          About us
        </Link>
      </div>
    </div>
  );
};
