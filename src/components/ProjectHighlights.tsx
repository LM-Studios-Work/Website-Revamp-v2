import React from "react";
import { IconProps } from "@phosphor-icons/react";

export type ProjectHighlight = {
  number: string;
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
};

const STAGGER_4 = [
  "animate-[fadeInUp_0.8s_ease-out_0.2s_both]",
  "animate-[fadeInUp_0.8s_ease-out_0.4s_both]",
  "animate-[fadeInUp_0.8s_ease-out_0.6s_both]",
  "animate-[fadeInUp_0.8s_ease-out_0.8s_both]",
] as const;

interface ProjectHighlightsProps {
  highlights: ProjectHighlight[];
  isVisible: boolean;
}

export const ProjectHighlights: React.FC<ProjectHighlightsProps> = ({ highlights, isVisible }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
      {highlights.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className={`p-8 md:p-10 bg-[#0a0a0a] transition-colors duration-300 hover:bg-white/[0.03] opacity-0 ${
              isVisible ? STAGGER_4[idx % STAGGER_4.length] : ""
            }`}
          >
            <div className="flex items-start gap-5 mb-5">
              <span className="text-[11px] font-bold tracking-widest text-[#e7fe56]/50 mt-1 shrink-0">
                {item.number}
              </span>
              <div className="w-10 h-10 rounded-lg bg-[#e7fe56]/10 border border-[#e7fe56]/15 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-[#e7fe56]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
              {item.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
