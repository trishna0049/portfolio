"use client";

import { motion } from "framer-motion";
import { GitFork, BriefcaseBusiness, Mail, FileText, Send, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { StoryCard } from "@/components/ui/story-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { MagicButton } from "@/components/ui/magic-button";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GitFork,
  linkedin: BriefcaseBusiness,
  mail: Mail,
};

export function ContactSection() {
  const { contact, person } = portfolioData;

  return (
    <section id="contact" className="scroll-mt-24 py-10">
      <SectionHeading
        title={contact.heading}
        subtitle=""
        icon={<Send className="h-5 w-5" />}
      />
      <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <StoryCard className="p-6">
          <p className="text-sm leading-relaxed text-muted-foreground mb-6">{contact.blurb}</p>
          <div className="flex flex-wrap gap-3">
            {contact.links.map((link) => {
              const Icon = socialIcons[link.icon];
              if (!Icon) return null;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border/60 bg-card text-foreground hover:border-primary/30 hover:shadow-lg transition-all rounded-xl"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </motion.a>
              );
            })}
          </div>
          <div className="mt-6 pt-6 border-t border-border/60">
            <p className="text-xs text-muted-foreground mb-2">
              Or send a direct message:
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href={`mailto:${person.email}`} className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium">
                <Mail className="h-4 w-4" />
                {person.email}
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                +91 77358 55050
              </span>
            </div>
          </div>
        </StoryCard>

        <StoryCard className="p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-bold font-heading">Resume</h3>
          </div>
          <p className="text-xs text-muted-foreground mb-1">{person.name}</p>
          <p className="text-xs text-muted-foreground mb-4">{person.role}</p>
          <p className="text-xs text-muted-foreground leading-relaxed flex-1">{person.summary}</p>
          <MagicButton href={person.resumeUrl} variant="primary" size="sm" className="mt-4">
            <FileText className="h-3.5 w-3.5" />
            View Resume
          </MagicButton>
        </StoryCard>
      </div>
    </section>
  );
}
