import { FooterCTA } from "@/sections/Footer/components/FooterCTA";
import { FooterColumns } from "@/sections/Footer/components/FooterColumns";

export const Footer = () => {
  return (
    <footer className="relative shrink-0">
      <div className="px-0 md:px-10">
        {/* FIX: Reduced pt-12/md:pt-24 to pt-8/md:pt-10 to cut the huge top gap */}
        <section className="relative bg-white/5 backdrop-blur-sm z-[5] pt-8 px-8 rounded-t-[60px] md:pt-10 md:px-24">
          <div className="relative max-w-[1400px] w-full mx-auto">
            <FooterCTA />
            
            {/* FIX: Reduced py-12/md:py-20 to py-6/md:py-8. Removed grid to fix squeezing. */}
            <div className="w-full border-t border-white/10 py-6 md:py-8">
              <FooterColumns />
            </div>

            {/* FIX: Reduced py-8 to py-6 for a tighter bottom */}
            <div className="text-center border-t border-white/10 py-6">
              <p className="text-sm text-white/40">LM Studios</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};