import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "@/sections/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ContactPage } from "@/pages/ContactPage";
import { WebDesignPage } from "@/pages/WebDesignPage";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative text-white text-lg not-italic normal-nums font-light accent-auto bg-black box-border caret-transparent block h-full tracking-[normal] leading-[32.4px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible w-full overflow-hidden border-separate font-inter">
        <div className="relative box-border caret-transparent flex flex-col h-full overflow-x-hidden overflow-y-auto w-full z-0">
          <Header />
          <main className="box-border caret-transparent grow shrink-0">
            <div className="box-border caret-transparent">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route
                  path="/services/web-design"
                  element={<WebDesignPage />}
                />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
          </main>
          <footer className="relative box-border caret-transparent shrink-0">
            <div className="box-border caret-transparent px-0 md:px-10">
              <section className="relative bg-white/10 box-border caret-transparent z-[5] pt-8 px-8 rounded-t-[80px] md:pt-24 md:px-24">
                <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
                  <div className="items-center box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
                    <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 text-center w-full px-[15px] py-10 md:text-left md:w-[58.3333%] md:pl-0 md:pt-0 md:pb-20">
                      <h2 className="text-[31.4375px] font-semibold box-border caret-transparent leading-[37.725px] text-center mb-2 font-obviously md:text-[50px] md:leading-[60px] md:text-left">
                        Ready to make your website using Odoo?
                      </h2>
                    </div>
                    <div className="box-border caret-transparent flex shrink-0 justify-center max-w-full min-h-6 w-full pl-[15px] pb-10 md:justify-end md:w-[41.6667%] md:pb-20">
                      <Link
                        to="/contact"
                        className="text-sm font-normal bg-zinc-600 box-border caret-transparent block leading-[21px] text-center align-middle border-zinc-600 pl-4 pr-2 py-2 rounded-[50px] border-2 border-solid font-obviously md:text-base md:font-semibold md:leading-6 md:pl-6 hover:bg-neutral-600 hover:border-zinc-700"
                      >
                        Ask for a quote{" "}
                        <img
                          src="https://c.animaapp.com/mlaz3dsraozDAl/assets/icon-1.svg"
                          alt="Icon"
                          className="relative text-sm font-normal bg-white/10 box-border caret-transparent h-[30px] leading-[21px] -rotate-45 w-[30px] ml-2.5 p-[9.6px] rounded-[50%] top-0 md:text-base md:font-semibold md:h-[50px] md:leading-6 md:w-[50px] md:p-[18.4px]"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] border-t-[color(srgb_1_1_1_/_0.15)] border-t-2 border-b-white border-x-white">
                    <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 w-full px-[15px] py-8 md:w-3/12 md:px-0 md:py-24">
                      <h3 className="text-[23.05px] font-medium box-border caret-transparent leading-[27.66px] mb-2 font-obviously md:text-[28px] md:leading-[33.6px]">
                        Navigation
                      </h3>
                      <ul className="box-border caret-transparent flex flex-col list-none pl-0 pt-3 md:pt-6">
                        <li className="box-border caret-transparent">
                          <Link
                            to="/"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="box-border caret-transparent">
                          <Link
                            to="/about-us"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            About us
                          </Link>
                        </li>
                        <li className="box-border caret-transparent">
                          <Link
                            to="/projects"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            Projects
                          </Link>
                        </li>
                        <li className="box-border caret-transparent">
                          <Link
                            to="/contact"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            Contact us
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 w-full px-[15px] py-8 md:w-3/12 md:px-0 md:py-24">
                      <h3 className="text-[23.05px] font-medium box-border caret-transparent leading-[27.66px] mb-2 font-obviously md:text-[28px] md:leading-[33.6px]">
                        Services
                      </h3>
                      <ul className="box-border caret-transparent flex flex-col list-none pl-0 pt-3 md:pt-6">
                        <li className="box-border caret-transparent">
                          <Link
                            to="/services/web-design"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            Web Design
                          </Link>
                        </li>
                        <li className="box-border caret-transparent">
                          <Link
                            to="/services/seo"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            SEO
                          </Link>
                        </li>
                        <li className="box-border caret-transparent">
                          <Link
                            to="/services/app-development"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            App Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 w-full px-[15px] py-8 md:w-3/12 md:px-0 md:py-24">
                      <h3 className="text-[23.05px] font-medium box-border caret-transparent leading-[27.66px] mb-2 font-obviously md:text-[28px] md:leading-[33.6px]">
                        Offices
                      </h3>
                      <ul className="box-border caret-transparent flex flex-col list-none pl-0 pt-3 md:pt-6">
                        <li className="box-border caret-transparent">
                          <a
                            href="https://www.google.com/maps/dir//Rue du Laid Burniat 5"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            Belgium
                          </a>
                        </li>
                        <li className="box-border caret-transparent">
                          <a
                            href="https://maps.app.goo.gl/rz4znQDZNZfxDLQt8"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            Buffalo
                          </a>
                        </li>
                        <li className="box-border caret-transparent">
                          <a
                            href="https://www.google.com/maps/dir//Dubai south A5 building, 3rd Floor Building A5 - Dubai Logistics City - Dubai - United Arab Emirates"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            Dubaï
                          </a>
                        </li>
                        <li className="box-border caret-transparent">
                          <a
                            href="https://www.google.com/maps/dir//401 &amp; 402, Floor 4, IT Tower 3 InfoCity Gate, 1, Gandhinagar, Gujarat 382007, India"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            Gujarat
                          </a>
                        </li>
                        <li className="box-border caret-transparent">
                          <a
                            href="https://www.google.com/maps/dir//32 Connaught Rd W, Sai Wan, Hong Kong"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            Hong-Kong
                          </a>
                        </li>
                        <li className="box-border caret-transparent">
                          <a
                            href="https://www.google.com/maps/dir//Blvd. Miguel de Cervantes Saavedra 23, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX, Mexico"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            Mexico
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 w-full px-[15px] py-8 md:w-3/12 md:px-0 md:py-24">
                      <h3 className="text-[23.05px] font-medium box-border caret-transparent leading-[27.66px] mb-2 font-obviously md:text-[28px] md:leading-[33.6px]">
                        Follow us
                      </h3>
                      <ul className="box-border caret-transparent flex flex-col list-none pl-0 pt-3 md:pt-6">
                        <li className="box-border caret-transparent mr-4">
                          <a
                            href="https://www.behance.net/odoo-designer"
                            title="Behance"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            {" "}
                            Behance{" "}
                          </a>
                        </li>
                        <li className="box-border caret-transparent mr-4">
                          <a
                            href="https://dribbble.com/OdooBe"
                            title="Dribbble"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            {" "}
                            Dribbble{" "}
                          </a>
                        </li>
                        <li className="box-border caret-transparent mr-4">
                          <a
                            href="https://www.instagram.com/odoo.official/"
                            title="Instagram"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            {" "}
                            Instagram{" "}
                          </a>
                        </li>
                        <li className="box-border caret-transparent">
                          <a
                            href="https://www.youtube.com/playlist?list=PL1-aSABtP6ADgnXqXDdpxU7-8ixNGUsrz"
                            title="Youtube"
                            className="box-border caret-transparent block py-2 hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            {" "}
                            Youtube{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
                    <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 text-center w-full pb-5 px-[15px] md:pb-10">
                      <div className="box-border caret-transparent">
                        <div
                          role="menu"
                          className="box-border caret-transparent list-none"
                        >
                          <a
                            role="menuitem"
                            href=""
                            title="English (US)"
                            className="box-border caret-transparent inline-block mr-2 py-[3px] hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            <span className="box-border caret-transparent">
                              English (US)
                            </span>
                          </a>
                          <span className="box-border caret-transparent inline-block mr-2">
                            |
                          </span>
                          <a
                            role="menuitem"
                            href="/fr_BE"
                            title=" Français (BE)"
                            className="box-border caret-transparent inline-block mr-2 py-[3px] hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            <span className="box-border caret-transparent">
                              {" "}
                              Français (BE)
                            </span>
                          </a>
                          <span className="box-border caret-transparent inline-block mr-2">
                            |
                          </span>
                          <a
                            role="menuitem"
                            href="/it"
                            title=" Italiano"
                            className="box-border caret-transparent inline-block mr-2 py-[3px] hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            <span className="box-border caret-transparent">
                              {" "}
                              Italiano
                            </span>
                          </a>
                          <span className="box-border caret-transparent inline-block mr-2">
                            |
                          </span>
                          <a
                            role="menuitem"
                            href="/es"
                            title=" Español"
                            className="box-border caret-transparent inline-block py-[3px] hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
                          >
                            <span className="box-border caret-transparent">
                              {" "}
                              Español
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
                    <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 text-center w-full px-[15px]">
                      <img
                        src="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_odoo_horizontal.svg"
                        alt="Odoo"
                        className="box-border caret-transparent max-w-full mr-4"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute box-border caret-transparent opacity-50 pointer-events-none w-[262.5px] z-[-3] right-0 bottom-0 md:w-[896px]"
              >
                <source
                  src="/website_rogueone/static/src/videos/bottom.mp4"
                  type="video/mp4"
                  className="text-black text-base font-normal box-border caret-transparent leading-[normal] pointer-events-auto font-times_new_roman"
                />
                Your browser does not support the video tag.{" "}
              </video>
            </div>
          </footer>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="[mask-image:linear-gradient(to_top,rgba(0,0,0,0),rgb(0,0,0)_50%)] absolute box-border caret-transparent shrink-0 h-[1000px] object-cover opacity-65 pointer-events-none translate-x-[-50.0%] w-screen z-[-3] left-2/4 top-0"
          >
            <source
              src="/website_rogueone/static/src/videos/waves-loop.mp4"
              type="video/mp4"
              className="text-black text-base font-normal box-border caret-transparent leading-[normal] pointer-events-auto font-times_new_roman"
            />
            Your browser does not support the video tag.{" "}
          </video>
          <div className="[mask-image:linear-gradient(rgba(0,0,0,0),rgb(0,0,0)_50%)] fixed box-border caret-transparent shrink-0 h-[1000px] w-screen z-[-2] inset-0">
            <img
              src="https://c.animaapp.com/mlaz3dsraozDAl/assets/image-1.png"
              className="aspect-[auto_1280_/_1000] box-border caret-transparent h-full w-full"
            />
          </div>
          <div className="fixed bg-[url('https://design.odoo.com/website_rogueone/static/src/img/content/img_grain.png')] bg-no-repeat bg-cover box-border caret-transparent shrink-0 h-[1000px] opacity-50 w-screen z-[-1] bg-center inset-0"></div>
        </div>
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent"></div>
          <div className="box-border caret-transparent"></div>
          <div className="absolute text-base box-border caret-transparent leading-[28.8px] z-[1055] left-[55px] right-4 top-[52.9px] md:left-[960px]"></div>
          <div className="absolute box-border caret-transparent z-[1055] left-[55px] right-4 top-[52.9px] md:left-[960px]"></div>
          <div className="absolute box-border caret-transparent h-full pointer-events-none w-full top-0">
            <div className="items-end box-border caret-transparent flex flex-col max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]"></div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
