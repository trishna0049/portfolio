import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Code2, GitFork, ExternalLink, Lightbulb, AlertTriangle, Box, ListChecks, Calendar, Clock, ArrowRight, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Aarav Sharma`,
    description: project.description,
    openGraph: { title: `${project.title} | Aarav Sharma`, description: project.description },
  };
}

function DetailBlock({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="border border-border/60 bg-card p-5 space-y-3 rounded-2xl card-shadow">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">{icon}</span>
        <h2 className="text-sm font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="relative min-h-screen bg-background">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 space-y-8 md:px-6">
        <Link href="/#projects" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border/60 bg-card text-foreground hover:bg-muted/50 transition-colors rounded-xl card-shadow">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        <div className="border border-border/60 bg-card overflow-hidden rounded-2xl card-shadow">
          <div className="h-48 md:h-56 relative flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${project.accent}20, ${project.accent}05)` }}>
            <Star className="h-16 w-16 text-primary/20" />
            <div className="absolute top-4 left-4 flex items-center gap-2 flex-wrap">
              <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-background/80 backdrop-blur-sm border border-border/60 text-muted-foreground font-medium rounded-full">{project.category}</span>
              <span className="text-[10px] flex items-center gap-1 px-2.5 py-1 bg-background/80 backdrop-blur-sm border border-border/60 text-muted-foreground rounded-full"><Calendar className="h-3 w-3" />{project.completionDate}</span>
              <span className="text-[10px] flex items-center gap-1 px-2.5 py-1 bg-background/80 backdrop-blur-sm border border-border/60 text-muted-foreground rounded-full"><Clock className="h-3 w-3" />{project.duration}</span>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-heading font-bold">{project.title}</h1>
              <p className="text-sm text-muted-foreground">{project.tagline}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <DetailBlock title="Problem Statement" icon={<AlertTriangle className="h-4 w-4 text-magic-pink" />}>
                <p className="text-sm text-muted-foreground">{project.problem}</p>
              </DetailBlock>
              <DetailBlock title="Solution" icon={<Lightbulb className="h-4 w-4 text-primary" />}>
                <p className="text-sm text-muted-foreground">{project.solution}</p>
              </DetailBlock>
            </div>

            <DetailBlock title="Architecture" icon={<Box className="h-4 w-4 text-royal-purple" />}>
              <ul className="space-y-1.5">
                {project.architecture.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 mt-0.5 text-royal-purple" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="Key Features" icon={<ListChecks className="h-4 w-4 text-fairy-green" />}>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-fairy-green shrink-0">&#10003;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <div className="grid gap-4 md:grid-cols-2">
              <DetailBlock title="Challenges" icon={<AlertTriangle className="h-4 w-4 text-primary" />}>
                <ul className="space-y-1.5">
                  {project.challenges.map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary shrink-0">&#9679;</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </DetailBlock>
              <DetailBlock title="Lessons Learned" icon={<Lightbulb className="h-4 w-4 text-magic-pink" />}>
                <ul className="space-y-1.5">
                  {project.lessons.map((l) => (
                    <li key={l} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-magic-pink shrink-0">&#9670;</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </DetailBlock>
            </div>

            <DetailBlock title="Tech Stack" icon={<Code2 className="h-4 w-4 text-royal-purple" />}>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-medium border border-border/60 bg-muted/30 text-muted-foreground rounded-full">{t}</span>
                ))}
              </div>
            </DetailBlock>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border/60 bg-card text-foreground hover:bg-muted/50 transition-colors rounded-xl">
                <GitFork className="h-4 w-4" /> View Source
              </Link>
              <Link href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:brightness-105 transition-all rounded-xl shadow-md">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </Link>
            </div>

            {project.futureScope.length > 0 && (
              <DetailBlock title="Future Scope" icon={<ArrowUpRight className="h-4 w-4 text-fairy-green" />}>
                <ul className="space-y-1.5">
                  {project.futureScope.map((s) => (
                    <li key={s} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-fairy-green shrink-0">&#9654;</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </DetailBlock>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
