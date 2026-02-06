export const HeroHeading = () => {
  return (
    <div className="mb-8">
      <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-white">
        <span className="relative inline-block">
          LM Studios
          <svg
            className="absolute -bottom-1 left-0 w-full h-[14px]"
            viewBox="0 0 300 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M2 7C10 3 18 11 26 7C34 3 42 11 50 7C58 3 66 11 74 7C82 3 90 11 98 7C106 3 114 11 122 7C130 3 138 11 146 7C154 3 162 11 170 7C178 3 186 11 194 7C202 3 210 11 218 7C226 3 234 11 242 7C250 3 258 11 266 7C274 3 282 11 290 7C298 3"
              stroke="#d4ff00"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>
    </div>
  );
};
