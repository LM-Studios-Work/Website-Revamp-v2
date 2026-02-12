import { useState } from "react";

/**
 * Layered hero background used on EVERY page hero section.
 *
 * Layer stack (inside the hero <section>):
 *  1. Video (or fallback image on error)
 *  2. Lime glow — floating animated blob with screen blend
 *  3. Master gradient mask — fades from clear at top to solid black at bottom
 *  4. Light-ray booster — subtle mix-blend-overlay to enhance glow
 */

const floatKeyframes = `
  @keyframes heroFloat {
    0%   { transform: translate(-50%, -50%) translate(0px, 0px); }
    33%  { transform: translate(-50%, -50%) translate(30px, -50px); }
    66%  { transform: translate(-50%, -50%) translate(-20px, 20px); }
    100% { transform: translate(-50%, -50%) translate(0px, 0px); }
  }
`;

export const HeroVideoOverlay = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {/* Inject float keyframes */}
      <style>{floatKeyframes}</style>

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

      {/* LIME GLOW (responsive) */}
      <div
        className="
          absolute left-1/2
          top-[60%] w-[300px] h-[300px]
          md:top-1/2 md:w-[600px] md:h-[600px]
          bg-[#e7fe56] rounded-full opacity-20
          pointer-events-none z-10
        "
        style={{
          animation: "heroFloat 12s ease-in-out infinite",
          mixBlendMode: "screen",
          filter: "blur(100px)",
        }}
      />

      {/* MASTER MASK — fades video from clear at top to solid black at bottom */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0) 25%,
            rgba(0,0,0,0.6) 60%,
            #000000 90%,
            #000000 100%
          )`,
        }}
      />

      {/* LIGHT BOOSTER — enhances glow in the middle zone */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.05) 40%, transparent 60%, rgba(0,0,0,0.9) 100%)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
};
