import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="fixed text-base shrink-0 z-[1000] top-0 inset-x-0 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <Navbar />
    </header>
  );
};
