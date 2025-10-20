import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description: "Helix aligns strategy, engineering, and activation to modernize programmatic operations.",
  alternates: { canonical: canonical("/about") }
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-6 py-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-text">About Helix</h1>
        <p className="text-lg text-muted">
          Helix is an engineering-led partner for advertisers and publishers that need MetaDSP, supply, and data platforms tuned for global scale.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text">Operating model</h2>
        <p className="text-base leading-7 text-muted">
          We embed specialists across strategy, data science, and platform engineering to deliver unified operating models. Our teams work inside existing workflows, sequencing platform releases with trading playbooks and compliance checkpoints.
        </p>
        <p className="text-base leading-7 text-muted">
          Engagements are structured around measurable reductions in waste, faster time-to-launch, and expanded experimentation coverage. Each sprint ends with instrumentation reviews, roadmap updates, and knowledge transfer for internal teams.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text">Leadership principles</h2>
        <ul className="list-disc space-y-3 pl-6 text-muted">
          <li>Design for transparency so traders, marketers, and engineers can trust automation decisions.</li>
          <li>Ship with observability built-in—alerting, logging, and QA suites align to mission-critical KPIs.</li>
          <li>Prioritize interoperability and vendor-neutral design to future-proof investments.</li>
        </ul>
      </section>
    </div>
  );
}
