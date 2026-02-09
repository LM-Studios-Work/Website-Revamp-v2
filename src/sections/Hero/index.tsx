import { HeroHeading } from "@/sections/Hero/components/HeroHeading";
import { HeroDescription } from "@/sections/Hero/components/HeroDescription";
import { SocialSidebar } from "@/components/SocialSidebar";
import { useState } from "react";

// 1. Define the floating animation for the lime light
const animationStyles = `
  @keyframes float {
    0% { transform: translate(-50%, -50%) translate(0px, 0px); }
    33% { transform: translate(-50%, -50%) translate(30px, -50px); }
    66% { transform: translate(-50%, -50%) translate(-20px, 20px); }
    100% { transform: translate(-50%, -50%) translate(0px, 0px); }
  }
`;

export const Hero = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative flex flex-col justify-end min-h-screen pt-40 pb-16 md:pb-28 overflow-hidden">
      {/* Inject styles for the animation */}
      <style>{animationStyles}</style>

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* VIDEO */}
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              console.error("Video failed to load:", e);
              setVideoError(true);
            }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/newhero.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* --- THE LIME GLOW (RESPONSIVE) --- */}
        <div 
            className="
              absolute 
              left-1/2 
              
              /* MOBILE SETTINGS */
              top-[60%]           /* Pushes it down behind text on mobile */
              w-[300px] h-[300px] /* Smaller size so it doesn't wash out screen */
              blur-[80px]         /* Slightly less blur for definition */
              
              /* DESKTOP SETTINGS (md:) */
              md:top-1/2                 /* Centered vertically */
              md:w-[600px] md:h-[600px]  /* Full size */
              md:blur-[100px]            /* Full softness */
              
              bg-[#e7fe56] 
              rounded-full 
              opacity-20 
              pointer-events-none 
              z-10
            "
            style={{ 
              animation: 'float 12s ease-in-out infinite',
              mixBlendMode: 'screen' 
            }}
        />

        {/* THE MASTER MASK (Video Fade) */}
        <div 
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: `linear-gradient(
              to bottom, 
              rgba(0,0,0,0) 0%,      /* TOP: Clear */
              rgba(0,0,0,0) 40%,     /* MIDDLE: Clear (Shows the lime light) */
              rgba(0,0,0,0.8) 70%,   /* LOWER MIDDLE: Darken for text */
              #000000 95%,           /* BOTTOM: Solid Black */
              #000000 100%
            )`
          }}
        />
      </div>

      <SocialSidebar />
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6">
        <HeroHeading />
        <HeroDescription />
      </div>
    </section>
  );
};