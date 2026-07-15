"use client";

import { motion } from "framer-motion";
import { GraduationCap, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { StoryCard } from "@/components/ui/story-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 py-10">
      <SectionHeading
        title="Education"
        subtitle=""
        icon={<GraduationCap className="h-5 w-5" />}
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {portfolioData.education.map((item, index) => (
          <motion.div
            key={`${item.institution}-${item.degree}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <StoryCard className="p-5" accent="teal">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">{item.period}</span>
              </div>
              <h3 className="text-sm font-bold font-heading">{item.degree}</h3>
              <p className="text-xs text-muted-foreground mt-1">{item.institution}</p>
              <div className="mt-3 pt-3 border-t border-border/60 flex items-center gap-2">
                <Star className="h-3 w-3 text-primary" />
                <p className="text-xs text-muted-foreground">{item.details}</p>
              </div>
            </StoryCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
