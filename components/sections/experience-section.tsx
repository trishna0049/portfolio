"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { StoryCard } from "@/components/ui/story-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-10">
      <SectionHeading
        title="Experience"
        subtitle=""
        icon={<Briefcase className="h-5 w-5" />}
      />
      <div className="mt-8 relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-royal-purple/30 to-magic-pink/50 hidden md:block" />
        <div className="space-y-5">
          {portfolioData.experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-0 md:pl-12"
            >
              <div className="absolute left-[13px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-magic-pink border-2 border-background hidden md:block" />
              <StoryCard className="p-5" accent="gold">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-base font-bold font-heading">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{item.location}</span>
                    <span>{item.period}</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-2 text-xs text-muted-foreground">
                      <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                  {item.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] font-medium border border-border/60 bg-muted/30 text-muted-foreground rounded-xl">{tech}</span>
                  ))}
                </div>
              </StoryCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
