"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles, Star, Zap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { StoryCard } from "@/components/ui/story-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-12 py-4">
      <SectionHeading
        title={portfolioData.about.title}
        subtitle=""
        icon={<BookOpen className="h-5 w-5" />}
      />
      <div className="mt-8 grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
        <StoryCard className="p-6 space-y-4">
          {portfolioData.about.bio.map((p) => (
            <p key={p} className="text-sm leading-relaxed text-muted-foreground md:text-base">{p}</p>
          ))}

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2 flex items-center gap-1.5">
              <Zap className="h-3 w-3 text-magic-pink" /> Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {portfolioData.about.interests.map((i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium border border-border/60 bg-muted/30 text-muted-foreground rounded-xl">{i}</span>
              ))}
            </div>
          </div>
        </StoryCard>

        <div className="grid grid-cols-2 gap-3">
          {portfolioData.person.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="border border-border/60 bg-card p-4 flex flex-col items-center justify-center text-center rounded-xl card-shadow card-hover"
            >
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-royal-purple bg-clip-text text-transparent">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
          <div className="col-span-2 border border-border/60 bg-card p-4 rounded-xl card-shadow">
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex justify-between"><span className="text-foreground font-medium">Role</span><span>{portfolioData.person.role}</span></div>
              <div className="flex justify-between"><span className="text-foreground font-medium">Location</span><span>{portfolioData.person.location}</span></div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
