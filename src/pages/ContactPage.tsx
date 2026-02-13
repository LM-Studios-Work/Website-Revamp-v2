import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";

export const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative box-border caret-transparent min-h-screen pt-40 pb-10 md:pb-20 overflow-hidden bg-[#1a1a1a]">
        <HeroVideoOverlay />
        <div className="relative z-30 box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[900px]">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Contact us</h1>
          {/* Wavy underline */}
          <svg className="mb-8" width="160" height="10" viewBox="0 0 160 10" fill="none">
            <path d="M0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5 T 110 5 T 120 5 T 130 5 T 140 5 T 150 5 L 160 5" stroke="#b4eb2c" strokeWidth="2" fill="none"/>
          </svg>
          <p className="box-border caret-transparent mt-6 mb-8 text-white/70 leading-relaxed max-w-3xl">
            Use the form below to get in touch with us about your project or inquiry. Whether you have questions, need a quote, or want to discuss your ideas, we're here to help. The information you provide will help us understand your needs and serve as a starting point for our conversation. Please note that any details shared here are for initial contact purposes only and do not represent a binding agreement or formal proposal.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative box-border caret-transparent py-10 md:py-20 bg-[#1a1a1a]">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[900px]">
          <form
            action="https://formsubmit.co/lm.studios.web@gmail.com"
            method="POST"
            className="box-border caret-transparent space-y-5"
          >
            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Contact Form Submission from LM Studios Website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-normal mb-2 text-white">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3.5 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white placeholder-white/30 focus:outline-none focus:border-[#b4eb2c] transition-colors"
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
                  className="w-full px-4 py-3.5 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white placeholder-white/30 focus:outline-none focus:border-[#b4eb2c] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Phone and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-normal mb-2 text-white">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+27"
                  className="w-full px-4 py-3.5 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white placeholder-white/30 focus:outline-none focus:border-[#b4eb2c] transition-colors"
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
                  className="w-full px-4 py-3.5 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white placeholder-white/30 focus:outline-none focus:border-[#b4eb2c] transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Company */}
            <div>
              <label className="block text-sm font-normal mb-2 text-white">
                Your Company
              </label>
              <input
                type="text"
                name="company"
                className="w-full px-4 py-3.5 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white placeholder-white/30 focus:outline-none focus:border-[#b4eb2c] transition-colors"
              />
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
                className="w-full px-4 py-3.5 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white placeholder-white/30 focus:outline-none focus:border-[#b4eb2c] transition-colors"
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
                rows={7}
                className="w-full px-4 py-3.5 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white placeholder-white/30 focus:outline-none focus:border-[#b4eb2c] transition-colors resize-none"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="has_subscription"
                value="yes"
                id="subscription"
                className="mt-0.5 w-4 h-4 bg-transparent border border-[#3a3a3a] rounded cursor-pointer accent-[#b4eb2c]"
              />
              <label htmlFor="subscription" className="text-sm text-white/60 cursor-pointer">
                Check this box if you have an active subscription with Odoo.
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#b4eb2c] rounded-full font-medium text-white hover:bg-[#b4eb2c] hover:text-black transition-all duration-300"
              >
                Submit
                <span className="w-10 h-10 bg-[#b4eb2c] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative box-border caret-transparent py-20 md:py-32 bg-[#1a1a1a]">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1400px]">
          <div className="bg-[#2a2a2a] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Ready to make your<br />website using Odoo?
              </h2>
            </div>
            <button className="px-6 py-3 bg-[#714B67] hover:bg-[#8a5c7f] border border-[#714B67] rounded-full font-semibold text-sm flex items-center gap-2 transition-all whitespace-nowrap self-start md:self-center">
              Ask for a quote
              <span className="w-8 h-8 bg-[#b4eb2c] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
