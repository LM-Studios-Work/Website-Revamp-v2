import { PhotographyImages } from "./components/PhotographyImages";
import { PhotographyContent } from "./components/PhotographyContent";

export const PhotographySection = () => {
  return (
    <section id="photography" className="relative z-10 py-16 md:py-28 px-6">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <PhotographyImages />
          <PhotographyContent />
        </div>
      </div>
    </section>
  );
};
