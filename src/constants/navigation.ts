export interface NavItem {
  to: string;
  label: string;
  hasDropdown?: boolean;
}

export interface ServiceNavItem {
  to: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "home" },
  { to: "/about-us", label: "about us" },
  { to: "/projects", label: "projects" },
  { to: "/services", label: "services", hasDropdown: true },
  { to: "/contact", label: "contact" },
];

export const SERVICE_NAV_ITEMS: ServiceNavItem[] = [
  { to: "/services/web-design", label: "Web Design" },
  { to: "/services/photography", label: "Photography" },
  { to: "/services/seo", label: "SEO" },
  { to: "/services/app-development", label: "App Development" },
];
