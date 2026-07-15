"use client";

import { motion } from "framer-motion";
import { Layers, Code2, Database, Server, Cloud, Wrench, Cpu, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { StoryCard } from "@/components/ui/story-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillBar } from "@/components/ui/skill-bar";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 className="h-4 w-4" />,
  Frontend: <Layers className="h-4 w-4" />,
  Backend: <Server className="h-4 w-4" />,
  Databases: <Database className="h-4 w-4" />,
  DevOps: <Cloud className="h-4 w-4" />,
  Tools: <Wrench className="h-4 w-4" />,
  "Core CS": <Cpu className="h-4 w-4" />,
};

const categoryAccents: Record<string, "gold" | "purple" | "pink" | "blue" | "teal"> = {
  Languages: "gold",
  Frontend: "purple",
  Backend: "pink",
  Databases: "blue",
  DevOps: "teal",
  Tools: "gold",
  "Core CS": "purple",
};

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-10">
      <SectionHeading
        title="Skills"
        subtitle=""
        icon={<Sparkles className="h-5 w-5" />}
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {portfolioData.skills.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.08 }}
          >
            <StoryCard className="p-5 h-full" accent={categoryAccents[category.category] || "gold"}>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary">
                  {categoryIcons[category.category] || <Layers className="h-4 w-4" />}
                </span>
                <h3 className="text-sm font-bold font-heading">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} description={skill.description} />
                ))}
              </div>
            </StoryCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
