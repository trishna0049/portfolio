import Link from "next/link";
import { ArrowLeft, Download, FileText, Mail, MapPin, Award, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ResumePage() {
  const { person, experience, education, skills, achievements, certifications } = portfolioData;

  return (
    <main className="relative min-h-screen bg-background px-4 py-12 md:px-6">
      <div className="mx-auto w-full max-w-3xl space-y-6">
        <Link href="/#contact" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border/60 bg-card text-foreground hover:bg-muted/50 transition-colors rounded-xl card-shadow">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        <div className="border border-border/60 bg-card p-6 md:p-8 space-y-6 rounded-2xl card-shadow">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-1.5">
              <FileText className="h-3 w-3 text-primary" /> Resume
            </p>
            <h1 className="text-2xl md:text-3xl font-heading font-bold">{person.name}</h1>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Award className="h-3.5 w-3.5 text-primary" />{person.role}</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-muted-foreground" />{person.location}</span>
              <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-muted-foreground" />{person.email}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{person.summary}</p>
          </div>

          <div className="star-divider" />

          <div className="space-y-3">
            <h2 className="text-sm font-bold flex items-center gap-2"><Star className="h-3 w-3 text-primary fill-primary" /> Experience</h2>
            <div className="space-y-3">
              {experience.map((item) => (
                <div key={item.company} className="border border-border/60 bg-muted/30 p-4 rounded-xl hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start">
                    <div><h3 className="text-sm font-bold">{item.role}</h3><p className="text-xs text-muted-foreground">{item.company}</p></div>
                    <span className="text-xs text-muted-foreground">{item.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {item.highlights.map((h) => (
                      <li key={h} className="text-xs text-muted-foreground flex gap-1.5"><span className="text-royal-purple">&#9654;</span><span>{h}</span></li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.tech.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 text-[10px] border border-border/60 bg-card text-muted-foreground rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="star-divider" />

          <div className="space-y-3">
            <h2 className="text-sm font-bold flex items-center gap-2"><Star className="h-3 w-3 text-royal-purple fill-royal-purple" /> Education</h2>
            {education.map((item) => (
              <div key={item.institution} className="border border-border/60 bg-muted/30 p-3 rounded-xl hover:border-royal-purple/30 transition-colors">
                <p className="text-sm font-bold">{item.degree}</p>
                <p className="text-xs text-muted-foreground">{item.institution} | {item.period}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="star-divider" />

          <div className="space-y-3">
            <h2 className="text-sm font-bold flex items-center gap-2"><Star className="h-3 w-3 text-fairy-green fill-fairy-green" /> Skills</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((group) => (
                <div key={group.category} className="border border-border/60 bg-muted/30 p-3 rounded-xl hover:border-fairy-green/30 transition-colors">
                  <p className="text-xs font-bold mb-1.5">{group.category}</p>
                  <div className="flex flex-wrap gap-1">
                    {group.skills.map((s) => (
                      <span key={s.name} className="px-1.5 py-0.5 text-[10px] border border-border/60 bg-card text-muted-foreground rounded-full">{s.name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="star-divider" />

          <div className="space-y-3">
            <h2 className="text-sm font-bold flex items-center gap-2"><Star className="h-3 w-3 text-magic-pink fill-magic-pink" /> Certifications</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div key={cert.title} className="border border-border/60 bg-muted/30 p-3 rounded-xl hover:border-magic-pink/30 transition-colors">
                  <p className="text-xs font-bold">{cert.title}</p>
                  <p className="text-[10px] text-muted-foreground">{cert.issuer} | {cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="star-divider" />

          <div className="space-y-3">
            <h2 className="text-sm font-bold flex items-center gap-2"><Star className="h-3 w-3 text-primary fill-primary" /> Achievements</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {achievements.map((ach) => (
                <div key={ach.title} className="border border-border/60 bg-muted/30 p-3 rounded-xl hover:border-primary/30 transition-colors">
                  <p className="text-xs font-bold">{ach.title}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{ach.detail}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">{ach.category} | {ach.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/#contact" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border/60 bg-card text-foreground hover:bg-muted/50 transition-colors rounded-xl">
              <Mail className="h-4 w-4" /> Connect
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
