import React from "react";

export interface ProcessCardProps {
  step: number;
  title: React.ReactNode;
  description: string;
  variant: "purple" | "yellow" | "cyan" | "glass";
  customBadge?: React.ReactNode;
  note?: React.ReactNode;
}

const VARIANT_STYLES = {
  purple: {
    container: "bg-[#d5bff0] text-black",
    circle: "bg-black/10",
    text: "text-black/80",
    descBg: "bg-black/5",
  },
  yellow: {
    container: "bg-[#e7fe56] text-black",
    circle: "bg-black/10",
    text: "text-black/80",
    descBg: "bg-black/5",
  },
  cyan: {
    container: "bg-[#72f5e3] text-black",
    circle: "bg-black/10",
    text: "text-black/80",
    descBg: "bg-black/5",
  },
  glass: {
    container: "bg-white/5 text-white border border-white/10",
    circle: "bg-white/10",
    text: "text-white/70",
    descBg: "bg-white/5",
  },
};

export const ProcessCard = ({
  step,
  title,
  description,
  variant,
  customBadge,
  note,
}: ProcessCardProps) => {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className={`relative ${styles.container} rounded-[24px] md:rounded-[32px] flex flex-col h-full min-h-0 md:min-h-[320px] overflow-hidden`}
    >
      {/* Note */}
      {note && note}

      {/* Top section: step number + title */}
      <div className="flex-1 p-6 md:p-8 pb-4 md:pb-5">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-semibold mb-5 md:mb-6 ${styles.circle}`}
        >
          {step}
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold font-obviously leading-tight">
          {title}
          {customBadge}
        </h3>
      </div>

      {/* Bottom section: description on distinct background */}
      <div className={`${styles.descBg} px-6 md:px-8 py-4 md:py-5`}>
        <p className={`text-sm md:text-base leading-relaxed font-medium ${styles.text}`}>
          {description}
        </p>
      </div>
    </div>
  );
};
