"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MagicButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit";
};

export function MagicButton({
  children,
  href,
  onClick,
  className,
  external,
  variant = "primary",
  size = "md",
  disabled,
  type = "button",
}: MagicButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 font-medium transition-all select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-royal-purple text-primary-foreground hover:brightness-105 active:scale-[0.97] shadow-lg shadow-primary/20",
    secondary:
      "bg-gradient-to-r from-magic-pink to-enchanted-blue text-foreground hover:brightness-105 active:scale-[0.97] shadow-lg shadow-magic-pink/20",
    outline:
      "bg-transparent text-foreground border-2 border-primary/30 hover:border-primary/60 active:scale-[0.97]",
    ghost:
      "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-xl",
    md: "px-6 py-2.5 text-sm rounded-xl",
    lg: "px-8 py-3 text-base rounded-2xl",
  };

  const classes = cn(base, variants[variant], sizes[size], disabled && "opacity-50 pointer-events-none", className);

  if (href) {
    const linkProps = external ? { target: "_blank", rel: "noreferrer" } : {};
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <Link href={href} {...linkProps} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
