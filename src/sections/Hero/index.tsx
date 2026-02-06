
import { HeroDescription } from "@/sections/Hero/components/HeroDescription";
export const Hero = () => {
  return (
    <section className="relative box-border caret-transparent flex flex-col justify-around min-h-[1000px] pt-64 pb-14 md:pb-28">
      <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="relative box-border caret-transparent shrink-0 max-w-full w-full ml-0 px-[15px] md:w-9/12 md:ml-[8.33333%]">
    
          </div>
          <HeroDescription />
        </div>
      </div>
    </section>
  );
};

