import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Helix to build the next generation of MetaDSP, identity, and supply platforms.",
  alternates: { canonical: canonical("/careers") }
};

const roles = [
  {
    title: "Principal MetaDSP Architect",
    description: "Own the architecture of multi-DSP orchestration layers and experimentation frameworks.",
    location: "Remote / North America"
  },
  {
    title: "Staff Data Scientist, Optimization",
    description: "Design reinforcement learning and causal inference models for budget allocation and pacing.",
    location: "Remote / EMEA"
  },
  {
    title: "Senior Platform Engineer",
    description: "Build activation services, observability pipelines, and governance tooling across regions.",
    location: "Remote / APAC"
  }
];

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-6 py-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-text">Careers</h1>
        <p className="text-lg text-muted">
          Join Helix to design systems that unify $2B+ in managed media, process 50B+ daily impressions, and operate across 20+ markets.
        </p>
      </header>
      <section className="space-y-6">
        {roles.map((role) => (
          <article key={role.title} className="rounded-2xl border border-border/60 bg-surface/60 p-6">
            <h2 className="text-2xl font-semibold text-text">{role.title}</h2>
            <p className="mt-2 text-sm text-muted">{role.location}</p>
            <p className="mt-4 text-base text-muted">{role.description}</p>
            <p className="mt-4 text-sm text-accent">Email talent@helix.example with your background.</p>
          </article>
        ))}
      </section>
    </div>
  );
}
