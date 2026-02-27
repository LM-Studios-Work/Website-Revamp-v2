import React from "react";

interface SectionLabelProps {
  number: string;
  text: string;
  className?: string;
}

export const SectionLabel = ({
  number,
  text,
  className = "pt-4 pb-4",
}: SectionLabelProps) => {
  return (
    <div className={`max-w-[1400px] mx-auto px-6 ${className}`}>
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          {number} / {text}
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>
    </div>
  );
};
