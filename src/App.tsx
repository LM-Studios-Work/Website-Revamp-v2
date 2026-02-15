import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/sections/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Footer } from "@/sections/Footer";
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
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
