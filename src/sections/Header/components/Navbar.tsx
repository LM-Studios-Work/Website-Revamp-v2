import { NavbarLogo } from "./NavbarLogo";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenuButton } from "./MobileMenuButton";

export const Navbar = () => {
  return (
    <nav
      aria-label="Main"
      className="relative items-center box-border caret-transparent flex flex-wrap justify-between py-8 md:flex-nowrap md:justify-start w-full"
    >
      <NavbarLogo />
      <DesktopMenu />
      <MobileMenuButton />
    </nav>
  );
};
