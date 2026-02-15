export const HeroHeading = () => {
  return (
    <div className="mb-8 md:mb-12 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
      <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight text-white">
        We build your
        <br />
        website with{' '}
        <span className="relative inline-block">
          Odoo
          <svg
            className="absolute left-0 -bottom-2 md:-bottom-4 w-full"
            viewBox="0 0 280 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M2 10C10 4 18 16 26 10C34 4 42 16 50 10C58 4 66 16 74 10C82 4 90 16 98 10C106 4 114 16 122 10C130 4 138 16 146 10C154 4 162 16 170 10C178 4 186 16 194 10C202 4 210 16 218 10C226 4 234 16 242 10C250 4 258 16 266 10C270 7 274 13 278 10"
              stroke="#e7fe56"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </h1>
    </div>
  );
};
