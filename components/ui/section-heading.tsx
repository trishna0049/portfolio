"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({ id, title, subtitle, icon, children, className }: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={cn("space-y-3", className)}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary/10 text-primary">
            {icon}
          </span>
        )}
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl font-heading">{title}</h2>
      </div>
      {subtitle && (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base pl-0">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
