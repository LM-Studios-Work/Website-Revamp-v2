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
  const animationDelay = `${(props.index || 0) * 0.1}s`;
  
  return (
    <div 
      className={`w-full px-3 py-2 md:w-1/2 lg:w-1/4 md:py-3 transition-all duration-700 ease-out ${props.className ?? ""} ${
        props.isVisible !== undefined
          ? props.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
          : 'opacity-100 translate-y-0'
      }`}
      style={{ transitionDelay: props.isVisible ? animationDelay : '0s' }}
    >
      <div className="bg-white/5 backdrop-blur-sm flex flex-col h-full overflow-hidden rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.07] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group">
        <div className="flex items-center pt-6 px-6">
          <img
            src={props.imageUrl}
            alt={props.name}
            className="w-12 h-12 rounded-full object-cover mr-4 transition-transform group-hover:scale-110"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">
              {props.name}
            </span>
            <span className="text-sm text-white/60">
              {props.title}
            </span>
          </div>
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
