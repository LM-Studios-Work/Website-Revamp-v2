import { Link } from "react-router-dom";

export const HeroDescription = () => {
  return (
    <div className="max-w-2xl text-left">
      <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8 md:mb-12 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
        We craft aesthetic, functional, and user-centric websites that help
        businesses thrive in the digital world.
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center gap-2 text-sm md:text-base font-semibold bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 animate-[fadeInUp_0.8s_ease-out_0.8s_both] hover:scale-105"
      >
        Ask for a quote
        <svg
          className="w-4 h-4"
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
      </Link>
    </div>
  );
};
