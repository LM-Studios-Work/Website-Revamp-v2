import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";
import { ParticleBackground } from "@/components/ParticleBackground";

export const ContactPage = () => {
  return (
    <>
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative z-10 min-h-[60vh] flex flex-col justify-center items-center pt-40 pb-8 px-6 overflow-hidden">
        <HeroVideoOverlay />
        <div className="relative z-30 max-w-[900px] w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Contact us
          </h1>
          {/* Wavy underline */}
          <svg
            className="mx-auto mb-8"
            width="160"
            height="10"
            viewBox="0 0 160 10"
            fill="none"
          >
            <path
              d="M0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5 T 110 5 T 120 5 T 130 5 T 140 5 T 150 5 L 160 5"
              stroke="#b4eb2c"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <p className="mt-4 mb-8 text-white/70 leading-relaxed max-w-3xl mx-auto">
            Use the form below to get in touch with us about your project or
            inquiry. Whether you have questions, need a quote, or want to
            discuss your ideas, we're here to help. The information you provide
            will help us understand your needs and serve as a starting point for
            our conversation. Please note that any details shared here are for
            initial contact purposes only and do not represent a binding
            agreement or formal proposal.
          </p>
        </div>
      </section>
{/* Contact Form Section */}
      <section className="relative z-10 py-8 md:py-14">
        <div className="relative max-w-none w-full mx-auto px-6 md:max-w-[900px]">
          <form
            action="https://formsubmit.co/lm.studios.web@gmail.com"
            method="POST"
            target="_blank"
            className="space-y-6 w-full"
          >
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-normal mb-2 text-white">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/60 rounded-md text-white shadow-inner placeholder-white/40 focus:outline-none focus:border-[#b4eb2c] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-normal mb-2 text-white">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/60 rounded-md text-white shadow-inner placeholder-white/40 focus:outline-none focus:border-[#b4eb2c] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Phone and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-normal mb-2 text-white">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+27"
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/60 rounded-md text-white shadow-inner placeholder-white/40 focus:outline-none focus:border-[#b4eb2c] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-normal mb-2 text-white">
                  Your Country *
                </label>
                <input
                  type="text"
                  name="country"
                  required
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/60 rounded-md text-white shadow-inner placeholder-white/40 focus:outline-none focus:border-[#b4eb2c] transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Company AND Checkbox */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-normal mb-2 text-white">
                  Your Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/60 rounded-md text-white shadow-inner placeholder-white/40 focus:outline-none focus:border-[#b4eb2c] transition-colors"
                />
              </div>
              
              {/* Checkbox Container */}
              <div className="flex items-center gap-3 pt-2 md:pt-7">
                <input
                  type="checkbox"
                  name="has_subscription"
                  value="yes"
                  id="subscription"
                  className="w-4 h-4 bg-white/5 border border-white/60 rounded-sm cursor-pointer accent-[#b4eb2c]"
                />
                <label
                  htmlFor="subscription"
                  className="text-sm text-white/60 cursor-pointer hover:text-white transition-colors leading-tight"
                >
                  Check this box if you have an active subscription with Odoo.
                </label>
              </div>
            </div>

            {/* Row 4: Subject */}
            <div>
              <label className="block text-sm font-normal mb-2 text-white">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-2.5 bg-white/5 border border-white/60 rounded-md text-white shadow-inner placeholder-white/40 focus:outline-none focus:border-[#b4eb2c] transition-colors"
              />
            </div>

            {/* Row 5: Question/Message */}
            <div>
              <label className="block text-sm font-normal mb-2 text-white">
                Your Question *
              </label>
              <textarea
                name="message"
                required
                placeholder="Please describe your website project or inquiry."
                rows={6}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/60 rounded-md text-white shadow-inner placeholder-white/40 focus:outline-none focus:border-[#b4eb2c] transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-start pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-4 px-8 py-3 bg-transparent border-2 border-[#b4eb2c] rounded-full font-medium text-white hover:bg-[#b4eb2c] hover:text-black transition-all duration-300"
              >
                Submit
                <span className="w-8 h-8 bg-[#b4eb2c] rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
