import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { StatBar } from "@/components/stat-bar";
import { CapabilityCard } from "@/components/capability-card";
import { CaseStudyCard } from "@/components/case-study-card";
import { BlogCard } from "@/components/blog-card";
import { CTABand } from "@/components/cta-band";
import { LogoWall } from "@/components/logo-wall";
import { QuoteBand } from "@/components/quote-band";
import { getAllCaseStudies, getAllPosts } from "@/lib/mdx";
import { canonical } from "@/lib/seo";
import { Brain, Gauge, Layers, Network, Sparkles, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "MetaDSP Infrastructure that Compounds",
  description:
    "Helix designs MetaDSP and data platforms that unify multi-DSP operations, reduce waste, and accelerate optimization cycles.",
  alternates: { canonical: canonical("/") }
};

const capabilities = [
  {
    title: "MetaDSP Orchestration",
    description:
      "Normalize inventory, pacing, and bidding primitives across DSPs to give traders a single control plane that respects policy and market nuance.",
    icon: <Layers className="h-6 w-6" aria-hidden />
  },
  {
    title: "AI Optimization",
    description:
      "Deploy reinforcement loops that guide budget allocation, audience selection, and creative decisioning with transparent guardrails.",
    icon: <Brain className="h-6 w-6" aria-hidden />
  },
  {
    title: "Signal Engineering",
    description:
      "Ingest, enrich, and score petabyte-scale data sets with privacy-first governance to keep addressability resilient.",
    icon: <Network className="h-6 w-6" aria-hidden />
  },
  {
    title: "Activation Tooling",
    description:
      "Build trader-friendly workflows, scenario planning sandboxes, and QA automation that accelerate launch cycles.",
    icon: <Workflow className="h-6 w-6" aria-hidden />
  },
  {
    title: "Optimization Sprints",
    description:
      "Embed Helix architects alongside your team to unlock measurable waste reduction within the first optimization cycle.",
    icon: <Gauge className="h-6 w-6" aria-hidden />
  },
  {
    title: "Operational Intelligence",
    description:
      "Deliver unified measurement, pacing insights, and anomaly detection directly into shared dashboards and alerts.",
    icon: <Sparkles className="h-6 w-6" aria-hidden />
  }
];

export default async function HomePage() {
  const [caseStudies, posts] = await Promise.all([getAllCaseStudies(), getAllPosts()]);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
      <Hero />
      <StatBar />
      <LogoWall />
      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-3xl font-semibold text-text">AI + Human Intelligence</h2>
          <p className="text-sm text-muted">
            We partner with trading, analytics, and engineering leads to align automation with human strategy and compliance requirements.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </section>
      <section className="space-y-6">
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-text">Proof & Scale</h2>
            <p className="text-sm text-muted">
              MetaDSP, identity, and supply engineering programs that reduce waste, unlock inventory, and extend experimentation velocity.
            </p>
          </div>
          <span className="text-sm uppercase tracking-wide text-accent">Featured case studies</span>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <CaseStudyCard
              key={study.slug}
              title={study.title}
              summary={study.summary}
              slug={study.slug}
              kpis={study.kpis}
              industries={study.industries}
            />
          ))}
        </div>
      </section>
      <QuoteBand />
      <section className="space-y-6">
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-text">Latest insights</h2>
            <p className="text-sm text-muted">
              Architecture notes, operating models, and risk frameworks from active Helix engagements.
            </p>
          </div>
          <span className="text-sm uppercase tracking-wide text-accent">Insights</span>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
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
      </section>
      <CTABand />
    </div>
  );
}
