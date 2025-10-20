import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Studio",
  description: "R&D studio launching experimental products that extend programmatic infrastructure.",
  alternates: { canonical: canonical("/studio") }
};

export default function StudioPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-6 py-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-text">Studio</h1>
        <p className="text-lg text-muted">
          Helix Studio prototypes tooling, integrations, and accelerators that compress the time from idea to production-grade infrastructure.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text">Focus areas</h2>
        <ul className="list-disc space-y-3 pl-6 text-muted">
          <li>Composable bidders and experimentation harnesses for MetaDSP deployments.</li>
          <li>Privacy-first identity, enrichment, and clean room automation frameworks.</li>
          <li>Telemetry visualizations that translate streaming operations into trader-ready narratives.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text">How we partner</h2>
        <p className="text-base leading-7 text-muted">
          Studio engagements run in parallel with core programs, providing rapid prototypes, proofs of concept, and governance-ready documentation. We fast-track initiatives that demonstrate measurable efficiency and scalability.
        </p>
      </section>
    </div>
  );
}
