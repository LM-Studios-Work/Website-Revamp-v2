export const HeroHeading = () => {
  return (
    <div className="mb-4 md:mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both] mt-[10vh] md:mt-[15vh]">
      <h1 className="text-[2.2rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-white">
        High-Performance Websites
        <br />
        for Johannesburg{" "}
        <span className="relative inline-block">
          Businesses.
          <svg
            className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:-bottom-4 w-[105%] md:w-full h-[12px] md:h-[18px]"
            viewBox="0 0 220 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 6C0 6 6 1 14 1C22 1 25 11 34 11C43 11 46 1 54 1C62 1 65 11 74 11C83 11 86 1 94 1C102 1 105 11 114 11C123 11 126 1 134 1C142 1 145 11 154 11C163 11 166 1 174 1C182 1 185 11 194 11C203 11 206 1 214 1C218 1 220 6 220 6"
              stroke="#e7fe56"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </h1>
    </div>
  );
};
