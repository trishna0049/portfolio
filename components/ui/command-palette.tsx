"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, ArrowRight, ExternalLink, FileText, Mail, GitFork, BriefcaseBusiness, User, Briefcase, Code2, GraduationCap, Trophy, Layers, Home, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

type CmdItem = {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
    setQuery("");
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); toggle(); }
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, toggle]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const items: CmdItem[] = [
    { id: "home", label: "Home", description: "Return to the starting point", icon: <Home className="h-4 w-4" />, action: () => router.push("/") },
    { id: "about", label: "About", description: "Discover the story", icon: <User className="h-4 w-4" />, action: () => { document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } },
    { id: "projects", label: "Projects", description: "Explore creations", icon: <Code2 className="h-4 w-4" />, action: () => { document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } },
    { id: "skills", label: "Skills", description: "Technical abilities", icon: <Layers className="h-4 w-4" />, action: () => { document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } },
    { id: "experience", label: "Experience", description: "Professional journey", icon: <Briefcase className="h-4 w-4" />, action: () => { document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } },
    { id: "education", label: "Education", description: "Academic foundation", icon: <GraduationCap className="h-4 w-4" />, action: () => { document.getElementById("education")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } },
    { id: "achievements", label: "Achievements", description: "Milestones and honors", icon: <Trophy className="h-4 w-4" />, action: () => { document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } },
    { id: "contact", label: "Contact", description: "Get in touch", icon: <Mail className="h-4 w-4" />, action: () => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } },
    { id: "resume", label: "Resume", description: "Full professional profile", icon: <FileText className="h-4 w-4" />, action: () => router.push("/resume") },
    { id: "github", label: "GitHub", description: "View the code repository", icon: <GitFork className="h-4 w-4" />, action: () => window.open(portfolioData.hero.social.find(s => s.icon === "github")?.href, "_blank") },
    { id: "linkedin", label: "LinkedIn", description: "Professional network", icon: <BriefcaseBusiness className="h-4 w-4" />, action: () => window.open(portfolioData.hero.social.find(s => s.icon === "linkedin")?.href, "_blank") },
    { id: "email", label: "Email", description: "Send a direct message", icon: <Mail className="h-4 w-4" />, action: () => window.open(portfolioData.hero.social.find(s => s.icon === "mail")?.href, "_blank") },
  ];

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, filtered.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, 0)); }
    if (e.key === "Enter" && filtered[activeIndex]) { filtered[activeIndex].action(); setOpen(false); }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed left-1/2 top-[15%] -translate-x-1/2 w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border border-border/60 bg-card rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 border-b border-border/60 px-4 py-3">
                <Sparkles className="h-4 w-4 text-primary shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search sections..."
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setActiveIndex(0); }}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium border border-border/60 bg-muted text-muted-foreground rounded-lg">
                  <Command className="h-2.5 w-2.5" /> K
                </kbd>
              </div>
              <div className="max-h-72 overflow-y-auto p-2">
                {filtered.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => { item.action(); setOpen(false); }}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                      i === activeIndex ? "bg-primary/10 text-foreground" : "text-muted-foreground"
                    )}
                  >
                    <span className="shrink-0">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{item.label}</p>
                      <p className="text-xs truncate opacity-70">{item.description}</p>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-50" />
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="px-3 py-8 text-center text-sm text-muted-foreground">No results found.</p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
