import { FooterCTA } from "@/sections/Footer/components/FooterCTA";
import { FooterColumns } from "@/sections/Footer/components/FooterColumns";

export const Footer = () => {
  return (
    <footer className="relative box-border caret-transparent shrink-0">
      <div className="box-border caret-transparent px-0 md:px-10">
        <FooterColumns />
        <FooterCTA />
        {/* Video background removed for clean background */}
      </div>
    </footer>
  );
};
