"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Code2, Zap, Award, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { StoryCard } from "@/components/ui/story-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Hackathon: "from-primary/10 to-primary/5 border-primary/30",
  Performance: "from-royal-purple/10 to-royal-purple/5 border-royal-purple/30",
  Community: "from-magic-pink/10 to-magic-pink/5 border-magic-pink/30",
};

const categoryIcons: Record<string, React.ReactNode> = {
  Hackathon: <Zap className="h-4 w-4 text-primary" />,
  Performance: <Trophy className="h-4 w-4 text-royal-purple" />,
  Community: <Code2 className="h-4 w-4 text-magic-pink" />,
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-24 py-10">
      <SectionHeading
        title="Achievements"
        subtitle=""
        icon={<Trophy className="h-5 w-5" />}
      />
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {portfolioData.achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <StoryCard className={cn("p-4 bg-gradient-to-r", categoryColors[achievement.category] || "from-muted/30 to-muted/10")} accent="gold">
              <div className="flex items-start gap-3">
                <span className="p-2 bg-background/80 border border-border/60 rounded-xl">
                  {categoryIcons[achievement.category] || <Award className="h-4 w-4" />}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold font-heading">{achievement.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.detail}</p>

                </div>
              </div>
            </StoryCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
