"use client";
import Link from "next/link";

export type ServiceItemProps = {
  href: string;
  number: string;
  title: string;
  index?: number;
  isVisible?: boolean;
};

export const ServiceItem = (props: ServiceItemProps) => {
  // Use CSS-based stagger classes instead of inline delays
  const staggerClass =
    props.index !== undefined
      ? `anim-stagger-${Math.min(props.index + 1, 3)}`
      : "";

  return (
    <Link href={props.href}
      className={`group block w-full py-8 md:py-12 px-6 
        md:hover:bg-white/5 md:hover:translate-x-2 
        transition-all ease-out
        duration-300 md:duration-500
        ${staggerClass}
        ${
          props.isVisible !== undefined
            ? props.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 md:translate-y-6"
            : "opacity-100 translate-y-0"
        }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-12">
          <span className="text-lime text-base md:text-xl font-semibold md:group-hover:scale-110 transition-transform duration-300">
            {props.number}
          </span>
          <h3 className="text-white text-2xl md:text-[42px] font-semibold leading-tight">
            {props.title}
          </h3>
        </div>
        <span className="w-8 h-8 md:w-12 md:h-12 bg-lime rounded-full flex items-center justify-center shrink-0 md:group-hover:scale-110 md:group-hover:rotate-45 transition-all duration-300">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};
