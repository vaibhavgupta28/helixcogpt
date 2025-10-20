import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BlogCardProps = {
  title: string;
  excerpt: string;
  slug: string;
  date: Date;
  tags: string[];
  readTime: number;
};

export function BlogCard({ title, excerpt, slug, date, tags, readTime }: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(date);
  return (
    <Link
      href={`/insights/${slug}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-surface/60 p-6 transition supports-hover:hover:border-accent supports-hover:hover:bg-surface"
    >
      <div className="space-y-3">
        <p className="text-sm text-muted">
          {formattedDate} • {readTime} min read
        </p>
        <h3 className="text-xl font-semibold text-text">{title}</h3>
        <p className="text-sm text-muted">{excerpt}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
        Read insight
        <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
      </div>
    </Link>
  );
}
