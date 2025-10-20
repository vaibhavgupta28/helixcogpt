import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCaseStudies, getCaseStudy, type CaseStudyContent } from "@/lib/mdx";
import { canonical } from "@/lib/seo";

export async function generateStaticParams() {
  const studies = await getAllCaseStudies();
  return studies.map((study) => ({ slug: study.slug }));
}

async function resolveCaseStudy(slug: string): Promise<CaseStudyContent | null> {
  try {
    return await getCaseStudy(slug);
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = await resolveCaseStudy(params.slug);
  if (!study) {
    return {
      title: "Case Study",
      alternates: { canonical: canonical(`/case-studies/${params.slug}`) }
    };
  }

  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: canonical(`/case-studies/${study.slug}`) },
    openGraph: {
      title: study.title,
      description: study.summary,
      type: "article"
    }
  } satisfies Metadata;
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = await resolveCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <article className="mx-auto max-w-3xl space-y-10 px-6 py-16">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-accent">{study.industries.join(" • ")}</p>
        <h1 className="text-4xl font-semibold text-text">{study.title}</h1>
        <p className="text-lg text-muted">{study.summary}</p>
        <ul className="flex flex-wrap gap-3 text-sm text-text">
          {study.kpis.map((kpi) => (
            <li key={kpi} className="rounded-full border border-accent/50 px-3 py-1">
              {kpi}
            </li>
          ))}
        </ul>
      </header>
      <div className="space-y-6 text-base leading-7 text-muted [&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:text-text [&>h3]:mt-8 [&>h3]:text-xl [&>h3]:text-text">
        {study.body}
      </div>
    </article>
  );
}
