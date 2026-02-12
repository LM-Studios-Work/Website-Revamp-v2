import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
  life: number;
  maxLife: number;
}

const PARTICLE_COUNT = 64;
const MAX_SIZE = 1.8;
const MIN_SIZE = 0.4;
const MIN_SPEED = 0.15;
const MAX_SPEED = 0.6;
const MAX_OPACITY = 0.25;

function createParticle(
  width: number,
  height: number,
  scatter = false
): Particle {
  const maxLife = 600 + Math.random() * 800;
  return {
    x: Math.random() * width,
    y: scatter ? Math.random() * height : height + Math.random() * 40,
    size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
    speedY: -(MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED)),
    speedX: (Math.random() - 0.5) * 0.15,
    opacity: 0,
    fadeSpeed: MAX_OPACITY / (80 + Math.random() * 60),
    life: scatter ? Math.random() * maxLife : 0,
    maxLife,
  };
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

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
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(window.innerWidth, window.innerHeight, true)
      );
    };

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.life++;
        p.x += p.speedX;
        p.y += p.speedY;

        // Fade in during first phase, fade out near end of life
        const fadeInEnd = p.maxLife * 0.15;
        const fadeOutStart = p.maxLife * 0.75;

        if (p.life < fadeInEnd) {
          p.opacity = (p.life / fadeInEnd) * MAX_OPACITY * (p.size / MAX_SIZE);
        } else if (p.life > fadeOutStart) {
          const remaining = (p.maxLife - p.life) / (p.maxLife - fadeOutStart);
          p.opacity = remaining * MAX_OPACITY * (p.size / MAX_SIZE);
        } else {
          p.opacity = MAX_OPACITY * (p.size / MAX_SIZE);
        }

        // Gentle sine drift
        p.x += Math.sin(p.life * 0.008) * 0.08;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        // Reset particle when it dies or goes off-screen
        if (p.life >= p.maxLife || p.y < -10) {
          particles[i] = createParticle(w, h, false);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
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
