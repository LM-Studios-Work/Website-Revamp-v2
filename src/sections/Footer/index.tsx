import { FooterCTA } from "@/sections/Footer/components/FooterCTA";
import { FooterColumns } from "@/sections/Footer/components/FooterColumns";

export const Footer = () => {
  return (
    <footer className="relative box-border caret-transparent shrink-0">
      <div className="box-border caret-transparent px-0 md:px-10">
        <FooterColumns />
        <FooterCTA />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute box-border caret-transparent opacity-50 pointer-events-none w-[262.5px] z-[-3] right-0 bottom-0 md:w-[896px]"
        >
          <source
            src="/website_rogueone/static/src/videos/bottom.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </footer>
  );
};
