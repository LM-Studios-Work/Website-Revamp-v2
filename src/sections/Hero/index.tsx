
import { HeroHeading } from "@/sections/Hero/components/HeroHeading";
import { HeroDescription } from "@/sections/Hero/components/HeroDescription";

export const Hero = () => {
  return (
    <section className="relative flex flex-col justify-end min-h-screen pt-40 pb-16 md:pb-28">
      <div className="relative w-full max-w-[1200px] mx-auto px-6">
        <HeroHeading />
        <HeroDescription />
      </div>
    </section>
  );
};

