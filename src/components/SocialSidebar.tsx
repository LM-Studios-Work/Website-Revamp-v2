export const SocialSidebar = () => {
  return (
    <aside className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center animate-[fadeInUp_0.8s_ease-out_1s_both]">
      <p className="text-sm text-white/60 tracking-widest uppercase mb-6 [writing-mode:vertical-lr] rotate-180">
        Follow us
      </p>
      <ul className="flex flex-col items-center list-none pl-0 gap-3">
        <li>
          <a
            href="https://www.instagram.com/lmstudiosweb/"
            title="Instagram"
            className="w-10 h-10 rounded-full border border-[#e7fe56]/40 flex items-center justify-center text-[#e7fe56] hover:bg-[#e7fe56]/10 hover:scale-110 transition-all duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="18" cy="6" r="1.5" fill="currentColor" />
            </svg>
          </a>
        </li>
      </ul>
    </aside>
  );
};
