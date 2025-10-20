import type { Metadata } from "next";
import Script from "next/script";
import { canonical } from "@/lib/seo";
import { CapabilityCard } from "@/components/capability-card";
import { Brain, Cpu, Layers, ShieldCheck, Workflow } from "lucide-react";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Helix Programmatic Engineering",
  description:
    "Helix delivers MetaDSP, AI optimization, and data engineering programs that unify multi-DSP operations for enterprise marketers.",
  provider: {
    "@type": "Organization",
    name: "Helix"
  }
};

export const metadata: Metadata = {
  title: "Services",
  description: "Programmatic engineering services spanning MetaDSP builds, data platforms, and AI optimization.",
  alternates: { canonical: canonical("/services") }
};

const services = [
  {
    title: "MetaDSP Blueprints",
    description: "Architect and deploy a unified control plane across DSPs, trafficking systems, and clean rooms.",
    icon: <Layers className="h-6 w-6" aria-hidden />
  },
  {
    title: "Optimization Intelligence",
    description: "Operationalize machine learning that governs pacing, budget shifts, and creative selection.",
    icon: <Brain className="h-6 w-6" aria-hidden />
  },
  {
    title: "Identity + Data Engineering",
    description: "Construct resilient identity graphs, privacy-first enrichment, and measurement pipelines.",
    icon: <Cpu className="h-6 w-6" aria-hidden />
  },
  {
    title: "Activation Tooling",
    description: "Design workflows, QA automation, and experimentation sandboxes aligned to trading desks.",
    icon: <Workflow className="h-6 w-6" aria-hidden />
  },
  {
    title: "Governance & Compliance",
    description: "Codify policy, logging, and access models that meet enterprise and regional requirements.",
    icon: <ShieldCheck className="h-6 w-6" aria-hidden />
  }
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-6 py-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-text">Services</h1>
        <p className="text-lg text-muted">
          Helix combines MetaDSP architecture, AI optimization, and data engineering to unify buying operations and accelerate outcomes.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <CapabilityCard key={service.title} {...service} />
        ))}
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text">Engagement approach</h2>
        <p className="text-base leading-7 text-muted">
          Programs begin with a diagnostics phase focused on waste analysis, signal health, and workflow friction. We then activate squads across architecture, data science, and product to design and ship targeted releases.
        </p>
        <p className="text-base leading-7 text-muted">
          Each release is instrumented with measurable KPIs—waste reduction, speed-to-launch, eCPM improvements, and signal coverage. Helix stays engaged to monitor telemetry and transfer runbooks to your teams.
        </p>
      </section>
      <Script
        id="service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </div>
  );
}
