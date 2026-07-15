"use client";

import { useEffect, useRef } from "react";

type Sparkle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  hue: number;
  angle: number;
};

export function SparkleParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let sparkles: Sparkle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      sparkles = Array.from({ length: 35 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.15 + 0.03,
        opacity: Math.random() * 0.3 + 0.05,
        hue: [260, 200, 330, 150, 40][Math.floor(Math.random() * 5)],
        angle: Math.random() * Math.PI * 2,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparkles.forEach((s) => {
        s.angle += s.speed * 0.02;
        s.x += Math.cos(s.angle) * s.speed * 0.3;
        s.y += Math.sin(s.angle) * s.speed * 0.3 - s.speed * 0.15;

        if (s.y < -5) {
          s.y = canvas.height + 5;
          s.x = Math.random() * canvas.width;
        }
        if (s.x < -5) s.x = canvas.width + 5;
        if (s.x > canvas.width + 5) s.x = -5;

        const pulse = Math.sin(Date.now() * 0.002 + s.angle) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 60%, 75%, ${s.opacity * pulse})`;
        ctx.fill();
      });

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
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
