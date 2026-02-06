import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <ul className="hidden md:flex md:items-center md:gap-8 md:flex-1 md:justify-center list-none pl-0">
      <li>
        <Link
          to="/"
          className="text-white hover:text-[#a1ff0a] transition-colors font-normal"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about-us"
          className="text-white opacity-75 hover:text-[#a1ff0a] hover:opacity-100 transition-colors font-normal"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="/projects"
          className="text-white opacity-75 hover:text-[#a1ff0a] hover:opacity-100 transition-colors font-normal"
        >
          Projects
        </Link>
      </li>
      <li className="relative group">
        <Link
          to="/services"
          className="text-white opacity-75 hover:text-[#a1ff0a] hover:opacity-100 transition-colors font-normal"
        >
          Services
        </Link>
        <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl py-2 px-1 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 list-none z-50">
          <li>
            <Link
              to="/services/web-design"
              className="block px-4 py-2 text-sm text-white/80 hover:text-[#a1ff0a] hover:bg-white/5 rounded-lg transition-colors"
            >
              Web Design
            </Link>
          </li>
          <li>
            <Link
              to="/services/seo"
              className="block px-4 py-2 text-sm text-white/80 hover:text-[#a1ff0a] hover:bg-white/5 rounded-lg transition-colors"
            >
              SEO
            </Link>
          </li>
          <li>
            <Link
              to="/services/app-development"
              className="block px-4 py-2 text-sm text-white/80 hover:text-[#a1ff0a] hover:bg-white/5 rounded-lg transition-colors"
            >
              App Development
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link
          to="/contact"
          className="text-white opacity-75 hover:text-[#a1ff0a] hover:opacity-100 transition-colors font-normal"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};
