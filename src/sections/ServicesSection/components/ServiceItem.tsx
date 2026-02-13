import { Link } from "react-router-dom";

export type ServiceItemProps = {
  href: string;
  number: string;
  title: string;
};

export const ServiceItem = (props: ServiceItemProps) => {
  return (
    <Link
      to={props.href}
      className="group block w-full py-8 md:py-12 px-6 hover:bg-white/5 hover:translate-x-2 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-12">
          <span className="text-[#e7fe56] text-base md:text-xl font-semibold group-hover:scale-110 transition-transform">
            {props.number}
          </span>
          <h3 className="text-white text-2xl md:text-[42px] font-semibold leading-tight">
            {props.title}
          </h3>
        </div>
        <span className="w-8 h-8 md:w-12 md:h-12 bg-[#e7fe56] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
};
