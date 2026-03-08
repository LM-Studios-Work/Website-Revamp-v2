"use client";

import { Star, ArrowUpRight } from "@phosphor-icons/react";
import { useState } from "react";

export type TestimonialCardProps = {
  name: string;
  title: string;
  testimonial: string;
  rating?: number;
  className?: string;
  index?: number;
  isVisible?: boolean;
  url?: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const staggerClass =
    props.index !== undefined
      ? `anim-stagger-${Math.min(props.index + 1, 3)}`
      : "";

  const stars = props.rating ?? 5;
  
  // Limit testimonial text to ~100 characters for collapsed view
  const maxLength = 100;
  const isLong = props.testimonial.length > maxLength;
  const displayedText = isExpanded ? props.testimonial : props.testimonial.substring(0, maxLength);
  const truncatedText = isLong && !isExpanded ? displayedText + "..." : displayedText;

  const cardContent = (
    <div className="bg-white/5 backdrop-blur-sm flex flex-col h-full overflow-hidden rounded-2xl border border-white/5 md:hover:border-white/10 md:hover:bg-white/[0.07] transition-all duration-300 group aspect-square">
      <div className="flex flex-col pt-6 px-6 gap-1">
        <span className="text-lg font-semibold text-white">{props.name}</span>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              weight={i < stars ? "fill" : "regular"}
              size={14}
              style={{
                color: i < stars ? "#e7fe56" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
        <span className="text-sm text-white/50">{props.title}</span>
      </div>
      <div className="grow flex flex-col p-6">
        <p className="text-white/70 text-sm leading-relaxed flex-1">
          {truncatedText}
        </p>
        {isLong && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="mt-3 text-[#e7fe56] text-xs font-semibold hover:text-[#e7fe56]/80 transition-colors flex items-center gap-1"
          >
            {isExpanded ? "Show less" : "Read more"}
            {!isExpanded && <ArrowUpRight size={12} className="rotate-45" />}
          </button>
        )}
        {props.url && (
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-3 text-[#72f5e3] text-xs font-semibold hover:text-[#72f5e3]/80 transition-colors flex items-center gap-1"
          >
            View on Google
            <ArrowUpRight size={12} />
          </a>
        )}
      </div>
    </div>
  );

  const containerClasses = `w-full px-3 py-2 md:w-1/2 lg:w-1/4 md:py-3
    transition-all ease-out
    duration-300 md:duration-500
    ${staggerClass}
    ${props.className ?? ""}
    ${
      props.isVisible !== undefined
        ? props.isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 md:translate-y-6"
        : "opacity-100 translate-y-0"
    }`;

  if (props.url) {
    return (
      <div
        onClick={() => {
          if (isLong) {
            setIsExpanded(!isExpanded);
          }
        }}
        className={`${containerClasses} cursor-pointer`}
      >
        {cardContent}
      </div>
    );
  }

  return <div className={containerClasses}>{cardContent}</div>;
};
