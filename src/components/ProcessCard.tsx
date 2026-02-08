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
    container: "bg-[#e9d5ff] text-black",
    circle: "bg-black/10 text-black",
    text: "text-black/80",
  },
  yellow: {
    container: "bg-[#d4ff00] text-black",
    circle: "bg-black/10 text-black",
    text: "text-black/80",
  },
  cyan: {
    container: "bg-[#67e8f9] text-black",
    circle: "bg-black/10 text-black",
    text: "text-black/80",
  },
  glass: {
    container:
      "bg-white/5 backdrop-blur-sm border border-white/10 text-white",
    circle: "bg-white/10 text-white",
    text: "text-white/70",
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
      className={`relative ${styles.container} p-6 md:p-8 rounded-[24px] md:rounded-[32px] flex flex-col justify-between h-full min-h-0 md:min-h-[320px]`}
    >
      {/* Note */}
      {note && note}

      <div>
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-semibold mb-5 md:mb-6 ${styles.circle}`}
        >
          {step}
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold font-obviously leading-tight mb-3 md:mb-4">
          {title}
          {customBadge}
        </h3>
        <p className={`text-sm md:text-base leading-relaxed font-medium ${styles.text}`}>
          {description}
        </p>
      </div>
    </div>
  );
};
