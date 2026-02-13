export type ProjectCardProps = {
  imageUrl: string;
  imageAlt: string;
  timeText: string;
  title: string;
  tags: Array<{
    text: string;
    className: string;
  }>;
  description: string;
  discoverMoreUrl: string;
  index?: number;
  isVisible?: boolean;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const animationDelay = `${(props.index || 0) * 0.1}s`;
  
  return (
    <div 
      className={`shrink-0 w-full px-3 py-2 md:w-1/3 md:py-4 transition-all duration-700 ease-out ${
        props.isVisible !== undefined
          ? props.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
          : 'opacity-100 translate-y-0'
      }`}
      style={{ transitionDelay: props.isVisible ? animationDelay : '0s' }}
    >
      <div className="relative bg-white/5 backdrop-blur-sm flex flex-col h-full overflow-hidden rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.07] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="grow p-6">
          <div className="flex items-center text-teal-300 text-sm mb-2">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
              <path strokeLinecap="round" strokeWidth={1.5} d="M12 6v6l4 2" />
            </svg>
            {props.timeText}
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
            {props.title}
          </h3>
          <ul className="list-none pl-0 mb-4 flex flex-wrap gap-1.5">
            {props.tags.map((tag, index) => (
              <li key={index} className={tag.className}>
                {tag.text}
              </li>
            ))}
          </ul>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
            {props.description}
          </p>
        </div>
        <div className="px-6 pb-6">
          <a
            href={props.discoverMoreUrl}
            className="inline-flex items-center text-sm font-medium text-white hover:text-[#d4ff00] transition-colors"
          >
            <span className="w-8 h-8 bg-[#d4ff00] rounded-full flex items-center justify-center mr-2.5 transition-transform group-hover:rotate-45">
              <svg className="w-3.5 h-3.5 text-black -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            Discover more
          </a>
        </div>
      </div>
    </div>
  );
};
