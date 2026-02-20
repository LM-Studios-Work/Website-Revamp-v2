import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEMS, SERVICE_NAV_ITEMS } from "@/constants/navigation";
import { COLORS } from "@/constants/colors";
import { NavWave } from "@/components/NavWave";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleHashNavigation = (to: string) => {
    onClose();
    const [path, hash] = to.split("#");
    setTimeout(() => {
      if (path === location.pathname) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", to);
        } else {
          window.location.hash = hash || "";
        }
      } else {
        navigate(to);
      }
    }, 220);
  };

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
        <div className="absolute top-0 right-0 px-6 py-8 z-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="text-white/60 hover:text-[#e7fe56] transition-colors"
          >
            <svg
              className="w-8 h-8"
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
        <ul className="h-full flex flex-col items-center justify-center gap-10 list-none px-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="w-full text-center">
              {item.hasDropdown ? (
                <>
                  <button
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`text-3xl transition-colors duration-200 relative inline-flex items-center gap-2 pb-2 ${
                      isActive(item.to)
                        ? "text-white font-normal"
                        : "text-white/70 font-normal"
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke={COLORS.lime}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    {isActive(item.to) && <NavWave />}
                  </button>

                  {/* Services dropdown items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      servicesOpen ? "max-h-64 mt-4" : "max-h-0"
                    }`}
                  >
                    <ul className="flex flex-col items-center gap-4 list-none">
                      {SERVICE_NAV_ITEMS.map((service) => (
                        <li key={service.to}>
                          {service.to.includes("#") ? (
                            <a
                              href={service.to}
                              onClick={(e) => {
                                e.preventDefault();
                                handleHashNavigation(service.to);
                              }}
                              className={`text-xl transition-colors duration-200 ${
                                isActive(service.to)
                                  ? "text-[#e7fe56]"
                                  : "text-white/40 hover:text-white/70"
                              }`}
                            >
                              {service.label}
                            </a>
                          ) : (
                            <Link
                              to={service.to}
                              onClick={onClose}
                              className={`text-xl transition-colors duration-200 ${
                                isActive(service.to)
                                  ? "text-[#e7fe56]"
                                  : "text-white/40 hover:text-white/70"
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
                  className={`text-3xl transition-colors duration-200 relative inline-block pb-2 ${
                    isActive(item.to)
                      ? "text-white font-normal"
                      : "text-white/70 hover:text-white font-normal"
                  }`}
                >
                  {item.label}
                  {isActive(item.to) && <NavWave />}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
