"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavbarLogo } from "./NavbarLogo";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        aria-label="Main"
        className="relative items-center flex flex-wrap justify-between max-w-[1400px] mx-auto w-full py-6 px-6 md:py-10 md:flex-nowrap md:justify-between"
      >
        <NavbarLogo />
        <DesktopMenu />
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
      </nav>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
