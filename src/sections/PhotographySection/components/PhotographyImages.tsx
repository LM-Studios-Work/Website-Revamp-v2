import { PHOTOGRAPHY_IMAGES } from "../constants";

export const PhotographyImages = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
      {/* Left tall image */}
      <div className="h-full overflow-hidden rounded-[30px] md:rounded-[40px]">
        <img
          src={PHOTOGRAPHY_IMAGES[0].src}
          alt={PHOTOGRAPHY_IMAGES[0].alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Right stacked images */}
      <div className="grid grid-rows-2 gap-4 h-full">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[30px]">
          <img
            src={PHOTOGRAPHY_IMAGES[1].src}
            alt={PHOTOGRAPHY_IMAGES[1].alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Handwritten note */}
          <div className="absolute -top-16 -right-8 hidden md:block z-10 pointer-events-none">
            <span className="block -rotate-12 text-white font-caveat text-2xl font-bold whitespace-nowrap leading-tight">
              In Johannesburg and Gqeberha
              <br />
              only
            </span>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              className="absolute top-8 left-6 text-white"
            >
              <path
                d="M10 5C10 5 15 25 35 30"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 4"
                className="opacity-50"
              />
              <path
                d="M40.3807 33.5684C36.7029 33.7226 31.0664 35.5398 25.0487 34.2573C26.969 34.0954 33.2809 31.8617 32.7214 26.6974C32.1619 21.5332 23.3364 21.4925 21.6023 26.6974C20.4079 30.2828 24.3204 36.8532 24.3204 36.8532"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.5 37L28 41"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="overflow-hidden rounded-[20px] md:rounded-[30px]">
          <img
            src={PHOTOGRAPHY_IMAGES[2].src}
            alt={PHOTOGRAPHY_IMAGES[2].alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
