import { useEffect, useRef } from "react";

// ==========================================
// 💻 DESKTOP SETTINGS (Screens wider than 768px)
// ==========================================
const DESKTOP = {
  particleCount: 235, 
  minSize: 0.2,
  maxSize: 0.9,
  minSpeed: 0.1,
  maxSpeed: 0.4,
  baseMaxOpacity: 1.4,
};

// ==========================================
// 📱 MOBILE SETTINGS (Screens smaller than 768px)
// ==========================================
const MOBILE = {
  particleCount: 82, 
  minSize: 0.18,
  maxSize: 0.9,
  minSpeed: 0.1,
  maxSpeed: 0.4,
  baseMaxOpacity: 0.9,
};

// ==========================================
// 🖱️ INTERACTION SETTINGS (Mouse Hover)
// ==========================================
const INTERACTION = {
  hoverRadius: 120, // How big the "push" circle around your mouse is
  pushStrength: 3,  // How hard the particles get pushed away
};

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  fadeSpeed: number;
  life: number;
  maxLife: number;
  driftOffset: number;
}

function createParticle(width: number, height: number, config: typeof DESKTOP, scatter = false): Particle {
  const maxLife = 2500 + Math.random() * 2000; 
  
  return {
    x: Math.random() * width,
    y: scatter ? Math.random() * height : height + Math.random() * 40,
    size: config.minSize + Math.random() * (config.maxSize - config.minSize),
    speedY: -(config.minSpeed + Math.random() * (config.maxSpeed - config.minSpeed)),
    speedX: (Math.random() - 0.5) * 0.1,
    opacity: 0,
    maxOpacity: (Math.random() * 0.5 + 0.5) * config.baseMaxOpacity,
    fadeSpeed: config.baseMaxOpacity / (80 + Math.random() * 60),
    life: scatter ? Math.random() * maxLife : 0,
    maxLife,
    driftOffset: Math.random() * Math.PI * 2,
  };
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let currentConfig = window.innerWidth < 768 ? MOBILE : DESKTOP;

    // 1. Setup the mouse tracker
    const mouse = {
      x: -1000,
      y: -1000,
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    // When the mouse leaves the browser window, remove the hover effect
    const handleMouseOut = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Listen to the window, not the canvas, because the canvas has pointer-events-none
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const init = () => {
      resize();
      currentConfig = window.innerWidth < 768 ? MOBILE : DESKTOP;
      particles = Array.from({ length: currentConfig.particleCount }, () =>
        createParticle(window.innerWidth, window.innerHeight, currentConfig, true)
      );
    };

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.life++;
        
        // Normal floating movement
        p.x += p.speedX + Math.sin(p.life * 0.005 + p.driftOffset) * 0.06;
        p.y += p.speedY;

        // 2. MOUSE HOVER PHYSICS
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If the particle is inside the hover radius...
        if (distance < INTERACTION.hoverRadius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          // Closer to the mouse = stronger push
          const force = (INTERACTION.hoverRadius - distance) / INTERACTION.hoverRadius;

          // Push the particle away from the mouse
          p.x -= forceDirectionX * force * INTERACTION.pushStrength;
          p.y -= forceDirectionY * force * INTERACTION.pushStrength;
        }

        // Fading logic
        const fadeInEnd = p.maxLife * 0.2;
        const fadeOutStart = p.maxLife * 0.8;

        if (p.life < fadeInEnd) {
          p.opacity = (p.life / fadeInEnd) * p.maxOpacity;
        } else if (p.life > fadeOutStart) {
          const remaining = (p.maxLife - p.life) / (p.maxLife - fadeOutStart);
          p.opacity = Math.max(0, remaining * p.maxOpacity);
        } else {
          p.opacity = p.maxOpacity;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        
        ctx.shadowBlur = p.size * 2.5; 
        ctx.shadowColor = `rgba(255, 255, 255, ${p.opacity * 0.8})`; 
        
        ctx.fill();
        ctx.shadowBlur = 0;

        // Reset particle if it dies OR if it goes off the top
        if (p.life >= p.maxLife || p.y < -10) {
          particles[i] = createParticle(w, h, currentConfig, false);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", init);

    // Clean up event listeners on unmount
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};