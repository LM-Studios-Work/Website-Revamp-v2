import { Link } from "react-router-dom";

export const LatestProjectsHeader = () => {
  return (
    <section className="relative z-10 pt-10 md:pt-20 px-6">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
          <h2 className="text-4xl md:text-[50px] font-bold leading-tight text-white mb-6 md:mb-0 text-balance">
            Latest projects
          </h2>
          <a
            href="/projects"
            className="text-sm font-normal bg-transparent box-border caret-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#e7fe56] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#e7fe56] hover:text-black transition-colors mt-2 md:mt-0"
          >
            See all projects
            <span className="relative text-sm font-normal bg-[#e7fe56] text-black box-border caret-transparent h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:text-base md:font-semibold md:h-[50px] md:w-[50px] md:p-[18.4px]">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
