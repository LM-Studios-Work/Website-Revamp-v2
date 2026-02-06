export const HeroHeading = () => {
  return (
    <div className="mb-8">
      <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-white">
        We build your
        <br />
        website with
        <br />
        <span className="relative inline-block">
          LM Studios
          <svg
            className="absolute -bottom-2 left-0 w-full"
            viewBox="0 0 300 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M2 6C20 2 40 10 60 6C80 2 100 10 120 6C140 2 160 10 180 6C200 2 220 10 240 6C260 2 280 10 298 6"
              stroke="#d4ff00"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>
    </div>
  );
};
