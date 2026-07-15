"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SkillBarProps = {
  name: string;
  level: number;
  description?: string;
  className?: string;
};

const pastelColors = [
  "bg-gradient-to-r from-primary to-royal-purple",
  "bg-gradient-to-r from-magic-pink to-enchanted-blue",
  "bg-gradient-to-r from-magic-teal to-star-gold",
  "bg-gradient-to-r from-royal-purple to-magic-pink",
  "bg-gradient-to-r from-enchanted-blue to-fairy-green",
];

export function SkillBar({ name, level, description, className }: SkillBarProps) {
  const colorIndex = name.length % pastelColors.length;

  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <div className="relative h-2 bg-muted/50 overflow-hidden rounded-full">
        <motion.div
          className={cn("absolute inset-y-0 left-0 rounded-full", pastelColors[colorIndex])}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
