export type ProjectCardProps = {
  imageUrl: string;
  imageAlt: string;
  clockIconUrl: string;
  timeText: string;
  title: string;
  tags: Array<{
    text: string;
    className: string;
  }>;
  description: string;
  discoverMoreUrl: string;
  discoverMoreIconUrl: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] py-2 md:w-4/12 md:py-4">
      <div className="relative backdrop-blur-[3px] bg-white/10 box-border caret-transparent flex flex-col h-full break-words overflow-hidden rounded-[20px]">
        <div className="relative aspect-video bg-black/0 box-border caret-transparent break-words overflow-hidden rounded-t-[20px]">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="absolute box-border caret-transparent h-full object-cover opacity-80 break-words translate-x-[-50.0%] translate-y-[-50.0%] w-full rounded-t-[20px] left-2/4 top-2/4"
          />
        </div>
        <div className="box-border caret-transparent grow break-words p-8">
          <span className="text-teal-300 text-base box-border caret-transparent flex leading-[28.8px] break-words">
            <img
              src={props.clockIconUrl}
              alt="Clock icon"
              className="box-border caret-transparent max-w-full break-words mr-2"
            />
            {props.timeText}
          </span>
          <h3 className="text-[23.05px] font-medium box-border caret-transparent leading-[27.66px] break-words mt-2 mb-1 md:text-[28px] md:leading-[33.6px]">
            {props.title}
          </h3>
          <ul className="box-border caret-transparent list-none break-words mb-4 pl-0 py-4">
            {props.tags.map((tag, index) => (
              <li key={index} className={tag.className}>
                {tag.text}
              </li>
            ))}
          </ul>
          <p className="box-border caret-transparent opacity-75 break-words">
            {props.description}
          </p>
        </div>
        <div className="box-border caret-transparent break-words pb-8 px-8 rounded-b-[20px]">
          <a
            role="button"
            href={props.discoverMoreUrl}
            className="text-sm font-normal box-border caret-transparent leading-[25.2px] break-words md:text-base md:font-semibold md:leading-[28.8px] after:accent-auto after:box-border after:caret-transparent after:text-white after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[25.2px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:z-[1] after:border-separate after:inset-0 after:font-inter after:md:text-base after:md:font-semibold after:md:leading-[28.8px] hover:text-purple-400 hover:border-purple-400"
          >
            <img
              src={props.discoverMoreIconUrl}
              alt="Icon"
              className="relative text-sm font-normal bg-[#a1ff0a] box-border caret-transparent h-[30px] leading-[25.2px] -rotate-45 w-[30px] mr-2.5 p-[9.6px] rounded-[50%] top-0 md:text-base md:font-semibold md:h-[50px] md:leading-[28.8px] md:w-[50px] md:p-[18.4px]"
            />{" "}
            Discover more{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
