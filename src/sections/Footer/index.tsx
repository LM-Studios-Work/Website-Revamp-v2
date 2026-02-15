import { FooterCTA } from "@/sections/Footer/components/FooterCTA";
import { FooterColumns } from "@/sections/Footer/components/FooterColumns";

export const Footer = () => {
  return (
    <footer className="relative shrink-0">
      <div className="px-0 md:px-10">
        <section className="relative bg-white/5 backdrop-blur-sm z-[5] pt-12 px-8 rounded-t-[60px] md:pt-24 md:px-24">
          <div className="relative max-w-[1400px] w-full mx-auto">
            <FooterCTA />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 py-12 md:py-20">
              <FooterColumns />
            </div>
            <div className="text-center border-t border-white/10 py-8">
              <p className="text-sm text-white/40">LM Studios</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
