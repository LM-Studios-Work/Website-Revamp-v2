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

            {/* SEO Footer — Geo-targeted service keywords */}
            <div className="border-t border-white/10 py-5">
              <p className="text-xs text-white/30 leading-relaxed text-center flex flex-wrap justify-center gap-x-2 gap-y-1">
                <a href="/services/web-design" className="hover:text-white/60 transition-colors">Web Design Johannesburg</a>
                <span aria-hidden="true">|</span>
                <a href="/services/web-design" className="hover:text-white/60 transition-colors">Web Designers in Pretoria</a>
                <span aria-hidden="true">|</span>
                <a href="/services/web-design" className="hover:text-white/60 transition-colors">Professional Website Design South Africa</a>
                <span aria-hidden="true">|</span>
                <a href="/services/web-design" className="hover:text-white/60 transition-colors">Corporate Web Design Gauteng</a>
                <span aria-hidden="true">|</span>
                <a href="/services/web-design" className="hover:text-white/60 transition-colors">Event Website Builders</a>
                <span aria-hidden="true">|</span>
                <a href="/services/seo" className="hover:text-white/60 transition-colors">SEO Services South Africa</a>
                <span aria-hidden="true">|</span>
                <a href="/services/app-development" className="hover:text-white/60 transition-colors">Custom App Development</a>
                <span aria-hidden="true">|</span>
                <a href="/" className="hover:text-white/60 transition-colors">LM Studios Web Agency</a>
              </p>
            </div>

            {/* Copyright */}
            <div className="text-center border-t border-white/10 py-6">
              <p className="text-sm text-white/40">LM Studios</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};