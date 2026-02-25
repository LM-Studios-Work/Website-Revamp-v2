import Link from "next/link";

export const FooterCTA = () => {
  return (
    <div className="relative z-[1] flex flex-col items-center gap-6 pb-12">
      <h3 className="text-3xl md:text-4xl font-extrabold text-center text-balance font-sans">
        Ready to start a project?
      </h3>
      <Link
        href="/contact"
        className="inline-flex items-center text-sm md:text-base font-semibold text-black pl-6 pr-2 py-2 rounded-full transition-all duration-300 hover:opacity-80 hover:scale-105"
        style={{ backgroundColor: "#e7fe56" }}
      >
        Contact us
        <span className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-black/20 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};
