import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    // Changed top-0 to top-10 to push it down
    <header className="absolute text-base shrink-0 z-[1000] top-8 inset-x-0">
      <Navbar />
    </header>
  );
};
