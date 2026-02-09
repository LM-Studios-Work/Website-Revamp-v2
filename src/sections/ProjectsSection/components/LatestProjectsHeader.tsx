import { Link } from "react-router-dom";

export const LatestProjectsHeader = () => {
  return (
    <section className="relative z-10 pt-10 md:pt-20 px-6">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
          <h2 className="text-4xl md:text-[50px] font-bold leading-tight text-white mb-6 md:mb-0 text-balance">
            Latest projects
          </h2>
          <Link
            to="/projects"
            className="inline-flex items-center text-sm md:text-base font-semibold text-black border-2 border-[#e7fe56] pl-5 pr-2 py-2 rounded-full bg-[#e7fe56] hover:bg-[#e7fe56]/80 hover:text-black transition-all duration-300 mt-2 md:mt-0"
          >
            See all projects
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
    </section>
  );
};
