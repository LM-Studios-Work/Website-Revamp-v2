export type ServicesMarqueeProps = {
  variant: string;
  primaryText: string;
  secondaryText: string;
};

export const ServicesMarquee = (props: ServicesMarqueeProps) => {
  return (
    <section
      className={`relative w-full overflow-hidden ${props.variant}`}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-[60px] md:text-[120px] font-bold text-white uppercase leading-none px-4">
              {props.primaryText}
            </span>
            <span className="text-[60px] md:text-[120px] font-bold uppercase leading-none px-4 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
              {props.secondaryText}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
