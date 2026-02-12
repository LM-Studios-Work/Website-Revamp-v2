import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
  life: number;
  maxLife: number;
}

const PARTICLE_COUNT = 80;
const MAX_SIZE = 2;
const MIN_SIZE = 0.3;
const MIN_SPEED = 0.1;
const MAX_SPEED = 0.45;
const MAX_OPACITY = 0.22;
const MOUSE_RADIUS = 120;
const MOUSE_FORCE = 0.6;

function createParticle(
  width: number,
  height: number,
  scatter = false
): Particle {
  const maxLife = 600 + Math.random() * 800;
  const x = Math.random() * width;
  const y = scatter ? Math.random() * height : height + Math.random() * 40;
  return {
    x,
    y,
    baseX: x,
    baseY: y,
    size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
    speedY: -(MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED)),
    speedX: (Math.random() - 0.5) * 0.12,
    opacity: 0,
    fadeSpeed: MAX_OPACITY / (80 + Math.random() * 60),
    life: scatter ? Math.random() * maxLife : 0,
    maxLife,
  };
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.scrollWidth;
      const h = parent.scrollHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      const w = canvas.parentElement?.scrollWidth || window.innerWidth;
      const h = canvas.parentElement?.scrollHeight || window.innerHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(w, h, true)
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      const scrollContainer = canvas.closest("[data-scroll-container]");
      if (scrollContainer) {
        const rect = scrollContainer.getBoundingClientRect();
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top + scrollContainer.scrollTop,
        };
      } else {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const animate = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.scrollWidth;
      const h = parent.scrollHeight;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.life++;
        p.baseX += p.speedX;
        p.baseY += p.speedY;

        // Gentle sine drift
        p.baseX += Math.sin(p.life * 0.006) * 0.06;

        // Mouse interaction: push particles away
        const dx = p.baseX - mx;
        const dy = p.baseY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          p.x = p.baseX + (dx / dist) * force * MOUSE_RADIUS * 0.3;
          p.y = p.baseY + (dy / dist) * force * MOUSE_RADIUS * 0.3;
        } else {
          // Ease back to base position
          p.x += (p.baseX - p.x) * 0.08;
          p.y += (p.baseY - p.y) * 0.08;
        }

        // Fade in during first phase, fade out near end of life
        const fadeInEnd = p.maxLife * 0.15;
        const fadeOutStart = p.maxLife * 0.75;

        if (p.life < fadeInEnd) {
          p.opacity =
            (p.life / fadeInEnd) * MAX_OPACITY * (p.size / MAX_SIZE);
        } else if (p.life > fadeOutStart) {
          const remaining =
            (p.maxLife - p.life) / (p.maxLife - fadeOutStart);
          p.opacity = remaining * MAX_OPACITY * (p.size / MAX_SIZE);
        } else {
          p.opacity = MAX_OPACITY * (p.size / MAX_SIZE);
        }

        // Draw particle with subtle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        // Subtle outer glow for larger particles
        if (p.size > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.08})`;
          ctx.fill();
        }

        // Reset particle when it dies or goes off-screen
        if (p.life >= p.maxLife || p.baseY < -10) {
          particles[i] = createParticle(w, h, false);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Observe parent resize for scroll height changes
    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};
