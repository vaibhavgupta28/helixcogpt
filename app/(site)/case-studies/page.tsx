import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/mdx";
import { CaseStudyCard } from "@/components/case-study-card";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Programmatic infrastructure engagements delivering MetaDSP, DMP, and SSP transformations.",
  alternates: { canonical: canonical("/case-studies") }
};

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-text">Case Studies</h1>
        <p className="text-lg text-muted">
          Explore MetaDSP, DMP, and SSP programs where Helix unified fragmented systems and reduced operational waste.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((study) => (
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
    </div>
  );
}
