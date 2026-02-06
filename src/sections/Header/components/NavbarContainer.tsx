import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
export const NavbarContainer = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-wrap justify-between max-w-none w-full mt-8 mx-auto px-[15px] md:flex-nowrap md:max-w-[1140px]">
      <NavbarLogo />
      <ul className="box-border caret-transparent flex flex-col list-none pl-0 md:flex-row">
        <DesktopMenu />
      </ul>
      <MobileMenuButton />
    </div>
  );
};
