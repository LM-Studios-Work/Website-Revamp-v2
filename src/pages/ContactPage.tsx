import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ContactPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.15);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.15);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#b4eb2c] selection:text-black">
      <ParticleBackground />

      {/* --- HERO SECTION: Full Screen Background --- */}
      <section ref={heroRef} className="relative z-10 flex flex-col justify-center min-h-[80vh] pt-40 pb-16 px-6 overflow-hidden">
        {/* The video now spans the full section width correctly */}
        <HeroVideoOverlay />
        
        {/* Content Container (Matches your project's max-width) */}
        <div className="relative z-30 max-w-[1200px] w-full mx-auto">
          <div className="max-w-[800px] animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-white mb-8 text-left">
              Contact us
            </h1>
            
            {/* Wavy underline: Using the exact SVG/Color from your WebDesignPage */}
            <svg
              className="mb-12 w-[200px] h-[18px]"
              viewBox="0 0 400 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 9C0 9 10 2 25 2C40 2 45 16 60 16C75 16 80 2 95 2C110 2 115 16 130 16C145 16 150 2 165 2C180 2 185 16 200 16C215 16 220 2 235 2C250 2 255 16 270 16C285 16 290 2 305 2C320 2 325 16 340 16C355 16 360 2 375 2C390 2 400 9 400 9"
                stroke="#b4eb2c"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed text-left">
              Use the form below to get in touch with us about your project or
              inquiry. Whether you have questions, need a quote, or want to
              discuss your ideas, we're here to help. The information you provide
              will help us understand your needs and serve as a starting point for
              our conversation. Please note that any details shared here are for
              initial contact purposes only and do not represent a binding
              agreement or formal proposal.
            </p>
          </div>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section ref={formRef} className="relative z-20 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <form
            action="https://formsubmit.co/lm.studios.web@gmail.com"
            method="POST"
            className="space-y-8 opacity-0"
            style={{
              animation: formVisible ? "fadeInUp 0.8s ease-out 0.2s both" : "none"
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Field: Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/40 rounded-lg focus:outline-none focus:border-[#b4eb2c] transition-all shadow-inner text-white"
                />
              </div>

              {/* Field: Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/40 rounded-lg focus:outline-none focus:border-[#b4eb2c] transition-all shadow-inner text-white"
                />
              </div>

              {/* Field: Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+27"
                  className="w-full px-4 py-3 bg-white/5 border border-white/40 rounded-lg focus:outline-none focus:border-[#b4eb2c] transition-all shadow-inner text-white"
                />
              </div>

              {/* Field: Country */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Country *</label>
                <input
                  type="text"
                  name="country"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/40 rounded-lg focus:outline-none focus:border-[#b4eb2c] transition-all shadow-inner text-white"
                />
              </div>

              {/* Field: Company */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Company</label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 bg-white/5 border border-white/40 rounded-lg focus:outline-none focus:border-[#b4eb2c] transition-all shadow-inner text-white"
                />
              </div>

              {/* Field: Checkbox (Vertical Alignment fix) */}
              <div className="flex items-start gap-3 pt-8">
                <input
                  type="checkbox"
                  id="subscription"
                  className="mt-1 w-4 h-4 bg-transparent border border-white/40 rounded cursor-pointer accent-[#b4eb2c]"
                />
                <label htmlFor="subscription" className="text-xs text-white/50 leading-tight">
                  Check this box if you have an active subscription with Odoo.
                </label>
              </div>
            </div>

            {/* Field: Subject */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject *</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/40 rounded-lg focus:outline-none focus:border-[#b4eb2c] transition-all shadow-inner text-white"
              />
            </div>

            {/* Field: Question (12 Rows) */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Question *</label>
              <textarea
                name="message"
                required
                placeholder="Please describe your website project or inquiry."
                rows={12}
                className="w-full px-4 py-4 bg-white/5 border border-white/40 rounded-lg focus:outline-none focus:border-[#b4eb2c] transition-all shadow-inner resize-none text-white"
              />
            </div>

            {/* Submit Button (Aligned Bottom-Right) */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="group flex items-center gap-3 bg-black border border-white/60 hover:border-[#b4eb2c] py-2 pl-6 pr-2 rounded-full transition-all"
              >
                <span className="font-medium">Submit</span>
                <div className="bg-[#b4eb2c] p-2 rounded-full group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>

      
    </div>
  );
};
