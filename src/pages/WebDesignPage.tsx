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

      {/* Standard Pack Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-1/2">
              <div className="mb-6">
                <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                  <span className="italic text-transparent [-webkit-text-stroke:2px_white]">
                    Standard Pack
                  </span>
                  <span className="inline-block ml-4 text-base md:text-lg font-normal border-2 border-[#67e8f9] text-[#67e8f9] px-4 py-2 rounded-full">
                    25h min.
                  </span>
                </h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                No-fuss web design for your business
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Our Standard Pack is designed for{" "}
                <strong className="font-semibold text-white">
                  small projects that prioritize simplicity and efficiency
                </strong>
                . Built exclusively with Odoo's Website Builder, standard
                options, and Bootstrap variables, it's perfect for clients who
                need a clean, functional website{" "}
                <strong className="font-semibold text-white">
                  without customizations
                </strong>
                .
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://c.animaapp.com/mlb5r0i2dx1RnR/assets/img_team_office_1.webp"
                  alt="Team working on web design projects"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
            <div className="md:w-5/12 shrink-0">
              <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
                Our{" "}
                <span className="italic text-transparent [-webkit-text-stroke:1.5px_white]">
                  process
                </span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                From concept to launch, we craft user-friendly, visually
                striking websites tailored to your brand.
              </p>
            </div>
            <div className="md:w-7/12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#e9d5ff] text-black p-8 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-sm font-semibold mb-5">
                    1
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    Kick off meeting
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80">
                    Let's start your project by aligning on your website
                    objectives with your dedicated designer.
                  </p>
                </div>
                <div className="bg-[#d4ff00] text-black p-8 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-sm font-semibold mb-5">
                    2
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    Sitemap
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80">
                    We create a structured blueprint that maps your website's
                    pages and their relationships.
                  </p>
                </div>
                <div className="bg-[#67e8f9] text-black p-8 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-sm font-semibold mb-5">
                    3
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    Wireframes
                    <span className="text-xs font-normal inline-block text-center whitespace-nowrap align-middle border border-black/30 ml-2 px-2.5 py-1 rounded-full">
                      Custom Pack only
                    </span>
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80">
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

      {/* Your website is in good hands */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="relative mb-12 md:mb-20">
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-3">
              Your website is
              <br />
              in{" "}
              <span className="italic text-transparent [-webkit-text-stroke:2px_white]">
                good hands
              </span>
            </h2>
            <div className="absolute hidden md:flex flex-col items-center -top-14 right-6 z-10">
              <p className="text-xl text-white font-caveat -rotate-12 leading-tight text-center mb-0.5">
                We do SEO
                <br />
                as well
              </p>
              <svg className="w-4 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 16 32" strokeWidth={1.2}>
                <path d="M8 2C6 8 10 14 8 20C7 23 9 26 8 30" strokeLinecap="round" />
                <path d="M5 25C7 28 8 30 8 30C8 30 9 28 11 25" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#e9d5ff] text-black p-8 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-base font-semibold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-4">
                Experienced designers
              </h3>
              <p className="text-base leading-relaxed text-black/80">
                We have high-end designers ready to conceive stunning designs
                matching your brand style.
              </p>
            </div>
            <div className="bg-[#d4ff00] text-black p-8 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-base font-semibold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-4">
                eCommerce experts
              </h3>
              <p className="text-base leading-relaxed text-black/80">
                Our functional consultants can help you setting-up all your
                products in your eCommerce.
              </p>
            </div>
            <div className="bg-[#67e8f9] text-black p-8 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-base font-semibold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-4">
                Front-end developers
              </h3>
              <p className="text-base leading-relaxed text-black/80">
                Our front-end developers implement tailor-made features to take
                your website to the next level.
              </p>
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
