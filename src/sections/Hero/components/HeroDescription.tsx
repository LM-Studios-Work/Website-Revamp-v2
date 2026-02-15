import { Link } from "react-router-dom";

export const HeroDescription = () => {
  return (
    <div className="max-w-2xl text-left">
     
      <p className="text-lg md:text-lg lg:text-xl text-white/70 leading-relaxed mb-6 md:mb-10 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
        We combine professional web design with powerful development to solve
        your organization's unique challenges. Whether it’s an automated
        inventory system or a sleek customer-facing platform, we build secure
        tools that simplify your operations.
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center text-sm md:text-base font-semibold bg-[#d5bff0] hover:bg-[#d5bff0]/90 text-black pl-6 pr-2 py-2 rounded-full transition-all duration-300 animate-[fadeInUp_0.8s_ease-out_0.8s_both] hover:scale-105"
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
    </div>
  );
};
