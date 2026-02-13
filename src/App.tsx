import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "@/sections/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ParticleBackground } from "@/components/ParticleBackground";
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
      <div className="relative text-white text-base font-light h-full w-full overflow-hidden font-sans">
        <div
          className="relative flex flex-col h-full overflow-x-hidden overflow-y-auto w-full"
          data-scroll-container
        >
          {/* Layer 0: Fallback background image — loads first, always visible */}
          <div
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
          >
            <img
              src="/background/fallback.webp"
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Layer 1: Interactive particles — spans full page */}
          <ParticleBackground />

          <Header />
          <main className="relative z-[2] grow shrink-0">
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
                <Route path="/services/seo" element={<SEOPage />} />
                <Route path="/services/app-development" element={<AppPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
          </main>
          <footer className="relative shrink-0">
            <div className="px-0 md:px-10">
              <section className="relative bg-white/5 backdrop-blur-sm z-[5] pt-12 px-8 rounded-t-[60px] md:pt-24 md:px-24">
                <div className="relative max-w-[1400px] w-full mx-auto">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-12 md:pb-20">
                    <h2 className="text-3xl md:text-[50px] font-bold leading-tight text-white text-center md:text-left mb-8 md:mb-0 md:max-w-[60%] text-balance">
                      Ready to make your website with LM Studios?
                    </h2>
                    <Link
                      to="/contact"
                      className="inline-flex items-center self-center md:self-auto text-sm md:text-base font-semibold text-white bg-white/10 backdrop-blur-sm pl-6 pr-2 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      Ask for a quote
                      <span className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-[#e7fe56] rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-black -rotate-45"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 py-12 md:py-20">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Navigation</h3>
                      <ul className="flex flex-col list-none pl-0 gap-1">
                        <li>
                          <Link
                            to="/"
                            className="text-white/60 block py-1.5 hover:text-[#e7fe56] transition-colors"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about-us"
                            className="text-white/60 block py-1.5 hover:text-[#e7fe56] transition-colors"
                          >
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/projects"
                            className="text-white/60 block py-1.5 hover:text-[#e7fe56] transition-colors"
                          >
                            Projects
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            className="text-white/60 block py-1.5 hover:text-[#e7fe56] transition-colors"
                          >
                            Contact us
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Services</h3>
                      <ul className="flex flex-col list-none pl-0 gap-1">
                        <li>
                          <Link
                            to="/services/web-design"
                            className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors"
                          >
                            Web Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/seo"
                            className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors"
                          >
                            SEO
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/app-development"
                            className="text-white/60 block py-1.5 hover:text-[#d4ff00] transition-colors"
                          >
                            App Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Offices</h3>
                      <ul className="flex flex-col list-none pl-0 gap-1">
                        <li>
                          <a
                            href="https://www.google.com/maps/dir//Johannesburg, South Africa"
                            className="text-white/60 block py-1.5 hover:text-[#e7fe56] transition-colors"
                          >
                            Johannesburg
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.google.com/maps/dir//Cape Town, South Africa"
                            className="text-white/60 block py-1.5 hover:text-[#e7fe56] transition-colors"
                          >
                            Cape Town
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.google.com/maps/dir//Durban, South Africa"
                            className="text-white/60 block py-1.5 hover:text-[#e7fe56] transition-colors"
                          >
                            Durban
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.google.com/maps/dir//Pretoria, South Africa"
                            className="text-white/60 block py-1.5 hover:text-[#e7fe56] transition-colors"
                          >
                            Pretoria
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Follow us</h3>
                      <ul className="flex flex-col list-none pl-0 gap-1">
                        <li>
                          <a
                            href="https://www.instagram.com/lmstudiosweb/"
                            title="Instagram"
                            className="text-white/60 block py-1.5 hover:text-[#e7fe56] transition-colors"
                          >
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/playlist?list=PL1-aSABtP6ADgnXqXDdpxU7-8ixNGUsrz"
                            title="Youtube"
                            className="text-white/60 block py-1.5 hover:text-[#e7fe56] transition-colors"
                          >
                            Youtube
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center border-t border-white/10 py-8">
                    <p className="text-sm text-white/40">LM Studios</p>
                  </div>
                </div>
              </section>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
