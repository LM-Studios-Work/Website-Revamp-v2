"use client";
import { useState } from "react";

/**
 * Layered hero background used on EVERY page hero section.
 *
 * Uses CSS mask-image to fade the video out from ~25% to ~65% of the hero
 * height, so it dissolves naturally into the fallback.webp background
 * without any black bar.
 */

export const HeroVideoOverlay = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{
        maskImage: `linear-gradient(to bottom, black 0%, black 25%, transparent 65%)`,
        WebkitMaskImage: `linear-gradient(to bottom, black 0%, black 25%, transparent 65%)`,
      }}
    >
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 55%" }}
          onError={() => setVideoError(true)}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
};
