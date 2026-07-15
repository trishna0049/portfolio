"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type StoryCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  accent?: "gold" | "purple" | "pink" | "blue" | "teal";
};

const accentBorders = {
  gold: "border-l-primary",
  purple: "border-l-royal-purple",
  pink: "border-l-magic-pink",
  blue: "border-l-enchanted-blue",
  teal: "border-l-magic-teal",
};

export function StoryCard({ children, className, hover = true, onClick, accent }: StoryCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.005 } : undefined}
      whileTap={hover && onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={cn(
        "bg-card text-card-foreground rounded-2xl border border-border/60 card-shadow card-hover transition-all duration-300",
        hover && "cursor-pointer",
        onClick && "cursor-pointer",
        accent && accentBorders[accent],
        accent && "border-l-4",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
