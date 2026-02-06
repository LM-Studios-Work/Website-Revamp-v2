import { Link, useLocation } from "react-router-dom";

export const DesktopMenu = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { to: "/", label: "home" },
    { to: "/about-us", label: "about us" },
    { to: "/projects", label: "projects" },
    { to: "/services", label: "services", hasDropdown: true },
    { to: "/contact", label: "contact" },
  ];

  return (
    <ul className="hidden md:flex md:items-center md:gap-10 list-none pl-0">
      {navItems.map((item) => (
        <li key={item.to} className={item.hasDropdown ? "relative group" : ""}>
          <Link
            to={item.to}
            className={`text-base transition-colors duration-200 relative pb-3 ${
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
          {item.hasDropdown && (
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-neutral-900/95 backdrop-blur-md border border-white/10 rounded-xl py-2 px-1 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 list-none z-50">
              <li>
                <Link
                  to="/services/web-design"
                  className="block px-4 py-2 text-sm text-white/70 hover:text-[#d4ff00] hover:bg-white/5 rounded-lg transition-colors"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/seo"
                  className="block px-4 py-2 text-sm text-white/70 hover:text-[#d4ff00] hover:bg-white/5 rounded-lg transition-colors"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-development"
                  className="block px-4 py-2 text-sm text-white/70 hover:text-[#d4ff00] hover:bg-white/5 rounded-lg transition-colors"
                >
                  App Development
                </Link>
              </li>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
