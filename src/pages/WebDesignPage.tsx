export const WebDesignPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center min-h-[70vh] pt-40 pb-16 px-6">
        <div className="max-w-[900px] w-full text-center">
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-white mb-8">
            Web Design
          </h1>
          <svg
            className="mx-auto mb-12 w-[200px] h-[18px]"
            viewBox="0 0 400 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 9C0 9 10 2 25 2C40 2 45 16 60 16C75 16 80 2 95 2C110 2 115 16 130 16C145 16 150 2 165 2C180 2 185 16 200 16C215 16 220 2 235 2C250 2 255 16 270 16C285 16 290 2 305 2C320 2 325 16 340 16C355 16 360 2 375 2C390 2 400 9 400 9"
              stroke="#d4ff00"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            We design and develop user-friendly websites using the Odoo
            framework, offering both standard features or custom solutions to
            meet your needs. Whether you opt for a simple setup with built-in
            functionalities or a fully tailored design with unique features, our
            approach ensures an efficient solution that aligns perfectly with
            your business requirements.
          </p>
        </div>
      </section>

      {/* Behind the scenes section */}
      <section className="relative box-border caret-transparent py-10 md:py-20">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
          <div className="items-stretch box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] py-2 md:w-6/12 md:py-4">
              <div className="absolute items-center box-border caret-transparent hidden flex-col transform-none z-[5] left-0 top-0 md:flex md:translate-y-[-80.0%]">
                <p className="text-[23.05px] font-normal box-border caret-transparent inline leading-[27.66px] min-h-0 min-w-0 text-center transform-none mb-2 font-caveat md:text-[28px] md:block md:leading-[33.6px] md:min-h-[auto] md:min-w-[auto] md:rotate-[-19.99998485209311deg]">
                  Behind
                  <br />
                  the scenes
                </p>
                <img
                  src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/img_arrow_curved.svg"
                  alt="Arrow icon"
                  className="box-border caret-transparent inline min-h-0 min-w-0 w-[13px] ml-6 md:block md:min-h-[auto] md:min-w-[auto]"
                />
              </div>
              <div className="relative box-border caret-transparent h-full min-h-[400px] w-full overflow-hidden rounded-[20px]">
                <img
                  src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/img_team_office_1.webp"
                  alt="Odoo Web Design team in the office"
                  className="absolute box-border caret-transparent h-full max-w-full object-cover translate-x-[-50.0%] translate-y-[-50.0%] w-full left-2/4 top-2/4"
                />
              </div>
            </div>
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] py-10 md:w-6/12 md:pl-8 md:py-20">
              <h2 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-10 font-obviously md:text-[50px] md:leading-[60px]">
                Custom Pack
                <span className="text-[12.8px] font-thin box-border caret-transparent inline-block leading-[12.8px] text-center text-nowrap align-middle border-purple-300 mx-4 px-4 py-[9.6px] rounded-[800px] border-2 border-solid md:text-[19.2px] md:leading-[19.2px]">
                  100h min.
                </span>
                <br />
                Tailored web design development
              </h2>
              <p className="box-border caret-transparent mb-8">
                Our <strong className="font-semibold">Custom Pack</strong> is
                perfect for businesses seeking a fully tailored website with a
                unique design and specialized functionalities. This package
                includes a comprehensive process:{" "}
                <strong className="font-semibold">
                  sitemap creation, wireframing, mockups
                </strong>
                , and integration using{" "}
                <strong className="font-semibold">
                  XML, SCSS, and JavaScript
                </strong>
                , ensuring a website that meets your exact specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative box-border caret-transparent py-10 md:py-20">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
          <div className="items-start box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] mb-12 md:w-5/12">
              <h2 className="text-[44.4px] font-semibold box-border caret-transparent leading-[53.28px] mb-6 font-obviously md:text-[64px] md:leading-[76.8px]">
                Our{" "}
                <span className="[text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff] text-transparent">
                  process
                </span>
              </h2>
              <p className="box-border caret-transparent text-lg mb-8">
                From concept to launch, we craft user-friendly, visually
                striking websites tailored to your brand.
              </p>
              <div className="box-border caret-transparent flex gap-4">
                <button className="bg-[#d4ff00] text-black box-border caret-transparent w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#c4ef00] transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="bg-[#d4ff00] text-black box-border caret-transparent w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#c4ef00] transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] md:w-7/12">
              <div className="box-border caret-transparent flex gap-6 overflow-x-auto pb-4">
                <div className="backdrop-blur-[3px] bg-[#e9d5ff] text-black box-border caret-transparent min-w-[320px] p-8 rounded-[20px] flex-shrink-0">
                  <div className="box-border caret-transparent text-sm font-medium mb-4 opacity-60">
                    1
                  </div>
                  <h3 className="text-[28px] font-semibold box-border caret-transparent leading-[33.6px] mb-4 font-obviously">
                    Kick off meeting
                  </h3>
                  <p className="box-border caret-transparent text-base leading-relaxed">
                    Let's start your project by aligning on your website
                    objectives with your dedicated designer.
                  </p>
                </div>
                <div className="backdrop-blur-[3px] bg-[#d4ff00] text-black box-border caret-transparent min-w-[320px] p-8 rounded-[20px] flex-shrink-0">
                  <div className="box-border caret-transparent text-sm font-medium mb-4 opacity-60">
                    2
                  </div>
                  <h3 className="text-[28px] font-semibold box-border caret-transparent leading-[33.6px] mb-4 font-obviously">
                    Sitemap
                  </h3>
                  <p className="box-border caret-transparent text-base leading-relaxed">
                    We create a structured blueprint that maps your website's
                    pages and their relationships.
                  </p>
                </div>
                <div className="backdrop-blur-[3px] bg-[#6ee7b7] text-black box-border caret-transparent min-w-[320px] p-8 rounded-[20px] flex-shrink-0">
                  <div className="box-border caret-transparent text-sm font-medium mb-4 opacity-60">
                    3
                  </div>
                  <h3 className="text-[28px] font-semibold box-border caret-transparent leading-[33.6px] mb-4 font-obviously">
                    Wireframes
                    <span className="text-[12.8px] font-thin box-border caret-transparent inline-block leading-[12.8px] text-center text-nowrap align-middle border-black/30 ml-2 px-3 py-2 rounded-[800px] border-2 border-solid">
                      Custom Pack only
                    </span>
                  </h3>
                  <p className="box-border caret-transparent text-base leading-relaxed">
                    Wireframes outline layout and functionality, providing a
                    clear, ready page structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="relative box-border caret-transparent py-10 md:py-20">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
          <div className="items-center box-border caret-transparent flex flex-wrap justify-between ml-[-15px] mr-[-15px] mb-12">
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] md:w-auto">
              <h2 className="text-[44.4px] font-semibold box-border caret-transparent leading-[53.28px] font-obviously md:text-[64px] md:leading-[76.8px]">
                Our projects
              </h2>
            </div>
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] mt-6 md:w-auto md:mt-0">
              <a
                href="/projects"
                className="text-sm font-normal bg-transparent box-border caret-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#d4ff00] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#d4ff00] hover:text-black transition-colors"
              >
                See all projects
                <span className="relative text-sm font-normal bg-[#d4ff00] text-black box-border caret-transparent h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:text-base md:font-semibold md:h-[50px] md:w-[50px] md:p-[18.4px]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO & Marketing Section */}
      <section className="relative box-border caret-transparent py-10 md:py-20">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
          <div className="items-stretch box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            {/* SEO */}
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] py-10 md:w-6/12 md:pr-8 md:py-0">
              <div className="box-border caret-transparent mb-6">
                <h2 className="text-[44.4px] font-semibold box-border caret-transparent leading-[53.28px] mb-4 font-obviously md:text-[64px] md:leading-[76.8px]">
                  SEO
                  <span className="text-[12.8px] font-thin box-border caret-transparent inline-block leading-[12.8px] text-center text-nowrap align-middle border-white/30 ml-4 px-4 py-2 rounded-[800px] border-2 border-solid md:text-[16px] md:leading-[16px]">
                    25h min.
                  </span>
                </h2>
                <h3 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-6 font-obviously md:text-[40px] md:leading-[48px]">
                  Boost your visibility with our expertise
                </h3>
              </div>
              <p className="box-border caret-transparent mb-8">
                Odoo's Website app is growing in popularity, and many customers
                seek to improve their SEO, whether starting fresh or migrating
                to Odoo. Our team of experts provides{" "}
                <strong className="font-semibold">
                  a tailored 25-hour SEO service
                </strong>{" "}
                to help optimize your site and develop a strong strategy for
                better search engine rankings and maximum visibility.
              </p>
              <a
                href="https://www.odoo.com/services/seo"
                className="text-sm font-normal bg-[#8b5cf6] box-border caret-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#8b5cf6] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-colors"
              >
                More about SEO
                <span className="relative text-sm font-normal bg-white/10 box-border caret-transparent h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:text-base md:font-semibold md:h-[50px] md:w-[50px] md:p-[18.4px]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Marketing */}
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] py-10 md:w-6/12 md:pl-8 md:py-0">
              <div className="box-border caret-transparent mb-6">
                <h2 className="text-[44.4px] font-semibold box-border caret-transparent leading-[53.28px] mb-4 font-obviously md:text-[64px] md:leading-[76.8px]">
                  Marketing
                  <span className="text-[12.8px] font-thin box-border caret-transparent inline-block leading-[12.8px] text-center text-nowrap align-middle border-white/30 ml-4 px-4 py-2 rounded-[800px] border-2 border-solid md:text-[16px] md:leading-[16px]">
                    25h min.
                  </span>
                </h2>
                <h3 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-6 font-obviously md:text-[40px] md:leading-[48px]">
                  Drive traffic and engagement
                </h3>
              </div>
              <p className="box-border caret-transparent mb-8">
                By optimizing your website's structure, content, and overall
                digital strategy, you can attract the right audience, enhance
                engagement, and{" "}
                <strong className="font-semibold">
                  stay ahead of the competition
                </strong>
                . With a data-driven approach, in-depth analysis, and tailored
                recommendations, we help you create a powerful online presence
                that delivers measurable results.
              </p>
              <a
                href="https://www.odoo.com/services/marketing"
                className="text-sm font-normal bg-[#8b5cf6] box-border caret-transparent inline-flex items-center leading-[21px] text-center align-middle border-[#8b5cf6] pl-6 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-colors"
              >
                More about marketing
                <span className="relative text-sm font-normal bg-white/10 box-border caret-transparent h-[30px] w-[30px] leading-[21px] -rotate-45 ml-2.5 p-[9.6px] rounded-[50%] flex items-center justify-center md:text-base md:font-semibold md:h-[50px] md:w-[50px] md:p-[18.4px]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative box-border caret-transparent py-10 md:py-20">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
          <div className="relative box-border caret-transparent flex flex-col break-words overflow-hidden rounded-[20px]">
            <div className="backdrop-blur-[3px] bg-white/10 box-border caret-transparent grow break-words p-10 rounded-[20px]">
              <div className="items-center box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] break-words">
                <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-[15px] text-center md:w-6/12 md:px-6 md:text-left">
                  <h2 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] mb-6 font-obviously md:text-[50px] md:leading-[60px]">
                    Ready to start your project?
                  </h2>
                  <p className="box-border caret-transparent mb-8">
                    Get in touch with our team to discuss your web design needs.
                  </p>
                </div>
                <div className="box-border caret-transparent flex shrink-0 justify-center max-w-full w-full px-[15px] md:justify-end md:w-6/12">
                  <a
                    href="/contact"
                    className="text-sm font-normal bg-zinc-600 box-border caret-transparent block leading-[21px] text-center align-middle border-zinc-600 pl-4 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 md:pl-6 hover:bg-neutral-600 hover:border-zinc-700"
                  >
                    Contact us
                    <img
                      src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/icon-4.svg"
                      alt="Icon"
                      className="relative text-sm font-normal bg-white/10 box-border caret-transparent h-[30px] leading-[21px] -rotate-45 w-[30px] ml-2.5 p-[9.6px] rounded-[50%] top-0 md:text-base md:font-semibold md:h-[50px] md:leading-6 md:w-[50px] md:p-[18.4px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
