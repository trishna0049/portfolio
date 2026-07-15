import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center border border-border/60 bg-card p-8 max-w-md w-full rounded-2xl card-shadow">
        <div className="flex justify-center mb-4">
          <Sparkles className="h-10 w-10 text-primary/30" />
        </div>
        <p className="text-sm text-muted-foreground font-bold tracking-wider">404</p>
        <h1 className="mt-3 text-xl font-heading font-bold">Page Not Found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This page seems to have wandered off. Let&apos;s get you back on track.
        </p>
        <div className="flex items-center justify-center gap-2 mt-6">
          <Compass className="h-4 w-4 text-primary" />
          <Link
            href="/"
            className="inline-flex px-5 py-2 text-sm font-medium bg-primary text-primary-foreground hover:brightness-105 transition-all rounded-xl shadow-md"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
