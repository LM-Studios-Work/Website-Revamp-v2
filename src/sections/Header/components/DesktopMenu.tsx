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
              <svg
                className="absolute -bottom-0.5 left-0 w-full h-[6px]"
                viewBox="0 0 60 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 3C5 1 9 5 13 3C17 1 21 5 25 3C29 1 33 5 37 3C41 1 45 5 49 3C53 1 57 5 59 3"
                  stroke="#d4ff00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
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
