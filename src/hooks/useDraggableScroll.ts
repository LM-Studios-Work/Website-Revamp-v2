import { useRef, useState, useCallback, MouseEvent } from "react";

/**
 * A hook that enables mouse-drag scrolling for a container.
 * Returns a ref to attach to the container and a set of event handlers.
 */
export const useDraggableScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    ref.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  return {
    ref,
    isDragging,
    events: {
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onMouseLeave,
    },
  };
};
