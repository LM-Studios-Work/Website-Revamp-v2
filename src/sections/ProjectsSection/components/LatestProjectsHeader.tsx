import { Link } from "react-router-dom";

export const LatestProjectsHeader = () => {
  return (
    <section className="relative box-border caret-transparent z-10 pt-5 px-4 md:pt-10 md:px-0">
      <div
        className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-
[1140px] before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-white
before:table before:text-lg before:not-italic before:normal-nums before:font-light before:tracking-[normal]
before:leading-[32.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-start
before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accentauto after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-lg after:notitalic after:normal-nums after:font-light after:tracking-[normal] after:leading-[32.4px] after:list-outside
after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible
after:border-separate after:font-inter"
      >
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 w-full px-[15px] md:w-6/12">
            <h2 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-2 md:text-[50px] md:leading-[60px]">
              <span className="text-[31.4375px] box-border caret-transparent inline-block leading-[37.725px] textnowrap md:text-[50px] md:leading-[60px]">
                Latest
              </span>
              <span className="text-[31.4375px] box-border caret-transparent inline-block leading-[37.725px] textnowrap md:text-[50px] md:leading-[60px]"></span>
              <span className="text-[31.4375px] box-border caret-transparent inline-block leading-[37.725px] textnowrap md:text-[50px] md:leading-[60px]"></span>
              <span className="text-[31.4375px] box-border caret-transparent inline-block leading-[37.725px] textnowrap md:text-[50px] md:leading-[60px]">
                projects
              </span>
            </h2>
          </div>
          <div
            className="box-border caret-transparent flex shrink-0 justify-normal max-w-full min-h-6 w-full mt-8
px-[15px] md:justify-end md:w-6/12 md:mt-0"
          >
            <Link
              to="/projects"
              className="text-sm box-border caret-transparent block leading-[21px] text-center align-middle border-[#a1ff0a] pl-4 pr-2 py-2 rounded-[50px] border-2 border-solid font-semibold md:text-base md:leading-6 md:pl-6 hover:text-neutral-900 hover:bg-[#a1ff0a]"
            >
              See all projects{" "}
              <img
                src="https://c.animaapp.com/mlaz3dsraozDAl/assets/icon-2.svg"
                alt="Icon"
                className="relative text-sm font-normal bg-[#a1ff0a] box-border caret-transparent h-[30px] leading-[21px]
-rotate-45 w-[30px] ml-2.5 p-[9.6px] rounded-[50%] top-0 md:text-base md:font-semibold md:h-[50px]
md:leading-6 md:w-[50px] md:p-[18.4px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
