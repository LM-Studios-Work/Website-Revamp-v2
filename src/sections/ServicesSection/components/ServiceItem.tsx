export type ServiceItemProps = {
  href: string;
  number: string;
  title: string;
  iconUrl: string;
  linkTitle?: string;
};

export const ServiceItem = (props: ServiceItemProps) => {
  return (
    <a
      href={props.href}
      className="text-purple-300 box-border caret-transparent block shrink-0 max-w-full w-full py-12 hover:text-purple-400 hover:bg-white/10 hover:border-purple-400"
      title={props.linkTitle}
    >
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-[30px] md:max-w-[1140px] before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-purple-300 before:table before:text-lg before:not-italic before:normal-nums before:font-light before:tracking-[normal] before:leading-[32.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-purple-300 after:table after:text-lg after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[32.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
        <div className="items-center box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 w-full px-[15px] md:w-[16.6667%]">
            <span className="text-[#a1ff0a] text-xl font-semibold box-border caret-transparent flex leading-9 mb-4 md:mb-0">
              {props.number}
            </span>
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 w-full px-[15px] md:w-[58.3333%]">
            <h3 className="text-white text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-2 md:text-[50px] md:leading-[60px]">
              {props.title}
            </h3>
          </div>
          <div className="text-white box-border caret-transparent flex shrink-0 justify-normal max-w-full min-h-6 w-full px-[15px] md:justify-end md:w-3/12">
            <img
              src={props.iconUrl}
              alt="Icon"
              className="relative bg-[#a1ff0a] box-border caret-transparent h-[30px] w-[30px] mt-4 p-[9.6px] rounded-[50%] top-0 md:h-[50px] md:w-[50px] md:mt-0 md:p-[18.4px]"
            />
          </div>
        </div>
      </div>
    </a>
  );
};
