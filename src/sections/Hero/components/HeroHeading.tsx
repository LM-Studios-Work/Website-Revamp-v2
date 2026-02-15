export const HeroHeading = () => {
  return (
    <div className="mb-4 md:mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
      <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight text-white">
        We build your
        <br />
        website with{' '}
        <span className="relative inline-block">
          LM Studios
          <svg
            className="absolute left-0 -bottom-2 md:-bottom-4 w-full"
            viewBox="0 0 400 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 9C0 9 10 2 25 2C40 2 45 16 60 16C75 16 80 2 95 2C110 2 115 16 130 16C145 16 150 2 165 2C180 2 185 16 200 16C215 16 220 2 235 2C250 2 255 16 270 16C285 16 290 2 305 2C320 2 325 16 340 16C355 16 360 2 375 2C390 2 400 9 400 9"
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
