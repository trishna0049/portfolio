"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";

export function Navbar({ onCommandOpen }: { onCommandOpen?: () => void }) {
  const [activeSection, setActiveSection] = useState(portfolioData.nav[0]?.id ?? "home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = portfolioData.nav.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );
    sectionIds.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center px-4 py-3 md:px-6">
        <nav className="hidden lg:flex items-center justify-center w-full gap-4">
            {portfolioData.nav.map((item) => {
              const isPage = item.id === "resume";
              return (
                <a
                  key={item.id}
                  href={isPage ? portfolioData.person.resumeUrl : `#${item.id}`}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium transition-all rounded-xl border",
                    isPage
                      ? "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-transparent"
                      : activeSection === item.id
                        ? "bg-primary/10 text-foreground border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-transparent"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          <ThemeToggle />
        </nav>

        <div className="flex lg:hidden items-center justify-end w-full gap-1.5">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center border border-border/60 bg-card text-foreground rounded-xl"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {portfolioData.nav.map((item) => {
                const isPage = item.id === "resume";
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (isPage) window.location.href = portfolioData.person.resumeUrl;
                      else document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                      setMobileOpen(false);
                    }}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-all rounded-xl text-left",
                      !isPage && activeSection === item.id
                        ? "bg-primary/10 text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
