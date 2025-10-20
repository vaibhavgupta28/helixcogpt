import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type CaseStudyCardProps = {
  title: string;
  summary: string;
  slug: string;
  kpis: string[];
  industries: string[];
};

export function CaseStudyCard({ title, summary, slug, kpis, industries }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-surface/60 p-6 transition supports-hover:hover:border-accent supports-hover:hover:bg-surface"
    >
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-accent">{industries.join(" • ")}</p>
        <h3 className="text-xl font-semibold text-text">{title}</h3>
        <p className="text-sm text-muted">{summary}</p>
        <ul className="mt-4 space-y-2 text-sm text-text">
          {kpis.map((kpi) => (
            <li key={kpi} className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {kpi}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
        Read case study
        <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
      </div>
    </Link>
  );
}
