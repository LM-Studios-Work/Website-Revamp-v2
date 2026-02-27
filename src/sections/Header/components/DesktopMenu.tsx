"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SERVICE_NAV_ITEMS } from "@/constants/navigation";
import { COLORS } from "@/constants/colors";
import { NavWave } from "@/components/NavWave";

export const DesktopMenu = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <ul className="hidden md:flex md:items-center md:gap-10 list-none pl-0">
      {NAV_ITEMS.map((item) => (
        <li key={item.to} className={item.hasDropdown ? "relative group" : ""}>
          <Link
            href={item.to}
            className={`text-lg transition-colors duration-200 relative pb-2 flex items-center gap-1 ${
              isActive(item.to)
                ? "text-white font-normal"
                : "text-white/70 hover:text-white font-normal"
            }`}
          >
            {item.label}

            {item.hasDropdown && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={COLORS.lime}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-0.5 group-hover:rotate-180 transition-transform duration-200"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            )}

            {isActive(item.to) && <NavWave />}
          </Link>

          {item.hasDropdown && (
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-neutral-900/95 backdrop-blur-md border border-white/10 rounded-xl py-2 px-1 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 list-none z-50">
              {SERVICE_NAV_ITEMS.map((service) => (
                <li key={service.to}>
                  <Link
                    href={service.to}
                    className="block px-4 py-2 text-base text-white/70 hover:text-lime hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
