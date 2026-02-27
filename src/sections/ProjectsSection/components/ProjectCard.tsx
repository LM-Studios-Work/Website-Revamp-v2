import Image from "next/image";

export type ProjectCardProps = {
  imageUrl: string;
  imageAlt: string;
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
  // Stagger class based on index (handled responsively in CSS)
  const staggerClass =
    props.index !== undefined
      ? `anim-stagger-${Math.min(props.index + 1, 3)}`
      : "";

  return (
    <div
      className={`shrink-0 w-full px-3 py-2 md:w-1/3 md:py-4 
        transition-all ease-out
        duration-300 md:duration-500 
        ${staggerClass}
        ${
          props.isVisible !== undefined
            ? props.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 md:translate-y-6"
            : "opacity-100 translate-y-0"
        }`}
    >
      <div
        className="relative bg-white/5 backdrop-blur-sm flex flex-col h-full overflow-hidden rounded-2xl border border-white/5 
          md:hover:border-white/10 md:hover:bg-white/[0.07] md:hover:scale-[1.02] md:hover:-translate-y-1 
          transition-all duration-300 group"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
          <Image
            src={props.imageUrl}
            alt={props.imageAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 md:group-hover:scale-105"
          />
        </div>
        <div className="grow p-6">
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
            <span className="w-8 h-8 bg-[#d4ff00] rounded-full flex items-center justify-center mr-2.5 transition-transform duration-300 md:group-hover:rotate-45">
              <svg
                className="w-3.5 h-3.5 text-black -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            Discover more
          </a>
        </div>
      </div>
    </div>
  );
};
