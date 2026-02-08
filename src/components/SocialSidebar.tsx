export const SocialSidebar = () => {
  return (
    <aside className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center">
      <p className="text-sm text-white/60 tracking-widest uppercase mb-6 [writing-mode:vertical-lr] rotate-180">
        Follow us
      </p>
      <ul className="flex flex-col items-center list-none pl-0 gap-3">
        <li>
          <a
            href="https://www.behance.net"
            title="Behance"
              className="w-10 h-10 rounded-full border border-[#e7fe56]/40 flex items-center justify-center text-[#e7fe56] hover:bg-[#e7fe56]/10 transition-colors"
          >
            <span className="text-sm font-bold">Be</span>
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com"
            title="Dribbble"
              className="w-10 h-10 rounded-full border border-[#e7fe56]/40 flex items-center justify-center text-[#e7fe56] hover:bg-[#e7fe56]/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            title="Instagram"
              className="w-10 h-10 rounded-full border border-[#e7fe56]/40 flex items-center justify-center text-[#e7fe56] hover:bg-[#e7fe56]/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
