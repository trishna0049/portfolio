"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Navbar } from "@/components/portfolio/navbar";
import { AnimatedBackground } from "@/components/portfolio/animated-background";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { SparkleParticles } from "@/components/ui/sparkle-particles";
import { CommandPalette } from "@/components/ui/command-palette";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";

export function PortfolioPage() {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <AnimatedBackground />
      <SparkleParticles />
      <Navbar onCommandOpen={() => setCommandOpen(true)} />
      {commandOpen && <CommandPalette />}

      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 md:px-6 md:pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <div className="grid gap-6 md:grid-cols-2">
          <AchievementsSection />
          <CertificationsSection />
        </div>
        <ContactSection />
      </main>

      <footer className="border-t border-border/50 bg-card/50">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {portfolioData.person.name}. Crafted with care.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Next.js</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>TypeScript</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>TailwindCSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
