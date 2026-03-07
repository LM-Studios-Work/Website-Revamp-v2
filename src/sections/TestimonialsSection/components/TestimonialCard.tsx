import { Star } from "@phosphor-icons/react";

export type TestimonialCardProps = {
  name: string;
  title: string;
  testimonial: string;
  rating?: number;
  className?: string;
  index?: number;
  isVisible?: boolean;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  const staggerClass =
    props.index !== undefined
      ? `anim-stagger-${Math.min(props.index + 1, 3)}`
      : "";

  const stars = props.rating ?? 5;

  return (
    <div
      className={`w-full px-3 py-2 md:w-1/2 lg:w-1/4 md:py-3
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
        }`}
    >
      <div className="bg-white/5 backdrop-blur-sm flex flex-col h-full overflow-hidden rounded-2xl border border-white/5 md:hover:border-white/10 md:hover:bg-white/[0.07] transition-all duration-300 group">
        <div className="flex flex-col pt-6 px-6 gap-1">
          <span className="text-lg font-semibold text-white">{props.name}</span>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                weight={i < stars ? "fill" : "regular"}
                size={14}
                style={{ color: i < stars ? "#e7fe56" : "rgba(255,255,255,0.2)" }}
              />
            ))}
          </div>
          <span className="text-sm text-white/50">{props.title}</span>
        </div>
        <div className="grow p-6">
          <p className="text-white/70 text-sm leading-relaxed">
            {props.testimonial}
          </p>
        </div>
      </div>
    </div>
  );
};
