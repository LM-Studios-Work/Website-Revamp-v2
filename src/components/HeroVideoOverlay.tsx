import { useEffect, useRef } from "react";

/**
 * Renders the hero video at the top of the viewport with:
 *  - A gradient mask that fades the video out ~30% down the hero
 *  - A subtle animated sunlight / warm glow that drifts slowly
 *
 * This component is absolutely positioned inside the hero section of every page.
 */
export const HeroVideoOverlay = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let t = Math.random() * 1000; // random start so it feels organic

    const animateGlow = () => {
      t += 0.003;
      if (glowRef.current) {
        // Slow figure-8 drift
        const x = 50 + Math.sin(t * 0.7) * 12 + Math.cos(t * 0.4) * 6;
        const y = 25 + Math.sin(t * 0.5) * 8 + Math.cos(t * 0.3) * 4;
        const scale = 1 + Math.sin(t * 0.6) * 0.15;
        glowRef.current.style.transform = `translate(-50%, -50%) translate(${x - 50}%, ${y - 25}%) scale(${scale})`;
      }
      animationId = requestAnimationFrame(animateGlow);
    };

    animateGlow();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      className="absolute inset-x-0 top-0 h-[75vh] overflow-hidden pointer-events-none"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    >
      {/* Video layer with gradient mask — fades out toward bottom */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 75%)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated sunlight glow — subtle warm/lime tint that drifts */}
      <div
        ref={glowRef}
        className="absolute"
        style={{
          top: "25%",
          left: "50%",
          width: "clamp(400px, 50vw, 800px)",
          height: "clamp(300px, 35vw, 500px)",
          background:
            "radial-gradient(ellipse at center, rgba(200,210,80,0.12) 0%, rgba(180,200,60,0.06) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
          willChange: "transform",
        }}
      />

      {/* Very subtle top-edge highlight to blend with header */}
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.02) 0%, transparent 100%)",
        }}
      />
    </div>
  );
};
