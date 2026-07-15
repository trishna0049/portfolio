"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileTap={{ scale: 0.92 }}
      whileHover={{ rotate: isDark ? -8 : 8 }}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center border border-border/60 bg-card text-muted-foreground",
        "hover:text-foreground hover:bg-muted/50 transition-colors rounded-lg"
      )}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </motion.button>
  );
}
