export type ServicesMarqueeProps = {
  variant: string;
  primaryText: string;
  secondaryText: string;
};

export const ServicesMarquee = (props: ServicesMarqueeProps) => {
  return (
    <section
      className={`relative box-border caret-transparent w-full overflow-hidden ${props.variant}`}
    >
      <h2 className="relative text-[58.125px] font-medium box-border caret-transparent flex leading-[69.75px] uppercase mb-2 md:text-[120px] md:leading-[144px]">
        <span className="text-[58.125px] box-border caret-transparent block leading-[69.75px] text-nowrap md:text-[120px] md:leading-[144px]">
          {props.primaryText}
        </span>
        <span className="text-transparent text-[58.125px] box-border block leading-[69.75px] text-nowrap md:text-[120px] md:leading-[144px]">
          {props.secondaryText}
        </span>
        <span className="text-[58.125px] box-border caret-transparent block leading-[69.75px] text-nowrap md:text-[120px] md:leading-[144px]">
          {props.primaryText}
        </span>
        <span className="text-transparent text-[58.125px] box-border block leading-[69.75px] text-nowrap md:text-[120px] md:leading-[144px]">
          {props.secondaryText}
        </span>
        <span className="text-[58.125px] box-border caret-transparent block leading-[69.75px] text-nowrap md:text-[120px] md:leading-[144px]">
          {props.primaryText}
        </span>
        <span className="text-transparent text-[58.125px] box-border block leading-[69.75px] text-nowrap md:text-[120px] md:leading-[144px]">
          {props.secondaryText}
        </span>
      </h2>
    </section>
  );
};
