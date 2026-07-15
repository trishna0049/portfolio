"use client";

import { motion } from "framer-motion";
import { Award, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { StoryCard } from "@/components/ui/story-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-24 py-10">
      <SectionHeading
        title="Certifications"
        subtitle=""
        icon={<Award className="h-5 w-5" />}
      />
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioData.certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <StoryCard className="p-4 h-full flex flex-col" accent="blue">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-royal-purple" />
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{cert.year}</span>
              </div>
              <h3 className="text-sm font-bold font-heading flex-1">{cert.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
              <Link href={cert.credentialUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-dark transition-colors">
                Verify credential <ArrowUpRight className="h-3 w-3" />
              </Link>
            </StoryCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
