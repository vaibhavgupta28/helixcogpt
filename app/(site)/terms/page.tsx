import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms",
  description: "Helix policy information.",
  alternates: { canonical: canonical("/terms") }
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-6 py-16">
      <h1 className="text-4xl font-semibold text-text">Terms</h1>
      <p className="text-base leading-7 text-muted">
        This page outlines Helix terms of service. Tailor the content to your organization’s requirements before launch.
      </p>
    </div>
  );
}
