import React from "react";

type TechStackListProps = {
  items: string[];
  className?: string;
};

export const TechStackList = ({ items, className = "" }: TechStackListProps) => {
  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {items.map((tech) => (
        <span
          key={tech}
          className="text-sm font-medium px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-white/60 hover:border-[#e7fe56]/30 hover:text-[#e7fe56]/80 transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};
