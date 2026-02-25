import { FooterCTA } from "@/sections/Footer/components/FooterCTA";
import { FooterColumns } from "@/sections/Footer/components/FooterColumns";

export const Footer = () => {
  return (
    <footer className="relative shrink-0">
      <div className="px-0 md:px-10">
        <section className="relative bg-white/5 backdrop-blur-sm z-[5] pt-8 px-8 rounded-t-[60px] md:pt-10 md:px-24">
          <div className="relative max-w-[1400px] w-full mx-auto">
            <FooterCTA />

            <div className="w-full border-t border-white/10 py-8 md:py-12">
              <FooterColumns />
            </div>

            {/* NAP — Name, Address, Phone */}
            <div className="border-t border-white/10 py-5 flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm text-white/50 font-sans">
              <span>LM Studios — Midrand, Gauteng, South Africa</span>
              <span aria-hidden="true" className="hidden md:inline text-white/20">|</span>
              <a href="tel:+27814272624" className="hover:text-white/80 transition-colors">081 427 2624</a>
              <span aria-hidden="true" className="hidden md:inline text-white/20">|</span>
              <a href="mailto:lm.studios.web@gmail.com" className="hover:text-white/80 transition-colors">lm.studios.web@gmail.com</a>
            </div>

            {/* Copyright + Legal */}
            <div className="border-t border-white/10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40 font-sans">
              <span>© {new Date().getFullYear()} LM Studios. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <a href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</a>
                <span aria-hidden="true" className="text-white/20">|</span>
                <a href="/terms-of-service" className="hover:text-white/70 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
