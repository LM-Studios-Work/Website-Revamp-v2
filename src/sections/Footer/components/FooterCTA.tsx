import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const FooterCTA = () => {
  return (
    <section className="relative py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
          Ready to make your website using LM Studios?
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d5bff0] hover:bg-[#d5bff0]/90 text-black text-lg font-semibold rounded-full transition-colors shrink-0"
        >
          Ask for a quote
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};
