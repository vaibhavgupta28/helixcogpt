import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/blog-card";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Insights",
  description: "Insights on MetaDSP strategy, data privacy, and AI-driven media buying.",
  alternates: { canonical: canonical("/insights") }
};

export default async function InsightsPage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-text">Insights</h1>
        <p className="text-lg text-muted">
          Architecture patterns, governance updates, and operating rhythms for scaled programmatic teams.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            date={post.date}
            tags={post.tags}
            readTime={post.read_time_minutes}
          />
        ))}
      </div>
    </div>
  );
}
