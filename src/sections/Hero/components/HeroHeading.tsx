export const HeroHeading = () => {
  return (
    <div className="mb-8">
      <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-white">
        <span className="relative inline-block">
          LM Studios
          <svg
            className="absolute -bottom-2 left-0 w-full h-[18px]"
            viewBox="0 0 400 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 9C0 9 10 2 25 2C40 2 45 16 60 16C75 16 80 2 95 2C110 2 115 16 130 16C145 16 150 2 165 2C180 2 185 16 200 16C215 16 220 2 235 2C250 2 255 16 270 16C285 16 290 2 305 2C320 2 325 16 340 16C355 16 360 2 375 2C390 2 400 9 400 9"
              stroke="#C3FF00"
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
