import { useState } from "react";

/**
 * Layered hero background used on EVERY page hero section.
 *
 * Layer stack (inside the hero <section>):
 *  1. Video (or fallback image on error)
 *  2. Master gradient mask — fades video from clear at top to transparent at bottom
 *     so the underlying fallback.webp shows through seamlessly
 */

export const HeroVideoOverlay = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {/* VIDEO / FALLBACK */}
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/background/fallback.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* MASTER MASK — fades video from clear at top to transparent at bottom,
          letting the fallback.webp background merge naturally */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0) 20%,
            rgba(0,0,0,0.4) 50%,
            rgba(0,0,0,0.85) 75%,
            rgba(0,0,0,1) 100%
          )`,
        }}
      />
    </div>
  );
};
