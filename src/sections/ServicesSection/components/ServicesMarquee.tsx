export type ServicesMarqueeProps = {
  variant: string;
  primaryText: string;
  secondaryText: string;
  reverse?: boolean;
};

/* Small decorative separator — purple squiggle */
const PurpleSquiggle = () => (
  <svg
    className="w-8 h-8 md:w-12 md:h-12 mx-4 md:mx-6 shrink-0"
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      d="M12 28c2-6 8-6 8-12s-6-6-6-12"
      stroke="#d5bff0"
      strokeWidth={2.5}
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M20 28c2-6 8-6 8-12s-6-6-6-12"
      stroke="#d5bff0"
      strokeWidth={2.5}
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

/* Small decorative separator — lime dot */
const LimeDot = () => (
  <svg
    className="w-4 h-4 md:w-5 md:h-5 mx-4 md:mx-6 shrink-0"
    viewBox="0 0 20 20"
    fill="none"
  >
    <circle cx="10" cy="10" r="6" fill="#e7fe56" />
  </svg>
);

export const ServicesMarquee = (props: ServicesMarqueeProps) => {
  return (
    <section
      className={`relative w-full overflow-hidden ${props.variant}`}
    >
      <div className={`flex whitespace-nowrap ${props.reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-[60px] md:text-[120px] font-bold text-white uppercase leading-none px-4">
              {props.primaryText}
            </span>
            <PurpleSquiggle />
            <span className="text-[60px] md:text-[120px] font-bold uppercase leading-none px-4 text-outline-weak">
              {props.secondaryText}
            </span>
            <LimeDot />
          </div>
        ))}
      </div>
    </section>
  );
};
