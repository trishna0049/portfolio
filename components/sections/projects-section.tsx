"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, GitFork, ExternalLink, ArrowUpRight, Code2, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { StoryCard } from "@/components/ui/story-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { MagicButton } from "@/components/ui/magic-button";
import { cn } from "@/lib/utils";

const accentMap: Record<string, "gold" | "purple" | "pink" | "blue" | "teal"> = {
  "#dc2626": "gold",
  "#3b82f6": "blue",
  "#10b981": "teal",
};

export function ProjectsSection() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(portfolioData.projects.flatMap((p) => p.tags)));

  const filtered = portfolioData.projects.filter((p) => {
    const matchSearch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchTag = !selectedTag || p.tags.includes(selectedTag);
    return matchSearch && matchTag;
  });

  return (
    <section id="projects" className="scroll-mt-24 py-10">
      <SectionHeading
        title="Projects"
        subtitle=""
        icon={<Code2 className="h-5 w-5" />}
      />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-border/60 bg-card text-foreground pl-9 pr-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-xl"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-xl border transition-all",
                selectedTag === tag
                  ? "bg-primary text-white border-primary"
                  : "border-border/60 bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => {
            const accent = accentMap[project.accent] || "gold";
            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <StoryCard className="h-full flex flex-col" accent={accent}>
                  {/* Cover */}
                  <div
                    className="h-40 rounded-t-2xl bg-gradient-to-br relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${project.accent}20, ${project.accent}08)` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="h-12 w-12 text-muted-foreground/15" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-background/80 backdrop-blur-sm border border-border/60 text-muted-foreground font-medium rounded-xl">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[10px] text-muted-foreground bg-background/80 backdrop-blur-sm px-2 py-1 border border-border/60 rounded-xl">
                      <Calendar className="h-3 w-3" />
                      {project.duration}
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-5 space-y-3">
                    <div>
                      <h3 className="text-base font-bold font-heading">{project.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{project.tagline}</p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-[10px] font-medium border border-border/60 bg-muted/30 text-muted-foreground rounded-xl">{tech}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 text-[10px] text-muted-foreground">+{project.tech.length - 3}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-border/60">
                      <Link href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors py-1">
                        <GitFork className="h-3.5 w-3.5" /> Code
                      </Link>
                      <Link href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors py-1">
                        <ExternalLink className="h-3.5 w-3.5" /> Demo
                      </Link>
                      <Link href={`/projects/${project.slug}`} className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-dark transition-colors py-1">
                        Read the Story <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </StoryCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 border border-border/60 bg-card rounded-2xl card-shadow mt-6">
          <p className="text-muted-foreground text-sm">No projects found for this search.</p>
        </div>
      )}
    </section>
  );
}
