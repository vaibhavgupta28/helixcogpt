import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function CapabilityCard({ title, description, icon }: { title: string; description: string; icon: ReactNode }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/70 p-6 transition supports-hover:hover:border-accent supports-hover:hover:bg-surface">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-text">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
      <div
        aria-hidden
        className={cn(
          "absolute -bottom-16 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl transition duration-300",
          "group-hover:-bottom-10"
        )}
      />
    </article>
  );
}
