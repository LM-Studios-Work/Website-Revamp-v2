import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="absolute text-base box-border caret-transparent shrink-0 leading-[28.8px] z-[1000] top-0 inset-x-0">
      <Navbar />
    </header>
  );
};
