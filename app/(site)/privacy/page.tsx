import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Helix policy information.",
  alternates: { canonical: canonical("/privacy") }
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-6 py-16">
      <h1 className="text-4xl font-semibold text-text">Privacy</h1>
      <p className="text-base leading-7 text-muted">
        This page outlines Helix privacy policies. Tailor the content to your organization’s requirements before launch.
      </p>
    </div>
  );
}
