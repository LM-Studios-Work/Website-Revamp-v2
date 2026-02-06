import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "@/sections/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ContactPage } from "@/pages/ContactPage";
import { WebDesignPage } from "@/pages/WebDesignPage";
import { SEOPage } from "@/pages/SEOPage";
import { AppPage } from "@/pages/AppPage";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <div className="relative text-white text-base font-light bg-black h-full w-full overflow-hidden font-sans">
          <div className="relative flex flex-col h-full overflow-x-hidden overflow-y-auto w-full z-0">
          <Header />
          <main className="grow shrink-0">
            <div>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route
                  path="/services/web-design"
                  element={<WebDesignPage />}
                />
                <Route
                  path="/services/seo"
                  element={<SEOPage />}
                />
                <Route
                  path="/services/app-development"
                  element={<AppPage />}
                />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
          </main>
          <footer className="relative shrink-0">
            <div className="px-0 md:px-10">
              <section className="relative bg-white/5 backdrop-blur-sm z-[5] pt-12 px-8 rounded-t-[60px] md:pt-24 md:px-24">
                <div className="relative max-w-[1200px] w-full mx-auto">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-12 md:pb-20">
                    <h2 className="text-3xl md:text-[50px] font-bold leading-tight text-white text-center md:text-left mb-8 md:mb-0 md:max-w-[60%] text-balance">
                      Ready to make your website with LM Studios?
                    </h2>
                    <Link
                      to="/contact"
                      className="inline-flex items-center self-center md:self-auto text-sm md:text-base font-semibold text-white bg-white/10 backdrop-blur-sm pl-6 pr-2 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      Ask for a quote
                      <span className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-[#d4ff00] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-black -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 py-12 md:py-20">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Navigation</h3>
                      <ul className="flex flex-col list-none pl-0 gap-1">
                        <li><Link to="/" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Home</Link></li>
                        <li><Link to="/about-us" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">About us</Link></li>
                        <li><Link to="/projects" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Projects</Link></li>
                        <li><Link to="/contact" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Contact us</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Services</h3>
                      <ul className="flex flex-col list-none pl-0 gap-1">
                        <li><Link to="/services/web-design" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Web Design</Link></li>
                        <li><Link to="/services/seo" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">SEO</Link></li>
                        <li><Link to="/services/app-development" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">App Development</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Offices</h3>
                      <ul className="flex flex-col list-none pl-0 gap-1">
                        <li><a href="https://www.google.com/maps/dir//Rue du Laid Burniat 5" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Belgium</a></li>
                        <li><a href="https://maps.app.goo.gl/rz4znQDZNZfxDLQt8" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Buffalo</a></li>
                        <li><a href="#" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Dubai</a></li>
                        <li><a href="#" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Gujarat</a></li>
                        <li><a href="#" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Hong Kong</a></li>
                        <li><a href="#" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Mexico</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Follow us</h3>
                      <ul className="flex flex-col list-none pl-0 gap-1">
                        <li><a href="https://www.behance.net" title="Behance" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Behance</a></li>
                        <li><a href="https://dribbble.com" title="Dribbble" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Dribbble</a></li>
                        <li><a href="https://www.instagram.com" title="Instagram" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Instagram</a></li>
                        <li><a href="https://www.youtube.com" title="Youtube" className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors">Youtube</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center border-t border-white/10 py-8">
                    <p className="text-sm text-white/40">LM Studios</p>
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
