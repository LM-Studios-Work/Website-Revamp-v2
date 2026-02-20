import { COLORS } from "@/constants/colors";

/**
 * Animated wavy underline used on active nav links.
 * Previously duplicated 3 times across DesktopMenu and MobileMenu.
 */
export const NavWave = () => (
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
        stroke={COLORS.lime}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </span>
);
