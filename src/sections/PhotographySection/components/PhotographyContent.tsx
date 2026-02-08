import { Check } from "lucide-react";
import { PHOTOGRAPHY_FEATURES } from "../constants";

export const PhotographyContent = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-[44.4px] md:text-[64px] font-semibold leading-[53.28px] md:leading-[76.8px] font-obviously mb-4">
          <span className="italic text-outline-2">
            Photography
          </span>
          <span className="text-[12.8px] md:text-[16px] font-thin inline-block leading-[12.8px] md:leading-[16px] text-center text-nowrap align-middle border-white/30 ml-4 px-4 py-2 rounded-[800px] border-2 border-solid text-white" style={{ verticalAlign: 'middle' }}>
            10h min.
          </span>
        </h2>
      </div>

      <h3 className="text-[31.4375px] md:text-[40px] font-semibold leading-[37.725px] md:leading-[48px] font-obviously mb-6">
        Capture your brand
        <br />
        with vibrant photos
      </h3>

      <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
        Our package includes a dedicated photoshoot, expert editing, and
        high-quality image delivery to ensure your website looks polished and
        visually compelling.
      </p>

      <div className="space-y-5 mb-10">
        {PHOTOGRAPHY_FEATURES.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 group">
            <div className="w-8 h-8 rounded-full bg-[#72f5e3] flex items-center justify-center text-black shrink-0 group-hover:scale-110 transition-transform">
              <Check className="w-5 h-5" />
            </div>
            <span className="text-base md:text-lg text-white/80">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <a
        href="/contact"
        className="text-sm font-normal bg-[#654064] box-border caret-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#654064] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#654064] hover:border-[#654064] transition-colors"
      >
        Book a photoshoot
        <span className="relative text-sm font-normal bg-white/10 box-border caret-transparent h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:text-base md:font-semibold md:h-[50px] md:w-[50px] md:p-[18.4px]">
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
  );
};
