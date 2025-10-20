import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, type InsightContent } from "@/lib/mdx";
import { canonical } from "@/lib/seo";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

async function resolvePost(slug: string): Promise<InsightContent | null> {
  try {
    return await getPost(slug);
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await resolvePost(params.slug);
  if (!post) {
    return {
      title: "Insight",
      alternates: { canonical: canonical(`/insights/${params.slug}`) }
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: canonical(`/insights/${post.slug}`) },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article"
    }
  } satisfies Metadata;
}

export default async function InsightPage({ params }: { params: { slug: string } }) {
  const post = await resolvePost(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl space-y-10 px-6 py-16">
      <header className="space-y-3">
        <p className="text-sm text-muted">
          {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(post.date)} • {post.read_time_minutes} min read
        </p>
        <h1 className="text-4xl font-semibold text-text">{post.title}</h1>
        <p className="text-lg text-muted">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="space-y-6 text-base leading-7 text-muted [&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:text-text [&>h3]:mt-8 [&>h3]:text-xl [&>h3]:text-text">
        {post.body}
      </div>
    </article>
  );
}
