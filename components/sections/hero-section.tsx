"use client";

import { motion } from "framer-motion";
import { ArrowDown, GitFork, BriefcaseBusiness, Mail, MapPin, Sparkles, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { MagicButton } from "@/components/ui/magic-button";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GitFork,
  linkedin: BriefcaseBusiness,
  mail: Mail,
};

export function HeroSection() {
  return (
    <section id="home" className="relative flex items-center pt-4 pb-6 fairy-dust">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl font-heading">
              {portfolioData.person.name}
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              {portfolioData.hero.subtitle}
            </p>

            {/* Role carousel */}
            <div className="relative h-9 overflow-hidden">
              <motion.div
                animate={{ y: [0, -36, -72, -108, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                {portfolioData.hero.roles.map((role) => (
                  <p key={role} className="h-9 text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-royal-purple bg-clip-text text-transparent flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary shrink-0" />
                    {role}
                  </p>
                ))}
                <p className="h-9 text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-royal-purple bg-clip-text text-transparent flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary shrink-0" />
                  {portfolioData.hero.roles[0]}
                </p>
              </motion.div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-magic-pink" />
              {portfolioData.person.location}
            </div>

            <div className="flex flex-wrap gap-3">
              {portfolioData.hero.actions.map((action) => (
                <MagicButton
                  key={action.label}
                  href={action.href}
                  external={action.external}
                  variant={action.variant === "primary" ? "primary" : action.variant === "secondary" ? "secondary" : "outline"}
                >
                  {action.label}
                </MagicButton>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Connect</span>
              <div className="h-px w-8 bg-border" />
              <div className="flex gap-2">
                {portfolioData.hero.social.map((social) => {
                  const Icon = socialIcons[social.icon];
                  if (!Icon) return null;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -2, scale: 1.05 }}
                      className="inline-flex h-10 w-10 items-center justify-center border border-border/60 bg-card text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-lg transition-all rounded-xl"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="w-full max-w-xs bg-card border border-border/60 rounded-2xl overflow-hidden shadow-xl card-shadow">
              {/* Photo - square fill */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/photo.png"
                  alt="Trishna Tanaya"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {portfolioData.person.stats.slice(0, 4).map((stat, i) => (
                    <div key={stat.label} className="bg-muted/30 border border-border/60 p-2 rounded-xl">
                      <p className="text-sm font-bold bg-gradient-to-r from-primary to-royal-purple bg-clip-text text-transparent">{stat.value}</p>
                      <p className="text-[9px] text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-border/60 pt-2">
                  <span className="text-[10px] text-muted-foreground">Status</span>
                  <span className="flex items-center gap-1.5 text-[10px] font-medium text-fairy-green">
                    <span className="w-1.5 h-1.5 rounded-full bg-fairy-green animate-pulse" />
                    {portfolioData.person.availability}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
