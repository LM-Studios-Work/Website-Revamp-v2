export type TestimonialCardProps = {
  imageUrl: string;
  name: string;
  title: string;
  testimonial: string;
  className?: string;
  index?: number;
  isVisible?: boolean;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  // Use CSS-based stagger classes instead of inline delays
  const staggerClass =
    props.index !== undefined
      ? `anim-stagger-${Math.min(props.index + 1, 3)}`
      : "";

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
        <div className="flex flex-col pt-6 px-6">
          <span className="text-lg font-semibold text-white">{props.name}</span>
          <span className="text-sm text-white/60">{props.title}</span>
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
