import { useState } from "react";

export const ContactPage = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative box-border caret-transparent min-h-screen pt-64 pb-10 md:pb-20 overflow-hidden">
        {/* Clean background, video removed */}
        <div className="relative z-10 box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1400px]">
          <h1 className="text-[44.4px] font-semibold box-border caret-transparent leading-[53.28px] text-center mb-10 font-obviously md:text-[84px] md:leading-[100.8px]">
            Contact Us
          </h1>
        </div>
        <div className="relative z-10 box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[850px]">
          <p className="box-border caret-transparent text-center mt-6 mb-8">
            Ready to bring your vision to life? Get in touch with our team and
            let's discuss how we can help you create an exceptional web
            experience.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative box-border caret-transparent py-10 md:py-20">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1400px]">
          <div className="items-stretch box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            {/* Contact Form */}
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] py-10 md:w-7/12 md:pr-8 md:py-0">
              <div className="backdrop-blur-[3px] bg-white/10 box-border caret-transparent p-8 rounded-[20px] md:p-12">
                <h2 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-8 font-obviously md:text-[40px] md:leading-[48px]">
                  Send us a message
                </h2>
                <form className="box-border caret-transparent">
                  <div className="box-border caret-transparent mb-6">
                    <label className="box-border caret-transparent block mb-2 font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="bg-white/5 border-white/20 box-border caret-transparent w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-yellow-300 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="box-border caret-transparent mb-6">
                    <label className="box-border caret-transparent block mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="bg-white/5 border-white/20 box-border caret-transparent w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-yellow-300 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="box-border caret-transparent mb-6">
                    <label className="box-border caret-transparent block mb-2 font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      className="bg-white/5 border-white/20 box-border caret-transparent w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-yellow-300 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="box-border caret-transparent mb-6">
                    <label className="box-border caret-transparent block mb-2 font-medium">
                      Service *
                    </label>
                    <select
                      required
                      className="bg-white/5 border-white/20 box-border caret-transparent w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-yellow-300 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="web-design">Web Design</option>
                      <option value="logo-design">Logo Design</option>
                      <option value="photography">Photography</option>
                      <option value="seo">SEO</option>
                      <option value="marketing">Marketing</option>
                    </select>
                  </div>
                  <div className="box-border caret-transparent mb-6">
                    <label className="box-border caret-transparent block mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="bg-white/5 border-white/20 box-border caret-transparent w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-yellow-300 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="text-sm font-normal bg-zinc-600 box-border caret-transparent block leading-[21px] text-center align-middle border-zinc-600 pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-neutral-600 hover:border-zinc-700 transition-colors"
                  >
                    Send Message
                    <img
                      src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/icon-4.svg"
                      alt="Icon"
                      className="relative text-sm font-normal bg-white/10 box-border caret-transparent h-[30px] leading-[21px] -rotate-45 w-[30px] ml-2.5 p-[9.6px] rounded-[50%] top-0 md:text-base md:font-semibold md:h-[50px] md:leading-6 md:w-[50px] md:p-[18.4px]"
                    />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] py-10 md:w-5/12 md:pl-8 md:py-0">
              <div className="box-border caret-transparent mb-12">
                <h3 className="text-[23.05px] font-medium box-border caret-transparent leading-[27.66px] mb-6 font-obviously md:text-[28px] md:leading-[33.6px]">
                  Get in touch
                </h3>
                <p className="box-border caret-transparent mb-6">
                  Have a question or want to work together? We'd love to hear
                  from you.
                </p>
                <div className="box-border caret-transparent space-y-4">
                  <div className="box-border caret-transparent">
                    <p className="box-border caret-transparent font-medium mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@lmstudios.co.za"
                      className="box-border caret-transparent opacity-75 hover:text-yellow-300 hover:opacity-100 transition-all"
                    >
                      hello@lmstudios.co.za
                    </a>
                  </div>
                  <div className="box-border caret-transparent">
                    <p className="box-border caret-transparent font-medium mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+27100001234"
                      className="box-border caret-transparent opacity-75 hover:text-yellow-300 hover:opacity-100 transition-all"
                    >
                      +27 10 000 1234
                    </a>
                  </div>
                </div>
              </div>

              <div className="box-border caret-transparent mb-12">
                <h3 className="text-[23.05px] font-medium box-border caret-transparent leading-[27.66px] mb-6 font-obviously md:text-[28px] md:leading-[33.6px]">
                  Main Office
                </h3>
                <p className="box-border caret-transparent opacity-75">
                  Johannesburg<br />
                  Gauteng
                  <br />
                  South Africa
                </p>
              </div>

              <div className="box-border caret-transparent">
                <h3 className="text-[23.05px] font-medium box-border caret-transparent leading-[27.66px] mb-6 font-obviously md:text-[28px] md:leading-[33.6px]">
                  Follow us
                </h3>
                <div className="box-border caret-transparent flex gap-4">
                  <a
                    href="https://www.behance.net/lm-studios"
                    className="box-border caret-transparent opacity-75 hover:text-yellow-300 hover:opacity-100 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Behance
                  </a>
                  <a
                    href="https://dribbble.com/LMStudios"
                    className="box-border caret-transparent opacity-75 hover:text-yellow-300 hover:opacity-100 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dribbble
                  </a>
                  <a
                    href="https://www.instagram.com/lmstudios.official/"
                    className="box-border caret-transparent opacity-75 hover:text-yellow-300 hover:opacity-100 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative box-border caret-transparent py-10 md:py-20">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1400px]">
          <div className="backdrop-blur-[3px] bg-white/10 box-border caret-transparent p-4 rounded-[20px] overflow-hidden">
            <div className="box-border caret-transparent h-[400px] bg-white/5 rounded-[16px] flex items-center justify-center">
              <p className="box-border caret-transparent opacity-50">
                Map placeholder
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
