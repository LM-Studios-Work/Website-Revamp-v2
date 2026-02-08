import React, { useRef, useState, useEffect, useCallback } from "react";

interface ScrollableCardRowProps {
  children: React.ReactNode;
  /** Tailwind classes for the desktop grid layout, e.g. "md:grid-cols-3" */
  desktopGridCols?: string;
  /** If true, render a plain horizontal scroll (no arrows, no snap) on mobile */
  plainScroll?: boolean;
}

export const ScrollableCardRow = ({
  children,
  desktopGridCols = "md:grid-cols-3",
  plainScroll = false,
}: ScrollableCardRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > *")?.offsetWidth ?? el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -cardWidth - 16 : cardWidth + 16,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Navigation arrows — mobile only (hidden when plainScroll) */}
      {!plainScroll && (
        <div className="flex gap-3 mb-5 md:hidden">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className={`w-10 h-10 rounded-full bg-[#d4ff00] flex items-center justify-center transition-opacity ${
              canScrollLeft ? "opacity-100" : "opacity-30"
            }`}
          >
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className={`w-10 h-10 rounded-full bg-[#d4ff00] flex items-center justify-center transition-opacity ${
              canScrollRight ? "opacity-100" : "opacity-30"
            }`}
          >
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Scrollable on mobile — bleeds past parent padding; grid on desktop */}
      <div
        ref={scrollRef}
        className={`-mx-6 px-6 flex gap-4 overflow-x-auto ${plainScroll ? "" : "snap-x snap-mandatory"} scrollbar-hide pb-2 md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:grid ${desktopGridCols} md:gap-6`}
      >
        {React.Children.map(children, (child) => (
          <div className={`${plainScroll ? "min-w-[45vw]" : "w-[65vw] max-w-[65vw] snap-start"} shrink-0 md:min-w-0 md:w-auto md:max-w-none md:shrink`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
