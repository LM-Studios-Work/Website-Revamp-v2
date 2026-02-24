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

            {/* NAP — Name, Address, Phone for local SEO */}
            <div className="border-t border-white/10 py-5">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm text-white/60">
                <span>LM Studios — Midrand, Gauteng, South Africa</span>
                <span aria-hidden="true" className="hidden md:inline">|</span>
                <a href="tel:+27814272624" className="hover:text-white/80 transition-colors">081 427 2624</a>
                <span aria-hidden="true" className="hidden md:inline">|</span>
                <a href="mailto:lm.studios.web@gmail.com" className="hover:text-white/80 transition-colors">lm.studios.web@gmail.com</a>
              </div>
            </div>

            {/* SEO Footer — Geo-targeted service keywords */}
            <div className="border-t border-white/10 py-5">
              <p className="text-xs text-white/55 leading-relaxed text-center flex flex-wrap justify-center gap-x-1 gap-y-1">
                <a href="/web-design-johannesburg" className="py-1 px-1 min-h-[44px] inline-flex items-center hover:text-white/80 transition-colors">Web Design Johannesburg</a>
                <span aria-hidden="true">|</span>
                <a href="/web-design-midrand" className="py-1 px-1 min-h-[44px] inline-flex items-center hover:text-white/80 transition-colors">Web Design Midrand</a>
                <span aria-hidden="true">|</span>
                <a href="/services/web-design" className="py-1 px-1 min-h-[44px] inline-flex items-center hover:text-white/80 transition-colors">Web Design Pretoria</a>
                <span aria-hidden="true">|</span>
                <a href="/services/web-design" className="py-1 px-1 min-h-[44px] inline-flex items-center hover:text-white/80 transition-colors">Professional Website Design South Africa</a>
                <span aria-hidden="true">|</span>
                <a href="/web-design-johannesburg" className="py-1 px-1 min-h-[44px] inline-flex items-center hover:text-white/80 transition-colors">Corporate Web Design Gauteng</a>
                <span aria-hidden="true">|</span>
                <a href="/services/web-design" className="py-1 px-1 min-h-[44px] inline-flex items-center hover:text-white/80 transition-colors">Event Website Builders</a>
                <span aria-hidden="true">|</span>
                <a href="/services/seo" className="py-1 px-1 min-h-[44px] inline-flex items-center hover:text-white/80 transition-colors">SEO Services South Africa</a>
                <span aria-hidden="true">|</span>
                <a href="/services/app-development" className="py-1 px-1 min-h-[44px] inline-flex items-center hover:text-white/80 transition-colors">Custom App Development</a>
                <span aria-hidden="true">|</span>
                <a href="/" className="py-1 px-1 min-h-[44px] inline-flex items-center hover:text-white/80 transition-colors">LM Studios Web Agency</a>
              </p>
            </div>

            {/* Copyright + Legal Links */}
            <div className="text-center border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
              <p className="text-sm text-white/60">LM Studios</p>
              <span aria-hidden="true" className="hidden md:inline text-white/30">|</span>
              <div className="flex items-center gap-4 text-xs text-white/55">
                <a href="/privacy-policy" className="py-1 min-h-[44px] inline-flex items-center hover:text-white/80 transition-colors">
                  Privacy Policy
                </a>
                <span aria-hidden="true" className="text-white/30">|</span>
                <a href="/terms-of-service" className="py-1 min-h-[44px] inline-flex items-center hover:text-white/80 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};