import { NavbarLogo } from "./NavbarLogo";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenuButton } from "./MobileMenuButton";

export const Navbar = () => {
  return (
    <nav
      aria-label="Main"
      className="relative items-center flex flex-wrap justify-between max-w-[1200px] mx-auto w-full py-8 px-6 md:flex-nowrap md:justify-between"
    >
      <NavbarLogo />
      <DesktopMenu />
      <MobileMenuButton />
    </nav>
  );
};
