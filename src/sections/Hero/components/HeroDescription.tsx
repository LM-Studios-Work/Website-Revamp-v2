import { Link } from "react-router-dom";

export const HeroDescription = () => {
  return (
    <div className="max-w-2xl mt-8">
      <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10">
        We craft aesthetic, functional, and user-centric websites that help
        businesses thrive in the digital world.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center text-sm md:text-base font-semibold bg-white/10 backdrop-blur-sm text-white pl-6 pr-2 py-2 rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
      >
        Ask for a quote
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
  );
};
