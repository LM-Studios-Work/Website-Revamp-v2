import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { to: "/", label: "home" },
    { to: "/about-us", label: "about us" },
    { to: "/projects", label: "projects" },
    { to: "/services", label: "services", hasDropdown: true },
    { to: "/contact", label: "contact" },
  ];

  const serviceItems = [
    { to: "/services/web-design", label: "Web Design" },
    { to: "/services/web-design#photography", label: "Photography" },
    { to: "/services/seo", label: "SEO" },
    { to: "/services/app-development", label: "App Development" },
  ];

  return (
    <div
      className={`fixed inset-0 z-[999] md:hidden transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu panel */}
      <nav
        className={`absolute top-0 right-0 h-full w-full bg-neutral-950/95 backdrop-blur-md flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end px-6 py-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="text-white/60 hover:text-[#d4ff00] transition-colors"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col items-center gap-6 mt-4 list-none px-6">
          {navItems.map((item) => (
            <li key={item.to} className="w-full text-center">
              {item.hasDropdown ? (
                <>
                  <button
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`text-lg transition-colors duration-200 relative inline-flex items-center gap-1.5 pb-2 ${
                      isActive(item.to)
                        ? "text-white font-medium"
                        : "text-white/60 font-normal"
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    {isActive(item.to) && (
                      <span className="absolute -bottom-0.5 left-0 w-full h-[6px] overflow-hidden block">
                        <svg
                          className="h-full animate-nav-wave"
                          style={{ width: "200%" }}
                          viewBox="0 0 120 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0 3C5 0.5 10 5.5 15 3C20 0.5 25 5.5 30 3C35 0.5 40 5.5 45 3C50 0.5 55 5.5 60 3C65 0.5 70 5.5 75 3C80 0.5 85 5.5 90 3C95 0.5 100 5.5 105 3C110 0.5 115 5.5 120 3"
                            stroke="#d4ff00"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    )}
                  </button>

                  {/* Services dropdown */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      servicesOpen ? "max-h-48 mt-3" : "max-h-0"
                    }`}
                  >
                    <ul className="flex flex-col items-center gap-3 list-none">
                      {serviceItems.map((service) => (
                        <li key={service.to}>
                          {service.to.includes("#") ? (
                            <a
                              href={service.to}
                              onClick={(e) => {
                                e.preventDefault();
                                onClose();
                                const [path, hash] = service.to.split("#");
                                // Give the menu close animation a moment, then navigate/scroll
                                setTimeout(() => {
                                  if (path === location.pathname) {
                                    // same page: scroll smoothly to element and update URL
                                    const el = document.getElementById(hash);
                                    if (el) {
                                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                                      window.history.replaceState(null, "", service.to);
                                    } else {
                                      // fallback: set hash (WebDesignPage effect will handle scroll)
                                      window.location.hash = hash || "";
                                    }
                                  } else {
                                    // navigate to the route (react-router) including hash
                                    navigate(service.to);
                                  }
                                }, 220);
                              }}
                              className={`text-sm transition-colors duration-200 ${
                                isActive(service.to) ? "text-[#d4ff00]" : "text-white/40 hover:text-white/70"
                              }`}
                            >
                              {service.label}
                            </a>
                          ) : (
                            <Link
                              to={service.to}
                              onClick={onClose}
                              className={`text-sm transition-colors duration-200 ${
                                isActive(service.to) ? "text-[#d4ff00]" : "text-white/40 hover:text-white/70"
                              }`}
                            >
                              {service.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  to={item.to}
                  onClick={onClose}
                  className={`text-lg transition-colors duration-200 relative inline-block pb-2 ${
                    isActive(item.to)
                      ? "text-white font-medium"
                      : "text-white/60 hover:text-white font-normal"
                  }`}
                >
                  {item.label}
                  {isActive(item.to) && (
                    <span className="absolute -bottom-0.5 left-0 w-full h-[6px] overflow-hidden block">
                      <svg
                        className="h-full animate-nav-wave"
                        style={{ width: "200%" }}
                        viewBox="0 0 120 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 3C5 0.5 10 5.5 15 3C20 0.5 25 5.5 30 3C35 0.5 40 5.5 45 3C50 0.5 55 5.5 60 3C65 0.5 70 5.5 75 3C80 0.5 85 5.5 90 3C95 0.5 100 5.5 105 3C110 0.5 115 5.5 120 3"
                          stroke="#d4ff00"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
