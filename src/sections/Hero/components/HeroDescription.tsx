import { Link } from "react-router-dom";

export const HeroDescription = () => {
  return (
    <div className="max-w-2xl mt-0 md:mt-4 text-left">
      {/* Your requested tagline */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
        Custom Web Applications for Modern Businesses.
      </h2>

      {/* Your requested description text */}
      <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
        We build secure, scalable web-based systems tailored to your
        organization from booking platforms and inventory management to admin
        dashboards and workflow automation. Professional solutions that digitize
        and streamline your operations.
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center text-sm md:text-base font-semibold bg-white/10 backdrop-blur-sm text-white pl-6 pr-2 py-2 rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 animate-[fadeInUp_0.8s_ease-out_0.8s_both]"
      >
        Ask for a quote
        <span className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-[#e7fe56] rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
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
  );
};
