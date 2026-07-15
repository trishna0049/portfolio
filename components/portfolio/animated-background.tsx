"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Blob({ className, color, delay = 0 }: { className: string; color: string; delay?: number }) {
  return (
    <motion.div
      className={cn("absolute rounded-full blur-3xl", className)}
      style={{ background: color }}
      animate={{ x: [0, 30, -20, 10, 0], y: [0, -25, 15, -10, 0], scale: [1, 1.08, 0.92, 1.05, 1] }}
      transition={{ duration: 12 + delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 pastel-gradient" />

      {/* Pastel blobs */}
      <Blob className="top-[-15%] left-[-10%] w-[40%] h-[35%]" color="rgba(184, 168, 224, 0.12)" delay={0} />
      <Blob className="bottom-[-15%] right-[-10%] w-[45%] h-[40%]" color="rgba(136, 200, 240, 0.10)" delay={2} />
      <Blob className="top-[40%] right-[-8%] w-[30%] h-[30%]" color="rgba(240, 168, 184, 0.08)" delay={4} />
      <Blob className="top-[60%] left-[-8%] w-[35%] h-[30%]" color="rgba(160, 216, 192, 0.08)" delay={6} />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating decorative dots */}
      {[
        { top: "12%", left: "8%", size: 3, delay: 0 },
        { top: "25%", right: "12%", size: 4, delay: 1.5 },
        { top: "55%", left: "5%", size: 2, delay: 3 },
        { top: "70%", right: "8%", size: 3.5, delay: 0.8 },
        { top: "85%", left: "15%", size: 2.5, delay: 2.2 },
        { top: "15%", right: "35%", size: 2, delay: 1 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.top,
            left: dot.left,
            right: dot.right,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-xl" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-xl" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-xl" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-xl" />
    </div>
  );
}
