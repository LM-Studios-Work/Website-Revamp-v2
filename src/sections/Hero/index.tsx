
import { HeroHeading } from "@/sections/Hero/components/HeroHeading";
import { HeroDescription } from "@/sections/Hero/components/HeroDescription";
import { SocialSidebar } from "@/components/SocialSidebar";
import { useState } from "react";

export const Hero = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative flex flex-col justify-end min-h-screen pt-40 pb-16 md:pb-28 overflow-hidden">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 z-0">
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
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
        {/* Bottom gradient for seamless transition to grainy background */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
      </div>

      <SocialSidebar />
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6">
        <HeroHeading />
        <HeroDescription />
      </div>
    </section>
  );
};

